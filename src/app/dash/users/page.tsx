import { Button } from '@/components/ui/button'
import { PencilIcon } from 'lucide-react'
import { Page, PageBackButton, PageTitle } from '@/components/page'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import Link from 'next/link'
import { users_data } from './users-data'

type User = {
  id: string
  name: string
  email: string
  initials: string
  createdAt: string
}

type UserListProps = {
  users: User[]
}

export default function UsersPage() {
  return (
    <Page>
      <PageBackButton />
      <PageTitle>Users</PageTitle>
      <UserList users={users_data} />
    </Page>
  )
}

function UserList({ users }: UserListProps) {
  return (
    <div className='bg-card text-card-foreground rounded-lg sm:shadow-lg'>
      <ul className='sm:divide-border sm:divide-y'>
        {users.map(user => (
          <li key={user.id}>
            <div className='flex items-center justify-between py-4 sm:px-6'>
              <div className='flex items-center'>
                <Avatar>
                  <AvatarFallback>{user.initials}</AvatarFallback>
                </Avatar>
                <div className='ml-4'>
                  <p className='text-primary text-sm font-medium'>
                    {user.name}
                  </p>
                  <p className='text-muted-foreground mt-1 text-sm'>
                    {user.email}
                  </p>
                </div>
              </div>
              <div className='flex items-center'>
                <p className='text-muted-foreground mr-4 hidden text-sm sm:block'>
                  Joined {new Date(user.createdAt).toLocaleDateString()}
                </p>
                <Button
                  variant='ghost'
                  size='icon'
                  className='text-muted-foreground hover:text-primary'
                  asChild
                >
                  <Link href={`/dash/users/${user.id}`}>
                    <PencilIcon className='h-4 w-4' />
                    <span className='sr-only'>Edit user</span>
                  </Link>
                </Button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
