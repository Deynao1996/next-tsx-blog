import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export default function BlogPage() {
  return (
    <section className="py-10">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
        {[...new Array(4)].map((_, i) => (
          <div key={i}>
            <div className="w-[280px] aspect-[3/4] mb-5 flex items-center">
              <div className="w-full h-full border border-border rounded-md"></div>
              <Button
                variant={'link'}
                className="rotate-180"
                asChild
                style={{ writingMode: 'vertical-rl' }}
              >
                <Link href="/blog/1">Learn more</Link>
              </Button>
            </div>
            <p className="font-medium tracking-tight">React Rendezvous</p>
            <span className="text-xs text-muted-foreground tracking-tighter">
              Ethan Byte
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
