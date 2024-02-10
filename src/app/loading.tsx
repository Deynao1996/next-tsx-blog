import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

export default function Loading() {
  return (
    <div className="fixed top-0 right-0 h-screen w-screen z-50 flex justify-center items-center bg-black/50 backdrop-opacity-50">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
    </div>
  )
}
