/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListingCard } from './ListingCard';
/**
 * Model for listing card with featured_until timestamp.
 */
export type ListingCardWithTimestamp = {
    /**
     * Listing card details
     */
    listing: ListingCard;
    /**
     * Timestamp until which the listing is featured
     */
    featured_until: string;
};

