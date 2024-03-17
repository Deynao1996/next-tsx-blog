'use client'

import Verify from '../Wrap/Verify'
import { Button } from '../ui/button'
import Link from 'next/link'
import { CardFooter } from '../ui/card'
import { useSearchParams } from 'next/navigation'
import { newPassword } from '@/lib/actions'
import { useHandleAction } from '@/hooks/useHandleAction'
import { z } from 'zod'
import { Form, FormControl, FormField, FormItem, FormMessage } from '../ui/form'
import { SubmitBtn } from '../ui/submitBtn'
import { SubmitHandler, useForm } from 'react-hook-form'
import { newPasswordFormSchema } from '@/lib/formSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '../ui/input'
import { newPasswordData } from '@/store'

export default function NewPasswordForm() {
  const searchParams = useSearchParams()
  const tokenResult = z.string().safeParse(searchParams.get('token') || '')
  const token = tokenResult.success ? tokenResult.data : undefined

  const form = useForm<z.infer<typeof newPasswordFormSchema>>({
    resolver: zodResolver(newPasswordFormSchema),
    defaultValues: {
      password: '',
      token
    }
  })
  const { execute, status } = useHandleAction(newPassword, form.reset)

  const onSubmit: SubmitHandler<z.infer<typeof newPasswordFormSchema>> = async (
    data
  ) => {
    execute(data)
  }

  return (
    <Verify
      description="Enter a new password"
      renderFooter={() => (
        <CardFooter className="justify-center">
          <Button
            variant={'link'}
            className="tracking-tight p-0 text-accent-foreground"
            size={'sm'}
            asChild
          >
            <Link href={'/auth/login'}>Back to login</Link>
          </Button>
        </CardFooter>
      )}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-1">
          {newPasswordData.map((item) => (
            <FormField
              key={item.fieldName}
              control={form.control}
              name={
                item.fieldName as keyof z.infer<typeof newPasswordFormSchema>
              }
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder={item.label}
                      className="h-12"
                      type={item.type}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="h-4 p-0 !mt-0.5 text-[0.7rem]">
                    {' '}
                  </FormMessage>
                </FormItem>
              )}
            />
          ))}
          <input type="hidden" {...form.register('token')} />
          <SubmitBtn disabled={status === 'executing'} className="capitalize">
            Reset Password
          </SubmitBtn>
        </form>
      </Form>
    </Verify>
  )
}
