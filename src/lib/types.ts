import { SafeAction } from 'next-safe-action'
import { Schema, ZodType, z } from 'zod'
import {
  addPostFormSchema,
  addUserFormSchema,
  contactFormSchema,
  loginFormSchema,
  registerUserFormSchema
} from './formSchema'

//!TODO CHECK ALL TYPES

export type TBlogPost = {
  title: string
  descr: string
  img?: string
  userId: string
  _id: string
  slug: string
  createdAt: Date
}

export type TUserPost = {
  username: string
  email: string
  img?: string
  isAdmin: boolean
  createdAt: Date
  _id: string
}

type TextInputType = {
  type: 'text' | 'email' | 'tel' | 'password' | 'textarea'
}

type SelectInputType = {
  type: 'select'
  selectVariants: string[]
}

export type FormLabel = 'post' | 'user' | 'login' | 'contact' | 'register'

export type FormInfo = {
  [key in FormLabel]: {
    fieldsData: FieldData[]
    formSchema: ZodType
    action: SafeAction<ZodType, any>
  }
}

export type FieldData = {
  fieldName: string
  defaultValue: string
  label: string
} & (TextInputType | SelectInputType)

export type CustomFormProps = {
  btnContent?: string
  label: FormLabel
  successCb?: (data: any) => void
}

export type AdminDashboardProps<T> = {
  label: 'user' | 'post'
  getItems: () => Promise<T[]>
  renderItems: (data: T[]) => React.ReactNode
}

export type AdminItemProps<T extends ZodType<any, any>> = {
  img?: string
  title: string
  href: string
  id: string
  onDelete: SafeAction<T, any>
  showTooltip?: boolean
}

export type PostData = z.infer<typeof addPostFormSchema>
export type UserData = z.infer<typeof addUserFormSchema>
export type LoginData = z.infer<typeof loginFormSchema>
export type ContactData = z.infer<typeof contactFormSchema>
export type RegisteredUserData = z.infer<typeof registerUserFormSchema>
