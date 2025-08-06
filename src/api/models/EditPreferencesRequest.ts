/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type EditPreferencesRequest = {
    /**
     * Someone favorites the user's listings
     */
    listing_favorited?: (boolean | null);
    /**
     * User's favorite listing is edited
     */
    favorite_listing_edited?: (boolean | null);
    /**
     * Someone bids on the user's listings
     */
    listing_bid?: (boolean | null);
    /**
     * User has been outbid on an auction
     */
    outbid?: (boolean | null);
    /**
     * Auction the user has bid in is 5 mins to expiry or has expired
     */
    auction_expiry?: (boolean | null);
    /**
     * Auction user has bid on is extended
     */
    auction_extension?: (boolean | null);
    /**
     * User gets a new follower
     */
    new_follower?: (boolean | null);
    /**
     * User's listing gets a comment
     */
    listing_comment?: (boolean | null);
    /**
     * User receives a message
     */
    message?: (boolean | null);
};

