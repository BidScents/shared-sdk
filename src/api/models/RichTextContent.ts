/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ListingPreview } from './ListingPreview';
export type RichTextContent = {
    /**
     * Rich text content of the message
     */
    text: string;
    /**
     * Listing associated with the message if applicable
     */
    listing?: (ListingPreview | null);
};

