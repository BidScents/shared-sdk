/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListingBoxCondition } from './ListingBoxCondition';
import type { ListingCategory } from './ListingCategory';
import type { ListingType } from './ListingType';
/**
 * Model representing filter parameters for search queries.
 */
export type FilterParameter = {
    /**
     * List of listing types to filter by
     */
    listing_types?: (Array<ListingType> | null);
    /**
     * List of categories to filter by
     */
    categories?: (Array<ListingCategory> | null);
    /**
     * Minimum price to filter by
     */
    min_price?: (number | null);
    /**
     * Maximum price to filter by
     */
    max_price?: (number | null);
    /**
     * Minimum purchase year to filter by
     */
    min_purchase_year?: (number | null);
    /**
     * Maximum purchase year to filter by
     */
    max_purchase_year?: (number | null);
    /**
     * List of box conditions to filter by
     */
    box_conditions?: (Array<ListingBoxCondition> | null);
    /**
     * List of seller IDs to filter by
     */
    seller_ids?: (Array<string> | null);
};

