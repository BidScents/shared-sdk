/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AuctionExpiryContent } from './AuctionExpiryContent';
import type { CommentContent } from './CommentContent';
import type { FollowedSellerListingContent } from './FollowedSellerListingContent';
import type { FollowerContent } from './FollowerContent';
import type { ListingContent } from './ListingContent';
import type { MessageContent } from './MessageContent';
import type { NotificationPriority } from './NotificationPriority';
import type { NotificationType } from './NotificationType';
import type { OutbidContent } from './OutbidContent';
export type NotificationData = {
    /**
     * The unique identifier of the notification
     */
    id: string;
    /**
     * The type of notification
     */
    type: NotificationType;
    /**
     * The title of the notification
     */
    title: string;
    /**
     * The body text of the notification
     */
    body: string;
    /**
     * The data associated with the notification
     */
    content: (OutbidContent | MessageContent | FollowerContent | ListingContent | AuctionExpiryContent | CommentContent | FollowedSellerListingContent);
    /**
     * Whether the notification has been seen
     */
    seen: boolean;
    /**
     * The priority of the notification
     */
    priority: NotificationPriority;
    /**
     * The timestamp when the notification was created
     */
    created_at: string;
};

