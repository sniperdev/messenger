import React, { useState } from "react";
import ResetPasswordForm from "./ResetPasswordForm.jsx";
import { useNavigate } from "react-router-dom";

const ForgotPasswordPage = () => {
  const navigate = useNavigate();
  const [emailSend, setEmailSend] = useState(false);
  return (
    <div className="w-screen h-screen flex flex-col">
      <section className="flex flex-col p-3 mt-24 h-full md:w-1/3 mx-auto 2xl:w-1/5">
        <h1 className="my-5 text-4xl text-center">Forgot password?</h1>
        <h2 className="my-2 text-gray-600">
          No worries, we'll send you reset instructions.
        </h2>
        <ResetPasswordForm setEmailSend={setEmailSend} />
        {emailSend ? <p>Password reset email sent!</p> : null}
        <button className="w-full m-1 my-5 border rounded-lg border-black">
          <p className="inline" onClick={() => navigate("/")}>
            Back to sign in
          </p>
        </button>
      </section>
    </div>
  );
};

export default ForgotPasswordPage;
