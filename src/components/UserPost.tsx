import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { getSingleUser } from '@/lib/data'
import { type TUserPost } from '@/lib/types'

export default async function UserPost({ userId }: { userId: string }) {
  const userData: TUserPost = await getSingleUser(userId)

  return (
    <div className="flex items-center gap-5">
      <Avatar>
        <AvatarImage src={userData.img} className="object-cover" />
        <AvatarFallback>{userData.username.slice(0, 1)}</AvatarFallback>
      </Avatar>
      <div>
        <p className="text-sm font-light text-muted-foreground">Author</p>
        <span>{userData.username}</span>
      </div>
      <div>
        <p className="text-sm font-light text-muted-foreground">Author</p>
        <span>{userData.createdAt.toString().slice(4, 16)}</span>
      </div>
    </div>
  )
}
