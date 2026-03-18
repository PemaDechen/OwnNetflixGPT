import React from "react";
import { IMAGE_CDN_URL } from "../utils/constants";

export const MovieCart = ({posterPath }) => {
  return (
    <div className="w-48 pr-4">
      <img src={IMAGE_CDN_URL + posterPath} alt="movie-image" />
    </div>
  );
};
