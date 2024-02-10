import { FieldNameType, IInputField } from '@/types'
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getDefaultValueFromFields(
  fields: IInputField<FieldNameType>[]
) {
  return fields.reduce((acc, field) => {
    acc[field.fieldName] = field.defaultValue
    return acc
  }, {} as Record<FieldNameType, string>)
}
