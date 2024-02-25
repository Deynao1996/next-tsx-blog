import Link from 'next/link'
import React from 'react'
import MobileMenuBar from './MobileMenuBar'
import NavLinks from './NavLinks'
import { auth } from '@/lib/auth'

export default async function NavBar() {
  const session = await auth()

  return (
    <header className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <MobileMenuBar />
        <Link href="/" className="font-bold tracking-tight text-xl md:text-2xl">
          Agency
        </Link>
      </div>
      <NavLinks session={session} />
    </header>
  )
}
