/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MessageReqData } from './MessageReqData';
import type { TypingReqData } from './TypingReqData';
import type { WSType } from './WSType';
export type WSMessageRequest = {
    /**
     * Type of the WebSocket request
     */
    type: WSType;
    /**
     * Data associated with the WebSocket message
     */
    data: (MessageReqData | TypingReqData);
};

