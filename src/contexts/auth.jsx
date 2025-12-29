import { createContext, useState, useEffect, useContext } from "react";

import { getAuth, onAuthStateChanged } from "firebase/auth";

const AuthContext = createContext();
const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    const auth = getAuth();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, [auth]);

    const isAuthenticated = Boolean(user?.uid);

    return (
        <AuthContext.Provider value={{ isAuthenticated, auth, user, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthProvider, useAuth };
