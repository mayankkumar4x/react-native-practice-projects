/* eslint-disable prettier/prettier */
import React, {createContext, useState} from 'react';
import Appwrite from './service';

export const AppwriteContext = createContext({
    appwrite: new Appwrite(),
    isLoggedIn: false,
    setIsLoggedIn: () => {},
});

export const AppwriteProvider = (children) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const defaultValues = {
        appwrite: new Appwrite(),
        isLoggedIn,
        setIsLoggedIn,
    };
  return (
    <AppwriteContext.Provider value={defaultValues}>
      {children}
    </AppwriteContext.Provider>
  );
};

export default AppwriteProvider;
