import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const url = "https://api.themoviedb.org/3/movie/now_playing";

  const movies = useSelector((store) => store.movies.nowPlayingMovies);

  const getNowPlayingMovies = async () => {
    const data = await fetch(url, API_OPTIONS);
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    if (!movies) {
      // ✅ only fetch if not already in store
      getNowPlayingMovies();
    }
  }, []);
};

export default useNowPlayingMovies;