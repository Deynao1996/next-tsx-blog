import { addPost, addUser, contactUs, login, registerUser } from './lib/actions'
import {
  postFormSchema,
  addUserFormSchema,
  contactFormSchema,
  loginFormSchema,
  registerUserFormSchema
} from './lib/formSchema'
import { FieldData, FormInfo } from './lib/types'

export const routes = [
  { label: 'Homepage', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Blog', href: '/blog' }
] as const

export const loginFieldsData: FieldData[] = [
  {
    fieldName: 'username',
    defaultValue: '',
    label: 'Username',
    type: 'text'
  },
  {
    fieldName: 'password',
    defaultValue: '',
    label: 'Password',
    type: 'password'
  }
] as const

export const contactFieldsData: FieldData[] = [
  { fieldName: 'username', defaultValue: '', label: 'Username', type: 'text' },
  {
    fieldName: 'email',
    defaultValue: '',
    label: 'Email',
    type: 'email'
  },
  {
    fieldName: 'phone',
    defaultValue: '',
    label: 'Phone Number (Optional)',
    type: 'tel'
  },
  {
    fieldName: 'message',
    defaultValue: '',
    label: 'Message',
    type: 'textarea'
  }
] as const

export const newPostFieldData: FieldData[] = [
  { fieldName: 'title', defaultValue: '', label: 'Title', type: 'text' },
  {
    fieldName: 'slug',
    defaultValue: '',
    label: 'Slug',
    type: 'text'
  },
  {
    fieldName: 'userId',
    defaultValue: '',
    label: 'UserID',
    type: 'text'
  },
  {
    fieldName: 'img',
    defaultValue: '',
    label: 'Image',
    type: 'text'
  },
  {
    fieldName: 'descr',
    defaultValue: '',
    label: 'Description',
    type: 'textarea'
  }
] as const

export const newUserFieldData: FieldData[] = [
  { fieldName: 'username', defaultValue: '', label: 'Username', type: 'text' },
  {
    fieldName: 'email',
    defaultValue: '',
    label: 'Email',
    type: 'email'
  },
  {
    fieldName: 'password',
    defaultValue: '',
    label: 'Password',
    type: 'text'
  },
  {
    fieldName: 'img',
    defaultValue: '',
    label: 'Image',
    type: 'text'
  },
  {
    fieldName: 'isAdmin',
    defaultValue: '',
    label: 'isAdmin',
    type: 'select',
    selectVariants: ['no', 'yes']
  }
] as const

export const registerUserFieldData: FieldData[] = [
  { fieldName: 'username', defaultValue: '', label: 'Username', type: 'text' },
  {
    fieldName: 'email',
    defaultValue: '',
    label: 'Email',
    type: 'email'
  },
  {
    fieldName: 'password',
    defaultValue: '',
    label: 'Password',
    type: 'password'
  },
  {
    fieldName: 'confirmPassword',
    defaultValue: '',
    label: 'Confirm Password',
    type: 'password'
  }
] as const

export const formInfo: FormInfo = {
  post: {
    fieldsData: newPostFieldData,
    formSchema: postFormSchema,
    action: addPost
  },
  user: {
    fieldsData: newUserFieldData,
    formSchema: addUserFormSchema,
    action: addUser
  },
  login: {
    fieldsData: loginFieldsData,
    formSchema: loginFormSchema,
    action: login
  },
  contact: {
    fieldsData: contactFieldsData,
    formSchema: contactFormSchema,
    action: contactUs
  },
  register: {
    fieldsData: registerUserFieldData,
    formSchema: registerUserFormSchema,
    action: registerUser
  }
} as const
