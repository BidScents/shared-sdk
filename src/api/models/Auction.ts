/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AuctionStatus } from './AuctionStatus';
import type { Bid } from './Bid';
export type Auction = {
    listing_id: string;
    starting_price: number;
    reserve_price?: (number | null);
    buy_now_price?: (number | null);
    bid_increment?: number;
    bids?: Array<Bid>;
    bid_count?: number;
    ends_at?: (string | null);
    status?: AuctionStatus;
    is_extendable?: boolean;
    settlement_deadline?: (string | null);
};

