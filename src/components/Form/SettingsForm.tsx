'use client'

import { userSettingsFieldData } from '@/store'
import { Form, FormControl, FormField, FormItem, FormMessage } from '../ui/form'
import { SubmitBtn } from '../ui/submitBtn'
import { Input } from '../ui/input'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'
import { updateUserSchema } from '@/lib/formSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useHandleAction } from '@/hooks/useHandleAction'
import { changeUser } from '@/lib/actions'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { useSession } from 'next-auth/react'

export default function SettingsForm() {
  const { data, update } = useSession()
  const user = data?.user

  const form = useForm<z.infer<typeof updateUserSchema>>({
    resolver: zodResolver(updateUserSchema),
    defaultValues: {
      username: user?.name || undefined,
      email: user?.email || undefined,
      password: undefined,
      newPassword: undefined
    }
  })
  const { execute, status } = useHandleAction(changeUser, form.reset, () =>
    update()
  )

  const onSubmit: SubmitHandler<z.infer<typeof updateUserSchema>> = async (
    data
  ) => {
    execute(data)
  }

  return (
    <Card>
      <CardHeader className="capitalize space-y-8">
        <CardTitle className="scroll-m-20 text-xl font-semibold tracking-tight text-center">
          User Settings
        </CardTitle>
        <div className="flex justify-center items-center">
          <Avatar className="w-20 h-20">
            <AvatarImage src={user?.image ?? ''} className="object-cover" />
            <AvatarFallback>{user?.name?.slice(0, 1)}</AvatarFallback>
          </Avatar>
        </div>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-1">
            {userSettingsFieldData.map((item) => (
              <FormField
                key={item.fieldName}
                control={form.control}
                name={item.fieldName as keyof z.infer<typeof updateUserSchema>}
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
            <SubmitBtn disabled={status === 'executing'} className="capitalize">
              Save
            </SubmitBtn>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
