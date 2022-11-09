import { Spinner } from "flowbite-react";
import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <Spinner
        className="mt-10"
        aria-label="Extra large spinner example"
        size="xl"
      />
    );
  }

  if (user) {
    return children;
  }

  return <Navigate to={`/login`} state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
