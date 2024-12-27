import Link from 'next/link'
import { Button, buttonVariants } from '@/components/ui/button'
import { VariantProps } from 'class-variance-authority'
import { FlaskConicalIcon, MenuIcon } from 'lucide-react'
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'

export function NavBar() {
  return (
    <nav className='flex items-center justify-between gap-4 py-4'>
      <Link className='flex items-center gap-2' href='/'>
        <FlaskConicalIcon className='h-8 w-8 rotate-[30deg] stroke-1' />
        Nitro
      </Link>

      {/* Links in bigger screens */}
      <div className='hidden gap-4 sm:flex sm:gap-6'>
        <NavLinkItem href='/' label='Features' />
        <NavLinkItem href='/' label='Pricing' />
        <NavLinkItem href='/' label='Contact' variant='outline' />
      </div>

      {/* Links in smaller screens */}
      <div className='sm:hidden'>
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
              <MobileNavLinkItem href='/' label='Features' />
              <MobileNavLinkItem href='/' label='Pricing' />
              <MobileNavLinkItem href='/' label='Contact' />
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </nav>
  )
}

function MobileNavLinkItem({ href, label }: { href: string; label: string }) {
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
  href: string
  label: string
}

function NavLinkItem({ href, label, variant = 'ghost' }: NavLinkItemProps) {
  return (
    <Button variant={variant} asChild>
      <Link href={href}>{label}</Link>
    </Button>
  )
}
