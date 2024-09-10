// src/pages/AuthCallback.tsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const AuthCallback: React.FC = () => {
  const { handleRedirectCallback, isAuthenticated, isLoading, error } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    const processAuth = async () => {
      try {
        // Process the authentication callback and handle tokens
        await handleRedirectCallback();
      } catch (err) {
        console.error('Error during Auth0 callback handling:', err);
      }
    };

    // Process the callback when the component mounts
    processAuth();
  }, [handleRedirectCallback]);

  // Handle redirection after loading finishes and user is authenticated
  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      navigate('/home'); // Redirect to home page after successful login
    }
  }, [isLoading, isAuthenticated, navigate]);

  // Display loading screen while processing
  if (isLoading) return <div>Loading...</div>;

  // Handle any errors
  if (error) return <div>Error during authentication: {error.message}</div>;

  return <div>Processing login...</div>;
};

export default AuthCallback;
