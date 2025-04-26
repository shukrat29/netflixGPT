import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
import YouTube from "react-youtube";

const VideoBackGround = ({ movieId, onPlayerReady }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  // Custom hook
  useMovieTrailer(movieId);

  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 1,
      mute: 1,
      controls: 0,
      modestbranding: 1,
      rel: 0,
      showinfo: 0,
      loop: 1,
    },
  };

  return (
    <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
      <YouTube
        videoId={trailerVideo?.key}
        opts={opts}
        className="w-full h-full"
        onReady={onPlayerReady}
      />
    </div>
  );
};

export default VideoBackGround;
