// src/UserDataContext.js
import React, { createContext } from 'react';
import useUserData from '../Componentes/Assests/userData'

export const UserDataContext = createContext(null);

export const UserDataProvider = ({ children }) => {
  const userData = useUserData();

  return (
    <UserDataContext.Provider value={userData}>
      {children}
    </UserDataContext.Provider>
  );
};

export default UserDataContext;
