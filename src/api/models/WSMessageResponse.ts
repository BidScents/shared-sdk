/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ErrorResData } from './ErrorResData';
import type { MessageResData } from './MessageResData';
import type { TypingResData } from './TypingResData';
import type { UpdateLastReadData } from './UpdateLastReadData';
import type { WSType } from './WSType';
export type WSMessageResponse = {
    /**
     * Type of the WebSocket response
     */
    type: WSType;
    /**
     * Data associated with the WebSocket message
     */
    data: (MessageResData | TypingResData | ErrorResData | UpdateLastReadData);
};

