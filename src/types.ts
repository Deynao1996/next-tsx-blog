import { FieldValues, SubmitHandler, UseFormReturn } from 'react-hook-form'

export interface IInputField<T> {
  fieldName: T
  defaultValue: string
  label: string
  type: string
  variants?: string[]
}

export type ContactFieldNameType = 'username' | 'email' | 'phone' | 'message'
export type LoginFieldNameType = 'username' | 'password'
export type NewPostFieldNameType = 'title' | 'descr' | 'image' | 'slug'
export type NewUserFieldNameType =
  | 'email'
  | 'username'
  | 'password'
  | 'isAdmin'
  | 'image'

export type FieldNameType =
  | ContactFieldNameType
  | LoginFieldNameType
  | NewPostFieldNameType
  | NewUserFieldNameType

export interface IFormComponentProps {
  onSubmit: SubmitHandler<FieldValues>
  form: UseFormReturn<FieldValues, FieldNameType>
  fieldsData: IInputField<FieldNameType>[]
  isSpacing?: boolean
  btnContent?: string
}

export type BlogPostType = {
  title: string
  descr: string
  img?: string
  userId: string
  slug: string
}

export type UserPostType = {
  username: string
  email: string
  img?: string
  password: string
  slug: string
  isAdmin: boolean
}
