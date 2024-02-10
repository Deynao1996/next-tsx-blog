import { ContactUs } from '@/components/ContactUs'
import React from 'react'

export default function ContactPage() {
  return (
    <main className="flex gap-5">
      <div className="flex-1 border border-border hidden sm:block mt-7"></div>
      <div className="flex-1">
        <ContactUs />
      </div>
    </main>
  )
}
