import React, { useEffect } from "react";
import Header from "./Header.jsx";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../configs/firebase-cofig.jsx";
import FriendsList from "./FriendsList.jsx";

const MainApp = () => {
  const navigate = useNavigate();
  const [userLogin, loading] = useAuthState(auth);
  useEffect(() => {
    if (!userLogin && !loading) navigate("/");
  }, [loading]);

  return (
    <>
      <Header />
      <section className="flex flex-col">
        <FriendsList />
      </section>
    </>
  );
};

export default MainApp;
