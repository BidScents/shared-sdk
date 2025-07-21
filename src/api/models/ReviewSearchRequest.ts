/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ReviewSortField } from './ReviewSortField';
export type ReviewSearchRequest = {
    /**
     * Minimum rating to filter reviews by
     */
    min_rating?: number;
    /**
     * Field to sort the reviews by
     */
    sort?: ReviewSortField;
    /**
     * Whether to sort in descending order
     */
    descending?: boolean;
    /**
     * Number of reviews to return per page
     */
    per_page?: number;
    /**
     * Page number for pagination
     */
    page?: number;
};

