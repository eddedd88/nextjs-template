import NextAuth from 'next-auth'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { prisma } from '@/lib/db/prisma'
import GoogleProvider from 'next-auth/providers/google'

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [GoogleProvider],
  // to run in Database mode, must setup Prisma to run in Edge mode
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
