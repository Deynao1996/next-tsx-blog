'use client'

import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { LogIn } from 'lucide-react'
import MobileMenuBar from './MobileMenuBar'
import ToggleTheme from './ToggleTheme'
import { usePathname } from 'next/navigation'

export const routes = [
  { label: 'Homepage', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Blog', href: '/blog' }
]

export default function NavBar() {
  const pathname = usePathname()

  return (
    <header className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <MobileMenuBar />
        <Link href="/" className="font-bold tracking-tight text-xl md:text-2xl">
          Agency
        </Link>
      </div>
      <nav className="flex gap-4 items-center">
        <div className="hidden md:block">
          {routes.map((route) => (
            <Button
              key={route.href}
              asChild
              variant={'ghost'}
              className={
                pathname === route.href ? 'underline underline-offset-4' : ''
              }
            >
              <Link href={route.href}>{route.label}</Link>
            </Button>
          ))}
        </div>
        <Button
          variant="default"
          asChild
          size={'icon'}
          className="h-9 w-9 sm:h-9 sm:px-4 sm:py-2 sm:w-auto"
        >
          <Link href="/login" className="ml-10">
            <span className="hidden sm:block sr-only sm:not-sr-only">
              Login
            </span>
            <LogIn className="block sm:hidden" />
          </Link>
        </Button>
        <ToggleTheme />
      </nav>
    </header>
  )
}
