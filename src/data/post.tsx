import { Post } from '@/lib/models'
import { TBlogPost } from '@/lib/types'
import { connectToDb, getRndFromRange } from '@/lib/utils'
import { unstable_noStore as noStore } from 'next/cache'

export const getPosts = async (userId?: string) => {
  noStore()
  try {
    await connectToDb()
    const query = userId ? { userId } : {}
    const posts: TBlogPost[] = await Post.find(query).lean()
    posts.forEach((post) => {
      post.imageHeight = getRndFromRange(200, 400)
    })

    return posts
  } catch (error: any) {
    console.log(error.message)
    throw new Error('Failed to fetch posts!')
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
