// src/utils/validation/schemas.ts
// Zod validation schemas for form inputs and data validation.

import { z } from 'zod'

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
    .url('Must be a valid URL')
    .optional()
    .or(z.literal('')),
  
  cover_image_url: z
    .string()
    .url('Must be a valid URL')
    .optional()
    .or(z.literal('')),
  
  bio: z
    .string()
    .max(500, 'Bio must be less than 500 characters')
    .optional()
    .or(z.literal(''))
})

/**
 * TypeScript type inferred from the onboarding validation schema.
 * Use this type for form components and validation results.
 */
export type OnboardingFormData = z.infer<typeof onboardingSchema>

/**
 * Validation schema for username availability checking.
 * Used for real-time username validation during form input.
 */
export const usernameSchema = z
  .string()
  .min(3, 'Username must be at least 3 characters')
  .max(50, 'Username must be less than 50 characters')
  .regex(/^[a-zA-Z0-9_]+$/, 'Username can only contain letters, numbers, and underscores')

