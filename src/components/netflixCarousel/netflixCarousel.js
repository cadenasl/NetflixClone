import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import { useEffect, useState, useContext } from "react";
import ListContext from "../context/context";
import Button from "../UI Elements/button";
import "./netflixCarousel.css";

// Import Swiper styles
import "swiper/swiper-bundle.css";
SwiperCore.use([Navigation]);
const tdmbKey = process.env.REACT_APP_TDMB_KEY;
const NetflixCarousel = (props) => {
  const ctx = useContext(ListContext);

  let tdmb;
  switch (props.type) {
    case "Trending movie":
      tdmb = `https://api.themoviedb.org/3/trending/movie/week?api_key=${tdmbKey}`;

      break;
    case "tv":
      tdmb = `https://api.themoviedb.org/3/trending/tv/week?api_key=${tdmbKey}`;

      break;

    case "Popular Movies Of All Time":
      tdmb = `https://api.themoviedb.org/3/movie/top_rated?api_key=${tdmbKey}&language=en-US&page=1`;

      break;
    case "Upcoming Movies":
      tdmb = `https://api.themoviedb.org/3/movie/upcoming?api_key=${tdmbKey}&language=en-US&page=1`;
      break;
    default:
      tdmb = `https://api.themoviedb.org/3/trending/movie/week?api_key=${tdmbKey}`;
  }

  // tdmb =
  //   "https://api.themoviedb.org/3/trending/movie/week?api_key=f566985b633d0d19752aee362398deaa";

  //obtain popular movies for the week from tdmb
  const [moviesImages, setMoviesImages] = useState({ images: [] });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchMovies() {
      try {
        setIsLoading(true);
        const response = await fetch(tdmb);
        const ResponseData = await response.json();

        // setMovieImg(ResponseData.poster_path);

        const imagesForPopularMovies = ResponseData.results.map((movie) => {
          return {
            img500: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            img200: `https://image.tmdb.org/t/p/w200${movie.poster_path}`,
          };
          // imagesForPopularMovies.push(
          //   `https://image.tmdb.org/t/p/w500${movie.poster_path}`
          // );
        });

        setMoviesImages({ images: [...imagesForPopularMovies] });
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    }
    fetchMovies();
  }, [tdmb]);

  let slider;
  if (!isLoading) {
    slider = moviesImages.images.map((srcUrl, i) => {
      return (
        <SwiperSlide key={srcUrl.img200}>
          <div className="ImgCaption">
            <div className="Img">
              <img src={srcUrl.img500} alt="batman" />
            </div>
            <div className="hide">
              <Button text="Play" />
              <Button
                onClick={() => {
                  ctx.addToList({ id: srcUrl.img200, image: srcUrl.img200 });
                }}
                text="ADD"
              />
            </div>
          </div>
        </SwiperSlide>
      );
    });
  }
  return (
    <div className="slider">
      <Swiper
        spaceBetween={5}
        slidesPerView={6}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        loop={true}
        navigation={true}
        allowTouchMove={false}
        slidesPerGroup={2}
      >
        {slider}
      </Swiper>
    </div>
  );
};

export default NetflixCarousel;
