import React from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import Link from 'next/link'
import CustomForm from './CustomForm'
import { FormLabel } from '@/lib/types'

type VerifyProps = {
  label: FormLabel
  children?: React.ReactNode
  renderFooter?: () => React.ReactNode
}

export default function Verify({ label, children, renderFooter }: VerifyProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center text-3xl mb-5 capitalize">
          {label}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        {children}
        <CustomForm btnContent={label} label={label} />
      </CardContent>
      {renderFooter?.()}
    </Card>
  )
}
