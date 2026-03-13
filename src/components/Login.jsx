import React, { useState } from "react";
import { Header } from "./Header";

const Login = () => {
  const [isSignIn, setSignIn] = useState(true);
  const handleSignUp = () => {
    setSignIn(!isSignIn);
  };
  return (
    <div>
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/eb110559-67e9-40ec-8f1c-4a45b9f9c9bb/web/IN-en-20260309-TRIFECTA-perspective_6796824d-3538-42c9-95e0-baabc0fdbadf_large.jpg"
          alt="bg-img"
        />
      </div>

      <Header />
      <form
        action=""
        className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white opacity-90"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && <input
          type="text"
          placeholder="Full Name"
          className="m-4 p-4 w-full bg-gray-900 text-white"
        />}
        <input
          type="text"
          placeholder="Email Address"
          className="m-4 p-4 w-full bg-gray-900 text-white"
        />
        <input
          type="password"
          placeholder="Password"
          className="m-4 p-4 w-full bg-gray-900 text-white"
        />
        <button className="m-4 p-4 bg-red-700 w-full rounded-lg cursor-pointer">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 m-4 cursor-pointer" onClick={handleSignUp}>
          {isSignIn
            ? "New to Netflix? Sign Up Now"
            : "Already a User? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
