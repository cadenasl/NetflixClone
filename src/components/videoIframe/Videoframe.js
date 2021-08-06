import YouTube from "react-youtube";
import OverLay from "../UI Elements/Overlay";

import { useRef } from "react";
import classes from "./videoFrame.module.css";

const VideoFrame = () => {
  const videoUrl = "https://www.youtube.com/watch?v=hIR8Ar-Z4hw";

  const video = useRef(null);

  let videoCode;
  if (videoUrl) {
    videoCode = videoUrl.split("v=")[1].split("&")[0];
  }

  const startVideo = () => {
    video.current.internalPlayer.playVideo();

    // access to player in all event handlers via event.target
  };

  const pauseVideo = () => {
    video.current.internalPlayer.pauseVideo();
  };

  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      modestbranding: 0,
      controls: 0,
      start: 7,
      enablejsapi: 1,
    },
  };

  return (
    // <div
    //   className={classes.videoDiv}
    //   onMouseLeave={stopOnMouseOut}
    //   onMouseOver={startOnHover}
    // >
    <div
      className={classes.videoDiv}
      onMouseLeave={pauseVideo}
      onMouseEnter={startVideo}
    >
      <OverLay
        onClick={startVideo}
        onMouseEnter={startVideo}
        title="Avengers"
        description="Nick Fury, sets in motion project Avengers, joining Tony Stark a.k.a.
          the Iron Man; Steve Rogers, a.k.a. Captain America; Bruce Banner,
          a.k.a. The Hulk; Thor; Natasha Romanoff, a.k.a. Black Widow; and Clint
          Barton, a.k.a. Hawkeye, to save the world from the powerful Loki and
          the alien invasion."
      />
      {/* <div className={classes.overLay} onMouseOver={startOnHover}>
        <h1>Avengers</h1>

        <p className={classes.description}>
          Nick Fury, sets in motion project Avengers, joining Tony Stark a.k.a.
          the Iron Man; Steve Rogers, a.k.a. Captain America; Bruce Banner,
          a.k.a. The Hulk; Thor; Natasha Romanoff, a.k.a. Black Widow; and Clint
          Barton, a.k.a. Hawkeye, to save the world from the powerful Loki and
          the alien invasion.
        </p>

        {/* <img className={classes.marvelAvengers} src={marvelAvengers}></img> */}

      <YouTube
        videoId={videoCode}
        containerClassName={classes.embed}
        opts={opts}
        ref={video}
      />
    </div>
  );
};

export default VideoFrame;
