/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CommentRequest } from '../models/CommentRequest';
import type { CommentResponse } from '../models/CommentResponse';
import type { FavoriteResponse } from '../models/FavoriteResponse';
import type { ListingCard } from '../models/ListingCard';
import type { ListingDetailsResponse } from '../models/ListingDetailsResponse';
import type { SearchRequest } from '../models/SearchRequest';
import type { SearchResponse } from '../models/SearchResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ListingService {
    /**
     * Favorite Listing
     * Favorite a listing.
     * @param listingId
     * @returns FavoriteResponse Successful Response
     * @throws ApiError
     */
    public static favoriteListingV1ListingListingIdFavoritePost(
        listingId: string,
    ): CancelablePromise<FavoriteResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/listing/{listing_id}/favorite',
            path: {
                'listing_id': listingId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Unfavorite Listing
     * Unfavorite a listing.
     * @param listingId
     * @returns FavoriteResponse Successful Response
     * @throws ApiError
     */
    public static unfavoriteListingV1ListingListingIdUnfavoriteDelete(
        listingId: string,
    ): CancelablePromise<FavoriteResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v1/listing/{listing_id}/unfavorite',
            path: {
                'listing_id': listingId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Vote Listing
     * Upvote or downvote a listing.
     * @param listingId
     * @param isUpvote
     * @returns void
     * @throws ApiError
     */
    public static voteListingV1ListingListingIdVotePost(
        listingId: string,
        isUpvote: boolean,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/listing/{listing_id}/vote',
            path: {
                'listing_id': listingId,
            },
            query: {
                'is_upvote': isUpvote,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Unvote Listing
     * Remove a vote (upvote or downvote) from a listing.
     * @param listingId
     * @returns void
     * @throws ApiError
     */
    public static unvoteListingV1ListingListingIdUnvoteDelete(
        listingId: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v1/listing/{listing_id}/unvote',
            path: {
                'listing_id': listingId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Add Comment
     * Add a comment to a listing.
     * @param listingId
     * @param requestBody
     * @returns CommentResponse Successful Response
     * @throws ApiError
     */
    public static addCommentV1ListingListingIdCommentPost(
        listingId: string,
        requestBody: CommentRequest,
    ): CancelablePromise<CommentResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/listing/{listing_id}/comment',
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
     * Delete Comment
     * Delete a comment from a listing.
     * @param commentId
     * @returns void
     * @throws ApiError
     */
    public static deleteCommentV1ListingCommentCommentIdDelete(
        commentId: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v1/listing/comment/{comment_id}',
            path: {
                'comment_id': commentId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Comment
     * Update a comment on a listing.
     * @param commentId
     * @param requestBody
     * @returns CommentResponse Successful Response
     * @throws ApiError
     */
    public static updateCommentV1ListingCommentCommentIdPatch(
        commentId: string,
        requestBody: CommentRequest,
    ): CancelablePromise<CommentResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/v1/listing/comment/{comment_id}',
            path: {
                'comment_id': commentId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Listing Details
     * Get details of a specific listing.
     * @param listingId
     * @returns ListingDetailsResponse Successful Response
     * @throws ApiError
     */
    public static getListingDetailsV1ListingListingIdDetailsGet(
        listingId: string,
    ): CancelablePromise<ListingDetailsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/listing/{listing_id}/details',
            path: {
                'listing_id': listingId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get User Favorites
     * Get all favorite listings for a user.
     * @returns ListingCard Successful Response
     * @throws ApiError
     */
    public static getUserFavoritesV1ListingFavoritesGet(): CancelablePromise<Array<ListingCard>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/listing/favorites',
        });
    }
    /**
     * Search Listings
     * Searches listing that matches the query
     * @param requestBody
     * @returns SearchResponse Successful Response
     * @throws ApiError
     */
    public static searchListingsV1ListingSearchPost(
        requestBody: SearchRequest,
    ): CancelablePromise<SearchResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/listing/search',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
