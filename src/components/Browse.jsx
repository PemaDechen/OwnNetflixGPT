import { Header } from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import usePopularMovies from "../hooks/usePopularMovies copy";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import { GptSearch } from "./GptSearch";
import { useSelector } from "react-redux";
const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  const isGptSearch = useSelector((store) => store.gpt?.showGptSearch);

  return (
    <div>
      <Header />
      {!isGptSearch ? (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      ) : (
        <GptSearch />
      )}
    </div>
  );
};

export default Browse;
