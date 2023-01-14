import React, { createContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../configs/firebase-cofig.jsx";

const AppContext = createContext({});
export const AppProvider = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  return (
    <AppContext.Provider value={{ user, loading }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
