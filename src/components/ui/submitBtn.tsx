'use client'

import { useFormStatus } from 'react-dom'
import { Button } from './button'
import { cn } from '@/lib/utils'
import React from 'react'
import { ReloadIcon } from '@radix-ui/react-icons'

export interface SubmitButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  disabled?: boolean
}

const SubmitBtn = React.forwardRef<HTMLButtonElement, SubmitButtonProps>(
  ({ children, className, disabled, ...props }, ref) => {
    return (
      <Button
        type="submit"
        className={cn('w-full', className)}
        ref={ref}
        disabled={disabled}
        {...props}
      >
        {disabled ? (
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
