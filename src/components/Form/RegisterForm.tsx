'use client'

import Verify from '../Wrap/Verify'
import { Button } from '../ui/button'
import Link from 'next/link'
import { CardFooter } from '../ui/card'
import CustomForm from './CustomForm'

export default function RegisterForm() {
  return (
    <Verify
      description="Register for an account"
      renderFooter={() => (
        <CardFooter className="justify-center">
          <Button
            variant={'link'}
            className="tracking-tight p-0 text-accent-foreground"
            size={'sm'}
            asChild
          >
            <Link href={'/auth/login'}>Already have an account? Login</Link>
          </Button>
        </CardFooter>
      )}
    >
      <CustomForm label="register" btnContent="register" />
    </Verify>
  )
}
