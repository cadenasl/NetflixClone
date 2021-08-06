import React, { useEffect, useState } from "react";
import NetflixCarousel from "../netflixCarousel/netflixCarousel";
import VideoFrame from "../videoIframe/Videoframe";
import classes from "./homePage.module.css";
import batmanBegins from "../../assets/images/batman-begins-movie.jpg";
import queensGambit from "../../assets/images/queens-gambit.jpg";

//api key https://api.themoviedb.org/3/movie/497698?api_key=f566985b633d0d19752aee362398deaa&language=en-US;

const HomePage = () => {
  // let url = [];
  // for (let i = 0; i < moviesImages.length; i++) {
  //   moviesImages.push({
  //     url: "https://image.tmdb.org/t/p/w500" + moviesImages[i],
  //   });
  // }
  // console.log(url);

  return (
    <div className={classes.homePage}>
      <VideoFrame />

      <h1>Top Movies For the Week</h1>
      <NetflixCarousel type="Trending movie" />
      <h1>Top Tv Shows For The Week</h1>
      <NetflixCarousel type="tv" />
      <h1>Popular movies of all time</h1>
      <NetflixCarousel type="Popular Movies Of All Time" />
      <h1>Upcoming Movies</h1>
      <NetflixCarousel type="Upcoming Movies" />
      <div>
        <h1>My List</h1>
      </div>
    </div>
  );
};

export default HomePage;
