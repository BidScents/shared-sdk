/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Model for claiming boost credits
 */
export type ClaimBoostRequest = {
    /**
     * RevenueCat transaction ID of the purchased boost
     */
    request_id: string;
    /**
     * ID of the listing to apply the boost to
     */
    listing_id: string;
};

