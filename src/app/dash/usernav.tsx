import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'

export async function UserNav() {
  const email = 'john.doe@gmail.com'
  const name = 'John Doe'
  const initials = name
    .split(' ')
    .map(n => n[0])
    .join('')
    .substring(0, 2)
    .toUpperCase()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' size='icon' className='rounded-full'>
          <Avatar>
            <AvatarImage src={''} alt={name} />
            <AvatarFallback className='border'>{initials}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-fit' align='end'>
        <div className='flex flex-col px-2 py-1'>
          <span className='text-sm font-medium text-foreground'>{name}</span>
          <span className='text-xs text-muted-foreground'>{email}</span>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem className='p-0'>
          <form
            action={async () => {
              'use server'
              console.log('Logout functionality not implemented yet')
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
