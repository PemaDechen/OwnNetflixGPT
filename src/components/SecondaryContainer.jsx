import React from "react";
import { MovieList } from "./MovieList";
import { MovieCart } from "./MovieCart";
import { useSelector } from "react-redux";
import language from '../utils/languageConstant';

function SecondaryContainer() {
  const movies = useSelector((store) => store.movies);
  const searchValue = useSelector((store) => store?.config?.language);

  return (
    <div className="bg-black">
      <div className="-mt-65 relative pl-4 z-20">
        <MovieList title={language[searchValue]?.NOW_PLAYING} movies={movies?.nowPlayingMovies} />
        <MovieList title={language[searchValue]?.TOP_RATED} movies={movies?.topRatedMovies} />
        <MovieList title={language[searchValue]?.UPCOMING} movies={movies?.upcomingMovies} />
        <MovieList title={language[searchValue]?.POPULAR} movies={movies?.popularMovies} />
      </div>
    </div>
  );
}

export default SecondaryContainer;
