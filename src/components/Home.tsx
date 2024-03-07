import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import Stats from './Stats'

export default function Home() {
  return (
    <>
      <h1 className="scroll-m-20 text-4xl font-extrabold lg:text-6xl lg:leading-[4rem] max-w-full">
        Creative Thoughts Agency
      </h1>
      <h2 className="max-w-full scroll-m-20 text-lg sm:text-xl tracking-tight my-5">
        Creative Thoughts Agency: Innovating, inspiring, and bringing ideas to
        life with creativity.
      </h2>
      <div className="flex gap-5 mt-10">
        <Button asChild>
          <Link href="/about">Learn More</Link>
        </Button>
        <Button variant={'ghost'} asChild>
          <Link href="/contact">Contact</Link>
        </Button>
      </div>
      <Stats />
    </>
  )
}
