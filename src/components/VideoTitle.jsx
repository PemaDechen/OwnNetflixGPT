import React from "react";

export const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black ">
      <h1 className="text-6xl font-bold"> {title}</h1>
      <p className="p-6 text-lg w-1/4 ">{overview}</p>
      <div className="">
        <button className="bg-white text-black p-4 px-10 font-bold rounded-lg text-lg hover:opacity-80">
          ▶️ Play
        </button>
        <button className="bg-gray-500 text-white p-4 px-10 ml-4 rounded-xl text-lg bg-opacity-10">
          ❕More Info
        </button>
      </div>
    </div>
  );
};
