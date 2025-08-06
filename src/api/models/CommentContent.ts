/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListingPreview } from './ListingPreview';
import type { UserPreview } from './UserPreview';
export type CommentContent = {
    /**
     * Details of the listing that received a comment
     */
    listing: ListingPreview;
    /**
     * Details of the user who commented
     */
    commenter: UserPreview;
};

