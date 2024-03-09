import { Metadata } from 'next'
import Verify from '@/components/Verify'
import { handleGoogleLogin, handleGithubLogin } from '@/lib/actions'
import { Button } from '@/components/ui/button'
import { Facebook, Github } from 'lucide-react'
import { CardFooter } from '@/components/ui/card'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Login Page',
  description: 'Generated by create next app'
}

export default function LoginPage() {
  return (
    <section className="w-full sm:w-[450px] mx-auto">
      <Verify
        label="login"
        renderFooter={() => (
          <CardFooter className="justify-center">
            <Button
              variant={'link'}
              className="tracking-tight p-0 text-accent-foreground"
              size={'sm'}
              asChild
            >
              <Link href={'/auth/register'}>
                Don't have an account? Register
              </Link>
            </Button>
          </CardFooter>
        )}
      >
        <form action={handleGithubLogin}>
          <Button
            aria-label="Login with Github"
            variant={'secondary'}
            type="submit"
            className="w-full"
          >
            <Github className="mr-2 h-4 w-4" /> Login with Github
          </Button>
        </form>
        <form action={handleGoogleLogin}>
          <Button
            aria-label="Login with Google"
            variant={'secondary'}
            type="submit"
            className="w-full"
          >
            <svg viewBox="0 0 48 48" className="w-4 h-4 mr-2">
              <title>Google Logo</title>
              <clipPath id="g">
                <path d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z" />
              </clipPath>
              <g className="colors" clip-path="url(#g)">
                <path fill="#FBBC05" d="M0 37V11l17 13z" />
                <path fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z" />
                <path fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z" />
                <path fill="#4285F4" d="M48 48L17 24l-4-3 35-10z" />
              </g>
            </svg>
            Login with Google
          </Button>
        </form>
        <p className="text-center font-medium">OR</p>
      </Verify>
    </section>
  )
}
