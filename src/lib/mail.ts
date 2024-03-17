import ResetPassword from '@/emails/ResetPassword'
import VerifyEmail from '@/emails/VerifyEmail'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendResetPasswordEmail = async (
  email: string,
  resetPasswordToken: string
) => {
  // * For development
  const resetLink = `${process.env.BASE_URL}/auth/new-password?token=${resetPasswordToken}`

  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: email,
    subject: 'Reset your password',
    react: ResetPassword({ email, resetPasswordLink: resetLink })
  })

  console.log('Reset password sent')
}

export const sendVerificationEmail = async (
  email: string,
  verificationToken: string
) => {
  // * For development
  const confirmLink = `${process.env.BASE_URL}/auth/verify?token=${verificationToken}`

  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: email,
    subject: 'Verify your email',
    react: VerifyEmail({ email, verifyLink: confirmLink })
  })

  console.log('Email verification sent')
}
