/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OrderResponse } from '../models/OrderResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class OrdersService {
    /**
     * Get Orders
     * Get user orders
     * @param status
     * @param cursor Timestamp of last notification in ISO format
     * @param limit
     * @returns OrderResponse Successful Response
     * @throws ApiError
     */
    public static getOrdersV1OrdersStatusGet(
        status: string,
        cursor: string = '2025-09-24T22:05:09.855458+00:00',
        limit: number = 20,
    ): CancelablePromise<OrderResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/orders/{status}',
            path: {
                'status': status,
            },
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
