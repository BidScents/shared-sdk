/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type PreferencesResponse = {
    /**
     * Someone favorites the user's listings
     */
    listing_favorited: boolean;
    /**
     * User's favorite listing is edited
     */
    favorite_listing_edited: boolean;
    /**
     * Someone bids on the user's listings
     */
    listing_bid: boolean;
    /**
     * User has been outbid on an auction
     */
    outbid: boolean;
    /**
     * Auction the user has bid in is 5 mins to expiry or has expired
     */
    auction_expiry: boolean;
    /**
     * Auction user has bid on is extended
     */
    auction_extension: boolean;
    /**
     * User gets a new follower
     */
    new_follower: boolean;
    /**
     * User's listing gets a comment
     */
    listing_comment: boolean;
    /**
     * User receives a message
     */
    message: boolean;
};

