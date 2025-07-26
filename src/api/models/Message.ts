/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FileContent } from './FileContent';
import type { MessageType } from './MessageType';
import type { RichActionContent } from './RichActionContent';
import type { RichTextContent } from './RichTextContent';
import type { UserPreview } from './UserPreview';
export type Message = {
    /**
     * Unique identifier for the message
     */
    id: string;
    /**
     * Information about the user who sent the message
     */
    sender?: (UserPreview | null);
    /**
     * Type of the message
     */
    type: MessageType;
    /**
     * Content of the message
     */
    content: (RichTextContent | FileContent | RichActionContent);
    /**
     * Timestamp when the message was created, in ISO 8601 format
     */
    created_at: string;
};

