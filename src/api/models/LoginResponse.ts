/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { app__domain__entities__user__User } from './app__domain__entities__user__User';
export type LoginResponse = {
    /**
     * Indicates whether the user has completed onboarding.
     */
    onboarded: boolean;
    /**
     * The user's profile information if available.
     */
    profile: (app__domain__entities__user__User | null);
    /**
     * List of favorite listing IDs associated with the user.
     */
    favorites: Array<string>;
};

