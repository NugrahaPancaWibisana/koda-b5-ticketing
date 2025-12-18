import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import MovieCard from "../../ui/MovieCard";
import { movieActions } from "../../../redux/slices/movie.slice";
import { Link } from "react-router";

export default function MovieSection() {
  const movie = useSelector((state) => state.movie.movies);
  const dispatch = useDispatch();
  // const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    dispatch(movieActions.getNowPlaying());
    dispatch(movieActions.getMovieGenres());
  }, [dispatch]);

  return (
    <section className="mt-20 flex flex-col items-center justify-start gap-10 text-center md:text-start">
      <h1 className="text-primary text-lg leading-8 font-bold tracking-[0.75px]">
        MOVIE
      </h1>
      <h2 className="text-secondary text-[32px] leading-11 font-normal tracking-[1px]">
        Exciting Movies That Should Be Watched Today
      </h2>

      <div className="hidden w-full grid-cols-4 gap-5 md:grid">
        {movie.now_playing.slice(0, 4).map((value, idx) => {
          return (
            <MovieCard
              key={idx}
              img={`https://image.tmdb.org/t/p/w500${value.poster_path}`}
              title={value.original_title}
              genre={value.genre_ids.map(
                (id) => movie.genres.find((v) => v.id === id).name,
              )}
              href={`movies/${value.id}/${value.original_title.toLowerCase().split(" ").join("-")}`}
            />
          );
        })}
      </div>

      <div className="no-scrollbar flex w-full snap-x gap-4 overflow-x-auto md:hidden">
        {movie.now_playing.map((value, idx) => {
          return (
            <MovieCard
              key={idx}
              img={`https://image.tmdb.org/t/p/w500${value.poster_path}`}
              title={value.original_title}
              genre={value.genre_ids.map(
                (id) => movie.genres.find((v) => v.id === id).name,
              )}
              href={`movies/${value.id}`}
              // isActive={activeIndex === idx}
              // onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
            />
          );
        })}
      </div>
      <div>
        <Link
          className="text-primary flex items-center justify-center gap-2 leading-8 font-bold tracking-[0.75px]"
          to="/movies"
        >
          View All
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.5 10L2.5 10"
              className="stroke-primary"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.5 5L17.5 10L12.5 15"
              className="stroke-primary"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
}
