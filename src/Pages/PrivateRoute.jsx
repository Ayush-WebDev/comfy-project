import React from "react";
import { useGlobalContext } from "../Context";
import { Navigate } from "react-router-dom";
const PrivateRoute = ({ children }) => {
  const { user, isAuthenticated } = useGlobalContext();
  const isUser = user && isAuthenticated;
  if (!isUser) {
    return <Navigate to="/"></Navigate>;
  }
  return <>{children}</>;
};

export default PrivateRoute;
