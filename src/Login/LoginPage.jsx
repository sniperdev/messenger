import React, { useContext } from "react";
import LoginContext from "../context/LoginContext.jsx";
import LoginWithSocialmedia from "./LoginWithSocialmedia.jsx";
import CreateAccountButton from "./CreateAccountButton.jsx";
import RegistrationForm from "./RegistrationForm.jsx";
const LoginPage = () => {
  const { signIn } = useContext(LoginContext);
  return (
    <div className="h-screen w-screen">
      <section className="flex flex-col p-3 h-full md:w-1/3 mx-auto 2xl:w-1/5">
        <h1 className="my-5 text-4xl text-center">
          {signIn ? "Sign In" : "Sign Up"}
        </h1>
        <LoginWithSocialmedia />
        <h2 className="text-center">
          {signIn ? "or sign in with your email" : "or sign up with your email"}
        </h2>
        <RegistrationForm />
        <CreateAccountButton />
      </section>
    </div>
  );
};

export default LoginPage;
