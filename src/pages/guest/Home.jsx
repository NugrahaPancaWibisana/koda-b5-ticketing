import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { movieActions } from "../../redux/slices/movie.slice";

import HeroSection from "../../components/section/home/HeroSection";
import MovieSection from "../../components/section/home/MovieSection";
import ChooseUsSection from "../../components/section/home/ChooseUsSection";
import SubscibeSection from "../../components/section/home/SubscibeSection";
import UpcomingMoviesSection from "../../components/section/home/UpcomingMoviesSection";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(movieActions.getNowPlaying());
    dispatch(movieActions.getUpcoming());
    dispatch(movieActions.getMovieGenres());
  }, [dispatch]);

  return (
    <div className="lg:px-main px-6 md:px-7.5">
      <HeroSection />
      <ChooseUsSection />
      <MovieSection />
      <UpcomingMoviesSection />
      <SubscibeSection />
    </div>
  );
}
