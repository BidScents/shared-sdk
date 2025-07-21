/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListingBoxCondition } from './ListingBoxCondition';
import type { ListingCategory } from './ListingCategory';
import type { ListingStatus } from './ListingStatus';
import type { ListingType } from './ListingType';
export type Listing = {
    id: string;
    seller_id: string;
    listing_type: ListingType;
    name: string;
    brand: string;
    description: string;
    category: ListingCategory;
    price: number;
    volume: number;
    remaining_percentage: number;
    quantity: number;
    purchase_year: number;
    box_condition: ListingBoxCondition;
    batch_code?: (string | null);
    status?: ListingStatus;
    is_featured?: boolean;
    image_urls?: Array<string>;
    favorites_count?: number;
};

