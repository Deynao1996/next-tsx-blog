import Home from '@/components/Home'
import React from 'react'

export default function HomePage() {
  return (
    <main className="flex gap-10">
      <div className="flex-1">
        <Home />
      </div>
      <div className="flex-1 border border-border hidden md:block"></div>
    </main>
  )
}
