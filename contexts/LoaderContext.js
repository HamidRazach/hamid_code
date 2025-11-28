import React, { createContext, useContext, useState, useEffect } from 'react';

const LoaderContext = createContext();

export const useLoader = () => {
  const context = useContext(LoaderContext);
  if (!context) {
    throw new Error('useLoader must be used within a LoaderProvider');
  }
  return context;
};

export const LoaderProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasShownLoader, setHasShownLoader] = useState(false);

  useEffect(() => {
    // Check if loader has been shown in this session
    const sessionKey = 'loaderShown';
    const hasShown = sessionStorage.getItem(sessionKey);
    
    if (hasShown) {
      // If loader was already shown in this session, don't show it again
      setIsLoading(false);
      setHasShownLoader(true);
    } else {
      // Show loader for the first time in this session
      const timer = setTimeout(() => {
        setIsLoading(false);
        setHasShownLoader(true);
        // Mark that loader has been shown in this session
        sessionStorage.setItem(sessionKey, 'true');
      }, 2000); // Show loader for 2 seconds

      return () => clearTimeout(timer);
    }
  }, []);

  const value = {
    isLoading,
    hasShownLoader,
    setIsLoading
  };

  return (
    <LoaderContext.Provider value={value}>
      {children}
    </LoaderContext.Provider>
  );
};
