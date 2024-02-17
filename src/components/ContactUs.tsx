'use client'

import { contactFieldsData } from '@/store'
import CustomForm from './CustomForm'
import { contactFormSchema } from '@/lib/formSchema'

export function ContactUs() {
  return (
    <CustomForm formSchema={contactFormSchema} fieldsData={contactFieldsData} />
  )
}
