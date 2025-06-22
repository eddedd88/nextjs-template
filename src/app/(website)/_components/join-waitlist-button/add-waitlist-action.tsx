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
      'Implement adding to waitlist at /src/app/(website)/join-waitlist-button/add-waitlist-action.tsx',
    )
    // TODO: Implement your own database logic here
    // Example: Save to your preferred database, send to an API, etc.
    console.log('Adding to waitlist:', { name, email })
  } catch (error) {
    console.error('Failed to add to waitlist:', error)
  }
}
