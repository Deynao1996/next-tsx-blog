import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { type TBlogPost } from '@/lib/types'
import Image from 'next/image'
import placeholder from '../../public/placeholder.jpg'

export default function BlogPost({
  post: { descr, slug, title, userId, img }
}: {
  post: TBlogPost
}) {
  return (
    <div className="sm:max-w-[280px]">
      <div className="sm:max-w-full aspect-[4/3] sm:aspect-[3/4] mb-5 flex items-center">
        <div className="w-full h-full rounded-md relative overflow-hidden">
          <Image
            src={img ? img : placeholder}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 600px) 100vw, 50vw"
          />
        </div>
        <Button
          variant={'link'}
          className="rotate-180"
          asChild
          style={{ writingMode: 'vertical-rl' }}
        >
          <Link href={`/blog/${slug}`}>Learn more</Link>
        </Button>
      </div>
      <p className="max-w-[90%] font-medium tracking-tight uppercase mb-3">
        {title}
      </p>
      <div className="max-w-[90%] text-xs text-muted-foreground tracking-tighter overflow-hidden inline-block text-ellipsis text-nowrap">
        {descr}
      </div>
    </div>
  )
}
