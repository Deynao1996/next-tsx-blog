import React, { useState } from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { type TBlogPost } from '@/lib/types'
import Image from 'next/image'
import UserPost from './UserPost'
import { ExternalLink } from 'lucide-react'

export default function BlogPost({
  post: { descr, slug, title, userId, img, imageHeight }
}: {
  post: TBlogPost
}) {
  return (
    <article className="mb-4 break-inside p-6 rounded-xl bg-muted dark:bg-slate-800 flex flex-col bg-clip-border flex-1 min-w-[320px]">
      <UserPost userId={userId} />
      <div className="flex justify-between my-4">
        <span className="text-2xl font-extrabold capitalize">{title}</span>
        <Button asChild size={'icon'} variant={'ghost'}>
          <Link href={`/blog/${slug}`}>
            <ExternalLink />
          </Link>
        </Button>
      </div>
      {img && imageHeight && (
        <div
          style={{ height: imageHeight + 'px' }}
          className={`py-4 w-full my-2 rounded-md relative overflow-hidden`}
        >
          <Image
            src={img}
            priority={!!img}
            alt={title}
            fill
            className="object-cover rounded-lg"
            sizes="(max-width: 600px) 100vw, 50vw"
          />
        </div>
      )}

      <p className="line-clamp-3 mt-2">{descr}</p>
    </article>
  )
}
