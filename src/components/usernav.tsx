import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu'
import { Button } from './ui/button'
import { auth, signOut } from '@/lib/auth'

export async function UserNav() {
  const session = await auth()
  const name = session?.user?.name || session?.user?.email || 'User'
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
          <Avatar className='h-8 w-8'>
            {session?.user?.image && (
              <AvatarImage src={session.user.image} alt={name} />
            )}
            <AvatarFallback className='border'>{initials}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuLabel className='font-normal'>
          <div className='flex flex-col space-y-1'>
            <p className='text-sm leading-none font-medium'>{name}</p>
            <p className='text-muted-foreground text-xs leading-none'>
              {session?.user?.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className='p-0'>
          <form
            action={async () => {
              'use server'
              await signOut({
                redirectTo: '/',
              })
            }}
            className='w-full'
          >
            <Button
              type='submit'
              variant='ghost'
              className='w-full justify-start px-2'
            >
              Logout
            </Button>
          </form>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
