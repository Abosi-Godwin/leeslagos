import { useEffect } from "react";
import { useAuth } from "../contexts/auth";
import { useNavigate } from "react-router-dom";

import Loader from "../components/loader";

export const ProtectedPages = ({ children }) => {
    const navigate = useNavigate();

    const { user, isAuthenticated, loading } = useAuth();

    useEffect(() => {
        if (!loading && !isAuthenticated) {
            navigate("/login", {
                replace: true
            });
        }
    }, [isAuthenticated, loading]);

    return isAuthenticated && children;
};
