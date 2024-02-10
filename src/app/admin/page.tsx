'use client'

import AdminDashboard from '@/components/AdminDashboard'
import CustomForm from '@/components/CustomForm'
import { Separator } from '@/components/ui/separator'
import { getDefaultValueFromFields } from '@/lib/utils'
import { newPostFieldData, newUserFieldData } from '@/store'
import { zodResolver } from '@hookform/resolvers/zod'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'

const formSchema = z.object({
  title: z.string().min(2, {
    message: 'Title must be at least 2 characters.'
  }),
  slug: z.string().min(2, {
    message: 'Slug must be at least 2 characters.'
  }),
  image: z.string().min(5, {
    message: 'Image must be at least 5 characters.'
  }),
  descr: z
    .string()
    .min(10, {
      message: 'Description must be at least 10 characters.'
    })
    .max(160, {
      message: 'Description must not be longer than 30 characters.'
    })
})

export default function AdminPage() {
  const form = useForm<FieldValues>({
    resolver: zodResolver(formSchema),
    defaultValues: getDefaultValueFromFields(newPostFieldData)
  })

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data)
  }

  return (
    <section className="py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <AdminDashboard
          label="Post"
          renderForm={() => (
            <CustomForm
              onSubmit={onSubmit}
              form={form}
              fieldsData={newPostFieldData}
              btnContent="Add"
            />
          )}
        />
      </div>
      <Separator className="my-14" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <AdminDashboard
          label="User"
          renderForm={() => (
            <CustomForm
              onSubmit={onSubmit}
              form={form}
              fieldsData={newUserFieldData}
              btnContent="Add"
            />
          )}
        />
      </div>
    </section>
  )
}
