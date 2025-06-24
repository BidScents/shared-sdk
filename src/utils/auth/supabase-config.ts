// Supabase authentication configuration and token management.

import { useAuthStore } from '../../stores/auth'
import { OpenAPI } from '../../api/core/OpenAPI'

/**
 * Configures the OpenAPI client with the current Supabase access token.
 * 
 * Internal function that extracts the access token from the Supabase session 
 * and configures all API requests to include it in the Authorization header.
 */
const configureApiWithSupabaseToken = (): void => {
  const { session } = useAuthStore.getState()
  
  if (session?.access_token) {
    OpenAPI.TOKEN = session.access_token
  } else {
    OpenAPI.TOKEN = undefined
  }
}

/**
 * Handles Supabase authentication state changes.
 * 
 * Call this function from Supabase's onAuthStateChange callback
 * to sync the session with your app state and configure API client.
 * 
 * @param event - Auth event type from Supabase
 * @param session - Current Supabase session or null
 */
export const handleAuthStateChange = (event: string, session: any): void => {
  const { setSession, logout } = useAuthStore.getState()
  
  setSession(session)
  configureApiWithSupabaseToken()
  
  // Clear user data on logout
  if (event === 'SIGNED_OUT' || !session) {
    logout()
  }
}

/**
 * Initializes authentication system on app startup.
 * 
 * Configures API client with stored tokens. Call this once during app initialization.
 */
export const initializeAuth = (): void => {
  configureApiWithSupabaseToken()
}