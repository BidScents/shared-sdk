/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Model for listing preview with featured_until timestamp.
 */
export type ListingPreviewWithTimestamp = {
    /**
     * Unique identifier for the listing
     */
    id: string;
    /**
     * Unique identifier for the seller
     */
    seller_id: string;
    /**
     * Name of the listing
     */
    name: string;
    /**
     * Price of the listing
     */
    price: number;
    /**
     * Main image URL for the listing
     */
    image_url?: (string | null);
    /**
     * Timestamp until which the listing is featured
     */
    featured_until: string;
};

