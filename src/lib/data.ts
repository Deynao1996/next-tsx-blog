import { BlogPostType, UserPostType } from '@/types'
import { Post, User } from './models'
import { connectToDb } from './utils'

//!TODO CHECK SECURE

export const getPosts = async () => {
  try {
    await connectToDb()
    const posts: BlogPostType[] = await Post.find()
    return posts
  } catch (error: any) {
    console.log(error.message)
    throw new Error('Failed to fetch posts!')
  }
}

export const getUsers = async () => {
  try {
    await connectToDb()
    const users: UserPostType[] = await User.find()
    return users
  } catch (error: any) {
    console.log(error.message)
    throw new Error('Failed to fetch users!')
  }
}

export const getSinglePost = async (slug: string) => {
  try {
    await connectToDb()
    const post: BlogPostType | null = await Post.findOne({ slug })
    if (!post) throw new Error('Failed to find post!')
    return post
  } catch (error: any) {
    console.log(error.message)
    throw new Error('Failed to fetch post!')
  }
}

export const getSingleUser = async (id: string) => {
  try {
    await connectToDb()
    const post: UserPostType | null = await User.findById(id)
    if (!post) throw new Error('Failed to find user!')
    return post
  } catch (error: any) {
    console.log(error.message)
    throw new Error('Failed to fetch user!')
  }
}
