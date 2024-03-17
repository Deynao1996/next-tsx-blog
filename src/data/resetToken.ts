import { ResetPasswordToken } from '@/lib/models'
import { connectToDb } from '@/lib/utils'

export const getResetTokenByToken = async (token: string) => {
  try {
    connectToDb()
    const resetToken = await ResetPasswordToken.findOne({ token })
    return resetToken
  } catch (error: any) {
    return null
  }
}

export const getResetTokenByEmail = async (email: string) => {
  try {
    connectToDb()
    const resetToken = await ResetPasswordToken.findOne({ email })
    return resetToken
  } catch (error: any) {
    return null
  }
}
