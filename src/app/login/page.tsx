'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
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
import React from 'react'
import { getDefaultValueFromFields } from '@/lib/utils'
import { loginFieldsData } from '@/store'
import CustomForm from '@/components/CustomForm'

const formSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.'
  }),
  password: z
    .string()
    .min(4, { message: 'Password must be at least 4 characters.' })
})

export default function LoginPage() {
  const form = useForm<FieldValues>({
    resolver: zodResolver(formSchema),
    defaultValues: getDefaultValueFromFields(loginFieldsData)
  })

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data)
  }

  return (
    <section className="w-full sm:w-[450px] mx-auto">
      <Card>
        <CardHeader>
          <CardTitle className="text-center text-3xl mb-5">Login</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <Button>
            <Github className="mr-2 h-4 w-4" /> Login with Github
          </Button>
          <Button variant={'secondary'}>
            <Facebook className="mr-2 h-4 w-4" /> Login with Facebook
          </Button>
          <p className="text-center font-medium">OR</p>
          <CustomForm
            form={form}
            onSubmit={onSubmit}
            fieldsData={loginFieldsData}
          />
        </CardContent>
        <CardFooter className="justify-center">
          <Button variant={'link'} className="tracking-tight p-0" size={'sm'}>
            Don't have an account? Register
          </Button>
        </CardFooter>
      </Card>
    </section>
  )
}
