import { Page, PageBackButton, PageTitle } from '@/components/page'
import { Typography } from '@/components/ui/typography'

export default function DatabaseSetupPage() {
  return (
    <Page>
      <PageBackButton />
      <PageTitle>How to Configure Your Database URL</PageTitle>

      <ol className='list-decimal space-y-6 pl-4'>
        <li>
          Locate your{' '}
          <code className='rounded bg-gray-100 px-2 py-1'>.env</code> file in
          the root of your project
        </li>

        <li>
          Add or update your DATABASE_URL and DATABASE_DIRECT_URL environment
          variable:
          <Typography variant='codeBlock' className='mt-2'>
            {/* <pre className="bg-gray-100 p-3 rounded-md mt-2 overflow-x-auto"> */}
            DATABASE_URL=
            <br />
            DATABASE_DIRECT_URL=
          </Typography>
        </li>

        <li>
          Run Prisma Generate to update your database client:
          <Typography variant='codeBlock' className='mt-2'>
            pnpm generatedb
          </Typography>
        </li>

        <li>
          Push your schema changes to the database:
          <Typography variant='codeBlock' className='mt-2'>
            pnpm pushdb
          </Typography>
        </li>

        <li>
          <Typography className='mt-2'>
            Your database is now configured and ready to use!
            <br />
            To learn more about Prisma, visit the{' '}
            <a
              href='https://www.prisma.io/docs/getting-started'
              className='text-blue-500 hover:underline'
              target='_blank'
              rel='noopener noreferrer'
            >
              official Prisma documentation
            </a>
            .
          </Typography>
        </li>
      </ol>
    </Page>
  )
}
