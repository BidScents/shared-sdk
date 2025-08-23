/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ConversationType } from './ConversationType';
import type { MessageResData } from './MessageResData';
import type { Participant } from './Participant';
export type ConversationResponse = {
    /**
     * Unique identifier for the conversation
     */
    id: string;
    /**
     * Type of the conversation e.g. DIRECT, GROUP
     */
    type: ConversationType;
    /**
     * Name of the conversation, if applicable
     */
    name?: (string | null);
    /**
     * URL of the conversation's thumbnail image
     */
    thumbnail_url?: (string | null);
    /**
     * List of participants in the conversation
     */
    participants: Array<Participant>;
    /**
     * List of messages in the conversation
     */
    messages: Array<MessageResData>;
};

