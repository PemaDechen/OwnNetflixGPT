import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies, addTopRatedMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const url = "https://api.themoviedb.org/3/movie/top_rated";

  const movies = useSelector((store) => store.movies.topRatedMovies);

  const getTopRatedMovies = async () => {
    const data = await fetch(url, API_OPTIONS);
    const json = await data.json();
    dispatch(addTopRatedMovies(json?.results));
  };

  useEffect(() => {
    if (!movies) {
      getTopRatedMovies();
    }
  }, []);
};

export default useTopRatedMovies;