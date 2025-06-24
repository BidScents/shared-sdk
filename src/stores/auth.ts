// Manages user authentication state with Supabase integration.

import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { User } from '../api/models/User'

interface AuthState {
  user: User | null
  session: any | null
  isAuthenticated: boolean
  isOnboarded: boolean
  setUser: (user: User | null) => void
  setSession: (session: any | null) => void
  logout: () => void
}

/**
 * Zustand store for authentication state management with Supabase.
 * 
 * Manages user data and Supabase session which contains tokens.
 * Supabase automatically handles token refresh in the background.
 * 
 * @returns Auth store with user state, session, and actions
 */
export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      session: null,
      isAuthenticated: false,
      isOnboarded: false,

      /**
       * Updates the current user and onboarding status.
       * 
       * @param user - User profile data or null to clear
       */
      setUser: (user) => {
        set({
          user,
          isOnboarded: !!user?.onboarded_at
        })
      },

      /**
       * Updates the Supabase session and authentication status.
       * 
       * @param session - Supabase session object containing tokens
       */
      setSession: (session) => {
        set({
          session,
          isAuthenticated: !!session
        })
      },

      /**
       * Clears all authentication state.
       */
      logout: () => {
        set({
          user: null,
          session: null,
          isAuthenticated: false,
          isOnboarded: false
        })
      }
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({
        user: state.user,
        session: state.session,
        isAuthenticated: state.isAuthenticated,
        isOnboarded: state.isOnboarded
      })
    }
  )
)