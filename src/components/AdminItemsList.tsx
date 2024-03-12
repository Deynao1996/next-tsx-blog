import React from 'react'
import { type AdminDashboardProps } from '@/lib/types'

type AdminItemsListProps<T> = Omit<AdminDashboardProps<T>, 'label'>

export default async function AdminItemsList<T>({
  getItems,
  renderItems
}: AdminItemsListProps<T>) {
  const items: T[] = await getItems()

  return (
    <ul className="space-y-4 max-h-[400px] overflow-y-scroll pr-5">
      {items.length === 0 && (
        <li className="text-lg text-primary-foreground">
          No items yet &#129300;
        </li>
      )}
      {renderItems(items)}
    </ul>
  )
}
