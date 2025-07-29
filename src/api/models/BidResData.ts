/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserPreview } from './UserPreview';
export type BidResData = {
    /**
     * Unique identifier for the bid
     */
    id: string;
    /**
     * Amount of the bid
     */
    amount: number;
    /**
     * Information about the user who placed the bid
     */
    bidder: UserPreview;
    /**
     * Timestamp when the bid was placed, in ISO 8601 format
     */
    created_at: string;
    /**
     * Total number of bids placed in the auction
     */
    bid_count: number;
};

