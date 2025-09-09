/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Boost } from './Boost';
import type { Pass } from './Pass';
/**
 * Model for the response returned when fetching products
 */
export type ProductResponse = {
    /**
     * Available boost products
     */
    boosts: Record<string, Boost>;
    /**
     * Available pass products
     */
    passes: Record<string, Pass>;
};

