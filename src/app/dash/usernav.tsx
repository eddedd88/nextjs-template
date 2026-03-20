import { Suspense } from 'react'
import { UserRoundIcon } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Skeleton } from '@/components/ui/skeleton'

export function UserNav() {
  return (
    <Suspense fallback={<Skeleton className='size-8 rounded-full' />}>
      <UserNavContent />
    </Suspense>
  )
}

async function UserNavContent() {
  const user = await currentUser()

  if (!user) {
    return (
      <Button
        className='size-8 rounded-full border text-muted-foreground'
        variant='secondary'
      >
        <UserRoundIcon />
      </Button>
    )
  }

  const name = user.fullName?.trim() || user.username || 'User'
  const email = user.primaryEmailAddress?.emailAddress || ''
  return <UserNavMenu email={email} imageUrl={user.imageUrl} name={name} />
}

function UserNavMenu({
  email,
  imageUrl,
  name,
}: {
  email: string
  imageUrl: string | null
  name: string
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' className='size-8 rounded-full'>
          <Avatar>
            {imageUrl ? <AvatarImage src={imageUrl} alt={name} /> : null}
            <AvatarFallback className='border'>
              <UserRoundIcon className='size-4' />
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-fit' align='end'>
        <DropdownMenuLabel className='flex flex-col'>
          <span className='text-sm font-medium text-foreground'>{name}</span>
          <span className='text-xs text-muted-foreground'>{email}</span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

async function currentUser() {
  console.log('Fetching current user [not implemented]')
  await new Promise(resolve => setTimeout(resolve, 1000))
  return {
    id: '123',
    fullName: 'John Doe',
    username: 'johndoe',
    imageUrl: '',
    primaryEmailAddress: {
      emailAddress: 'johndoe@example.com',
    },
  }
}
