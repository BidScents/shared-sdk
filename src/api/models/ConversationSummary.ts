/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ConversationType } from './ConversationType';
import type { MessageResData } from './MessageResData';
import type { UserPreview } from './UserPreview';
export type ConversationSummary = {
    /**
     * Unique identifier for the conversation
     */
    id: string;
    /**
     * URL of the conversation's thumbnail image
     */
    thumbnail_url?: (string | null);
    /**
     * Type of the conversation e.g. DIRECT, GROUP
     */
    type: ConversationType;
    /**
     * Name of the conversation, if applicable
     */
    name?: (string | null);
    /**
     * Number of unread messages in the conversation for the user
     */
    unread_count: number;
    /**
     * List of participants in the conversation
     */
    participants: Array<UserPreview>;
    /**
     * The last message in the conversation, if available
     */
    last_message?: (MessageResData | null);
};

