/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BidResData } from './BidResData';
import type { WSType } from './WSType';
export type WSBidResponse = {
    /**
     * Type of the WebSocket response
     */
    type: WSType;
    /**
     * Data associated with the WebSocket response
     */
    data: BidResData;
};

