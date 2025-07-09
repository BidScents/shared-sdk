/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FilterParameter } from './FilterParameter';
import type { SortParameter } from './SortParameter';
/**
 * Request model for searching listings.
 */
export type SearchRequest = {
    /**
     * Search query string
     */
    'q'?: string;
    /**
     * Filter parameters for the search
     */
    filters?: (FilterParameter | null);
    /**
     * Sorting parameters for the search results
     */
    sort?: SortParameter;
    /**
     * Number of results per page
     */
    per_page?: number;
    /**
     * Page number for pagination
     */
    page?: number;
};

