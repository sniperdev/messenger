import React, { useContext } from "react";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import LoginContext from "../context/LoginContext.jsx";

const SocialMedia = ({ provider }) => {
  const { signIn } = useContext(LoginContext);

  return (
    <button className="w-full p-2 m-1 my-5 border rounded-lg border-black">
      {provider === "Google" ? (
        <FaGoogle className="inline w-8 h-8 mx-2" />
      ) : provider === "Facebook" ? (
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
