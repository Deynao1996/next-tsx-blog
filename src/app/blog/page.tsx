import BlogPost from '@/components/BlogPost'
import { getPosts } from '@/lib/data'
import { type TBlogPost } from '@/lib/types'
import { Metadata } from 'next'
import React, { Suspense } from 'react'
import Loading from './loader'

export const metadata: Metadata = {
  title: 'Blog Page',
  description: 'Generated by create next app'
}

export default async function BlogPage() {
  const posts: TBlogPost[] = await getPosts()

  return (
    <section className="py-10">
      <Suspense fallback={<Loading />}>
        {posts?.length ? (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => (
              <BlogPost post={post} key={i} />
            ))}
          </div>
        ) : (
          <div className="text-lg font-semibold text-center">
            No posts here yet &#128580;
          </div>
        )}
      </Suspense>
    </section>
  )
}
