/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AuctionStatus } from './AuctionStatus';
import type { BidDetails } from './BidDetails';
/**
 * Model representing auction details for a listing.
 */
export type AuctionDetails = {
    /**
     * Starting price for the auction
     */
    starting_price: number;
    /**
     * Buy now price for the auction, if applicable
     */
    buy_now_price?: (number | null);
    /**
     * Current status of the auction (e.g., ACTIVE, PENDING)
     */
    status: AuctionStatus;
    /**
     * List of bids placed in the auction
     */
    bids: Array<BidDetails>;
    /**
     * Minimum increment for each bid in the auction
     */
    bid_increment: number;
    /**
     * Total number of bids placed in the auction
     */
    bid_count: number;
    /**
     * End time for the auction, in ISO 8601 format
     */
    ends_at: string;
};

