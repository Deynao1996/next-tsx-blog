import UserPost from '@/components/UserPost'
import { type TBlogPost } from '@/lib/types'
import Image from 'next/image'
import React from 'react'
import placeholder from '../../../../public/placeholder.jpg'
import { getSinglePost } from '@/data/post'

export const generateMetadata = async ({
  params
}: {
  params: { slug: string }
}) => {
  const post: TBlogPost = await getSinglePost(params.slug)
  return {
    title: post.title,
    description: post.descr
  }
}

export default async function SinglePostPage({
  params
}: {
  params: { slug: string }
}) {
  const postData: TBlogPost = await getSinglePost(params.slug)

  return (
    <section className="py-10">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-8 sm:gap-8">
        <div className="h-[300px] sm:h-[500px] w-full relative rounded-md overflow-hidden">
          <Image
            alt={postData.title}
            src={postData.img ? postData.img : placeholder}
            fill
            priority={postData.img ? true : false}
            className="object-cover"
            sizes="(max-width: 600px) 100vw, 50vw"
          />
        </div>
        <div className="col-span-2 space-y-8">
          <div className="scroll-m-20 text-4xl font-extrabold max-w-full capitalize">
            {postData.title}
          </div>
          <UserPost userId={postData.userId} />
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            {postData.descr}
          </p>
        </div>
      </div>
    </section>
  )
}
