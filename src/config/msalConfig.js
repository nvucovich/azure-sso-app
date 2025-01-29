import { PublicClientApplication } from "@azure/msal-browser";

const MSAL_CONFIG = {
    auth: {
        clientId: "Application_client_ID", // Replace with your Azure AD client ID
        authority: "https://login.microsoftonline.com/YOUR_TENANT_NAME.onmicrosoft.com", // Replace with your tenant
        redirectUri: "http://localhost:3000",
    },
    cache: {
        cacheLocation: "localStorage",
        storeAuthStateInCookie: false,
    },
};

const LOGIN_REQUEST = {
    scopes: ["openid", "profile", "User.Read"]
};

const PUBLIC_CLIENT_APPLICATION = new PublicClientApplication(MSAL_CONFIG);

// Initialize MSAL
PUBLIC_CLIENT_APPLICATION.initialize();

export {
    MSAL_CONFIG,
    LOGIN_REQUEST,
    PUBLIC_CLIENT_APPLICATION
};