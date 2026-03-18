import React from "react";
import { MovieCart } from "./MovieCart";

export const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6 ">
      <h1 className="text-3xl font-bold text-white py-4">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex ">
          {movies?.map((data) => (
            <MovieCart key={data?.id} posterPath={data?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};
