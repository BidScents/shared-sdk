/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HomepageResponse } from '../models/HomepageResponse';
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
            url: '/v1/homepage/',
        });
    }
}
