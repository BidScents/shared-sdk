/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateListingRequest } from '../models/CreateListingRequest';
import type { DashboardAuctionResponse } from '../models/DashboardAuctionResponse';
import type { FeaturedListingsResponse } from '../models/FeaturedListingsResponse';
import type { ListingResponse } from '../models/ListingResponse';
import type { MessageResData } from '../models/MessageResData';
import type { SearchResponse } from '../models/SearchResponse';
import type { TransactionResponse } from '../models/TransactionResponse';
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
     * Mark Listing Sold
     * @param listingId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static markListingSoldV1DashboardListingListingIdMarkSoldPatch(
        listingId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/v1/dashboard/listing/{listing_id}/mark-sold',
            path: {
                'listing_id': listingId,
            },
            errors: {
                422: `Validation Error`,
            },
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
     * @returns SearchResponse Successful Response
     * @throws ApiError
     */
    public static getActiveListingsV1DashboardListingsActiveGet(
        perPage: number = 20,
        page: number = 1,
    ): CancelablePromise<SearchResponse> {
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
     * Get Featured Listings
     * Get featured listings for user
     * @param perPage
     * @param page
     * @returns FeaturedListingsResponse Successful Response
     * @throws ApiError
     */
    public static getFeaturedListingsV1DashboardListingsFeaturedGet(
        perPage: number = 20,
        page: number = 1,
    ): CancelablePromise<FeaturedListingsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/dashboard/listings/featured',
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
     * Get User Transactions
     * Get user transactions
     * @param cursor Timestamp of last notification in ISO format
     * @param limit
     * @returns TransactionResponse Successful Response
     * @throws ApiError
     */
    public static getUserTransactionsV1DashboardTransactionsGet(
        cursor: string = '2025-12-14T20:19:29.038538+00:00',
        limit: number = 20,
    ): CancelablePromise<TransactionResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/dashboard/transactions',
            query: {
                'cursor': cursor,
                'limit': limit,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
