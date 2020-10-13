import React, { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../firebaseUtils/firebaseUtils";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const signup = async (email, password) => {
    return await auth.createUserWithEmailAndPassword(email, password);
  };

  const login = async (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  const logout = async () => {
    return auth.signOut();
  };

  const resetPassword = async (email) => {
    return auth.sendPasswordResetEmail(email);
  };

  const updatePassword = async (password) => {
    return currentUser.updatePassword(password);
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        signup,
        login,
        logout,
        resetPassword,
        updatePassword,
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
