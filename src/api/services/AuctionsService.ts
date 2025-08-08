/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BidRequest } from '../models/BidRequest';
import type { BidResponse } from '../models/BidResponse';
import type { WSBidResponse } from '../models/WSBidResponse';
import type { WSExtensionResponse } from '../models/WSExtensionResponse';
import type { WSJoinResponse } from '../models/WSJoinResponse';
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
        requestBody: BidRequest,
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
     * Get Ws Types
     * Dummy endpoint so openapi codegen can generate the WebSocket types.
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getWsTypesV1AuctionsWsTypesGet(): CancelablePromise<(WSBidResponse | WSJoinResponse | WSExtensionResponse)> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/auctions/ws-types',
        });
    }
}
