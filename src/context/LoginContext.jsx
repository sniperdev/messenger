import React, { createContext, useState } from "react";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../configs/firebase-cofig.jsx";

const LoginContext = createContext({});
export const LoginProvider = ({ children }) => {
  const [signIn, setSignIn] = useState(false);
  async function SignUpWithEmail(name, email, password) {
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        updateProfile(auth.currentUser, {
          displayName: name,
        });
        sendEmailVerification(user);
      })
      .catch((error) => {
        console.error(error.code, error.message);
      });
  }
  async function SingInWithEmail(email, password) {
    await signInWithEmailAndPassword(auth, email, password);
  }

  async function handleSubmitForm(e) {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (signIn) await SingInWithEmail(email, password);
    else await SignUpWithEmail(name, email, password);
  }
  return (
    <LoginContext.Provider
      value={{
        signIn,
        setSignIn,
        handleSubmitForm,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContext;
