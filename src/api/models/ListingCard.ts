/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListingType } from './ListingType';
import type { Seller } from './Seller';
export type ListingCard = {
    /**
     * Unique identifier for the listing
     */
    id: string;
    /**
     * Name of the listing
     */
    name: string;
    /**
     * Brand of the listing
     */
    brand: string;
    /**
     * Volume of the listing
     */
    volume: number;
    /**
     * Remaining volume percentage of the listing
     */
    remaining_percentage: number;
    /**
     * Price of the listing
     */
    price: number;
    /**
     * URL of the listing image
     */
    image_url: string;
    /**
     * Number of favorites for the listing
     */
    favorites_count: number;
    /**
     * Seller information for the listing
     */
    seller: Seller;
    /**
     * Type of the listing (e.g., FIXED_PRICE, NEGOTIABLE)
     */
    listing_type?: (ListingType | null);
    /**
     * Current bid amount for auction listings
     */
    current_bid?: (number | null);
    /**
     * Number of bids for auction listings
     */
    bid_count?: (number | null);
    /**
     * End time for auction listings, in ISO 8601 format
     */
    ends_at?: (string | null);
    /**
     * Description for wishlist
     */
    description?: (string | null);
};

