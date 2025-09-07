/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserPreview } from './UserPreview';
export type FollowerFollowingResponse = {
    /**
     * List of user previews
     */
    users: Array<UserPreview>;
    /**
     * Cursor for the next page of results, if any
     */
    next_cursor?: (string | null);
};

