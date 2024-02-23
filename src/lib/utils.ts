import { FieldData } from '@/lib/types'
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import mongoose from 'mongoose'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getDefaultValueFromFields(fields: FieldData[]) {
  return fields.reduce((acc, field) => {
    acc[field.fieldName] = field.defaultValue
    return acc
  }, {} as { [key: string]: string })
}

let isConnected = false
export async function connectToDb() {
  try {
    if (isConnected) {
      console.log('Using existing connection')
      return
    }
    const db = await mongoose.connect(process.env.MONGO_SECURE_KEY)
    if (db.connections[0].readyState === 1) {
      console.log('Connection established')
      isConnected = true
    } else {
      console.log('Connection not established')
      isConnected = false
    }
  } catch (error: any) {
    console.log(error.message)
    throw new Error(error)
  }
}
