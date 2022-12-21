import React from "react";
import { BsFacebook } from "react-icons/bs";
import { FaDiscord, FaGoogle } from "react-icons/fa";

import {createUserWithEmailAndPassword, sendEmailVerification} from "firebase/auth"
import {auth} from "../configs/firebase-cofig"
const LoginPage = () => {
  async function RegisterWithEmail(email,password) {
    await createUserWithEmailAndPassword(auth, email, password).then((userCredentials) => {
      const user = userCredentials.user;
      console.log(user);
      sendEmailVerification(user);
    }).catch((error) => {
      console.error(error.code, error.message);
    })

  }

  async function handleSubmitForm(e) {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    await RegisterWithEmail(email,password);
  }

  return (
    <div className="flex justify-center items-center w-screen h-screen bg-neutral-800">
      <section className="h-2/3 w-1/4 bg-neutral-900 rounded-lg border border-orange-700">
        <div className="flex flex-col h-2/3 px-20 py-10">
          <h1 className="text-lg font-bold text-amber-600">Login</h1>
          <form onSubmit={handleSubmitForm}>
            <input
              type="email"
              placeholder="Email address"
              className="block rounded-xl p-1 w-full my-4 bg-zinc-800 text-amber-600 placeholder:text-amber-700 outline-none focus:outline-amber-600"
            />
            <input
              type="password"
              placeholder="Password"
              className="block rounded-xl p-1 w-full my-4 bg-zinc-800 text-amber-600 placeholder:text-amber-700 outline-none focus:outline-amber-600"
            />
            <button
              type="submit"
              className="block w-full py-2 my-2 rounded-xl bg-gradient-to-b from-orange-600 to-orange-700 text-white"
            >
              Login
            </button>
          </form>
        </div>
        <div className="h-1/3 px-20 py-10 bg-zinc-800">
          <p className="text-white text-center">Login with social media</p>
          <div className="flex justify-around m-4">
            <BsFacebook className="inline w-8 h-8 text-blue-500" />
            <FaDiscord className="inline w-8 h-8 text-violet-800" />
            <FaGoogle className="inline w-8 h-8 text-red-800" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
