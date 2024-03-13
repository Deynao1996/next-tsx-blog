import React from 'react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '../ui/tooltip'

type ConditionalTooltipWrapProps = {
  condition: boolean
  children: React.ReactNode
  title: string
}

const ConditionalTooltipWrap = ({
  condition,
  children,
  title
}: ConditionalTooltipWrapProps) =>
  condition ? (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent className="bg-secondary-foreground dark:bg-secondary">
          <p>{title}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ) : (
    children
  )

export default ConditionalTooltipWrap
