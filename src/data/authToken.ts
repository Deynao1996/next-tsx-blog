import { VerificationToken } from '@/lib/models'
import { connectToDb } from '@/lib/utils'

export const getVerificationTokenByUserId = async (userId: string) => {
  try {
    connectToDb()
    const verificationToken = await VerificationToken.findOne({ userId })
    return verificationToken
  } catch (error: any) {
    return null
  }
}

export const getVerificationTokenByToken = async (token: string) => {
  try {
    connectToDb()
    const verificationToken = await VerificationToken.findOne({ token })
    return verificationToken
  } catch (error: any) {
    return null
  }
}
