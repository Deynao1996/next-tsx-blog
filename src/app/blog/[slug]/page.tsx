import UserPost from '@/components/UserPost'
import { getPosts, getSinglePost } from '@/lib/data'
import { BlogPostType } from '@/types'
import React from 'react'

//Fetch data with API
// async function getSinglePostData(postId: string) {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${postId}`
//   )
//   if (!res.ok) {
//     throw new Error('Failed to fetch data')
//   }
//   return res.json()
// }

export default async function SinglePostPage({
  params
}: {
  params: { slug: string }
}) {
  //Fetch data with API
  // const postData: BlogPostType = await getSinglePostData(params.slug)
  const postData = getSinglePost(params.slug)

  return (
    <section className="py-10">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div className="h-[500px] w-full">
          <div className="w-full h-full border border-border"></div>
        </div>
        <div className="col-span-2 space-y-8">
          <div className="scroll-m-20 text-4xl font-extrabold max-w-full capitalize">
            {postData?.title}
          </div>
          <UserPost userId={postData ? postData.userId : ''} />
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            {postData?.body}
          </p>
        </div>
      </div>
    </section>
  )
}
