/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListingCategory } from './ListingCategory';
import type { ListingSortField } from './ListingSortField';
import type { ListingType } from './ListingType';
export type ListingSearchRequest = {
    /**
     * List of listing types to filter by
     */
    listing_types?: (Array<ListingType> | null);
    /**
     * List of categories to filter by
     */
    categories?: (Array<ListingCategory> | null);
    /**
     * Field to sort the listings by
     */
    sort?: (ListingSortField | null);
    /**
     * Whether to sort in descending order
     */
    descending?: boolean;
    /**
     * Number of listings to return per page
     */
    per_page?: number;
    /**
     * Page number for pagination
     */
    page?: number;
};

