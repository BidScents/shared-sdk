/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListingBoxCondition } from './ListingBoxCondition';
import type { ListingCategory } from './ListingCategory';
import type { ListingStatus } from './ListingStatus';
import type { ListingType } from './ListingType';
export type ListingDetails = {
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
     * Price of the listing
     */
    price: number;
    /**
     * Description of the listing
     */
    description: string;
    /**
     * Status of the listing (e.g., ACTIVE, SOLD, PENDING)
     */
    status: ListingStatus;
    /**
     * Category of the listing
     */
    category: ListingCategory;
    /**
     * Year the item was purchased
     */
    purchase_year: number;
    /**
     * Condition of the box
     */
    box_condition: ListingBoxCondition;
    /**
     * Quantity of the item available
     */
    quantity: number;
    /**
     * Volume of the item in milliliters
     */
    volume: number;
    /**
     * Batch code of the item, if exists
     */
    batch_code?: (string | null);
    /**
     * Remaining volume percentage of the item
     */
    remaining_percentage: number;
    /**
     * Type of the listing (e.g., NEW, AUCTION, SWAP)
     */
    listing_type: ListingType;
};

