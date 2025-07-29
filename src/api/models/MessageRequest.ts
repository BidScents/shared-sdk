/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActionContent } from './ActionContent';
import type { FileContent } from './FileContent';
import type { MessageType } from './MessageType';
import type { TextContent } from './TextContent';
export type MessageRequest = {
    /**
     * Type of message
     */
    content_type: MessageType;
    /**
     * Content of the message
     */
    content: (TextContent | FileContent | ActionContent);
};

