import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

export default function loading() {
  return (
    <main className="flex gap-5">
      <div className="flex-1 hidden sm:block mt-7">
        <Skeleton className="h-full w-full" />
      </div>
      <div className="flex-1 space-y-8">
        <Skeleton className="h-12 w-full" />
        <Skeleton className="h-12 w-full" />
        <Skeleton className="h-12 w-full" />
        <Skeleton className="h-28 w-full" />
      </div>
    </main>
  )
}
