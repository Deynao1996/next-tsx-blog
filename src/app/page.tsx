import Home from '@/components/Home'
import Image from 'next/image'
import React from 'react'
import promo from '../../public/promo.png'

//TODO IMPLEMENT GOOGLE AUTH
//TODO REDESIGN BLOG PAGE
//TODO CHECK REMIND PASSWORD AND EMAIL CONFIRMATION
//TODO ADMIN DASHBOARD PAGINATION OR TABLES
//TODO BLOG PAGE INFINITE PAGINATION CHECK

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
