import { AnimatedHeading } from './animated-heading'

export default function ComingSoonPage() {
  return (
    <div className='flex min-h-[calc(100vh-196px)] items-center justify-center bg-gradient-to-b from-background from-75% to-secondary/80 sm:min-h-[calc(100vh-120px)]'>
      <AnimatedHeading />
      {/* Non animated heading */}
      {/* <h1 className='animate-[fadeIn_2s_ease-in] px-4 text-4xl font-[350] leading-normal md:text-[90px] md:leading-normal'>
        Free while in beta
      </h1> */}
    </div>
  )
}
