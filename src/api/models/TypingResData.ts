/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserPreview } from './UserPreview';
export type TypingResData = {
    /**
     * ID of the conversation
     */
    conversation_id: string;
    /**
     * Indicates if the user is typing or stopped typing
     */
    is_typing: boolean;
    /**
     * Information about the user who is typing
     */
    user: UserPreview;
};

