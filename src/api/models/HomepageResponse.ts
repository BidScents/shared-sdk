/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListingCard } from './ListingCard';
export type HomepageResponse = {
    /**
     * List of featured sections. Each entry is a list for one section
     */
    featured: Array<ListingCard>;
    /**
     * Recent auction listings
     */
    recent_auctions: Array<ListingCard>;
    /**
     * Recent new listings
     */
    recent_new: Array<ListingCard>;
    /**
     * Recent preowned listings
     */
    recent_preowned: Array<ListingCard>;
    /**
     * Recent decant listings
     */
    recent_decant: Array<ListingCard>;
    /**
     * Listings from sellers you follow
     */
    sellers_you_follow?: (Array<ListingCard> | null);
    /**
     * Recent swap listings (wishlist)
     */
    recent_swaps: Array<ListingCard>;
};

