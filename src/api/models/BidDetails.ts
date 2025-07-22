/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserPreview } from './UserPreview';
/**
 * Model representing bids in an auction.
 */
export type BidDetails = {
    /**
     * Unique identifier for the bid
     */
    id: string;
    /**
     * User who placed the bid or None if the user has deleted their account
     */
    bidder?: (UserPreview | null);
    /**
     * Amount of the bid
     */
    amount: number;
    /**
     * Timestamp when the bid was placed, in ISO 8601 format
     */
    created_at: string;
};

