import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="md:w-48 w-36 pr-6">
      <img alt="movie-card" src={IMG_CDN_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
