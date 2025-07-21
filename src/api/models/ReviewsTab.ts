/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginationDetails } from './PaginationDetails';
import type { ReviewDetails } from './ReviewDetails';
export type ReviewsTab = {
    /**
     * Average rating of the user based on reviews
     */
    average_rating: number;
    /**
     * Total number of reviews received by the user
     */
    total_reviews: number;
    /**
     * List of review counts for different rating levels. Start with 0 stars and end with 5 stars
     */
    review_counts: Array<number>;
    /**
     * List of reviews for the user
     */
    reviews: Array<ReviewDetails>;
    /**
     * Pagination details for the reviews
     */
    pagination_data: PaginationDetails;
};

