/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type PaymentData = {
    /**
     * Indicates whether the user has a saved payment method.
     */
    has_payment_method: boolean;
    /**
     * Indicates whether the user has a connected Stripe account to sell listings.
     */
    has_connect_account: boolean;
    /**
     * Indicates whether the user needs to complete onboarding for payouts.
     */
    requires_onboarding: boolean;
    /**
     * Indicates until when the user is eligible for swap market.
     */
    eligible_for_swap_until?: (string | null);
    /**
     * The ID of the user's active subscription, if any.
     */
    subscription_id?: (string | null);
    /**
     * Indicates whether the user's subscription is currently active.
     */
    subscription_is_active: boolean;
    /**
     * A mapping of boost types to the number of credits the user has for each type.
     */
    boost_credits: Record<string, number>;
    /**
     * Indicates whether the user has redeemed their free trial subscription.
     */
    redeemed_free_trial: boolean;
};

