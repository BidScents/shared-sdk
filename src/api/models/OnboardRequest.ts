/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type OnboardRequest = {
    /**
     * The username for the user.
     */
    username: string;
    /**
     * The first name of the user.
     */
    first_name: string;
    /**
     * The last name of the user.
     */
    last_name: string;
    /**
     * URL to the user's profile image.
     */
    profile_image_url?: (string | null);
    /**
     * URL to the user's cover image.
     */
    cover_image_url?: (string | null);
    /**
     * A short biography of the user.
     */
    bio?: (string | null);
    /**
     * The user's location.
     */
    location?: (string | null);
};

