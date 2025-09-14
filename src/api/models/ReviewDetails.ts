/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserPreview } from './UserPreview';
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
     * Content of the review. Can be null if user submitted review without comment
     */
    comment?: (string | null);
    /**
     * Rating given in the review, from 0 to 5
     */
    rating: number;
    /**
     * User who wrote the review
     */
    reviewer: (UserPreview | null);
    /**
     * Date when the review was written, in ISO format
     */
    reviewed_at: string;
};

