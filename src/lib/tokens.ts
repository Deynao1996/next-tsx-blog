import { v4 as uuidv4 } from 'uuid'
import { connectToDb } from './utils'
import { getVerificationTokenByUserId } from '@/data/authToken'
import { ResetPasswordToken, VerificationToken } from './models'
import { getResetTokenByEmail } from '@/data/resetToken'

export const generateVerificationToken = async (userId: string) => {
  const newToken = uuidv4()

  try {
    await connectToDb()
    const existingToken = await getVerificationTokenByUserId(userId)
    if (existingToken) {
      await VerificationToken.deleteOne({ _id: existingToken._id })
    }

    const verificationToken = new VerificationToken({
      userId,
      token: newToken
    })
    await verificationToken.save()
    return verificationToken
  } catch (error: any) {
    return null
  }
}

export const generateResetPasswordToken = async (email: string) => {
  const newToken = uuidv4()

  try {
    await connectToDb()
    const existingToken = await getResetTokenByEmail(email)
    if (existingToken) {
      await ResetPasswordToken.deleteOne({ _id: existingToken._id })
    }

    const resetPasswordToken = new ResetPasswordToken({
      email,
      token: newToken
    })
    await resetPasswordToken.save()
    return resetPasswordToken
  } catch (error: any) {
    return null
  }
}
