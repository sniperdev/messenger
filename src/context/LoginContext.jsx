import React, { createContext } from "react";

const LoginContext = createContext({});
const LoginProvider = ({ children }) => {
  return <LoginContext.Provider value={{}}>{children}</LoginContext.Provider>;
};

export default LoginProvider;
