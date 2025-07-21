/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ProfileDetails = {
    /**
     * Unique identifier for the user
     */
    id: string;
    /**
     * Name of the user
     */
    name: string;
    /**
     * Username of the user
     */
    username: string;
    /**
     * URL to the user's profile picture
     */
    profile_picture?: (string | null);
    /**
     * URL to the user's cover image
     */
    cover_image?: (string | null);
    /**
     * Short biography of the user
     */
    bio?: (string | null);
    /**
     * Location of the user
     */
    location?: (string | null);
    /**
     * Date when the user joined the platform, in ISO format
     */
    joined_at: string;
    /**
     * Average rating of the user based on reviews
     */
    average_rating?: (number | null);
    /**
     * Number of followers the user has
     */
    follower_count: number;
    /**
     * Number of users the user is following
     */
    following_count: number;
    /**
     * Indicates whether the current user is following this user
     */
    is_following: boolean;
};

