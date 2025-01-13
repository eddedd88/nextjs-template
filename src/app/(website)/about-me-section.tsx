import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { PageSection, PageSectionTitle } from './page-section'

export function AboutMeSection() {
  return (
    <PageSection>
      <div className='mx-auto grid max-w-3xl grid-cols-1 gap-8 sm:grid-cols-3'>
        <div className='flex items-center justify-center'>
          <Image
            src='/edduran.png'
            alt='Eduardo Duran'
            width={150}
            height={150}
            className='rounded-3xl border bg-secondary'
          />
        </div>
        <div className='text-center sm:col-span-2 sm:text-left'>
          <PageSectionTitle className='mb-4 text-2xl sm:text-left sm:text-3xl'>
            Let&apos;s Build Your AI SaaS App
          </PageSectionTitle>
          <p className='mb-4 text-balance text-muted-foreground'>
            Hi! I&apos;m Ed, a seasoned developer specializing in AI-powered
            SaaS applications, based out of Toronto, Canada. With over 15 years
            of experience building B2B and enterprise solutions, I&apos;m here
            to help you bring your vision to life.
          </p>
          <div className='mt-6 flex flex-col gap-4 sm:flex-row'>
            <Button
              variant='outline'
              size='lg'
              className='flex items-center gap-2'
              asChild
            >
              <a
                href='https://www.linkedin.com/in/eduardo-duran-b7034749/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='lucide lucide-linkedin'
                >
                  <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z' />
                  <rect width='4' height='12' x='2' y='9' />
                  <circle cx='4' cy='4' r='2' />
                </svg>
                Connect on LinkedIn
              </a>
            </Button>
            <Button
              variant='outline'
              size='lg'
              className='flex items-center gap-2'
              asChild
            >
              <a
                href='https://x.com/eddedd77'
                target='_blank'
                rel='noopener noreferrer'
              >
                <svg
                  role='img'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <title>X</title>
                  <path d='M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z' />
                </svg>{' '}
                Send me a DM
              </a>
            </Button>
          </div>
        </div>
      </div>
    </PageSection>
  )
}
