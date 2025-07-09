/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { app__api__v1__models__common__User } from './app__api__v1__models__common__User';
/**
 * Model representing comments on a listing
 */
export type CommentDetails = {
    /**
     * Unique identifier for the comment
     */
    id: string;
    /**
     * User who wrote the comment or None if the user has deleted their account
     */
    commenter?: (app__api__v1__models__common__User | null);
    /**
     * The text content of the comment
     */
    content: string;
    /**
     * Time comment was posted in ISO 8601 format
     */
    created_at: string;
};

