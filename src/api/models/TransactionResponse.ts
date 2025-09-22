/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SellerTransactionData } from './SellerTransactionData';
/**
 * Response model for user transactions.
 */
export type TransactionResponse = {
    /**
     * List of user transactions
     */
    transactions: Array<SellerTransactionData>;
    /**
     * Total revenue from the transactions
     */
    total_revenue: number;
    /**
     * Total number of transactions
     */
    transaction_count: number;
};

