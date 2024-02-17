'use client'

import { useFormStatus } from 'react-dom'
import { Button } from './button'
import { cn } from '@/lib/utils'
import React from 'react'
import { ReloadIcon } from '@radix-ui/react-icons'

export interface SubmitButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {}

const SubmitBtn = React.forwardRef<HTMLButtonElement, SubmitButtonProps>(
  ({ children, className, ...props }, ref) => {
    const { pending } = useFormStatus()

    return (
      <Button
        type="submit"
        aria-disabled={pending}
        disabled={pending}
        className={cn('w-full', className)}
        ref={ref}
        {...props}
      >
        {pending ? (
          <>
            <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
            Please wait
          </>
        ) : (
          children
        )}
      </Button>
    )
  }
)

export { SubmitBtn }
