import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

/**
 * Send queries to production db to manipulate the data
 */
async function main() {
  console.log('\n\tNothing to seed in "prisma/seed.ts"')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async e => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
