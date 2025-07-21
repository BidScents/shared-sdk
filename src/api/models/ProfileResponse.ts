/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListingTab } from './ListingTab';
import type { ProfileDetails } from './ProfileDetails';
import type { ReviewsTab } from './ReviewsTab';
export type ProfileResponse = {
    /**
     * Profile details of the user
     */
    profile: ProfileDetails;
    /**
     * Active listings of the user
     */
    active_listings?: (ListingTab | null);
    /**
     * Featured listings of the user
     */
    featured_listings?: (ListingTab | null);
    /**
     * Sold listings of the user
     */
    sold_listings?: (ListingTab | null);
    /**
     * Reviews received by the user
     */
    reviews?: (ReviewsTab | null);
};

