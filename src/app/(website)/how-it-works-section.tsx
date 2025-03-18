import { ZapIcon, SendIcon, SearchIcon } from 'lucide-react'
import { ReactNode } from 'react'

export function HowItWorksSection() {
  return (
    <section className='container py-16 sm:py-24'>
      <h2 className='mb-12 text-center text-3xl sm:text-4xl'>How It Works</h2>
      <div className='grid gap-12 md:grid-cols-3'>
        <Step
          icon={<SearchIcon />}
          title={'Clone Repo'}
          description='Get started by cloning our repository and running it locally.'
        />
        <Step
          icon={<ZapIcon />}
          title={'Customize'}
          description='Customize the copy of the landing page to fit your needs.'
        />
        <Step
          icon={<SendIcon />}
          title={'Deploy'}
          description='Deploy your landing page and start collecting leads.'
        />
      </div>
      {/* </div> */}
    </section>
  )
}

function Step(props: { icon: ReactNode; title: string; description: string }) {
  return (
    <div className='container flex flex-col items-center text-center'>
      <div className='bg-accent mb-4 flex h-16 w-16 items-center justify-center rounded-full'>
        {props.icon}
      </div>
      <h3 className='mb-2 text-2xl'>{props.title}</h3>
      <p className='text-muted-foreground text-lg text-balance'>
        {props.description}
      </p>
    </div>
  )
}
