/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BoostRequest } from '../models/BoostRequest';
import type { BoostResponse } from '../models/BoostResponse';
import type { SubscriptionRequest } from '../models/SubscriptionRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PaymentsService {
    /**
     * Boost Listing
     * Create a payment intent for boosting listings.
     * This endpoint processes the boost request and returns a payment intent client secret.
     * @param requestBody
     * @returns BoostResponse Successful Response
     * @throws ApiError
     */
    public static boostListingV1PaymentsBoostPost(
        requestBody: BoostRequest,
    ): CancelablePromise<BoostResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/payments/boost',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Setup Payment Method
     * Sets up a payment method for a user
     * @returns any Successful Response
     * @throws ApiError
     */
    public static setupPaymentMethodV1PaymentsPaymentMethodPost(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/payments/payment-method',
        });
    }
    /**
     * Create Subscription
     * Creates/updates subscription to swap pass for a user
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static createSubscriptionV1PaymentsSubscriptionPost(
        requestBody: SubscriptionRequest,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/payments/subscription',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Cancel Subscription
     * Cancels the subscription for a user
     * @returns void
     * @throws ApiError
     */
    public static cancelSubscriptionV1PaymentsSubscriptionDelete(): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v1/payments/subscription',
        });
    }
    /**
     * List Products
     * @returns any Successful Response
     * @throws ApiError
     */
    public static listProductsV1PaymentsProductsGet(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/payments/products',
        });
    }
    /**
     * Reset Pricing
     * Resets the products dict to reflect changes in stripe
     * @returns any Successful Response
     * @throws ApiError
     */
    public static resetPricingV1PaymentsResetPost(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/payments/reset',
        });
    }
    /**
     * Stripe Webhook
     * Handle Stripe webhook events.
     * This endpoint is used to process events sent by Stripe, such as payment success or failure.
     * @returns void
     * @throws ApiError
     */
    public static stripeWebhookV1PaymentsWebhookPost(): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/payments/webhook',
        });
    }
    /**
     * Get Boost Packages
     * Retrieve available boost packages.
     * This endpoint returns the prices and details of the available boost packages.
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getBoostPackagesV1PaymentsBoostPackagesGet(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/payments/boost/packages',
        });
    }
}
