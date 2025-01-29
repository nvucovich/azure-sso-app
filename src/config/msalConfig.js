import { PublicClientApplication } from "@azure/msal-browser";

const MSAL_CONFIG = {
    auth: {
        clientId: "73206791-175d-4a10-9ec2-c1a550fcce8c", // Replace with your Azure AD client ID
        authority: "https://login.microsoftonline.com/nathansorg2.onmicrosoft.com", // Replace with your tenant
        redirectUri: "http://localhost:3000",
    },
    cache: {
        cacheLocation: "localStorage",
        storeAuthStateInCookie: true,
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