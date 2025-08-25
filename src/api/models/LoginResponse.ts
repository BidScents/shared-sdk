/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaymentData } from './PaymentData';
import type { User } from './User';
export type LoginResponse = {
    /**
     * Indicates whether the user has completed onboarding.
     */
    onboarded: boolean;
    /**
     * The user's profile information if available.
     */
    profile: (User | null);
    /**
     * List of favorite listing IDs associated with the user.
     */
    favorites: Array<string>;
    /**
     * The user's payment details including payment method and subscription status.
     */
    payment_details?: (PaymentData | null);
};

