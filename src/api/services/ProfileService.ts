/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { app__domain__entities__user__User } from '../models/app__domain__entities__user__User';
import type { EditProfileRequest } from '../models/EditProfileRequest';
import type { ListingSearchRequest } from '../models/ListingSearchRequest';
import type { ListingTab } from '../models/ListingTab';
import type { ProfileResponse } from '../models/ProfileResponse';
import type { ProfileTab } from '../models/ProfileTab';
import type { ReviewSearchRequest } from '../models/ReviewSearchRequest';
import type { ReviewsTab } from '../models/ReviewsTab';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ProfileService {
    /**
     * Get Profile
     * Get profile details for a user. Also the data for the profile tabs
     * @param userId
     * @returns ProfileResponse Successful Response
     * @throws ApiError
     */
    public static getProfileV1ProfileUserIdGet(
        userId: string,
    ): CancelablePromise<ProfileResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/profile/{user_id}',
            path: {
                'user_id': userId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get User Reviews
     * Get (more) reviews for a user.
     * @param userId
     * @param requestBody
     * @returns ReviewsTab Successful Response
     * @throws ApiError
     */
    public static getUserReviewsV1ProfileUserIdReviewsPost(
        userId: string,
        requestBody: ReviewSearchRequest,
    ): CancelablePromise<ReviewsTab> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/profile/{user_id}/reviews',
            path: {
                'user_id': userId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Follow User
     * Follow a user.
     * @param userId
     * @returns void
     * @throws ApiError
     */
    public static followUserV1ProfileUserIdFollowPost(
        userId: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/profile/{user_id}/follow',
            path: {
                'user_id': userId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Unfollow User
     * Unfollow a user.
     * @param userId
     * @returns void
     * @throws ApiError
     */
    public static unfollowUserV1ProfileUserIdUnfollowDelete(
        userId: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v1/profile/{user_id}/unfollow',
            path: {
                'user_id': userId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Edit Profile
     * Edit profile details for a user.
     * @param userId
     * @param requestBody
     * @returns app__domain__entities__user__User Successful Response
     * @throws ApiError
     */
    public static editProfileV1ProfileUserIdEditProfilePatch(
        userId: string,
        requestBody: EditProfileRequest,
    ): CancelablePromise<app__domain__entities__user__User> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/v1/profile/{user_id}/edit-profile',
            path: {
                'user_id': userId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get User Listings
     * Get (more) listings for a user based on tab.
     * @param userId
     * @param tabName
     * @param requestBody
     * @returns ListingTab Successful Response
     * @throws ApiError
     */
    public static getUserListingsV1ProfileUserIdTabNamePost(
        userId: string,
        tabName: ProfileTab,
        requestBody: ListingSearchRequest,
    ): CancelablePromise<ListingTab> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/profile/{user_id}/{tab_name}',
            path: {
                'user_id': userId,
                'tab_name': tabName,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
