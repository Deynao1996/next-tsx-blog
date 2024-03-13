'use client'

import ErrorLayout from '@/components/Wrap/ErrorLayout'
import { Button } from '@/components/ui/button'
import { Ban, Info } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function ErrorPage() {
  return (
    <ErrorLayout
      IconComponent={Ban}
      description="Sorry, an unexpected error has occurred. Please try again later."
      title="The error is occurred"
      iconClassName="text-red-500"
    >
      <div className="flex items-center w-auto mt-6 gap-x-3 shrink-0">
        <Button variant={'secondary'} asChild>
          <Link href={'/'}>Home page</Link>
        </Button>
      </div>
    </ErrorLayout>
  )
}
