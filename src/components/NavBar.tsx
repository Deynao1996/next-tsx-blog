import Link from 'next/link'
import React from 'react'
import MobileMenuBar from './MobileMenuBar'
import NavLinks from './NavLinks'
import { auth } from '@/lib/auth'
import Logo from './Logo'

export default async function NavBar() {
  const session = await auth()

  return (
    <div className="sticky">
      <header className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <MobileMenuBar />
          <Link
            href="/"
            className="font-bold tracking-tight text-xl md:text-2xl"
          >
            <Logo />
          </Link>
        </div>
        <NavLinks session={session} />
      </header>
    </div>
  )
}
