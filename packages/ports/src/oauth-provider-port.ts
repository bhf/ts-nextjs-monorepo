import { OAuthRequest, OAuthResponse } from "@bhf/models"

export abstract class OauthProviderPort {

    name: string

    /**
     * 
     * @param name The name of the provider of the OAuth service.
     */
    constructor(name: string) {
        this.name = name
    }

    /**
     * Process an OAuth Request in a provider specific way.
     * 
     * @param request The request for OAuth.
     */
    abstract processOauthRequest(request: OAuthRequest): OAuthResponse
}