import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const url = "https://api.themoviedb.org/3/movie/upcoming";

  const movies = useSelector((store) => store.movies?.upcomingMovies);

  const getUpcomingMovies = async () => {
    const data = await fetch(url, API_OPTIONS);
    const json = await data.json();
    dispatch(addUpcomingMovies(json?.results));
  };

  useEffect(() => {
    if (!movies) {
      getUpcomingMovies();
    }
  }, []);
};

export default useUpcomingMovies;