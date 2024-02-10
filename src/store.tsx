import {
  ContactFieldNameType,
  IInputField,
  LoginFieldNameType,
  NewPostFieldNameType,
  NewUserFieldNameType
} from './types'

export const loginFieldsData: IInputField<LoginFieldNameType>[] = [
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

export const contactFieldsData: IInputField<ContactFieldNameType>[] = [
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

export const newPostFieldData: IInputField<NewPostFieldNameType>[] = [
  { fieldName: 'title', defaultValue: '', label: 'Title', type: 'text' },
  {
    fieldName: 'slug',
    defaultValue: '',
    label: 'Slug',
    type: 'text'
  },
  {
    fieldName: 'image',
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

export const newUserFieldData: IInputField<NewUserFieldNameType>[] = [
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
    fieldName: 'image',
    defaultValue: '',
    label: 'Image',
    type: 'text'
  },
  {
    fieldName: 'isAdmin',
    defaultValue: '',
    label: 'isAdmin',
    type: 'select',
    variants: ['no', 'yes']
  }
]
