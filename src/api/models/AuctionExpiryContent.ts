/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListingPreview } from './ListingPreview';
export type AuctionExpiryContent = {
    /**
     * Whether the user won the auction
     */
    winner: boolean;
    /**
     * Whether the user is the seller of the listing
     */
    seller?: (boolean | null);
    /**
     * Details of the listing that has expired
     */
    listing: ListingPreview;
    /**
     * Winning bid amount if exists
     */
    winning_bid?: (number | null);
};

