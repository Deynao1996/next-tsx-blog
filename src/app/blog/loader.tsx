import { Skeleton } from '@/components/ui/skeleton'

export default function Loading() {
  return (
    <section className="py-10">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
        {[...new Array(6)].map((_, i) => (
          <Skeleton
            key={i}
            className="sm:w-[290px] sm:aspect-[3/4] w-full aspect-[4/3]"
          />
        ))}
      </div>
    </section>
  )
}
