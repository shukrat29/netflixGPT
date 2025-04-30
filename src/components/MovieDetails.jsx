import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { IMG_CDN_URL, API_OPTIONS, API_BASE_URL } from "../utils/constants";

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [trailerKey, setTrailerKey] = useState(null);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/movie/${id}`, API_OPTIONS);
        const movieData = await res.json();
        setMovie(movieData);

        const trailerRes = await fetch(
          `${API_BASE_URL}/movie/${id}/videos`,
          API_OPTIONS
        );
        const trailerData = await trailerRes.json();
        const officialTrailer = trailerData.results.find(
          (vid) => vid.type === "Trailer" && vid.site === "YouTube"
        );
        setTrailerKey(officialTrailer?.key);
      } catch (error) {
        console.error("Failed to fetch movie details:", error);
      }
    };

    fetchMovieData();
  }, [id]);

  if (!movie) return <div className="text-white p-4">Loading...</div>;

  return (
    <div className="bg-black text-white min-h-screen">
      <button
        onClick={() => navigate(-1)}
        className="text-white hover:text-red-500 flex items-center gap-1 px-4 pt-4"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Go Back
      </button>

      <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 mt-4 px-4">
        <div className="w-full lg:w-2/3 aspect-video">
          {trailerKey ? (
            <iframe
              className="w-full h-full rounded-md"
              src={`https://www.youtube.com/embed/${trailerKey}`}
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="Movie Trailer"
            />
          ) : (
            <div className="flex items-center justify-center h-full bg-gray-800 text-gray-400">
              Trailer not available
            </div>
          )}
        </div>

        <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start">
          <img
            src={IMG_CDN_URL + movie.poster_path}
            alt={movie.title}
            className="w-32 lg:w-40 rounded-md mb-3 border"
          />
          <h1 className="text-2xl font-semibold mb-2 text-center lg:text-left">
            {movie.title}
          </h1>
          <p className="text-sm text-gray-300 mb-3 text-center lg:text-left">
            {movie.overview}
          </p>
          <p className="text-xs mb-1">🎬 Release: {movie.release_date}</p>
          <p className="text-xs">⭐ Rating: {movie.vote_average}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
