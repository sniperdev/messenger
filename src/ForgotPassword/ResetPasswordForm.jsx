import React, { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../configs/firebase-cofig.jsx";
const ResetPasswordForm = ({ setEmailSend }) => {
  const [errorMessage, setErrorMessage] = useState("");

  async function handleResetPassword(e) {
    e.preventDefault();
    const email = e.target.email.value;
    await sendPasswordResetEmail(auth, email)
      .then(() => {
        setEmailSend(true);
      })
      .catch((error) => {
        setErrorMessage(error.code);
      });
  }

  return (
    <form onSubmit={handleResetPassword}>
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
      <button
        type="submit"
        className="w-full rounded-lg bg-green-600 p-2 text-white text-lg my-3"
      >
        Reset Password
      </button>
      {errorMessage === "auth/missing-email" ? (
        <p>The email provided does not exist</p>
      ) : null}
    </form>
  );
};

export default ResetPasswordForm;
