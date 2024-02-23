'use server'

import { revalidatePath } from 'next/cache'
import { Post, User } from './models'
import { connectToDb } from './utils'
import {
  addPostFormSchema,
  addUserFormSchema,
  contactFormSchema,
  loginFormSchema,
  removePostSchema
} from './formSchema'
import { createSafeActionClient } from 'next-safe-action'
import { isValidObjectId } from 'mongoose'
import { ContactData, LoginData, PostData, UserData } from './types'

export const action = createSafeActionClient()

//TODO CHECK REVALIDATE PATH

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
  removePostSchema,
  async ({ id }: { id: string }) => {
    try {
      await connectToDb()

      const isValidUserId = isValidObjectId(id)
      if (!isValidUserId) return { error: 'Invalid post ID' }

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

export const login = action(loginFormSchema, async (postData: LoginData) => {
  try {
    await connectToDb()
    return { successMessage: 'Logged in' }
  } catch (error: any) {
    throw new Error(error.message)
  }
})

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
