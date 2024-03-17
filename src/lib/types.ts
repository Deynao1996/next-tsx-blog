import { SafeAction } from 'next-safe-action'
import { ZodType, z } from 'zod'
import {
  postFormSchema,
  addUserFormSchema,
  contactFormSchema,
  loginFormSchema,
  registerUserFormSchema
} from './formSchema'
import { User } from 'next-auth'
import { JWT } from 'next-auth/jwt'
import { NextRequest } from 'next/server'

export type TBlogPost = {
  title: string
  descr: string
  img?: string
  imageHeight?: number
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
  type: 'text' | 'email' | 'tel' | 'password' | 'textarea' | 'file'
}

type SelectInputType = {
  type: 'select'
  selectVariants: string[]
}

export type FormLabel =
  | 'post'
  | 'user'
  | 'login'
  | 'contact'
  | 'register'
  | 'forgot-password'

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

export type PostData = z.infer<typeof postFormSchema>
export type UserData = z.infer<typeof addUserFormSchema>
export type LoginData = z.infer<typeof loginFormSchema>
export type ContactData = z.infer<typeof contactFormSchema>
export type RegisteredUserData = z.infer<typeof registerUserFormSchema>

type CustomUser = User & {
  isAdmin?: boolean
}

type CustomToken = JWT & {
  id?: string
  isAdmin?: boolean
}

export type CustomSession = {
  user?: CustomUser
  expires: string
}

export type TJwt = {
  token: CustomToken
  user: CustomUser
}

export type TSession = {
  session: CustomSession
  token: CustomToken
}

export type Authorized = {
  auth: CustomSession | null
  request: NextRequest
}
