/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListingPreviewWithTimestamp } from './ListingPreviewWithTimestamp';
import type { PaginationDetails } from './PaginationDetails';
/**
 * Response model for featured listings in the dashboard.
 */
export type FeaturedListingsResponse = {
    /**
     * List of featured listings for the user
     */
    listings: Array<ListingPreviewWithTimestamp>;
    /**
     * Pagination details for the listings
     */
    pagination_data: PaginationDetails;
};

