/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListingCard } from './ListingCard';
import type { PaginationDetails } from './PaginationDetails';
export type SearchResponse = {
    /**
     * List for the data for the listing cards in the result
     */
    listings: Array<ListingCard>;
    /**
     * Pagination metadata for the results
     */
    pagination_data: PaginationDetails;
};

