import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies.nowPlayingMovies &&
    movies.popularMovies &&
    movies.topRatedMovies && (
      <div className="bg-black">
        <div className=" relative z-20 mt-0 md:-mt-52 pl-12">
          <MovieList title={"Now playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Popular Movies"} movies={movies.popularMovies} />
          <MovieList
            title={"Top Rated Movies"}
            movies={movies.topRatedMovies}
          />

          {/* 
    Movielist  -popular
    cards .......
   
    -trending
    -now playing
     */}
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
