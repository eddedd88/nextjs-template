import { ZapIcon, SendIcon, SearchIcon } from 'lucide-react'
import { ReactNode } from 'react'

export function HowItWorksSection() {
  return (
    <section className='container py-16 sm:py-24'>
      <h2 className='mb-12 text-center text-3xl sm:text-4xl'>How It Works</h2>
      <div className='grid gap-12 md:grid-cols-3'>
        <Step
          icon={<SearchIcon />}
          title={'Discover'}
          description='Find the perfect solution for your needs from our curated selection.'
        />
        <Step
          icon={<ZapIcon />}
          title={'Choose'}
          description='Select the option that best fits your requirements and goals.'
        />
        <Step
          icon={<SendIcon />}
          title={'Implement'}
          description='Easily integrate our solution into your workflow and see immediate results.'
        />
      </div>
      {/* </div> */}
    </section>
  )
}

function Step(props: { icon: ReactNode; title: string; description: string }) {
  return (
    <div className='container flex flex-col items-center text-center'>
      <div className='mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent'>
        {props.icon}
      </div>
      <h3 className='mb-2 text-2xl'>{props.title}</h3>
      <p className='text-balance text-lg text-muted-foreground'>
        {props.description}
      </p>
    </div>
  )
}
