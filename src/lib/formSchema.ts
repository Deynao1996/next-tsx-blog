import { z } from 'zod'

export const addUserFormSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.'
  }),
  email: z.string().email({ message: 'Invalid email address.' }),
  password: z
    .string()
    .min(4, { message: 'Password must be at least 4 characters.' }),
  img: z.string().optional(),
  isAdmin: z.enum(['no', 'yes', ''])
})

export const registerUserFormSchema = z
  .object({
    username: z.string().min(2, {
      message: 'Username must be at least 2 characters.'
    }),
    email: z.string().email({ message: 'Invalid email address.' }),
    password: z
      .string()
      .min(4, { message: 'Password must be at least 4 characters.' }),
    confirmPassword: z.string()
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword']
  })

export const addPostFormSchema = z.object({
  title: z.string().min(2, {
    message: 'Title must be at least 2 characters.'
  }),
  slug: z
    .string()
    .transform((value) => value.replace(/\s+/g, ''))
    .pipe(
      z.string().min(2, { message: 'Slug must be at least 5 characters.' })
    ),
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

export const responseSchema = z.object({
  error: z.string().optional(),
  successMessage: z.string().optional(),
  data: z.unknown().optional()
})

export const removePostSchema = z.object({
  id: z.string().min(1)
})
