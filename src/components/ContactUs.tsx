'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'
import { getDefaultValueFromFields } from '@/lib/utils'
import { contactFieldsData } from '@/store'
import CustomForm from './CustomForm'

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
)

const formSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.'
  }),
  email: z.string().email({ message: 'Invalid email address.' }),
  phone: z.string().refine(
    (val) => {
      return val === '' || phoneRegex.test(val)
    },
    { message: 'Invalid Number!' }
  ),
  message: z
    .string()
    .min(10, {
      message: 'Message must be at least 10 characters.'
    })
    .max(160, {
      message: 'Message must not be longer than 30 characters.'
    })
})

export function ContactUs() {
  const form = useForm<FieldValues>({
    resolver: zodResolver(formSchema),
    defaultValues: getDefaultValueFromFields(contactFieldsData)
  })

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data)
  }

  return (
    <CustomForm
      form={form}
      onSubmit={onSubmit}
      fieldsData={contactFieldsData}
      isSpacing
    />
  )
}
