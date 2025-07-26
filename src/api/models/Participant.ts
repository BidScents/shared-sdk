/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserPreview } from './UserPreview';
export type Participant = {
    /**
     * Preview of the participant's user information
     */
    user: UserPreview;
    /**
     * Timestamp when the participant last read the conversation, in ISO 8601 format
     */
    last_read_at?: (string | null);
};

