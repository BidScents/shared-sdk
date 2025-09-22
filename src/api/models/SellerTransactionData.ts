/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListingPreview } from './ListingPreview';
import type { TransactionStatus } from './TransactionStatus';
import type { UserPreview } from './UserPreview';
export type SellerTransactionData = {
    id: string;
    listing: ListingPreview;
    buyer: (UserPreview | null);
    quantity: number;
    status: TransactionStatus;
    updated_at: string;
    conversation_id: string;
    net_amount: number;
    stripe_fee: number;
    platform_fee: number;
};

