/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PaymentsService {
    /**
     * Stripe Webhook
     * Handle Stripe webhook events.
     * This endpoint is used to process events sent by Stripe, such as payment success or failure.
     * @returns any Successful Response
     * @throws ApiError
     */
    public static stripeWebhookV1PaymentsWebhookPost(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/payments/webhook',
        });
    }
}
