/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BoostRequest } from '../models/BoostRequest';
import type { ClaimBoostRequest } from '../models/ClaimBoostRequest';
import type { MessageResData } from '../models/MessageResData';
import type { PaymentResponse } from '../models/PaymentResponse';
import type { ProductResponse } from '../models/ProductResponse';
import type { ReviewRequest } from '../models/ReviewRequest';
import type { SubscriptionRequest } from '../models/SubscriptionRequest';
import type { TransactionRequest } from '../models/TransactionRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PaymentsService {
    /**
     * Boost Listing
     * Create a payment intent for boosting listings.
     * This endpoint processes the boost request and returns a payment intent client secret.
     * @param requestBody
     * @param creditsOnly If true, if insufficient boost credits, will return error instead of creating payment intent
     * @returns PaymentResponse Successful Response
     * @throws ApiError
     */
    public static boostListingV1PaymentsBoostPost(
        requestBody: BoostRequest,
        creditsOnly: boolean = false,
    ): CancelablePromise<PaymentResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/payments/boost',
            query: {
                'credits_only': creditsOnly,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Cancel Request
     * Cancels a request's payment intent
     * @param requestId
     * @returns void
     * @throws ApiError
     */
    public static cancelRequestV1PaymentsBoostDelete(
        requestId: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v1/payments/boost',
            query: {
                'request_id': requestId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Payment Method
     * Gets the payment method details for a user
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getPaymentMethodV1PaymentsPaymentMethodGet(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/payments/payment-method',
        });
    }
    /**
     * Setup Payment Method
     * Sets up a payment method for a user
     * @returns string Successful Response
     * @throws ApiError
     */
    public static setupPaymentMethodV1PaymentsPaymentMethodPost(): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/payments/payment-method',
        });
    }
    /**
     * Delete Payment Method
     * Deletes the payment method for a user
     * @returns void
     * @throws ApiError
     */
    public static deletePaymentMethodV1PaymentsPaymentMethodDelete(): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v1/payments/payment-method',
        });
    }
    /**
     * Update Payment Method
     * Updates the payment method for a user
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static updatePaymentMethodV1PaymentsPaymentMethodPatch(
        requestBody: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/v1/payments/payment-method',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
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
     * @returns ProductResponse Successful Response
     * @throws ApiError
     */
    public static listProductsV1PaymentsProductsGet(): CancelablePromise<ProductResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/payments/products',
        });
    }
    /**
     * Claim Boost
     * Claims a boost after purchasing boost tokens via RevenueCat
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static claimBoostV1PaymentsBoostClaimPost(
        requestBody: ClaimBoostRequest,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/payments/boost/claim',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Onboard Connect Account
     * Creates connect account for a user
     * @param refreshUrl
     * @param returnUrl
     * @returns string Successful Response
     * @throws ApiError
     */
    public static onboardConnectAccountV1PaymentsConnectOnboardPost(
        refreshUrl: string,
        returnUrl: string,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/payments/connect/onboard',
            query: {
                'refresh_url': refreshUrl,
                'return_url': returnUrl,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Create Transaction
     * Creates a transaction for a listing in messages
     * @param requestBody
     * @returns MessageResData Successful Response
     * @throws ApiError
     */
    public static createTransactionV1PaymentsTransactionPost(
        requestBody: TransactionRequest,
    ): CancelablePromise<MessageResData> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/payments/transaction',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Accept Transaction
     * Accepts a transaction
     * @param messageId
     * @returns PaymentResponse Successful Response
     * @throws ApiError
     */
    public static acceptTransactionV1PaymentsMessageIdAcceptPost(
        messageId: string,
    ): CancelablePromise<PaymentResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/payments/{message_id}/accept',
            path: {
                'message_id': messageId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Cancel Transaction
     * Cancels a transaction after it has been initiated
     * @param messageId
     * @returns void
     * @throws ApiError
     */
    public static cancelTransactionV1PaymentsMessageIdCancelDelete(
        messageId: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v1/payments/{message_id}/cancel',
            path: {
                'message_id': messageId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Confirm Receipt
     * Releases payment to seller and updates transaction status
     * @param messageId
     * @returns void
     * @throws ApiError
     */
    public static confirmReceiptV1PaymentsMessageIdConfirmReceiptPost(
        messageId: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/payments/{message_id}/confirm-receipt',
            path: {
                'message_id': messageId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Submit Review
     * Submits a review for a transaction
     * @param messageId
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static submitReviewV1PaymentsMessageIdSubmitReviewPost(
        messageId: string,
        requestBody: ReviewRequest,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/payments/{message_id}/submit-review',
            path: {
                'message_id': messageId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
