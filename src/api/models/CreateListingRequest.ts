/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListingBoxCondition } from './ListingBoxCondition';
import type { ListingCategory } from './ListingCategory';
import type { ListingType } from './ListingType';
/**
 * Request model for creating a listing.
 */
export type CreateListingRequest = {
    /**
     * Type of the listing (e.g., NORMAL, AUCTION)
     */
    type: ListingType;
    /**
     * Name of the listing
     */
    name: string;
    /**
     * Brand of the item in the listing
     */
    brand: string;
    /**
     * Description of the listing
     */
    description: string;
    /**
     * Category of the listing
     */
    category: ListingCategory;
    /**
     * Price of the listing
     */
    price: number;
    /**
     * Volume of the perfume bottle
     */
    volume: number;
    /**
     * Remaining percentage of the perfume in the bottle
     */
    remaining_percentage: number;
    /**
     * Condition of the box of the perfume
     */
    box_condition: ListingBoxCondition;
    /**
     * Batch code of the perfume, if available
     */
    batch_code?: (string | null);
    /**
     * Quantity available in the listing
     */
    quantity: number;
    /**
     * Year of purchase of the perfume
     */
    purchase_year: number;
    /**
     * List of image URLs for the listing
     */
    image_urls: Array<string>;
    /**
     * Starting price for auction listings
     */
    starting_price?: (number | null);
    /**
     * Reserve price for auction listings
     */
    reserve_price?: (number | null);
    /**
     * Buy now price for auction listings
     */
    buy_now_price?: (number | null);
    /**
     * Bid increment for auction listings
     */
    bid_increment?: (number | null);
    /**
     * End time for auction listings, in ISO 8601 format
     */
    ends_at?: (string | null);
    /**
     * Whether the auction can be extended
     */
    is_extendable?: boolean;
};

