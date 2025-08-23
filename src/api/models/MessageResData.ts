/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FileContent } from './FileContent';
import type { MessageType } from './MessageType';
import type { RichInitiateActionContent } from './RichInitiateActionContent';
import type { RichTextContent } from './RichTextContent';
import type { UserPreview } from './UserPreview';
export type MessageResData = {
    /**
     * Unique identifier for the message
     */
    id: string;
    /**
     * ID of the conversation
     */
    conversation_id: string;
    /**
     * Type of the message content
     */
    content_type: MessageType;
    /**
     * Content of the message
     */
    content: (RichTextContent | FileContent | RichInitiateActionContent);
    /**
     * Information about the user who sent the message
     */
    sender: UserPreview;
    /**
     * Timestamp of when the message was sent, in ISO 8601 format
     */
    created_at: string;
};

