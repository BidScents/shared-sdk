/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { app__api__v1__models__common__User } from './app__api__v1__models__common__User';
/**
 * Model representing bids in an auction.
 */
export type app__api__v1__models__listing__Bid = {
    /**
     * Unique identifier for the bid
     */
    id: string;
    /**
     * User who placed the bid or None if the user has deleted their account
     */
    bidder?: (app__api__v1__models__common__User | null);
    /**
     * Amount of the bid
     */
    amount: number;
    /**
     * Timestamp when the bid was placed, in ISO 8601 format
     */
    created_at: string;
};

