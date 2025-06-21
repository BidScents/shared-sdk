/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type User = {
    id: string;
    username: string;
    first_name: string;
    last_name: string;
    profile_image_url?: (string | null);
    cover_image_url?: (string | null);
    bio?: (string | null);
    location?: (string | null);
    is_admin?: boolean;
    badges?: Array<string>;
    eligible_for_swap_until?: (string | null);
    onboarded_at?: (string | null);
};

