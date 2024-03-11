import { Skeleton } from '@/components/ui/skeleton'

export default function Loading() {
  return (
    <section className="py-10">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div className="h-[500px] w-full">
          <Skeleton className="h-full" />
        </div>
        <div className="col-span-2 space-y-8">
          <Skeleton className="h-12 w-1/3" />
          <div className="flex items-center gap-5">
            <Skeleton className="h-12 w-12 rounded-full" />
            <Skeleton className="h-12 w-32" />
            <Skeleton className="h-12 w-32" />
          </div>
          <Skeleton className="h-48 w-full" />
        </div>
      </div>
    </section>
  )
}
