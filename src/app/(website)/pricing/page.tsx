import { AnimatedHeading } from './animated-heading'

export default function ComingSoonPage() {
  return (
    <main className='from-background to-secondary/80 flex grow items-center justify-center bg-linear-to-b from-75%'>
      <AnimatedHeading />
      {/* Non animated heading */}
      {/* <h1 className='animate-[fadeIn_2s_ease-in] px-4 text-4xl sm:font-[350] leading-normal md:text-[90px] md:leading-normal'>
        Free while in beta
      </h1> */}
    </main>
  )
}
