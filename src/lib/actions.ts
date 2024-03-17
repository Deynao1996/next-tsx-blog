'use server'

import { revalidatePath } from 'next/cache'
import { Contact, Post, User, VerificationToken } from './models'
import { connectToDb } from './utils'
import {
  postFormSchema,
  addUserFormSchema,
  contactFormSchema,
  loginFormSchema,
  registerUserFormSchema,
  removeItemSchema,
  forgotPasswordFormSchema
} from './formSchema'
import { DEFAULT_SERVER_ERROR, createSafeActionClient } from 'next-safe-action'
import { isValidObjectId } from 'mongoose'
import {
  ContactData,
  LoginData,
  PostData,
  RegisteredUserData,
  UserData
} from './types'
import bcrypt from 'bcrypt'
import { signIn, signOut } from './auth'
import { generateResetPasswordToken, generateVerificationToken } from './tokens'
import { sendResetPasswordEmail, sendVerificationEmail } from './mail'
import { z } from 'zod'
import { getVerificationTokenByToken } from '@/data/authToken'

class UserAlreadyExistsError extends Error {}

export const action = createSafeActionClient({
  handleReturnedServerError(e) {
    if (e instanceof UserAlreadyExistsError) {
      return e.message
    }

    return DEFAULT_SERVER_ERROR
  }
})

export const addPost = action(postFormSchema, async (postData: PostData) => {
  try {
    await connectToDb()

    const isValidUserId = isValidObjectId(postData.userId)
    if (!isValidUserId) return { error: 'Invalid user ID' }

    const currentUser = await User.findById(postData.userId)
    if (!currentUser) return { error: 'User does not exist' }

    const isPostExist = await Post.findOne({ slug: postData.slug })
    if (isPostExist) return { error: 'Post with provided slug already exists' }

    const newPost = new Post(postData)
    await newPost.save()
    revalidatePath('/blog')
    revalidatePath('/admin')
    return { successMessage: 'Post created successfully' }
  } catch (error: any) {
    throw new Error(error.message)
  }
})

export const removePost = action(
  removeItemSchema,
  async ({ id }: { id: string }) => {
    try {
      await connectToDb()

      const isPostUserId = isValidObjectId(id)
      if (!isPostUserId) return { error: 'Invalid post ID' }

      const res = await Post.findByIdAndDelete(id)
      if (!res) return { error: 'Post with provided id does not exist' }

      revalidatePath('/blog')
      revalidatePath('/admin')
      return { successMessage: 'Post deleted successfully' }
    } catch (error: any) {
      throw new Error(error.message)
    }
  }
)

export const addUser = action(addUserFormSchema, async (postData: UserData) => {
  try {
    await connectToDb()

    const isUserNameExist = await User.findOne({ username: postData.username })
    if (isUserNameExist)
      return { error: 'User with provided username already exist' }

    const isEmailExist = await User.findOne({ email: postData.email })
    if (isEmailExist) return { error: 'User with provided email already exist' }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(postData.password, salt)

    const newUser = new User({
      ...postData,
      password: hashedPassword,
      isAdmin: postData.isAdmin === 'yes' ? true : false
    })
    await newUser.save()

    revalidatePath('/admin')
    return { successMessage: 'User created successfully' }
  } catch (error: any) {
    throw new Error(error.message)
  }
})

export const removeUser = action(
  removeItemSchema,
  async ({ id }: { id: string }) => {
    try {
      await connectToDb()

      const isValidUserId = isValidObjectId(id)
      if (!isValidUserId) return { error: 'Invalid user ID' }

      const res = await User.findByIdAndDelete(id)
      await Post.deleteMany({ userId: id })
      if (!res) return { error: 'User with provided id does not exist' }

      revalidatePath('/admin')
      return { successMessage: 'User deleted successfully' }
    } catch (error: any) {
      throw new Error(error.message)
    }
  }
)

export const login = action(loginFormSchema, async (postData: LoginData) => {
  const { username, password } = postData

  try {
    await connectToDb()
    const existingUser = await User.findOne({ username })
    if (!existingUser || !existingUser.password || !existingUser.username) {
      return { error: 'User does not exist' }
    }

    if (!existingUser.isVerified) {
      const verificationToken = await generateVerificationToken(
        existingUser._id
      )
      await sendVerificationEmail(existingUser.email, verificationToken.token)
      return { successMessage: 'Confirmation email sent' }
    }
    await signIn('credentials', {
      username: username.toLocaleLowerCase(),
      password
    })

    return { data: process.env.BASE_URL }
  } catch (error: any) {
    if (error.kind === 'signIn') {
      throw new UserAlreadyExistsError('Wrong credentials')
    }
    throw error
  }
})

export const registerUser = action(
  registerUserFormSchema,
  async (userData: RegisteredUserData) => {
    try {
      await connectToDb()
      const currentUser = await User.findOne({ email: userData.email })
      if (currentUser)
        return { error: 'User with provided email already exists' }

      const salt = await bcrypt.genSalt(10)
      const hashedPassword = await bcrypt.hash(userData.password, salt)

      const newUser = new User({
        ...userData,
        password: hashedPassword
      })
      await newUser.save()
      const verificationToken = await generateVerificationToken(newUser._id)
      await sendVerificationEmail(userData.email, verificationToken.token)

      return { successMessage: 'Confirmation email sent' }
    } catch (error: any) {
      throw new Error(error.message)
    }
  }
)

export const contactUs = action(
  contactFormSchema,
  async (contactData: ContactData) => {
    try {
      await connectToDb()

      const isUserNameExist = await User.findOne({
        username: contactData.username
      })
      if (!isUserNameExist)
        return { error: 'User with provided username does not exist' }

      const isEmailExist = await User.findOne({ email: contactData.email })
      if (!isEmailExist)
        return { error: 'User with provided email does not exist' }

      const newContact = new Contact(contactData)
      await newContact.save()
      return { successMessage: 'Thanks for contacting us!' }
    } catch (error: any) {
      throw new Error(error.message)
    }
  }
)

export const newVerification = action(z.string(), async (token: string) => {
  try {
    await connectToDb()

    const existingToken = await getVerificationTokenByToken(token)
    if (!existingToken) {
      return { error: 'Token does not exist' }
    }
    const expired =
      existingToken.createdAt.getTime() +
      process.env.EMAIL_VERIFICATION_TOKEN_EXPIRES

    const hasExpired = new Date(expired) < new Date()
    if (hasExpired) {
      return { error: 'Token has expired' }
    }

    const existingUser = await User.findById(existingToken.userId)
    if (!existingUser) {
      return { error: 'User does not exist' }
    }

    await User.updateOne(
      { _id: existingToken.userId },
      { $set: { isVerified: true } }
    )

    await VerificationToken.deleteOne({ _id: existingToken._id })
    return { successMessage: 'Email verified successfully' }
  } catch (error: any) {
    throw new Error(error.message)
  }
})

export const forgotPassword = action(
  forgotPasswordFormSchema,
  async (userData: { email: string }) => {
    const { email } = userData
    try {
      await connectToDb()
      const existingUser = await User.findOne({ email })
      if (!existingUser) {
        return { error: 'Email does not exist!' }
      }

      const passwordResetToken = await generateResetPasswordToken(email)
      await sendResetPasswordEmail(
        passwordResetToken.email,
        passwordResetToken.token
      )

      return { successMessage: 'Reset email sent!' }
    } catch (error: any) {
      throw new Error(error.message)
    }
  }
)

export const handleGithubLogin = async () => {
  await signIn('github')
}

export const handleGoogleLogin = async () => {
  await signIn('google')
}

export const handleLogout = async () => {
  await signOut()
}
