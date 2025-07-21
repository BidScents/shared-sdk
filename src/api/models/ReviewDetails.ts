/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { app__api__v1__models__common__User } from './app__api__v1__models__common__User';
export type ReviewDetails = {
    /**
     * Unique identifier for the review
     */
    id: string;
    /**
     * ID of the listing being reviewed. None if deleted
     */
    listing_id?: (string | null);
    /**
     * Content of the review
     */
    comment: string;
    /**
     * Rating given in the review, from 0 to 5
     */
    rating: number;
    /**
     * User who wrote the review
     */
    reviewer: (app__api__v1__models__common__User | null);
    /**
     * Date when the review was written, in ISO format
     */
    reviewed_at: string;
};

