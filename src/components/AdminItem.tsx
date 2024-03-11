'use client'

import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'
import Link from 'next/link'
import { ZodType } from 'zod'
import { useHandleAction } from '@/hooks/useHandleAction'
import ConditionalTooltipWrap from './ConditionalTooltipWrap'
import { AdminItemProps } from '@/lib/types'

export default function AdminItem<T extends ZodType<any, any>>({
  img,
  title,
  href,
  onDelete,
  id,
  showTooltip = false
}: AdminItemProps<T>) {
  const { execute, status } = useHandleAction(onDelete)

  return (
    <li className="flex justify-between sm:items-center flex-col sm:flex-row gap-5">
      <ConditionalTooltipWrap condition={showTooltip} title={id}>
        <div
          className={`flex items-center gap-3 ${showTooltip && 'cursor-help'}`}
        >
          <Avatar>
            <AvatarImage src={img} className="object-cover" />
            <AvatarFallback className="uppercase">
              {title.slice(0, 1)}
            </AvatarFallback>
          </Avatar>
          <div className="capitalize line-clamp-1">{title}</div>
        </div>
      </ConditionalTooltipWrap>
      <div className="space-x-3 flex">
        <Button asChild variant={'secondary'} size={'sm'} className="flex-1">
          <Link href={href}>View</Link>
        </Button>
        <Button
          disabled={status === 'executing'}
          variant={'destructive'}
          onClick={() => execute({ id })}
          aria-label={`Delete ${title}`}
          size={'sm'}
          className="flex-1"
        >
          Delete
        </Button>
      </div>
    </li>
  )
}
