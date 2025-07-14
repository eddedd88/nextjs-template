import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { SignOutButton } from '@clerk/nextjs'
import { currentUser } from '@clerk/nextjs/server'
import { Suspense } from 'react'

export function UserNav() {
  return (
    <Suspense fallback={<UserNavSkeleton />}>
      <UserNavWithData />
    </Suspense>
  )
}

export async function UserNavWithData() {
  const user = await currentUser()
  const emailAddress = user?.primaryEmailAddress?.emailAddress
  const name = user?.fullName || user?.username || emailAddress || 'A'

  const initials = name
    .split(' ')
    .map(n => n[0])
    .join('')
    .substring(0, 2)
    .toUpperCase()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' className='relative h-8 w-8 rounded-full'>
          <Avatar className='bg-muted size-8 border'>
            {user && <AvatarImage src={user.imageUrl} alt={name} />}
            {!user?.imageUrl && <AvatarFallback>{initials}</AvatarFallback>}
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuLabel className='font-normal'>
          <div className='flex flex-col space-y-1'>
            <p className='text-sm leading-none font-medium'>{name}</p>
            <p className='text-muted-foreground text-xs leading-none'>
              {emailAddress}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className='p-0'>
          <SignOutButton>
            <Button
              type='submit'
              variant='ghost'
              className='w-full justify-start px-2'
            >
              Logout
            </Button>
          </SignOutButton>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

function UserNavSkeleton() {
  return <div className='bg-muted h-8 w-8 animate-pulse rounded-full border' />
}
