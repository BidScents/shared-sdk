/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BidDetails } from './BidDetails';
/**
 * Response model for auction details in the dashboard.
 */
export type DashboardAuctionResponse = {
    /**
     * Deadline for settlement, in ISO 8601 format
     */
    settlement_deadline?: (string | null);
    /**
     * Indicates if there is an active settlement
     */
    has_active_settlement: boolean;
    /**
     * List of top bids for the auction
     */
    top_bids: Array<BidDetails>;
};

