// // src/authConfig.js
// export const msalConfig = {
//     auth: {
//       clientId: "ac17943a-98cb-48b9-8038-05031caa93cd", // Replace with your client ID
//       authority: "https://login.microsoftonline.com/d1f14348-f1b5-4a09-ac99-7ebf213cbc81", // Replace with your tenant ID
//       redirectUri: "http://localhost:3000", // Replace with your redirect URI
//     },
//     cache: {
//       cacheLocation: "localStorage",
//       storeAuthStateInCookie: false,
//     },
//   };
  
//   export const loginRequest = {
//     scopes: ["User.Read", "Files.ReadWrite.All"], // Required scopes
//   };
  

import { Configuration, PublicClientApplication } from '@azure/msal-browser';

const msalConfig = {
  auth: {
    clientId: "ac17943a-98cb-48b9-8038-05031caa93cd",
    authority: "https://login.microsoftonline.com/d1f14348-f1b5-4a09-ac99-7ebf213cbc81",
    redirectUri: "http://localhost:3000", // Replace with your redirect URI
  },
  cache: {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: false,
  },
};

const msalInstance = new PublicClientApplication(msalConfig);

export { msalInstance };