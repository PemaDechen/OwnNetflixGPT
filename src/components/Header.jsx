import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebaseconfig";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO_URL, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { updateLanguage } from "../utils/configSlice";
import language from "../utils/languageConstant";

export const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const searchValue = useSelector((store) => store?.config?.language);
  const isGptSearch = useSelector((store) => store.gpt?.showGptSearch);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user && auth?.currentUser) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          }),
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("signout success");
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };

  const handleGptSearch = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(updateLanguage(e.target.value));
  };
  return (
    <div className="absolute w-screen px-8 py-2 bg-linear-to-b from-black flex justify-between z-50">
      <img className="w-52" src={LOGO_URL} alt="netflix-logo" />
      {user && (
        <div className="flex p-2 items-center ">
          <select
            className="px-4 py-4 m-2 bg-gray-900 text-white "
            onChange={handleLanguageChange}
          >
            {SUPPORTED_LANGUAGES.map((data) => (
              <option key={data?.identifier} value={data?.identifier}>
                {data?.name}
              </option>
            ))}
          </select>
          <button
            className=" mx-2 my-2 p-4 bg-red-700 text-white rounded-lg"
            onClick={handleGptSearch}
          >
            {!isGptSearch
              ? language[searchValue]?.GPT_SEARCH
              : language[searchValue]?.HOME_PAGE}
          </button>
          <img className="w-12 h-12 " src={user?.photoURL} alt="photo-icon" />
          <button className="font-bold text-white ml-2" onClick={handleSignOut}>
            {language[searchValue]?.SIGN_OUT}
          </button>
        </div>
      )}
    </div>
  );
};
