import VerifyEmail from '@/emails/VerifyEmail'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

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

  console.log('Email sent')
}
