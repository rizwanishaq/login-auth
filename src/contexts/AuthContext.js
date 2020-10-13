import React, { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../firebaseUtils/firebaseUtils";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();

  const signup = async (email, password) => {
    return await auth.createUserWithEmailAndPassword(email, password);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        signup,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
