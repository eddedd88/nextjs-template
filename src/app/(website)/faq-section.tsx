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
    answer: 'This website demonstrates what does the landing page look like.',
  },
  {
    question: 'How do I get started with this template?',
    answer: 'To get started, follow the github link and clone the repository.',
  },
  {
    question: 'What technologies are used in this template?',
    answer:
      'This template uses Next.js, Shadcn, Prisma, Google Vertex AI, and the ai sdk',
  },
  {
    question: 'Can I use this template for my own projects?',
    answer:
      'Yes, you are free to use this template for your own projects. You can modify it as needed and deploy it to your own hosting provider.',
  },
  {
    question: 'What license is this template released under?',
    answer:
      'This template is released under the MIT license. You are free to use it for commercial and non-commercial projects.',
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
