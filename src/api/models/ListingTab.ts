/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListingCard } from './ListingCard';
import type { PaginationDetails } from './PaginationDetails';
export type ListingTab = {
    /**
     * List of listings in the user's profile tab
     */
    listings: Array<ListingCard>;
    /**
     * Pagination details for the listings
     */
    pagination_data: PaginationDetails;
};

