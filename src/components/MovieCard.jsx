import React from "react";
import { IMG_CDN_URL } from "../utils/constants";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ id, posterPath }) => {
  const navigate = useNavigate();
  if (!posterPath) return null;
  return (
    <div
      onClick={() => navigate(`/movie/${id}`)}
      className="md:w-48 w-36 pr-3 cursor-pointer hover:scale-105 transition-transform duration-300"
    >
      <img alt="movie-card" src={IMG_CDN_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
