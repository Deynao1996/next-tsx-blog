import { User } from '@/lib/models'
import { TUserPost } from '@/lib/types'
import { connectToDb } from '@/lib/utils'
import { unstable_noStore as noStore } from 'next/cache'

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
