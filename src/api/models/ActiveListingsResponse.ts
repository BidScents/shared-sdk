/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListingPreview } from './ListingPreview';
import type { PaginationDetails } from './PaginationDetails';
/**
 * Response model for active listings in the dashboard.
 */
export type ActiveListingsResponse = {
    /**
     * List of active listings for the user
     */
    listings: Array<ListingPreview>;
    /**
     * Pagination details for the listings
     */
    pagination_data: PaginationDetails;
};

