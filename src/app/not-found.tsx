'use client'

import ErrorLayout from '@/components/ErrorLayout'
import { Button } from '@/components/ui/button'
import { Info, MoveLeft } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function NotFoundPage() {
  const router = useRouter()

  return (
    <ErrorLayout
      IconComponent={Info}
      description="The page you are looking for doesn't exist. Here are some helpful
      links:"
      title="Page not found"
      iconClassName="text-blue-500"
    >
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
    </ErrorLayout>
  )
}
