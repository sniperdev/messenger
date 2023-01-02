import React, { useState } from "react";
import { BsFacebook } from "react-icons/bs";
import { FaDiscord, FaGithub, FaGoogle } from "react-icons/fa";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import { auth } from "../configs/firebase-cofig";
const LoginPage = () => {
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
    <div className="h-screen w-screen">
      <section className="flex flex-col p-3 h-full md:w-1/3 mx-auto 2xl:w-1/5">
        <h1 className="my-5 text-4xl text-center">
          {signIn ? "Sign In" : "Sign up"}
        </h1>
        <div className="text-center">
          <div className="p-2 m-1 my-5 border rounded-lg border-black">
            <FaGoogle className="inline w-8 h-8 mx-2" />
            <p className="inline">
              {signIn ? "Sign in with Google" : "Sign up with Google"}
            </p>
          </div>
          <div className="p-2 m-1 my-5 border rounded-lg border-black">
            <BsFacebook className="inline w-8 h-8 mx-2" />
            <p className="inline">
              {signIn ? "Sign in with Facebook" : "Sign up with Facebook"}
            </p>
          </div>
          <div className="p-2 m-1 my-5 border rounded-lg border-black">
            <FaGithub className="inline w-8 h-8 mx-2" />
            <p className="inline">
              {signIn ? "Sign in with Github" : "Sign up with Github"}
            </p>
          </div>
        </div>
        <h2 className="text-center">
          {signIn ? "or sign in with your email" : "or sign up with your email"}
        </h2>
        <form onSubmit={handleSubmitForm} className="my-4">
          {!signIn && (
            <label>
              <p>Name</p>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                className="border border-black rounded-lg p-2 w-full"
                required
              />
            </label>
          )}

          <label>
            <p>Email address</p>
            <input
              type="email"
              name="email"
              placeholder="Email address"
              className="border border-black rounded-lg p-2 w-full"
              required
            />
          </label>
          <label>
            <p className="inline">Password</p>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="border border-black rounded-lg p-2 w-full"
              required
            />
          </label>
          <button
            type="submit"
            className="w-full rounded-lg bg-green-600 p-2 text-white text-lg my-3"
          >
            {signIn ? "Sign in" : "Sign up"}
          </button>
        </form>
        <button
          onClick={() => {
            if (signIn) setSignIn(false);
            else setSignIn(true);
          }}
          className="mt-auto rounded-lg border border-black p-1"
        >
          {signIn ? "Create an account" : "Sign In"}
        </button>
      </section>
    </div>
  );
};

export default LoginPage;
