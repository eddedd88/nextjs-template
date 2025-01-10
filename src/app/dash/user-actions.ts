import { z } from 'zod'

/**
 * TODO:
 * - derive ids from a list so that I don't have to duplicate the keys
 */

export const ActionIdSchema = z.enum([
  'setup-auth',
  'setup-google-auth',
  'setup-database',
  'user-list',
  'ai-workflows',
  'none',
])

export type ActionId = z.infer<typeof ActionIdSchema>

export const UserActionSchema = z.object({
  id: ActionIdSchema,
  title: z.string(),
  description: z.string(),
  url: z.string(),
})

export type UserAction = z.infer<typeof UserActionSchema>

export const userActions: UserAction[] = [
  {
    id: 'user-list',
    title: 'User List',
    description: 'View and manage users',
    url: '/dash/users',
  },
  {
    id: 'setup-auth',
    title: 'Setup Authentication with Auth.js',
    description: 'Add authentication to your app with Auth.js',
    url: '/dash/setup/auth',
  },
  {
    id: 'setup-google-auth',
    title: 'Setup Google Authentication',
    description: 'Add Google authentication to your app',
    url: '/dash/setup/google-auth',
  },
  {
    id: 'ai-workflows',
    title: 'AI Assistant Workflows',
    description:
      'See a list of all the workflows that have been configured for this app',
    url: '/dash/workflows',
  },
  {
    id: 'setup-database',
    title: 'Setup Database',
    description: 'Configure your database connection and settings',
    url: '/dash/setup/database',
  },
]
