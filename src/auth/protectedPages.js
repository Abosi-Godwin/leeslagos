import { useEffect } from "react";

import { useAuth } from "../contexts/auth";
import { useNavigate } from "react-router-dom";

import Loader from "../components/loader";

export const ProtectedPages = ({ children }) => {
  const navigate = useNavigate();

  const { auth, loading } = useAuth();
  const isAuthenticated = auth?.currentUser;

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      navigate("/login", {
        replace: true,
      });
    }  
  }, [isAuthenticated, loading, navigate]);

  return isAuthenticated && children;
};
