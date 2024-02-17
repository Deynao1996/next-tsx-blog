import Home from '@/components/Home'
import Image from 'next/image'
import React from 'react'
import promo from '../../public/promo.png'

//TODO CHECK ADVANCE SERVER FETCHING
//TODO CHECK ADVANCE TYPESCRIPT

export default function HomePage() {
  return (
    <main className="flex gap-10 items-center">
      <div className="flex-1">
        <Home />
      </div>
      <div className="flex-1 hidden md:block">
        <Image
          alt="Hero illustration"
          src={promo}
          priority
          width={500}
          className="mx-auto"
        />
      </div>
    </main>
  )
}
