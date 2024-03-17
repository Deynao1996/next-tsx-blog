'use client'

import Verify from '../Wrap/Verify'
import { Button } from '../ui/button'
import Link from 'next/link'
import { CardFooter } from '../ui/card'
import CustomForm from './CustomForm'

export default function ForgotPasswordForm() {
  return (
    <Verify
      description="Forgot your password?"
      renderFooter={() => (
        <CardFooter className="justify-center">
          <Button
            variant={'link'}
            className="tracking-tight p-0 text-accent-foreground"
            asChild
          >
            <Link href={'/auth/login'}>Back to login</Link>
          </Button>
        </CardFooter>
      )}
    >
      <CustomForm btnContent="Send reset email" label="forgot-password" />
    </Verify>
  )
}
