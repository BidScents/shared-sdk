/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListingCard } from './ListingCard';
export type SellersYouFollowResponse = {
    /**
     * List for the data for the listing cards in the result
     */
    listings: Array<ListingCard>;
    /**
     * Cursor for the next page of results, if available
     */
    next_cursor?: (string | null);
};

