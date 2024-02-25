'use client'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Facebook, Github } from 'lucide-react'
import CustomForm from './CustomForm'
import { handleGithubLogin } from '@/lib/actions'
import Link from 'next/link'

export default function Login() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center text-3xl mb-5">Login</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
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
        <Button variant={'secondary'} aria-label="Login with Google">
          <Facebook className="mr-2 h-4 w-4" /> Login with Facebook
        </Button>
        <p className="text-center font-medium">OR</p>
        <CustomForm btnContent="Login" label="login" />
      </CardContent>
      <CardFooter className="justify-center">
        <Button
          variant={'link'}
          className="tracking-tight p-0"
          size={'sm'}
          asChild
        >
          <Link href={'/auth/register'}>Don't have an account? Register</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
