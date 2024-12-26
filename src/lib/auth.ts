import NextAuth from 'next-auth'
import { PrismaAdapter } from '@auth/prisma-adapter'
import prisma from '@/lib/db/prisma'
import GoogleProvider from 'next-auth/providers/google'

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [GoogleProvider],
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    // required in JWT mode
    jwt({ token, user }) {
      if (user) {
        token.id = user.id
      }
      return token
    },
    async session({ session, user }) {
      session.user.id = user.id
      return session
    },
  },
})
