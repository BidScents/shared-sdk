/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Model for the response returned after a payment request
 */
export type PaymentResponse = {
    /**
     * The client secret for the payment intent if the user has to pay
     */
    client_secret?: (string | null);
    /**
     * The amount to be charged.
     */
    amount: number;
    /**
     * The currency of the payment.
     */
    currency: string;
};

