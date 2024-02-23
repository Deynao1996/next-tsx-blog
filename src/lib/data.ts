import { type TBlogPost, type TUserPost } from '@/lib/types'
import { Post, User } from './models'
import { connectToDb } from './utils'
import { unstable_noStore as noStore } from 'next/cache'

//!TODO CHECK SECURE
//!NOT SEND PASSWORDS

export const getPosts = async () => {
  noStore()
  try {
    await connectToDb()
    const posts: TBlogPost[] = await Post.find()
    return posts
  } catch (error: any) {
    console.log(error.message)
    throw new Error('Failed to fetch posts!')
  }
}

export const getUsers = async () => {
  noStore()
  try {
    await connectToDb()
    const users: TUserPost[] = await User.find()
    return users
  } catch (error: any) {
    console.log(error.message)
    throw new Error('Failed to fetch users!')
  }
}

export const getSinglePost = async (slug: string) => {
  try {
    await connectToDb()
    const post: TBlogPost | null = await Post.findOne({ slug })
    if (!post) throw new Error('Failed to find post!')
    return post
  } catch (error: any) {
    console.log(error.message)
    throw new Error('Failed to fetch post!')
  }
}

export const getSingleUser = async (id: string) => {
  noStore()
  try {
    await connectToDb()
    const post: TUserPost | null = await User.findById(id)
    if (!post) throw new Error('Failed to find user!')
    return post
  } catch (error: any) {
    console.log(error.message)
    throw new Error('Failed to fetch user!')
  }
}
