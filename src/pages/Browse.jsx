import Header from "../components/Header";
import React from "react";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "../components/MainContainer";
import SecondaryContainer from "../components/SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import GptSearch from "../gpt/GptSearch";
import { useSelector } from "react-redux";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  // Custom hooks
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <div>
      <Header />
      <div>
        {showGptSearch ? (
          <GptSearch />
        ) : (
          <div className="flex flex-col">
            {/* video background and video title */}
            <MainContainer />
            {/* now playing, popular movies and top rated movies */}
            <SecondaryContainer />
          </div>
        )}
      </div>
    </div>
  );
};

export default Browse;
