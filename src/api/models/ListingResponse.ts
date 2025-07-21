/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Auction } from './Auction';
import type { Listing } from './Listing';
/**
 * Response model for a listing.
 */
export type ListingResponse = {
    /**
     * Details of the created listing
     */
    listing: Listing;
    /**
     * Details of the auction if applicable
     */
    auction?: (Auction | null);
};

