import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

export default function loading() {
  return (
    <section className="w-full sm:w-[450px] mx-auto">
      <Card>
        <CardHeader>
          <Skeleton className="h-10 w-1/3 mx-auto" />
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <Skeleton className="h-8 w-full" />
          <Skeleton className="h-8 w-full" />
          <Skeleton className="h-8 w-1/12 mx-auto" />
          <Skeleton className="h-8 w-full" />
          <Skeleton className="h-8 w-full" />
          <Skeleton className="h-8 w-full" />
        </CardContent>
        <CardFooter className="justify-center">
          <Skeleton className="h-4 w-10/12" />
        </CardFooter>
      </Card>
    </section>
  )
}
