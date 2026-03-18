import React from "react";

export const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-linear-to-r from-black to-transparent ">
      <h1 className="text-6xl font-bold"> {title}</h1>
      <p className="p-6 text-lg w-1/4 ">{overview}</p>
      <div className=" flex">
        <button className="bg-white  text-lg text-black p-4 px-10 font-bold rounded-lg  hover:opacity-80 flex">
          <span className="mr-2">
            {" "}
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              data-icon="PlayMedium"
              data-icon-id=":r6:"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              role="img"
            >
              <path
                fill="currentColor"
                d="M5 2.7a1 1 0 0 1 1.48-.88l16.93 9.3a1 1 0 0 1 0 1.76l-16.93 9.3A1 1 0 0 1 5 21.31z"
              ></path>
            </svg>
          </span>
          Play
        </button>
        <button className=" bg-gray-500 opacity-80 font-bold  text-white p-4 px-10 ml-4 rounded-xl text-lg bg-opacity-10 flex">
          <span className="mr-2">
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              data-icon="CircleIMedium"
              data-icon-id=":r7:"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              role="img"
            >
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2M0 12C0 5.373 5.373 0 12 0s12 5.373 12 12-5.373 12-12 12S0 18.627 0 12m13-2v8h-2v-8zm-1-1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
                clip-rule="evenodd"
              ></path>
            </svg>
          </span>
          More Info
        </button>
      </div>
    </div>
  );
};
