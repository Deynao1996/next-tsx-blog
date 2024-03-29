import { User } from './models'
import { TJwt, TSession, Authorized } from './types'
import { connectToDb } from './utils'

export const authConfig = {
  pages: {
    signIn: '/auth/login'
  },
  providers: [],
  callbacks: {
    async jwt({ token, user }: TJwt) {
      if (!token.sub) return token
      // if (!user) return token
      const userId = token.sub
      try {
        await connectToDb()
        const existingUser = await User.findOne({ _id: userId })

        token.email = existingUser.email
        token.name = existingUser.username
        token.isAdmin = existingUser.isAdmin
        token.id = existingUser._id.toString()
        token.isOauth = !existingUser?.password

        return token
      } catch (error: any) {
        return token
        // throw new Error(error)
      }
    },
    async session({ session, token }: TSession) {
      if (session.user) {
        session.user.id = token.id
        session.user.isAdmin = token.isAdmin
        session.user.isOauth = token.isOauth
        session.user.email = token.email
        session.user.name = token.name
      }
      return session
    },
    authorized({ auth, request }: Authorized) {
      const user = auth?.user
      const isOnAdminPage = request.nextUrl.pathname.startsWith('/admin')
      const isOnBlogPage = request.nextUrl.pathname.startsWith('/blog')
      const isOnLoginPage = request.nextUrl.pathname.startsWith('/auth/login')
      const isOnUserPage = request.nextUrl.pathname.startsWith('/user')

      //Redirect from dashboard
      if (isOnAdminPage && !user?.isAdmin) return false
      //Redirect from blog posts
      if (isOnBlogPage && !user) return false
      //Redirect from user page
      if (isOnUserPage && !user) return false
      //Redirect from login
      if (isOnLoginPage && user) {
        return Response.redirect(new URL('/', request.url))
      }

      return true
    }
  }
}
