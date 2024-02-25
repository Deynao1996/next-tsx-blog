'use server'

import { revalidatePath } from 'next/cache'
import { Post, User } from './models'
import { connectToDb } from './utils'
import {
  addPostFormSchema,
  addUserFormSchema,
  contactFormSchema,
  loginFormSchema,
  registerUserFormSchema,
  removeItemSchema
} from './formSchema'
import { createSafeActionClient } from 'next-safe-action'
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

export const action = createSafeActionClient()

//TODO CHECK REVALIDATE PATH
//TODO ADD ALL ACTIONS

export const addPost = action(addPostFormSchema, async (postData: PostData) => {
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
      return { successMessage: 'Post deleted successfully' }
    } catch (error: any) {
      throw new Error(error.message)
    }
  }
)

export const addUser = action(addUserFormSchema, async (postData: UserData) => {
  try {
    await connectToDb()
    console.log(postData)
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
      if (!res) return { error: 'User with provided id does not exist' }

      revalidatePath('/admin')
      return { successMessage: 'User deleted successfully' }
    } catch (error: any) {
      throw new Error(error.message)
    }
  }
)

export const login = action(loginFormSchema, async (postData: LoginData) => {
  try {
    await connectToDb()
    return { successMessage: 'Logged in' }
  } catch (error: any) {
    throw new Error(error.message)
  }
})

export const registerUser = action(
  registerUserFormSchema,
  async (postData: RegisteredUserData) => {
    try {
      await connectToDb()
      const currentUser = await User.findOne({ email: postData.email })
      if (currentUser)
        return { error: 'User with provided email already exists' }

      const salt = await bcrypt.genSalt(10)
      const hashedPassword = await bcrypt.hash(postData.password, salt)

      const newUser = new User({
        ...postData,
        password: hashedPassword
      })
      await newUser.save()

      return { successMessage: 'User created successfully' }
    } catch (error: any) {
      throw new Error(error.message)
    }
  }
)

export const contactUs = action(
  contactFormSchema,
  async (postData: ContactData) => {
    try {
      await connectToDb()

      return { successMessage: 'Thanks for contacting us' }
    } catch (error: any) {
      throw new Error(error.message)
    }
  }
)

export const handleGithubLogin = async () => {
  await signIn('github')
}

export const handleLogout = async () => {
  await signOut()
}
