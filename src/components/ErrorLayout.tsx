import { cn } from '@/lib/utils'
import { LucideIcon } from 'lucide-react'

type ErrorLayoutProps = {
  IconComponent: LucideIcon
  title: string
  description: string
  children: React.ReactNode
  iconClassName?: string
}

export default function ErrorLayout({
  IconComponent,
  title,
  description,
  children,
  iconClassName
}: ErrorLayoutProps) {
  return (
    <section>
      <div className="flex flex-col items-center max-w-sm mx-auto text-center">
        <p
          className={cn(
            'p-3 text-sm font-medium rounded-full bg-blue-50 dark:bg-gray-800',
            iconClassName
          )}
        >
          <IconComponent className="w-6 h-6" />
        </p>
        <h4 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
          {title}
        </h4>
        <p className="mt-4 text-gray-500 dark:text-gray-400">{description}</p>
        {children}
      </div>
    </section>
  )
}
