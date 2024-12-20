import { GoogleOauthAdapter } from "@bhf/google-oauth-adapter";
import { OAuthRequest } from "@bhf/models";

const oauthAdapter = new GoogleOauthAdapter("GOOGLE");

/**
 * Don't really use this, it's just an example of how to use multi
 * modules and a ports and adaptors style design with abstract Typescript
 * classes.
 * 
 * @param request
 * @returns 
 */
export async function processOAuthRequest(request: OAuthRequest){
    return oauthAdapter.processOauthRequest(request);
}