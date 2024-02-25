'use client'

import { routes } from '@/store'
import { usePathname } from 'next/navigation'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { Lock, LogIn } from 'lucide-react'
import ToggleTheme from './ToggleTheme'
import { handleLogout } from '@/lib/actions'
import { Session } from 'next-auth'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

type NavLinksProps = {
  session: Session | null
}

export default function NavLinks({ session }: NavLinksProps) {
  const pathname = usePathname()

  const getInitials = function (string?: string | null) {
    if (!string) return 'U'
    let names = string.split(' '),
      initials = names[0].substring(0, 1).toUpperCase()

    if (names.length > 1) {
      initials += names[names.length - 1].substring(0, 1).toUpperCase()
    }
    return initials
  }

  return (
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
      {session?.user ? (
        <form action={handleLogout}>
          <Button
            variant="default"
            type="submit"
            aria-label="Logout"
            size={'icon'}
            className="h-9 w-9 sm:h-9 sm:px-4 sm:py-2 sm:w-auto"
          >
            <span className="hidden sm:block sr-only sm:not-sr-only">
              Logout
            </span>
            <LogIn className="block sm:hidden" />
          </Button>
        </form>
      ) : (
        <Button
          variant="default"
          asChild
          size={'icon'}
          className="h-9 w-9 sm:h-9 sm:px-4 sm:py-2 sm:w-auto"
        >
          <Link href="/auth/login" className="ml-10">
            <span className="hidden sm:block sr-only sm:not-sr-only">
              Login
            </span>
            <LogIn className="block sm:hidden" />
          </Link>
        </Button>
      )}
      <ToggleTheme />
      {session?.user && (
        <div className="relative">
          <span className="absolute flex h-2 w-2 z-10 bottom-[5%] right-[5%]">
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <Avatar className="size-9">
            <AvatarImage src={session?.user?.image ?? ''} />
            <AvatarFallback>{getInitials(session?.user?.name)}</AvatarFallback>
          </Avatar>
        </div>
      )}
      {false && (
        <Button variant={'secondary'} size={'icon'} asChild>
          <Link href="/admin" className="flex items-center gap-5">
            <span className="sr-only">Dashboard</span>
            <Lock className="h-5 w-5" />
          </Link>
        </Button>
      )}
    </nav>
  )
}
