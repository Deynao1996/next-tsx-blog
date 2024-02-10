'use client'

import React from 'react'
import { Button } from './ui/button'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

export default function ToggleTheme() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant={'ghost'}
      size={'icon'}
      aria-label="Toggle Theme"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 absolute" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
