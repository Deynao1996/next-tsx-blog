import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { Facebook, Github, Instagram, Twitter } from 'lucide-react'
import { Separator } from './ui/separator'

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
      <div className="flex mt-10 md:space-x-4 h-5 gap-3 md:gap-0 flex-wrap justify-start">
        <div className="flex items-center justify-center gap-2">
          <Instagram /> Instagram
        </div>
        <Separator orientation="vertical" className="hidden md:block" />
        <div className="flex items-center justify-center gap-2">
          <Facebook /> Facebook
        </div>
        <Separator orientation="vertical" className="hidden md:block" />
        <div className="flex items-center justify-center gap-2">
          <Github /> Github
        </div>
        <Separator orientation="vertical" className="hidden md:block" />
        <div className="flex items-center justify-center gap-2">
          <Twitter /> Twitter
        </div>
      </div>
    </>
  )
}
