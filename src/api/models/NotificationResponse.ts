/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NotificationData } from './NotificationData';
export type NotificationResponse = {
    /**
     * List of notifications for the user
     */
    notifications: Array<NotificationData>;
    /**
     * Count of unread notifications
     */
    unseen_count: number;
};

