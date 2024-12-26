import { env } from '@/env'
import { PrismaClient } from '@prisma/client'

const createPrismaClient = () => {
  return new PrismaClient({
    log: env.NODE_ENV === 'development' ? ['error', 'warn'] : ['error'],
  })
}

declare const globalThis: {
  prismaGlobal: ReturnType<typeof createPrismaClient>
} & typeof global

export const prisma = globalThis.prismaGlobal ?? createPrismaClient()

if (env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma
