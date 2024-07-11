// src/components/Authentication.js
import React from 'react';
import { MsalProvider, useMsal, useIsAuthenticated } from '@azure/msal-react';
import { PublicClientApplication } from '@azure/msal-browser';
import { msalConfig, loginRequest } from '../authConfig';

const pca = new PublicClientApplication(msalConfig);

const SignInButton = () => {
  const { instance } = useMsal();

  const handleLogin = () => {
    instance.loginPopup(loginRequest).catch((error) => {
      console.error(error);
    });
  };

  return <button onClick={handleLogin}>Sign in</button>;
};

const SignOutButton = () => {
  const { instance } = useMsal();

  const handleLogout = () => {
    instance.logoutPopup().catch((error) => {
      console.error(error);
    });
  };

  return <button onClick={handleLogout}>Sign out</button>;
};

const AuthContent = () => {
  const isAuthenticated = useIsAuthenticated();

  return (
    <div>
      {isAuthenticated ? (
        <>
          <p>Signed in</p>
          <SignOutButton />
        </>
      ) : (
        <SignInButton />
      )}
    </div>
  );
};

const Authentication = ({ children }) => {
  return (
    <MsalProvider instance={pca}>
      <AuthContent />
      {children}
    </MsalProvider>
  );
};

export default Authentication;
