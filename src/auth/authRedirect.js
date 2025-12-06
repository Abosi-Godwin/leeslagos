import { useEffect } from "react";

import { useAuth } from "../contexts/auth";
import { useNavigate } from "react-router-dom";


export const AuthRedirect = ({ children }) => {
  const navigate = useNavigate();

  const { auth, loading } = useAuth();
  const isAuthenticated = auth?.currentUser;

  useEffect(() => {
    if (!loading && isAuthenticated) {
      navigate("/", {
        replace: true,
      });
    }
  }, [isAuthenticated, loading, navigate]);

  return !isAuthenticated && children;
};
