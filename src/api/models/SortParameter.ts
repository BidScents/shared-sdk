/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SortField } from './SortField';
/**
 * Model representing a sort parameter for search queries.
 */
export type SortParameter = {
    /**
     * Field to sort by
     */
    field?: SortField;
    /**
     * Whether to sort in descending order
     */
    descending?: boolean;
};

