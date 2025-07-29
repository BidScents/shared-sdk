/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WSType } from './WSType';
export type WSJoinResponse = {
    /**
     * Type of the WebSocket response
     */
    type?: WSType;
    /**
     * Current number of viewers in the auction
     */
    current_viewers: number;
};

