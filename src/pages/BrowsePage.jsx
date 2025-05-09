import Header from "../components/Header";
import React from "react";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "../components/MainContainer";
import SecondaryContainer from "../components/SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import GptSearchPage from "./GptSearchPage";
import { useSelector } from "react-redux";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

const BrowsePage = () => {
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
          <GptSearchPage />
        ) : (
          <div className="flex flex-col">
            <MainContainer />
            <SecondaryContainer />
          </div>
        )}
      </div>
    </div>
  );
};

export default BrowsePage;
