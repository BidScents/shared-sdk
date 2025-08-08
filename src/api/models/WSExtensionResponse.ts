/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WSType } from './WSType';
export type WSExtensionResponse = {
    /**
     * Type of the Websocket response
     */
    type?: WSType;
    /**
     * New end time of the auction after extension, in ISO 8601 format
     */
    new_end_time: string;
};

