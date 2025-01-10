import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { users_data } from '../users-data'
import { Page, PageBackButton, PageTitle } from '@/components/page'

export default async function UserProfilePage({
  params,
}: {
  params: Promise<{ userId: string }>
}) {
  const { userId } = await params
  const user = users_data.find(user => user.id === userId)

  return (
    <Page>
      <PageBackButton backUrl='/dash/users' />
      <PageTitle>{user?.name || 'User not found.'}</PageTitle>
      {user && (
        <form className='mt-8 space-y-6'>
          <div>
            <Label htmlFor='name' className='sr-only'>
              Name
            </Label>
            <Input
              id='name'
              name='name'
              type='text'
              required
              className='rounded-t-md'
              placeholder='Name'
              defaultValue={user.name || ''}
            />
          </div>
          <div>
            <Label htmlFor='email' className='sr-only'>
              Email
            </Label>
            <Input
              id='email'
              name='email'
              type='email'
              required
              placeholder='Email'
              defaultValue={user.email || ''}
            />
          </div>
          <div>
            <Label htmlFor='bio' className='sr-only'>
              Bio
            </Label>
            <Textarea
              id='bio'
              name='bio'
              rows={4}
              className='rounded-b-md'
              placeholder='Tell us about yourself'
              defaultValue=''
            />
          </div>

          <div>
            <Button
              type='submit'
              className='flex w-full justify-center px-4 py-2'
            >
              Update Profile
            </Button>
          </div>
        </form>
      )}
    </Page>
  )
}
