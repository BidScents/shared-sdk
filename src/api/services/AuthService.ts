/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CheckUniqueUsernameResponse } from '../models/CheckUniqueUsernameResponse';
import type { LoginResponse } from '../models/LoginResponse';
import type { OnboardRequest } from '../models/OnboardRequest';
import type { OnboardResponse } from '../models/OnboardResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AuthService {
    /**
     * Login
     * Handle OAuth callback and check if the user has completed onboarding.
     * @returns LoginResponse Successful Response
     * @throws ApiError
     */
    public static loginV1AuthLoginGet(): CancelablePromise<LoginResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/auth/login',
        });
    }
    /**
     * Onboard User
     * Onboard a user by providing their profile information.
     * @param requestBody
     * @returns OnboardResponse Successful Response
     * @throws ApiError
     */
    public static onboardUserV1AuthOnboardPost(
        requestBody: OnboardRequest,
    ): CancelablePromise<OnboardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/auth/onboard',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Check Unique Username
     * Check if a username is unique.
     * @param username Username to check for uniqueness
     * @returns CheckUniqueUsernameResponse Successful Response
     * @throws ApiError
     */
    public static checkUniqueUsernameV1AuthCheckUsernameGet(
        username: string,
    ): CancelablePromise<CheckUniqueUsernameResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/auth/check-username',
            query: {
                'username': username,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
