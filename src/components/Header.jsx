import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../utils/firebaseconfig";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store=>store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("User signed out successfully.");
        navigate("/")
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };
  return (
    <div className="absolute w-screen px-8 py-2 bg-linear-to-b from-black flex justify-between">
      <img
        className="w-52"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-02-12/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="netflix-logo"
      />
      {user && <div className="flex p-2">
        <img
          className="w-12 h-12 "
          src={user?.photoURL}
          alt="photo-icon"
        />
        <button className="font-bold text-white" onClick={handleSignOut}>(Sign Out)</button>
      </div>}
    </div>
  );
};
