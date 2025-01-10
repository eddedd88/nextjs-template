import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Link from 'next/link'
import { userActions } from '../user-actions'
import { Page, PageBackButton, PageTitle } from '@/components/page'

const userActionsWithoutAIWorkflows = userActions.filter(
  userAction => userAction.id !== 'ai-workflows',
)

export default function WorkflowsPage() {
  return (
    <Page>
      <PageBackButton />
      <PageTitle>All of my Capabilities</PageTitle>
      <div className='grid grid-cols-1 gap-4'>
        {userActionsWithoutAIWorkflows.map(userAction => (
          <Link
            href={userAction.url}
            key={userAction.id}
            className='rounded-xl'
          >
            <Card className='transition-all duration-200 hover:scale-[1.02] hover:bg-secondary'>
              <CardHeader className='pb-2'>
                <CardTitle className='text-xl'>{userAction.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className='text-base'>
                  {userAction.description}
                </CardDescription>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </Page>
  )
}
