import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'

type VerifyProps = {
  description: string
  children?: React.ReactNode
  renderFooter?: () => React.ReactNode
}

export default function Verify({
  description,
  children,
  renderFooter
}: VerifyProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center text-3xl mb-5 capitalize">
          Auth
        </CardTitle>
        <p className="leading-7 text-center">{description}</p>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">{children}</CardContent>
      {renderFooter?.()}
    </Card>
  )
}
