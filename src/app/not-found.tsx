'use client'

import { Button } from '@/components/ui/button'
import { Info, MoveLeft } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function NotFoundPage() {
  const router = useRouter()
  return (
    <section>
      <div className="flex flex-col items-center max-w-sm mx-auto text-center">
        <p className="p-3 text-sm font-medium text-blue-500 rounded-full bg-blue-50 dark:bg-gray-800">
          <Info className="w-6 h-6" />
        </p>
        <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
          Page not found
        </h1>
        <p className="mt-4 text-gray-500 dark:text-gray-400">
          The page you are looking for doesn't exist. Here are some helpful
          links:
        </p>

        <div className="flex items-center w-auto mt-6 gap-x-3 shrink-0">
          <Button
            variant={'outline'}
            onClick={() => router.back()}
            aria-label="Navigate back to previous page"
          >
            <MoveLeft className="mr-2" />
            <span>Go back</span>
          </Button>
          <Button variant={'default'} asChild>
            <Link href={'/'}>Take me home</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
