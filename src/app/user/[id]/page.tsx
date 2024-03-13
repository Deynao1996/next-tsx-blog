import { TBlogPost, TUserPost } from '@/lib/types'
import Image from 'next/image'
import React from 'react'
import placeholder from '../../../../public/placeholder.jpg'
import BlogPost from '@/components/BlogPost'
import CreateUserPostDialog from '@/components/CreateUserPostDialog'
import { getSingleUser } from '@/data/user'
import { getPosts } from '@/data/post'

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
  const posts: TBlogPost[] = await getPosts(params.id)

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
          <div className="space-y-3 my-8">
            <p>
              <b>Email:</b> {userData.email}
            </p>
            <p>
              <b>Created At:</b> {userData.createdAt.toString().slice(4, 16)}
            </p>
          </div>
          {userData._id.toString() === params.id && <CreateUserPostDialog />}
        </div>
      </div>
      {!!posts.length && (
        <div className="mt-10">
          <p className="scroll-m-20 text-2xl font-semibold tracking-tight mb-5">
            User Posts
          </p>
          <div className="flex flex-wrap gap-8 items-start">
            {posts.map((post) => (
              <BlogPost post={post} key={post._id} />
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
