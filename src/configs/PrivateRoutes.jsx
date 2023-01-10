import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import LoginContext from "../context/LoginContext.jsx";

const PrivateRoutes = () => {
  const { user } = useContext(LoginContext);
  return user.length ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
