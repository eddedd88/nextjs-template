import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: 'What is the purpose of this website?',
    answer:
      'This website is a template for a Next.js website with Tailwind CSS and TypeScript. It includes a few example components and pages to help you get started with your own project.',
  },
  {
    question: 'How do I get started with this template?',
    answer:
      'To get started, clone the repository and install the dependencies. You can then run the development server to see the website in action.',
  },
  {
    question: 'What technologies are used in this template?',
    answer:
      'This template uses Next.js for the frontend, Tailwind CSS for styling, and TypeScript for type safety. It also includes ESLint and Prettier for code formatting.',
  },
  {
    question: 'Can I use this template for my own projects?',
    answer:
      'Yes, you are free to use this template for your own projects. You can modify it as needed and deploy it to your own hosting provider.',
  },
  {
    question: 'What license is this template released under?',
    answer:
      'This template is released under the MIT license. You are free to use it for commercial and non-commercial projects, with attribution to the original author.',
  },
]

export function FAQSection() {
  return (
    <section className='container max-w-3xl py-16 sm:py-24'>
      <h2 className='mb-12 text-center text-3xl leading-normal sm:text-4xl'>
        Frequently Asked Questions
      </h2>
      <Accordion type='multiple'>
        {faqData.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent className='text-muted-foreground'>
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
