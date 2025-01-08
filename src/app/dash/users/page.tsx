import { Button } from '@/components/ui/button'
import { PencilIcon } from 'lucide-react'
import { Page, PageBackButton, PageTitle } from '@/components/page'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

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

const mockUsers = [
  {
    id: '1',
    name: 'Alice Johnson',
    email: 'alice@example.com',
    initials: 'AJ',
    createdAt: new Date('2023-01-15').toISOString(),
  },
  {
    id: '2',
    name: 'Bob Smith',
    email: 'bob@example.com',
    initials: 'BS',
    createdAt: new Date('2023-02-20').toISOString(),
  },
  {
    id: '3',
    name: 'Charlie Brown',
    email: 'charlie@example.com',
    initials: 'CB',
    createdAt: new Date('2023-03-25').toISOString(),
  },
  {
    id: '4',
    name: 'Diana Ross',
    email: 'diana@example.com',
    initials: 'DR',
    createdAt: new Date('2023-04-30').toISOString(),
  },
  {
    id: '5',
    name: 'Ethan Hunt',
    email: 'ethan@example.com',
    initials: 'EH',
    createdAt: new Date('2023-05-05').toISOString(),
  },
]

export default function UsersPage() {
  return (
    <Page>
      <PageBackButton />
      <PageTitle>Users</PageTitle>
      <UserList users={mockUsers} />
    </Page>
  )
}

function UserList({ users }: UserListProps) {
  return (
    <div className='overflow-hidden rounded-lg bg-card text-card-foreground shadow-sm'>
      <ul className='divide-y divide-border'>
        {users.map(user => (
          <li key={user.id}>
            <div className='flex items-center justify-between px-4 py-4 sm:px-6'>
              <div className='flex items-center'>
                <Avatar>
                  <AvatarFallback>{user.initials}</AvatarFallback>
                </Avatar>
                <div className='ml-4'>
                  <p className='text-sm font-medium text-primary'>
                    {user.name}
                  </p>
                  <p className='mt-1 text-sm text-muted-foreground'>
                    {user.email}
                  </p>
                </div>
              </div>
              <div className='flex items-center'>
                <p className='mr-4 hidden text-sm text-muted-foreground sm:block'>
                  Joined {new Date(user.createdAt).toLocaleDateString()}
                </p>
                <Button
                  variant='ghost'
                  size='icon'
                  className='text-muted-foreground hover:text-primary'
                >
                  <PencilIcon className='h-4 w-4' />
                  <span className='sr-only'>Edit user</span>
                </Button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
