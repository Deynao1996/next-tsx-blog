import { revalidatePath } from 'next/cache'
import { Post } from './models'
import { connectToDb } from './utils'

export const addPost = async (formData: FormData) => {
  'use server'
  const { title, descr, img, userId, slug } = Object.fromEntries(formData)
  try {
    await connectToDb()
    const newPost = new Post({ title, descr, img, userId, slug })
    await newPost.save()
    revalidatePath('/blog')
  } catch (error: any) {
    console.log(error.message)
    throw new Error('Failed to add post!')
  }
}
