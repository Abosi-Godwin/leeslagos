import { createContext, useState, useEffect, useContext, useReducer } from "react";

import { getAuth, onAuthStateChanged } from "firebase/auth";

const AuthContext = createContext();
const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);

  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoading(false);
      }
    });

    () => unsubscribe();
  }, [auth]);

  return <AuthContext.Provider value={{ auth, loading }}>{children}</AuthContext.Provider>;
};

export { AuthProvider, useAuth };
