import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { type TUserPost } from '@/lib/types'
import Link from 'next/link'
import { getSingleUser } from '@/data/user'

export default async function UserPost({ userId }: { userId: string }) {
  const userData: TUserPost = await getSingleUser(userId)

  return (
    <div className="flex items-center gap-5">
      <Link href={`/user/${userData._id}`}>
        <Avatar>
          <AvatarImage src={userData.img} className="object-cover" />
          <AvatarFallback>{userData.username.slice(0, 1)}</AvatarFallback>
        </Avatar>
      </Link>
      <div>
        <div className="flex items-center justify-between gap-5">
          <p className="capitalize">{userData.username}</p>
          <svg
            className="fill-blue-500 dark:fill-slate-50 w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path d="M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"></path>
          </svg>
        </div>
        <div className="text-sm font-light text-muted-foreground">
          {userData.createdAt.toString().slice(4, 16)}
        </div>
      </div>
    </div>
  )
}
