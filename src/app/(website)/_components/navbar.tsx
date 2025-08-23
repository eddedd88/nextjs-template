import Link from 'next/link'
import { Button, buttonVariants } from '@/components/ui/button'
import { VariantProps } from 'class-variance-authority'
import { MenuIcon } from 'lucide-react'
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { COMPANY_NAME } from '@/constants'
import { Logo } from '@/components/logo'
import type { Route } from 'next'

export function NavBar() {
  return (
    <nav className='flex items-center justify-between gap-4 py-4'>
      <Link className='flex items-center gap-4' href='/'>
        <Logo />
        {COMPANY_NAME}
      </Link>

      {/* Links in bigger screens */}
      <div className='hidden gap-2 sm:flex sm:items-center'>
        <NavLinkItem href='/coming-soon' label='Features' />
        <NavLinkItem href='/pricing' label='Pricing' />
        <NavLinkItem href='/coming-soon' label='Contact' variant='outline' />
        <NavLinkItem href='/login' label='Login' variant='outline' />
        <GithubButton />
      </div>

      {/* Links in smaller screens */}
      <div className='flex items-center gap-4 sm:hidden'>
        <GithubButton />
        <NavLinkItem href='/login' label='Login' variant='outline' />
        <Drawer>
          <DrawerTrigger className='flex items-center'>
            <MenuIcon />
            <span className='sr-only'>Toggle Menu</span>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader className='sr-only'>
              <DrawerTitle>Menu</DrawerTitle>
              <DrawerDescription>Links to navigate the site</DrawerDescription>
            </DrawerHeader>
            <div className='flex flex-col items-start pb-6'>
              <MobileNavLinkItem href='/coming-soon' label='Features' />
              <MobileNavLinkItem href='/pricing' label='Pricing' />
              <MobileNavLinkItem href='/coming-soon' label='Contact' />
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </nav>
  )
}

function MobileNavLinkItem({ href, label }: { href: Route; label: string }) {
  return (
    <Button
      className='w-full justify-start px-6 py-8 text-lg'
      variant='ghost'
      asChild
    >
      <Link href={href}>{label}</Link>
    </Button>
  )
}

interface NavLinkItemProps extends VariantProps<typeof buttonVariants> {
  href: Route
  label: string
}

function NavLinkItem({ href, label, variant = 'ghost' }: NavLinkItemProps) {
  return (
    <Button variant={variant} size='sm' asChild>
      <Link href={href}>{label}</Link>
    </Button>
  )
}

function GithubButton() {
  return (
    <Button variant='ghost' className='hover:bg-primary/5' size='icon' asChild>
      <a href='https://github.com/eddedd88/nextjs-template' target='_blank'>
        <svg role='img' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
          <title>GitHub</title>
          <path d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12' />
        </svg>
      </a>
    </Button>
  )
}
