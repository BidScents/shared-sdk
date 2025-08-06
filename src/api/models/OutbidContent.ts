/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListingPreview } from './ListingPreview';
export type OutbidContent = {
    /**
     * ID of the new bid
     */
    bid_id: string;
    /**
     * Amount of the new bid
     */
    amount: number;
    /**
     * Details of the listing on which the user was outbid
     */
    listing: ListingPreview;
};

