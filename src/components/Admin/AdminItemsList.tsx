import React from 'react'
import { type AdminDashboardProps } from '@/lib/types'
import { ScrollArea } from '../ui/scroll-area'

type AdminItemsListProps<T> = Omit<AdminDashboardProps<T>, 'label'>

export default async function AdminItemsList<T>({
  getItems,
  renderItems
}: AdminItemsListProps<T>) {
  const items: T[] = await getItems()

  return (
    <ScrollArea className="h-[400px]">
      <ul className="space-y-4 pr-5">
        {items.length === 0 && (
          <li className="text-lg text-primary-foreground">
            No items yet &#129300;
          </li>
        )}
        {renderItems(items)}
      </ul>
    </ScrollArea>
  )
}
