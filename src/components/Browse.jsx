import Header from "./Header";
import React from "react";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  // Custom hooks
  useNowPlayingMovies();
  return (
    <div>
      <Header />

      {/* 
      MainContainer
       - VideoBackground
       - VideoTitle

      SecondaryContainer
       - MovieLists *n
        -MovieCards *n
      */}
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
