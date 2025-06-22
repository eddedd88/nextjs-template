import { Page, PageBackButton, PageTitle } from '@/components/page'
import { Typography } from '@/components/ui/typography'

export default function DatabaseSetupPage() {
  return (
    <Page>
      <PageBackButton />
      <PageTitle>How to Configure Your Database</PageTitle>

      <div className='space-y-6'>
        <Typography>
          This template doesn't include a specific database setup, giving you
          the flexibility to choose your preferred data storage solution.
        </Typography>

        <div>
          <Typography className='mb-3 text-lg font-semibold'>
            Popular Database Options:
          </Typography>
          <ul className='list-disc space-y-2 pl-6'>
            <li>
              <strong>Prisma + PostgreSQL:</strong> Add Prisma ORM for type-safe
              database operations
            </li>
            <li>
              <strong>Drizzle ORM:</strong> Lightweight TypeScript ORM with
              excellent performance
            </li>
            <li>
              <strong>Supabase:</strong> PostgreSQL with built-in auth and
              real-time features
            </li>
            <li>
              <strong>PlanetScale:</strong> Serverless MySQL platform with
              branching
            </li>
            <li>
              <strong>MongoDB:</strong> NoSQL database with Mongoose ODM
            </li>
            <li>
              <strong>SQLite:</strong> Lightweight file-based database for
              development
            </li>
          </ul>
        </div>

        <div>
          <Typography className='mb-3 text-lg font-semibold'>
            Next Steps:
          </Typography>
          <ol className='list-decimal space-y-2 pl-6'>
            <li>Choose your preferred database solution</li>
            <li>Install the necessary packages and dependencies</li>
            <li>Set up your database connection and configuration</li>
            <li>
              Update the placeholder database actions in your components (like
              waitlist and feedback forms)
            </li>
          </ol>
        </div>
      </div>
    </Page>
  )
}
