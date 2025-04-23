import Header from "./Header";
import React from "react";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  // Custom hooks
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
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
