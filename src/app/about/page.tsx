import AboutUs from '@/components/AboutUs'
import React from 'react'

export default function AboutPage() {
  return (
    <main className="flex gap-5">
      <div className="flex-1">
        <AboutUs />
      </div>
      <div className="flex-1 border border-border hidden sm:block mt-7"></div>
    </main>
  )
}
