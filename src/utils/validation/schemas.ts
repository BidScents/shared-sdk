// Zod validation schemas for form inputs and data validation.

import { z } from 'zod'

/**
 * Validation schema for user login form.
 * 
 * Enforces email format and basic password requirements.
 * Used for client-side validation before authentication.
 */
export const loginSchema = z.object({
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address'),
  password: z
    .string()
    .min(1, 'Password is required')
    .min(6, 'Password must be at least 6 characters')
})

/**
 * Validation schema for user registration form.
 * 
 * Enforces strong password requirements and password confirmation.
 * Used for client-side validation before account creation.
 */
export const signUpSchema = z.object({
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address'),
  password: z
    .string()
    .min(1, 'Password is required')
    .min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
    .regex(/\d/, 'Password must contain at least one number'),
  confirmPassword: z
    .string()
    .min(1, 'Please confirm your password')
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword']
})

/**
 * Validation schema for user onboarding form data.
 * 
 * Enforces username format rules, name requirements, and optional profile fields.
 * Used for client-side validation before API submission.
 */
export const onboardingSchema = z.object({
  username: z
    .string()
    .min(3, 'Username must be at least 3 characters')
    .max(50, 'Username must be less than 50 characters')
    .regex(/^[a-zA-Z0-9_]+$/, 'Username can only contain letters, numbers, and underscores'),
  
  first_name: z
    .string()
    .min(1, 'First name is required')
    .max(50, 'First name must be less than 50 characters')
    .trim(),
  
  last_name: z
    .string()
    .min(1, 'Last name is required')
    .max(50, 'Last name must be less than 50 characters')
    .trim(),
  
  profile_image_url: z
    .string()
    .optional(),
  
  cover_image_url: z
    .string()
    .optional(),
  
  bio: z
    .string()
    .max(500, 'Bio must be less than 500 characters')
    .optional()
})

/**
 * Validation schema for username availability checking.
 * Used for real-time username validation during form input.
 */
export const usernameSchema = z
  .string()
  .min(3, 'Username must be at least 3 characters')
  .max(50, 'Username must be less than 50 characters')
  .regex(/^[a-zA-Z0-9_]+$/, 'Username can only contain letters, numbers, and underscores')

/**
 * TypeScript type inferred from the login validation schema.
 * Use this type for login form components and validation results.
 */
export type LoginFormData = z.infer<typeof loginSchema>

/**
 * TypeScript type inferred from the sign up validation schema.
 * Use this type for registration form components and validation results.
 */
export type SignUpFormData = z.infer<typeof signUpSchema>

/**
 * TypeScript type inferred from the onboarding validation schema.
 * Use this type for onboarding form components and validation results.
 */
export type OnboardingFormData = z.infer<typeof onboardingSchema>