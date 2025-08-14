/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Model for the response returned after a boost request
 */
export type BoostResponse = {
    /**
     * The client secret for the payment intent.
     */
    client_secret: string;
    /**
     * The amount to be charged.
     */
    amount: number;
    /**
     * The currency of the payment.
     */
    currency: string;
    /**
     * The boost credits available for the user.
     */
    boost_credits: Record<string, number>;
};

