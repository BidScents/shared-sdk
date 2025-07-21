/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateListingRequest } from '../models/CreateListingRequest';
import type { ListingResponse } from '../models/ListingResponse';
import type { UpdateListingRequest } from '../models/UpdateListingRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DashboardService {
    /**
     * Create Listing
     * @param requestBody
     * @returns ListingResponse Successful Response
     * @throws ApiError
     */
    public static createListingV1DashboardListingPost(
        requestBody: CreateListingRequest,
    ): CancelablePromise<ListingResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/dashboard/listing',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Listing
     * @param listingId
     * @param requestBody
     * @returns ListingResponse Successful Response
     * @throws ApiError
     */
    public static updateListingV1DashboardListingListingIdPatch(
        listingId: string,
        requestBody: UpdateListingRequest,
    ): CancelablePromise<ListingResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/v1/dashboard/listing/{listing_id}',
            path: {
                'listing_id': listingId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Listing
     * @param listingId
     * @returns void
     * @throws ApiError
     */
    public static deleteListingV1DashboardListingListingIdDelete(
        listingId: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v1/dashboard/listing/{listing_id}',
            path: {
                'listing_id': listingId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get User Dashboard
     * Get the dashboard data for a user.
     * @param userId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getUserDashboardV1DashboardUserIdGet(
        userId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/dashboard/{user_id}',
            path: {
                'user_id': userId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
