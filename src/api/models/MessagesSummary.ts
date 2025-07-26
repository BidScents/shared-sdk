/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ConversationSummary } from './ConversationSummary';
export type MessagesSummary = {
    /**
     * Total number of unread messages across all conversations
     */
    total_unread: number;
    /**
     * List of conversations with their summaries in order of recency
     */
    conversations: Array<ConversationSummary>;
};

