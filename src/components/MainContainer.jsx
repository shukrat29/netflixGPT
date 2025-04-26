import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import VideoBackGround from "./VideoBackGround";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  const playerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  if (movies == null) return;

  const mainMovie = movies[0];

  const { original_title, overview, id } = mainMovie;

  const handlePlayerReady = (event) => {
    playerRef.current = event.target;
  };

  const togglePlayPause = () => {
    if (!playerRef.current) return;
    if (isPlaying) {
      playerRef.current.pauseVideo();
    } else {
      playerRef.current.playVideo();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative w-full aspect-video">
      <VideoTitle
        title={original_title}
        overview={overview}
        isPlaying={isPlaying}
        onTogglePlayPause={togglePlayPause}
      />
      <VideoBackGround movieId={id} onPlayerReady={handlePlayerReady} />
    </div>
  );
};

export default MainContainer;
