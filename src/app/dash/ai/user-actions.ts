import { z } from 'zod'

export const ActionIdSchema = z.enum([
  'manage-units',
  'maintenance-requests',
  'payment-management',
  'visitor-access',
  'announcements',
  'amenity-booking',
  'document-center',
  'resident-directory',
  'expense-tracking',
  'security-incidents',
  'setup-auth',
  'setup-google-auth',
])

export type ActionId = z.infer<typeof ActionIdSchema>

export const UserActionSchema = z.object({
  id: ActionIdSchema,
  title: z.string(),
  description: z.string(),
  url: z.string(),
})

export type UserAction = z.infer<typeof UserActionSchema>

export const actions: UserAction[] = [
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
    id: 'manage-units',
    title: 'Manage Units',
    description: 'Add, edit, or remove unit information and ownership details',
    url: '/dash/units',
  },
  {
    id: 'maintenance-requests',
    title: 'Maintenance Requests',
    description: 'Handle maintenance and repair requests from residents',
    url: '/dash/maintenance',
  },
  {
    id: 'payment-management',
    title: 'Payment Management',
    description: 'Process monthly fees and track payment history',
    url: '/dash/payments',
  },
  {
    id: 'visitor-access',
    title: 'Visitor Access',
    description: 'Manage visitor permissions and access logs',
    url: '/dash/visitors',
  },
  {
    id: 'announcements',
    title: 'Announcements',
    description: 'Create and manage building announcements',
    url: '/dash/announcements',
  },
  {
    id: 'amenity-booking',
    title: 'Amenity Booking',
    description: 'Reserve common areas and amenities',
    url: '/dash/amenities',
  },
  {
    id: 'document-center',
    title: 'Document Center',
    description: 'Access and manage building documents and policies',
    url: '/dash/documents',
  },
  {
    id: 'resident-directory',
    title: 'Resident Directory',
    description: 'View and manage resident contact information',
    url: '/dash/residents',
  },
  {
    id: 'expense-tracking',
    title: 'Expense Tracking',
    description: 'Monitor and manage building expenses',
    url: '/dash/expenses',
  },
  {
    id: 'security-incidents',
    title: 'Security Incidents',
    description: 'Report and track security-related incidents',
    url: '/dash/security',
  },
]
