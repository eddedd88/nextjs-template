import { createAuthClient } from "better-auth/react"

export const authClient = createAuthClient({
    /** The base URL of the server (optional if you're using the same domain) */
    // baseURL: "http://localhost:3000" // Assuming same domain for now
})

// Optionally, export specific methods if preferred for cleaner imports later
export const { signIn, signUp, signOut, useSession, useUser, useAuth } = authClient
