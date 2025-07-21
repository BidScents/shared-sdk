/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AuctionExpiryResponse } from '../models/AuctionExpiryResponse';
import type { BidResponse } from '../models/BidResponse';
import type { Body_place_bid_v1_auctions__listing_id__bid_post } from '../models/Body_place_bid_v1_auctions__listing_id__bid_post';
import type { Body_process_expiry_v1_auctions_cron_expiry_post } from '../models/Body_process_expiry_v1_auctions_cron_expiry_post';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AuctionsService {
    /**
     * Place Bid
     * Place a bid on an auction listing.
     * @param listingId
     * @param requestBody
     * @returns BidResponse Successful Response
     * @throws ApiError
     */
    public static placeBidV1AuctionsListingIdBidPost(
        listingId: string,
        requestBody: Body_place_bid_v1_auctions__listing_id__bid_post,
    ): CancelablePromise<BidResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/auctions/{listing_id}/bid',
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
     * Process Expiry
     * @param xApiKey
     * @param requestBody
     * @returns AuctionExpiryResponse Successful Response
     * @throws ApiError
     */
    public static processExpiryV1AuctionsCronExpiryPost(
        xApiKey: string,
        requestBody: Body_process_expiry_v1_auctions_cron_expiry_post,
    ): CancelablePromise<Array<AuctionExpiryResponse>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/auctions/cron/expiry',
            headers: {
                'x-api-key': xApiKey,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
