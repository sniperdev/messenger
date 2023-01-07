import React, { useContext } from "react";
import LoginContext from "../context/LoginContext.jsx";

const CreateAccountButton = () => {
  const { signIn, setSignIn } = useContext(LoginContext);
  return (
    <button
      onClick={() => setSignIn(!signIn)}
      className="mt-auto rounded-lg border border-black p-1"
    >
      {signIn ? "Create an account" : "Sign In"}
    </button>
  );
};

export default CreateAccountButton;
