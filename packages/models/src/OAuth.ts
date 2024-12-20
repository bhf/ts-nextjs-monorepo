/**
 * Represents an OAuth Request to an OAuth Provider.
 */
export interface OAuthRequest{
    userId: string,
    provider: OAuthServiceProvider
}

/**
 * The response from an OAuth Request.
 */
export interface OAuthResponse{
    userId: string,
    provider: OAuthServiceProvider,
    status: string
}

/**
 * OAuth Providers.
 */
export enum OAuthServiceProvider{
    GITHUB, GOOGLE, FACEBOOK, TIKTOK, KEYCLOAK
}