/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddTokenRequest } from '../models/AddTokenRequest';
import type { EditPreferencesRequest } from '../models/EditPreferencesRequest';
import type { NotificationResponse } from '../models/NotificationResponse';
import type { PreferencesResponse } from '../models/PreferencesResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class NotificationsService {
    /**
     * Add Device Token
     * Registers a device token for push notifications.
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    public static addDeviceTokenV1NotificationsDeviceTokenPost(
        requestBody: AddTokenRequest,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/notifications/device-token',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Notification Preferences
     * Retrieves the user's notification preferences.
     * @returns PreferencesResponse Successful Response
     * @throws ApiError
     */
    public static getNotificationPreferencesV1NotificationsNotificationPreferencesGet(): CancelablePromise<PreferencesResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/notifications/notification-preferences',
        });
    }
    /**
     * Edit Notification Preferences
     * Updates notification preferences for the user.
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static editNotificationPreferencesV1NotificationsNotificationPreferencesPatch(
        requestBody: EditPreferencesRequest,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/v1/notifications/notification-preferences',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Mark Notifications Seen
     * Marks all notifications as seen.
     * @returns void
     * @throws ApiError
     */
    public static markNotificationsSeenV1NotificationsMarkSeenPatch(): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/v1/notifications/mark-seen',
        });
    }
    /**
     * Get Notifications
     * Retrieves notifications for the user.
     * @param cursor Timestamp of last notification in ISO format
     * @param limit
     * @returns NotificationResponse Successful Response
     * @throws ApiError
     */
    public static getNotificationsV1NotificationsGet(
        cursor: string = '2025-08-27T19:04:27.243467+00:00',
        limit: number = 20,
    ): CancelablePromise<NotificationResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/notifications/',
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
