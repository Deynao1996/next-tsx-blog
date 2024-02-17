import { z } from 'zod'

const selectValueToBoolean = (value: string) => {
  switch (value) {
    case 'yes':
      return true
    case 'no':
      return false
    default:
      return false
  }
}

export const addUserFormSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.'
  }),
  email: z.string().email({ message: 'Invalid email address.' }),
  password: z
    .string()
    .min(4, { message: 'Password must be at least 4 characters.' }),
  img: z.string().optional(),
  isAdmin: z.string().transform(selectValueToBoolean)
})

export const addPostFormSchema = z.object({
  title: z.string().min(2, {
    message: 'Title must be at least 2 characters.'
  }),
  slug: z.string().min(2, {
    message: 'Slug must be at least 2 characters.'
  }),
  userId: z.string().min(2, {
    message: 'UserId must be at least 5 characters.'
  }),
  img: z.string().optional(),
  descr: z
    .string()
    .min(10, {
      message: 'Description must be at least 10 characters.'
    })
    .max(160, {
      message: 'Description must not be longer than 30 characters.'
    })
})

export const loginFormSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.'
  }),
  password: z
    .string()
    .min(4, { message: 'Password must be at least 4 characters.' })
})

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
)

export const contactFormSchema = z.object({
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
