/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ConversationResponse } from '../models/ConversationResponse';
import type { MessageRequest } from '../models/MessageRequest';
import type { MessageResData } from '../models/MessageResData';
import type { MessagesSummary } from '../models/MessagesSummary';
import type { WSMessageResponse } from '../models/WSMessageResponse';
import type { WSTypingRequest } from '../models/WSTypingRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class MessageService {
    /**
     * Send Message
     * @param conversationId
     * @param requestBody
     * @returns MessageResData Successful Response
     * @throws ApiError
     */
    public static sendMessageV1MessageConversationIdPost(
        conversationId: string,
        requestBody: MessageRequest,
    ): CancelablePromise<MessageResData> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v1/message/{conversation_id}',
            path: {
                'conversation_id': conversationId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Contact Seller
     * Endpoint to initiate contact or get existing conversation with a seller.
     * @param sellerId
     * @returns ConversationResponse Successful Response
     * @throws ApiError
     */
    public static contactSellerV1MessageContactSellerSellerIdGet(
        sellerId: string,
    ): CancelablePromise<ConversationResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/message/contact-seller/{seller_id}',
            path: {
                'seller_id': sellerId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Last Read
     * Update the last read timestamp for a conversation.
     * @param conversationId
     * @returns void
     * @throws ApiError
     */
    public static updateLastReadV1MessageUpdateLastReadPatch(
        conversationId: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/v1/message/update-last-read',
            query: {
                'conversation_id': conversationId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Conversation
     * Get a conversation by its ID and mark the conversation as read.
     * @param conversationId
     * @returns ConversationResponse Successful Response
     * @throws ApiError
     */
    public static getConversationV1MessageConversationConversationIdGet(
        conversationId: string,
    ): CancelablePromise<ConversationResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/message/conversation/{conversation_id}',
            path: {
                'conversation_id': conversationId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Conversation Summary
     * Get a summary of all conversations for the current user.
     * @returns MessagesSummary Successful Response
     * @throws ApiError
     */
    public static getConversationSummaryV1MessageSummaryGet(): CancelablePromise<MessagesSummary> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/message/summary',
        });
    }
    /**
     * Get Messages
     * Get messages for a conversation with cursor pagination.
     * @param conversationId
     * @param cursor Timestamp of last cursor in ISO format
     * @param limit
     * @returns MessageResData Successful Response
     * @throws ApiError
     */
    public static getMessagesV1MessageMessagesConversationIdGet(
        conversationId: string,
        cursor: string,
        limit: number = 20,
    ): CancelablePromise<Array<MessageResData>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/message/messages/{conversation_id}',
            path: {
                'conversation_id': conversationId,
            },
            query: {
                'cursor': cursor,
                'limit': limit,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Ws Types
     * Dummy endpoint so openapi codegen can generate the WebSocket types.
     * @param requestBody
     * @returns WSMessageResponse Successful Response
     * @throws ApiError
     */
    public static getWsTypesV1MessageWsTypesGet(
        requestBody: (WSTypingRequest | null),
    ): CancelablePromise<WSMessageResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v1/message/ws-types',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
