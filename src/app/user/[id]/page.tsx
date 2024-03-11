import { getSingleUser } from '@/lib/data'
import { TUserPost } from '@/lib/types'
import Image from 'next/image'
import React from 'react'
import placeholder from '../../../../public/placeholder.jpg'

export const generateMetadata = async ({
  params
}: {
  params: { id: string }
}) => {
  const user: TUserPost = await getSingleUser(params.id)
  return {
    title: user.username
  }
}

export default async function UserPage({ params }: { params: { id: string } }) {
  const userData: TUserPost = await getSingleUser(params.id)

  return (
    <section className="py-10">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-8 sm:gap-8">
        <div className="h-[300px] sm:h-[500px] w-full relative rounded-md overflow-hidden">
          <Image
            alt={userData.username}
            src={userData.img ? userData.img : placeholder}
            fill
            priority={userData.img ? true : false}
            className="object-cover"
            sizes="(max-width: 600px) 100vw, 50vw"
          />
        </div>
        <div className="col-span-2">
          <div className="scroll-m-20 text-4xl font-extrabold max-w-full capitalize">
            {userData.username}
          </div>
          <div className="space-y-3 mt-8">
            <p>
              <b>ID:</b> {userData._id}
            </p>
            <p>
              <b>Email:</b> {userData.email}
            </p>
            <p>
              <b>Created At:</b> {userData.createdAt.toString().slice(4, 16)}
            </p>
            <p>
              <b>Admin: </b> {userData.isAdmin ? 'Yes' : 'No'}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
