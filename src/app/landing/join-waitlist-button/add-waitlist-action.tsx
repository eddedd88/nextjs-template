'use server'

export async function addWaitlistAction(formData: FormData) {
  try {
    const name = formData.get('name')?.toString()
    const email = formData.get('email')?.toString()

    if (!name) {
      throw new Error('Name is required')
    }

    if (!email) {
      throw new Error('Email is required')
    }

    console.log(
      'Implement adding to waitlist at /src/app/landing/join-waitlist-button/add-waitlist-action.tsx',
    )
  } catch (error) {
    console.error('Failed to add to waitlist:', error)
  }
}