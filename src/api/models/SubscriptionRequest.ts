/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PassType } from './PassType';
/**
 * Model for requesting a subscription
 */
export type SubscriptionRequest = {
    /**
     * Type of the subscription
     */
    subscription_type: PassType;
    /**
     * ID of the payment method if the user doesn't have a customer account setup
     */
    payment_method_id?: (string | null);
};

