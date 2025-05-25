'use client'; // Convert to Client Component

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { Button } from './ui/button';
import { useSession, signOut } from '@/lib/auth-client'; // Import from auth-client

export function UserNav() { // Changed to a regular function
  const { data: session, status } = useSession();

  if (status === 'loading') {
    // Optional: Render a placeholder while loading
    return <div className='h-8 w-8 rounded-full bg-muted' />;
  }

  if (status === 'unauthenticated' || !session?.user) {
    // Optional: Render a login button or nothing if not authenticated
    // For now, returning null as the component might be conditionally rendered higher up.
    return null;
  }

  const name = session.user.name || session.user.email || 'User';
  const initials = name
    .split(' ')
    .map(n => n[0])
    .join('')
    .substring(0, 2)
    .toUpperCase();

  const handleSignOut = async () => {
    await signOut({ callbackUrl: '/' }); // Use client-side signOut
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' className='relative h-8 w-8 rounded-full'>
          <Avatar className='h-8 w-8'>
            {session.user.image && (
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
              {session.user.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className='p-0' onSelect={(e) => e.preventDefault()}> {/* Prevent auto-close */}
          <Button
            onClick={handleSignOut} // Use onClick for client-side action
            variant='ghost'
            className='w-full justify-start px-2'
          >
            Logout
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
