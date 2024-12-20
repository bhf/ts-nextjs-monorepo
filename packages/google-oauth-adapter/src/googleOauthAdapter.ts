import { OAuthRequest, OAuthResponse, OAuthServiceProvider } from "@bhf/models";
import { OauthProviderPort } from "@bhf/ports";

export class GoogleOauthAdapter extends OauthProviderPort {
    processOauthRequest(request: OAuthRequest): OAuthResponse {
        return {userId: "string",
            provider: OAuthServiceProvider.GOOGLE,
            status: "string"}
    }

}