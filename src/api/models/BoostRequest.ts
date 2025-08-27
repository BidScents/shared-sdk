/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Model for requesting boost for listings
 */
export type BoostRequest = {
    /**
     * Idempotency ID for the boost request
     */
    id: string;
    /**
     * Boost type and listing ids to boost with the given type
     */
    boosts: Record<string, Array<string>>;
};

