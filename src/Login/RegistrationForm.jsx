import React, { useContext } from "react";
import LoginContext from "../context/LoginContext.jsx";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const navigate = useNavigate();
  const { signIn, handleSubmitForm } = useContext(LoginContext);
  return (
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
      <a
        className="text-sky-500 hover:underline hover:cursor-pointer"
        onClick={() => navigate("/forgot")}
      >
        Forgot Password?
      </a>
      <button
        type="submit"
        className="w-full rounded-lg bg-green-600 p-2 text-white text-lg my-3"
      >
        {signIn ? "Sign in" : "Sign up"}
      </button>
    </form>
  );
};

export default RegistrationForm;
