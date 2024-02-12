import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { getSingleUser } from '@/lib/data'

//Fetch data with API
// async function getUserPostData(userId: string) {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/users/${userId}`,
//     {
//       cache: 'no-store'
//     }
//   )
//   if (!res.ok) {
//     throw new Error('Failed to fetch data')
//   }
//   return res.json()
// }

export default async function UserPost({ userId = '' }: { userId: string }) {
  // const userData = await getUserPostData(userId)
  const userData = getSingleUser(userId)

  return (
    <div className="flex items-center gap-5">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div>
        <p className="text-sm font-light text-muted-foreground">Author</p>
        <span>{userData?.name}</span>
      </div>
      <div>
        <p className="text-sm font-light text-muted-foreground">Author</p>
        <span>08.12.1212</span>
      </div>
    </div>
  )
}
