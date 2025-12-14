/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HomepageResponse } from '../models/HomepageResponse';
import type { UserPreview } from '../models/UserPreview';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class HomepageService {
    /**
     * Get Homepage
     * Get the homepage data including featured sections, recent auctions, listings, and swaps.
     * @returns HomepageResponse Successful Response
     * @throws ApiError
     */
    public static getHomepageV1HomepageGet(): CancelablePromise<HomepageResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/homepage',
        });
    }
    /**
     * Search Users
     * Search for users by username.
     * @param query
     * @returns UserPreview Successful Response
     * @throws ApiError
     */
    public static searchUsersV1HomepageUsersGet(
        query: string,
    ): CancelablePromise<Array<UserPreview>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/homepage/users',
            query: {
                'query': query,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
