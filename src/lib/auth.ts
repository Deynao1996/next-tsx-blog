import NextAuth, { Profile } from 'next-auth'
import GitHub from 'next-auth/providers/github'
import CredentialProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'
import { connectToDb } from './utils'
import { User } from './models'
import bcrypt from 'bcrypt'
import { loginFormSchema } from './formSchema'
import { authConfig } from './auth.config'

async function credentialLogin(credentials: Partial<Record<string, unknown>>) {
  const parsedCredentials = loginFormSchema.safeParse(credentials)

  try {
    if (parsedCredentials.success) {
      const { username, password } = parsedCredentials.data
      connectToDb()
      const user = await User.findOne({ username })
      if (!user) return false

      const isPasswordCorrect = await bcrypt.compare(
        password as string,
        user.password
      )
      if (!isPasswordCorrect) return false

      return user
    }
  } catch (error) {
    console.log(error)
    throw new Error('Failed to login!')
  }
}

async function githubCallback(profile?: Profile) {
  if (!profile) return false
  connectToDb()
  try {
    const user = await User.findOne({ email: profile.email })
    if (!user) {
      const newUser = new User({
        username: profile.name,
        email: profile.email,
        img: profile.avatar_url,
        isVerified: true
      })
      await newUser.save()
    }
  } catch (error) {
    console.log(error)
    return false
  }
}

async function googleCallback(profile?: Profile) {
  if (!profile) return false
  connectToDb()
  try {
    const user = await User.findOne({ email: profile.email })
    if (!user) {
      const newUser = new User({
        username: profile.name,
        email: profile.email,
        img: profile.picture,
        isVerified: true
      })
      await newUser.save()
    }
  } catch (error) {
    console.log(error)
    return false
  }
}

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut
} = NextAuth({
  ...authConfig,
  providers: [
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    CredentialProvider({
      async authorize(credentials) {
        try {
          const user = await credentialLogin(credentials)
          if (!user) return null
          const { username, email, img, isAdmin, _id } = user
          return {
            name: username,
            email,
            image: img,
            isAdmin,
            id: _id.toString()
          }
        } catch (error) {
          throw new Error('Failed to login!')
        }
      }
    })
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account?.provider === 'credentials') {
        if (!user) return false
        try {
          await connectToDb()
          const existingUser = await User.findOne({ email: user?.email })

          if (!existingUser?.isVerified) return false
        } catch (error) {
          return false
        }
      }

      if (account?.provider === 'github') await githubCallback(profile)
      if (account?.provider === 'google') await googleCallback(profile)
      return true
    },
    ...authConfig.callbacks
  }
})
