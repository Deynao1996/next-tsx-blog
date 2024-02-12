import { ContactUs } from '@/components/ContactUs'
import React from 'react'
import contact from '../../../public/contact.png'
import Image from 'next/image'

export default function ContactPage() {
  return (
    <main className="flex gap-5 items-center">
      <div className="flex-1 hidden sm:block mt-7">
        <Image
          alt="Contact us illustration"
          src={contact}
          priority
          width={500}
          className="mx-auto"
        />
      </div>
      <div className="flex-1">
        <ContactUs />
      </div>
    </main>
  )
}
