import React, { useContext } from "react";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import LoginContext from "../context/LoginContext.jsx";
import { signInWithPopup } from "firebase/auth";
import { auth, facebook, github, google } from "../configs/firebase-cofig.jsx";



const SocialMedia = ({ provider }) => {
  const { signIn, setUser} = useContext(LoginContext);

  const loginWithSocials=async()=> {
    let loginProvider;
    if(provider==="google"){
      loginProvider = google
    } else if(provider==="facebook"){
      loginProvider = facebook
    }
    else loginProvider = github;
    await signInWithPopup(auth, loginProvider).then((result) => {
      let newUser = result.user;
      setUser(newUser);
    });
  }
  return (
    <button className="w-full p-2 m-1 my-5 border rounded-lg border-black" onClick={loginWithSocials}>
      {provider === "google" ? (
        <FaGoogle className="inline w-8 h-8 mx-2"/>
      ) : provider === "facebook" ? (
        <FaFacebook className="inline w-8 h-8 mx-2" />
      ) : (
        <FaGithub className="inline w-8 h-8 mx-2" />
      )}
      <p className="inline">
        {signIn ? `Sign in with ${provider}` : `Sign up with ${provider}`}
      </p>
    </button>
  );
};

export default SocialMedia;
