import { useDispatch } from "react-redux";
import { API_OPTIONS, TRAILER } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const getMovieVideo = async () => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos`,
        API_OPTIONS,
      );
      const json = await data.json();
      const trailerList = json.results.filter((data) => data.type == TRAILER);
      const trailer = trailerList.length ? trailerList[0] : json.results[0];
      dispatch(addTrailerVideo(trailer));
    } catch (error) {
      ("this is error ", error);
    }
  };
  useEffect(() => {
    getMovieVideo();
  }, [movieId]);
};
export default useMovieTrailer;
