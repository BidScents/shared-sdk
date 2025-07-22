/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AuctionDetails } from './AuctionDetails';
import type { CommentDetails } from './CommentDetails';
import type { ListingDetails } from './ListingDetails';
import type { UserPreview } from './UserPreview';
/**
 * Response model for listing details.
 */
export type ListingDetailsResponse = {
    /**
     * Details of the listing
     */
    listing: ListingDetails;
    /**
     * Seller information for the listing
     */
    seller: UserPreview;
    /**
     * List of image URLs for the listing
     */
    image_urls: Array<string>;
    /**
     * Number of favorites for the listing
     */
    favorites_count: number;
    /**
     * Total number of votes for the listing
     */
    total_votes: number;
    /**
     * Indicates whether the user has upvoted the listing. False if downvote and None if no vote or no user
     */
    is_upvoted?: (boolean | null);
    /**
     * Comments on the listing sorted by post time
     */
    comments?: (Array<CommentDetails> | null);
    /**
     * Auction details if the listing is an auction
     */
    auction_details?: (AuctionDetails | null);
};

