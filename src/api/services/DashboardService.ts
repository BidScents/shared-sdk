/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActiveListingsResponse } from '../models/ActiveListingsResponse';
import type { CreateListingRequest } from '../models/CreateListingRequest';
import type { DashboardAuctionResponse } from '../models/DashboardAuctionResponse';
import type { FeaturedListingsResponse } from '../models/FeaturedListingsResponse';
import type { ListingResponse } from '../models/ListingResponse';
import type { MessageResData } from '../models/MessageResData';
import type { SearchResponse } from '../models/SearchResponse';
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
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getUserDashboardV1DashboardGet(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/dashboard',
        });
    }
    /**
     * Get Pending Auctions
     * Get a user's auction listings
     * @param page
     * @param perPage
     * @returns SearchResponse Successful Response
     * @throws ApiError
     */
    public static getPendingAuctionsV1DashboardAuctionsGet(
        page: number = 1,
        perPage: number = 10,
    ): CancelablePromise<SearchResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/dashboard/auctions',
            query: {
                'page': page,
                'per_page': perPage,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Settlement Details
     * Gets the top bids for an auction
     * @param listingId
     * @returns DashboardAuctionResponse Successful Response
     * @throws ApiError
     */
    public static getSettlementDetailsV1DashboardAuctionsListingIdGet(
        listingId: string,
    ): CancelablePromise<DashboardAuctionResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/dashboard/auctions/{listing_id}',
            path: {
                'listing_id': listingId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Settle Auction Transaction
     * Sends a transaction message for the auction to the highest bidder
     * @param listingId
     * @returns MessageResData Successful Response
     * @throws ApiError
     */
    public static settleAuctionTransactionV1DashboardAuctionsListingIdTransactionPost(
        listingId: string,
    ): CancelablePromise<MessageResData> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/dashboard/auctions/{listing_id}/transaction',
            path: {
                'listing_id': listingId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Mark No Response
     * Marks the highest bidder as no response
     * @param listingId
     * @returns DashboardAuctionResponse Successful Response
     * @throws ApiError
     */
    public static markNoResponseV1DashboardAuctionsListingIdNoResponsePost(
        listingId: string,
    ): CancelablePromise<DashboardAuctionResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/dashboard/auctions/{listing_id}/no-response',
            path: {
                'listing_id': listingId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Active Listings
     * Get active listing for crud
     * @param perPage
     * @param page
     * @returns ActiveListingsResponse Successful Response
     * @throws ApiError
     */
    public static getActiveListingsV1DashboardListingsActiveGet(
        perPage: number = 20,
        page: number = 1,
    ): CancelablePromise<ActiveListingsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/dashboard/listings/active',
            query: {
                'per_page': perPage,
                'page': page,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Boosted Listings
     * Get boosted listings for user
     * @param perPage
     * @param page
     * @returns FeaturedListingsResponse Successful Response
     * @throws ApiError
     */
    public static getBoostedListingsV1DashboardListingsBoostedGet(
        perPage: number = 20,
        page: number = 1,
    ): CancelablePromise<FeaturedListingsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/dashboard/listings/boosted',
            query: {
                'per_page': perPage,
                'page': page,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
