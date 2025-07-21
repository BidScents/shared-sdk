/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListingBoxCondition } from './ListingBoxCondition';
import type { ListingCategory } from './ListingCategory';
/**
 * Request model for updating a listing.
 */
export type UpdateListingRequest = {
    /**
     * Name of the listing
     */
    name?: (string | null);
    /**
     * Brand of the item in the listing
     */
    brand?: (string | null);
    /**
     * Description of the listing
     */
    description?: (string | null);
    /**
     * Category of the listing
     */
    category?: (ListingCategory | null);
    /**
     * Price of the listing
     */
    price?: (number | null);
    /**
     * Volume of the perfume bottle
     */
    volume?: (number | null);
    /**
     * Remaining percentage of the perfume in the bottle
     */
    remaining_percentage?: (number | null);
    /**
     * Condition of the box of the perfume
     */
    box_condition?: (ListingBoxCondition | null);
    /**
     * Batch code of the perfume, if available
     */
    batch_code?: (string | null);
    /**
     * Quantity available in the listing
     */
    quantity?: (number | null);
    /**
     * Year of purchase of the perfume
     */
    purchase_year?: (number | null);
    /**
     * List of image URLs for the listing
     */
    image_urls?: (Array<string> | null);
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
    is_extendable?: (boolean | null);
};

