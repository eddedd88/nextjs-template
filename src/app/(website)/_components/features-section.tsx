import {
  Settings,
  UserCheck,
  Database,
  Palette,
  ServerCog,
  Rocket,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { PageSection, PageSectionTitle } from './page-section'

interface FeatureCardProps {
  title: string
  description: string
  icon: React.ReactNode
  className?: string
}

export function FeaturesSection() {
  return (
    <PageSection>
      <PageSectionTitle className='mb-2 sm:mb-2'>
        Jumpstart Your Next Project
      </PageSectionTitle>
      <p className='text-muted-foreground text-center text-xl'>
        This Next.js template provides everything you need to build and launch
        faster.
      </p>
      <div className='mx-auto mt-6 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
        <FeatureCard
          title='Batteries Included Setup'
          description='Skip the setup fatigue. Comes pre-configured with TypeScript, Tailwind CSS, ESLint, and Prettier.'
          icon={<Settings className='size-6' />}
        />
        <FeatureCard
          title='Clerk Authentication'
          description='Complete authentication solution with login, signup, user management, and social auth providers built in.'
          icon={<UserCheck className='size-6' />}
        />
        <FeatureCard
          title='Convex Backend'
          description='Real-time database, serverless functions, and file storage - everything you need for your backend in one place.'
          icon={<Database className='size-6' />}
        />
        <FeatureCard
          title='Beautiful UI Components'
          description='Built with Shadcn UI - copy and paste beautiful, accessible components.'
          icon={<Palette className='size-6' />}
        />
        <FeatureCard
          title='Modern Data Handling'
          description='Leverages Next.js Server Actions for type-safe data mutations.'
          icon={<ServerCog className='size-6' />}
        />
        <FeatureCard
          title='Optimized for Deployment'
          description='Ready to deploy to Vercel with best practices baked in.'
          icon={<Rocket className='size-6' />}
        />
      </div>
    </PageSection>
  )
}

function FeatureCard({
  title,
  description,
  icon,
  className,
}: FeatureCardProps) {
  return (
    <div className={cn('bg-background rounded-lg border p-6', className)}>
      <div className='bg-primary/10 text-primary mb-4 flex size-12 items-center justify-center rounded-full'>
        {icon}
      </div>
      <h3 className='mb-2 text-xl font-semibold'>{title}</h3>
      <p className='text-muted-foreground'>{description}</p>
    </div>
  )
}
