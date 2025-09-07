/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class RedirectsService {
    /**
     * Redirect Onboarding Complete
     * Smart redirect for onboarding completion
     * @param returnUrl
     * @param source
     * @returns any Successful Response
     * @throws ApiError
     */
    public static redirectOnboardingCompleteV1LinkOnboardingCompleteGet(
        returnUrl?: (string | null),
        source?: (string | null),
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/link/onboarding-complete',
            query: {
                'return_url': returnUrl,
                'source': source,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Redirect Onboarding Refresh
     * Smart redirect for onboarding refresh
     * @param refreshUrl
     * @param source
     * @returns any Successful Response
     * @throws ApiError
     */
    public static redirectOnboardingRefreshV1LinkOnboardingRefreshGet(
        refreshUrl?: (string | null),
        source?: (string | null),
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/link/onboarding-refresh',
            query: {
                'refresh_url': refreshUrl,
                'source': source,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Redirect Reset Password
     * Smart redirect for password reset
     * @param token
     * @param source
     * @returns any Successful Response
     * @throws ApiError
     */
    public static redirectResetPasswordV1LinkResetPasswordGet(
        token?: (string | null),
        source?: (string | null),
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/link/reset-password',
            query: {
                'token': token,
                'source': source,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
