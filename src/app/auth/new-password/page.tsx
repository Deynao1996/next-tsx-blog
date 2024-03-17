import { Metadata } from 'next'
import NewPasswordForm from '@/components/Form/NewPasswordForm'

export const metadata: Metadata = {
  title: 'New Password Page',
  description: 'Generated by create next app'
}

export default function NewPasswordPage() {
  return (
    <section className="w-full sm:w-[450px] mx-auto">
      <NewPasswordForm />
    </section>
  )
}