/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
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
};

