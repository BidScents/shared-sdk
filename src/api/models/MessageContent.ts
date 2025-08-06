/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserPreview } from './UserPreview';
export type MessageContent = {
    /**
     * ID of the message
     */
    message_id: string;
    /**
     * ID of the conversation
     */
    conversation_id: string;
    /**
     * Details of the user who sent the message
     */
    sender: UserPreview;
    /**
     * Timestamp when the message was sent
     */
    sent_at: string;
};

