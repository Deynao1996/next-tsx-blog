'use client'

import { z } from 'zod'
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
import { loginFieldsData } from '@/store'
import { loginFormSchema } from '@/lib/formSchema'

export default function Login() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center text-3xl mb-5">Login</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <Button aria-label="Login with Github" variant={'secondary'}>
          <Github className="mr-2 h-4 w-4" /> Login with Github
        </Button>
        <Button variant={'secondary'} aria-label="Login with Google">
          <Facebook className="mr-2 h-4 w-4" /> Login with Facebook
        </Button>
        <p className="text-center font-medium">OR</p>
        <CustomForm
          fieldsData={loginFieldsData}
          formSchema={loginFormSchema}
          btnContent="Login"
        />
      </CardContent>
      <CardFooter className="justify-center">
        <Button variant={'link'} className="tracking-tight p-0" size={'sm'}>
          Don't have an account? Register
        </Button>
      </CardFooter>
    </Card>
  )
}
