/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Body_send_notifications_v1_admin_notification_post } from '../models/Body_send_notifications_v1_admin_notification_post';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AdminService {
    /**
     * Send Notifications
     * Send a test notification to all users.
     * @param xApiKey
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static sendNotificationsV1AdminNotificationPost(
        xApiKey: string,
        requestBody: Body_send_notifications_v1_admin_notification_post,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/admin/notification',
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
    /**
     * Send Message
     * Sends a message to all users.
     * @param xApiKey
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static sendMessageV1AdminMessagePost(
        xApiKey: string,
        requestBody: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/admin/message',
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
