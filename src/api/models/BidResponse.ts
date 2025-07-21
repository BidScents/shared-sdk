/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Response model for a bid placed on an auction listing.
 */
export type BidResponse = {
    /**
     * Unique identifier for the bid
     */
    id: string;
    /**
     * Amount of the bid
     */
    amount: number;
    /**
     * Timestamp when the bid was placed, in ISO 8601 format
     */
    created_at: string;
    /**
     * Total number of bids placed in the auction
     */
    bid_count: number;
    /**
     * Current highest bid amount in the auction
     */
    current_bid: number;
};

