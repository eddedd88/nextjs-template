import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GoogleProvider],
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/login',
  },
  callbacks: {
    session({ session, token }) {
      if (!token.sub) {
        throw new Error('No user id in token')
      }
      session.user.id = token.sub
      return session
    },
    authorized: async ({ auth }) => !!auth,
  },
})
