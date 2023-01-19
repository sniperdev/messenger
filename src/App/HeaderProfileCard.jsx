import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../configs/firebase-cofig.jsx";
import { useNavigate } from "react-router-dom";

const HeaderProfileCard = () => {
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);
  const [avatar, setAvatar] = useState("https://ui-avatars.com/api/?name=");
  const [name, setName] = useState("");
  useEffect(() => {
    if (user) {
      if (user.photoURL) setAvatar(user.photoURL);
      else setAvatar("https://ui-avatars.com/api/?name=" + user.displayName);
      setName(user.displayName);
    }
  }, [loading]);

  return (
    <div className="h-full flex items-center">
      <img src={avatar} alt="profile picture" className="h-14 rounded-full" />
      <div className="mx-2">
        <h1>{name}</h1>
        <a
          onClick={() => navigate("/settings")}
          className="hover:underline hover:cursor-pointer"
        >
          Settings
        </a>
      </div>
    </div>
  );
};

export default HeaderProfileCard;
