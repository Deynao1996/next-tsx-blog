import { FieldData } from './lib/types'

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
]

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
]

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
]

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
]
