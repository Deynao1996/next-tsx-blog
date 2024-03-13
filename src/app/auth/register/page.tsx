import { Metadata } from 'next'
import Verify from '@/components/Wrap/Verify'
import { CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Register Page',
  description: 'Generated by create next app'
}

export default function RegisterPage() {
  return (
    <section className="w-full sm:w-[450px] mx-auto">
      <Verify
        label="register"
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
      />
    </section>
  )
}
