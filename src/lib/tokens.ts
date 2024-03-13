import { v4 as uuidv4 } from 'uuid'
import { connectToDb } from './utils'
import { getVerificationTokenByUserId } from '@/data/authToken'
import { VerificationToken } from './models'

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
