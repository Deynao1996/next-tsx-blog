import BlogPost from '@/components/BlogPost'
import { getPosts } from '@/lib/data'
import { BlogPostType } from '@/types'
import React from 'react'

export default async function BlogPage() {
  const posts: BlogPostType[] = await getPosts()

  return (
    <section className="py-10">
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
    </section>
  )
}
