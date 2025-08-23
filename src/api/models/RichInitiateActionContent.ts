/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListingPreview } from './ListingPreview';
import type { MessageActionType } from './MessageActionType';
export type RichInitiateActionContent = {
    /**
     * Type of the action
     */
    action_type: MessageActionType;
    /**
     * Listing associated with the action
     */
    listing?: (ListingPreview | null);
    /**
     * Unit price of the listing
     */
    unit_price: number;
    /**
     * Quantity of the listing
     */
    quantity: number;
    /**
     * ID of the buyer
     */
    buyer_id: string;
    /**
     * Indicates if the action is active
     */
    is_active: boolean;
};

