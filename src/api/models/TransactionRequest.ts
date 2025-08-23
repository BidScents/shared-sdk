/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Model for creating a transaction
 */
export type TransactionRequest = {
    /**
     * ID of the listing to create a transaction for
     */
    listing_id: string;
    /**
     * ID of the conversation the transaction is created in
     */
    conversation_id: string;
    /**
     * ID of the buyer the transaction is for
     */
    buyer_id: string;
    /**
     * The amount to be charged for the transaction
     */
    unit_price: number;
    /**
     * The quantity of items being purchased
     */
    quantity: number;
};

