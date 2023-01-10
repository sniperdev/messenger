import React from "react";
import { LoginProvider } from "../context/LoginContext";
import LoginPage from "./LoginPage.jsx";

const Login = () => {
  return (
    <LoginProvider>
      <LoginPage />
    </LoginProvider>
  );
};

export default Login;
