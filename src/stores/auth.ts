import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage'
import type { User } from '../api/models/User'
import type { LoginResponse } from '../api/models/LoginResponse'
import type { PaymentData } from '../api/models/PaymentData'

interface AuthState {
  user: User | null
  session: any | null
  isAuthenticated: boolean
  isOnboarded: boolean
  loading: boolean
  error: string | null
  deviceToken: string | null
  favorites: string[]
  paymentDetails: PaymentData | null
  unreadMessages: number
  unseenNotifications: number
  setUser: (user: User | null) => void
  setSession: (session: any | null) => void
  setAuthState: (session: any | null, loginResponse: LoginResponse | null) => void
  setLoading: (loading: boolean) => void
  setError: (error: string | null) => void
  logout: () => void
  setDeviceToken: (deviceToken: string | null) => void
  setFavorites: (favorites: string[]) => void
  setPaymentDetails: (paymentDetails: PaymentData | null) => void
  setMessageCounts: (unreadMessages: number, unseenNotifications: number) => void
}

/**
 * Zustand store for authentication state management with Supabase.
 * 
 * Manages user data, session state, loading states, and errors.
 * Supabase automatically handles token refresh in the background.
 * 
 * ## Usage Guidelines:
 * 
 * **For complete auth operations (login, OAuth, session establishment):**
 * - Use `setAuthState(session, loginResponse)` - sets all auth state atomically
 * - Prevents race conditions by updating isAuthenticated and isOnboarded together
 * 
 * **For partial updates (profile edits, user data changes):**
 * - Use `setUser(user)` - updates only user data without changing auth state
 * - Use `setSession(session)` - updates only session without changing auth state
 * 
 * **For clearing all auth state:**
 * - Use `logout()` - clears everything atomically
 * 
 * @returns Auth store with user state, session, loading, and actions
 */
export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      session: null,
      isAuthenticated: false,
      isOnboarded: false,
      loading: true,
      error: null,
      deviceToken: null,
      favorites: [],
      paymentDetails: null,
      unreadMessages: 0,
      unseenNotifications: 0,

      /**
       * Updates the current user only (without changing auth state).
       * Use setAuthState() for complete auth state updates.
       * 
       * @param user - User profile data or null to clear
       */
      setUser: (user) => {
        set({
          user,
          error: null // Clear any errors
        })
      },

      /**
       * Updates the Supabase session only (without changing auth state).
       * Use setAuthState() for complete auth state updates.
       * 
       * @param session - Supabase session object containing tokens
       */
      setSession: (session) => {
        set({ session })
      },

      /**
       * Sets complete authentication state atomically from session and LoginResponse.
       * This prevents race conditions by updating both auth and onboarding status together.
       * 
       * @param session - Supabase session object or null
       * @param loginResponse - API response containing onboarded status and user profile
       */
      setAuthState: (session, loginResponse) => {
        set({
          session,
          isAuthenticated: !!session,
          isOnboarded: loginResponse?.onboarded || false,
          user: loginResponse?.profile || null,
          favorites: loginResponse?.favorites || [],
          paymentDetails: loginResponse?.payment_details || null,
          unreadMessages: loginResponse?.unread_messages || 0,
          unseenNotifications: loginResponse?.unseen_notifications || 0,
          loading: false,
          error: null
        })
      },

      /**
       * Sets the loading state.
       * 
       * @param loading - Loading state boolean
       */
      setLoading: (loading) => {
        set({ loading })
      },

      /**
       * Sets the error state.
       * 
       * @param error - Error message or null to clear
       */
      setError: (error) => {
        set({ error, loading: false })
      },

      /**
       * Clears all authentication state.
       */
      logout: () => {
        set({
          user: null,
          session: null,
          isAuthenticated: false,
          isOnboarded: false,
          loading: false,
          error: null,
          favorites: [],
          paymentDetails: null,
          unreadMessages: 0,
          unseenNotifications: 0
        })
      },

      /**
       * Sets the device token for push notifications.
       * 
       * @param deviceToken - Device token string or null to clear
       */
      setDeviceToken: (deviceToken) => {
        set({ deviceToken })
      },

      /**
       * Updates the user's favorite listings.
       * 
       * @param favorites - Array of listing IDs
       */
      setFavorites: (favorites) => {
        set({ favorites })
      },

      /**
       * Updates the user's payment details.
       * 
       * @param paymentDetails - Payment data or null to clear
       */
      setPaymentDetails: (paymentDetails) => {
        set({ paymentDetails })
      },

      /**
       * Updates message and notification counts.
       * 
       * @param unreadMessages - Number of unread messages
       * @param unseenNotifications - Number of unseen notifications
       */
      setMessageCounts: (unreadMessages, unseenNotifications) => {
        set({ unreadMessages, unseenNotifications })
      }

    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => ({
        user: state.user,
        session: state.session,
        isAuthenticated: state.isAuthenticated,
        isOnboarded: state.isOnboarded,
        deviceToken: state.deviceToken,
        favorites: state.favorites,
        paymentDetails: state.paymentDetails,
        unreadMessages: state.unreadMessages,
        unseenNotifications: state.unseenNotifications,
        // Don't persist loading or error states
      })
    }
  )
)