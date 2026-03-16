import React, { useRef, useState } from "react";
import { Header } from "./Header";
import { validate } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebaseconfig";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { PHOTO_URL } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const dispatch = useDispatch();

  const toggleSignInForm = () => {
    setSignIn(!isSignInForm);
  };

  const handleButtonClick = () => {
    const emailData = email?.current?.value;
    const passwordData = password?.current?.value;
    const nameData = name?.current?.value;
    const isValid = validate(emailData, passwordData);
    setErrorMessage(isValid);
    if (!isValid) {
      if (!isSignInForm) {
        console.log("When SignUp form");
        createUserWithEmailAndPassword(
          auth,
          email?.current?.value,
          password?.current?.value,
        )
          .then((userCredential) => {
            // Signed in successfully
            const user = userCredential.user;
            console.log("User created and signed in:", user);
            updateProfile(user, {
              displayName: nameData,
              photoURL:PHOTO_URL
            })
              .then(() => {
                const { uid, email, displayName, photoURL } = auth?.currentUser;
                dispatch(addUser({ uid, email, displayName, photoURL }));
              })
              .catch((error) => {
                // An error occurred
                console.error("Error updating user profile:", error);
                // ...
              });

            // You can now redirect the user or update the UI
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error("Error creating user:", errorCode, errorMessage);
            setErrorMessage(errorCode + "-" + errorMessage);

            // Handle specific error codes
            if (errorCode === "auth/email-already-in-use") {
              alert("The email address is already in use by another account.");
            } else if (errorCode === "auth/invalid-email") {
              alert("The email address is not valid.");
            } else if (errorCode === "auth/weak-password") {
              alert(
                "The password is too weak. Please choose a stronger password.",
              );
            } else if (errorCode === "auth/operation-not-allowed") {
              alert(
                "Email/Password sign-in is not enabled. Please enable it in the Firebase console.",
              );
            }
          });
      } else {
        signInWithEmailAndPassword(auth, emailData, passwordData)
          .then((userCredential) => {
            // Signed in successfully
            const { uid, email, displayName, photoURL } = userCredential.user;
            dispatch(addUser({ uid, email, displayName, photoURL }));

            // You can access user information like:
            // console.log("User ID:", user.uid);
            // console.log("User Email:", user.email);
            // ... further actions like redirecting to a dashboard
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error("Error signing in:", errorCode, errorMessage);

            // Handle specific error codes
            switch (errorCode) {
              case "auth/invalid-email":
                console.error("The email address is not valid.");
                break;
              case "auth/user-disabled":
                console.error("This user account has been disabled.");
                break;
              case "auth/user-not-found":
                console.error("No user found with this email.");
                break;
              case "auth/wrong-password":
                console.error("Incorrect password.");
                break;
              // Add more specific error handling as needed
              default:
                console.error("An unknown error occurred.");
            }
          });
      }
    }
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
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white opacity-90"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="m-4 p-4 w-full bg-gray-900 text-white"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="m-4 p-4 w-full bg-gray-900 text-white"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="m-4 p-4 w-full bg-gray-900 text-white"
        />
        {errorMessage && (
          <p className="text-red-500 text-lg font-bold pl-4">{errorMessage}</p>
        )}
        <button
          className="m-4 p-4 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 m-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already a User? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
