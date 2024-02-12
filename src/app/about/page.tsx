import AboutUs from '@/components/AboutUs'
import Image from 'next/image'
import React from 'react'
import about from '../../../public/about.png'

export default function AboutPage() {
  return (
    <main className="flex gap-5 items-center">
      <div className="flex-1">
        <AboutUs />
      </div>
      <div className="flex-1 hidden sm:block mt-7">
        <Image
          alt="About us illustration"
          src={about}
          priority
          width={500}
          className="mx-auto"
        />
      </div>
    </main>
  )
}
