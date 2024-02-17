import { FieldValues, SubmitHandler, UseFormReturn } from 'react-hook-form'
import { ZodType, z } from 'zod'

//!TODO CHECK ALL TYPES

export type TBlogPost = {
  title: string
  descr: string
  img?: string
  userId: string
  slug: string
  createdAt: Date
}

export type TUserPost = {
  username: string
  email: string
  img?: string
  password: string
  slug: string
  isAdmin: boolean
  createdAt: Date
}

type TextInputType = {
  type: 'text' | 'email' | 'tel' | 'password' | 'textarea'
}

type SelectInputType = {
  type: 'select'
  selectVariants: string[]
}

export type FieldData = {
  fieldName: string
  defaultValue: string
  label: string
} & (TextInputType | SelectInputType)

export type CustomFormProps = {
  btnContent?: string
  fieldsData: FieldData[]
  formSchema: ZodType
}
