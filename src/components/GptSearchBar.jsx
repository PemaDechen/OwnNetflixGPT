import React from "react";
import { BACKGROUND_URL, SUPPORTED_LANGUAGES } from "../utils/constants";
import { useSelector } from "react-redux";
import language from "../utils/languageConstant";

export const GptSearchBar = () => {
  const searchValue = useSelector((store) => store?.config?.language);
  return (
    <>
      <div className="absolute -z-10">
        <img src={BACKGROUND_URL} alt="bg-img" />
      </div>
      <div className="pt-[10%] flex justify-center">
        <form action="" className="w-1/2 bg-black grid grid-cols-12">
          <input
            type="text"
            placeholder={language[searchValue]?.GPT_SEARCH_PLACEHOLDER}
            className="p-4 m-4 col-span-9 bg-white"
          />
          <button className="py-2 px-4 bg-red-700 text-white rounded-lg col-span-3 ">
            {language[searchValue]?.SEARCH}
          </button>
        </form>
      </div>
    </>
  );
};
