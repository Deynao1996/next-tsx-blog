import { TJwt, TSession, Authorized } from './types'

export const authConfig = {
  pages: {
    signIn: '/auth/login'
  },
  providers: [],
  callbacks: {
    async jwt({ token, user }: TJwt) {
      if (user) {
        token.id = user.id
        token.isAdmin = user.isAdmin
      }
      return token
    },
    async session({ session, token }: TSession) {
      if (session.user) {
        session.user.id = token.id
        session.user.isAdmin = token.isAdmin
      }

      return session
    },
    authorized({ auth, request }: Authorized) {
      const user = auth?.user
      const isOnAdminPage = request.nextUrl.pathname.startsWith('/admin')
      const isOnBlogPage = request.nextUrl.pathname.startsWith('/blog')
      const isOnLoginPage = request.nextUrl.pathname.startsWith('/auth/login')

      //Redirect from dashboard
      if (isOnAdminPage && !user?.isAdmin) return false
      //Redirect from blog posts
      if (isOnBlogPage && !user) return false
      //Redirect from login
      if (isOnLoginPage && user) {
        return Response.redirect(new URL('/', request.url))
      }

      return true
    }
  }
}
