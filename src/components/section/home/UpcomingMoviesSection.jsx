import { useState } from "react";
import { useSelector } from "react-redux";
import MovieCard from "../../ui/MovieCard";
import SkeletonMovieCard from "../../ui/SkeletonMovieCard";

export default function UpcomingMoviesSection() {
  const movie = useSelector((state) => state.movie);
  const [activeIndex, setActiveIndex] = useState(null);
  const [prev, setprev] = useState(0);

  return (
    <section className="mt-20 flex flex-col items-start justify-start gap-10 text-center md:text-start">
      <div className="flex w-full items-center justify-center md:justify-between">
        <div>
          <h1 className="text-primary text-lg leading-8 font-bold tracking-[0.75px]">
            UPCOMING MOVIES
          </h1>
          <h2 className="text-secondary text-[32px] leading-11 font-normal tracking-[1px]">
            Exciting Movie Coming Soon
          </h2>
        </div>
        <div className="hidden gap-2 md:flex">
          <button
            className="bg-tertiary rotate-180 rounded-full p-5"
            onClick={() => setprev(prev === 0 ? 0 : prev - 4)}
          >
            <svg
              className="stroke-white"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.5 10L2.5 10"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.5 5L17.5 10L12.5 15"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            className="bg-primary rounded-full p-5"
            onClick={() =>
              setprev(
                prev === movie.movies.upcoming.length - 4
                  ? movie.movies.upcoming.length - 4
                  : prev + 4,
              )
            }
          >
            <svg
              className="stroke-white"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.5 10L2.5 10"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.5 5L17.5 10L12.5 15"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {movie.fetchStatus.upcoming.isLoading ? (
        <>
          <div className="hidden w-full grid-cols-4 gap-5 md:grid">
            <SkeletonMovieCard date={true}></SkeletonMovieCard>
            <SkeletonMovieCard date={true}></SkeletonMovieCard>
            <SkeletonMovieCard date={true}></SkeletonMovieCard>
            <SkeletonMovieCard date={true}></SkeletonMovieCard>
          </div>

          <div className="no-scrollbar flex w-full snap-x gap-4 overflow-x-auto md:hidden">
            <SkeletonMovieCard date={true}></SkeletonMovieCard>
            <SkeletonMovieCard date={true}></SkeletonMovieCard>
            <SkeletonMovieCard date={true}></SkeletonMovieCard>
            <SkeletonMovieCard date={true}></SkeletonMovieCard>
          </div>
        </>
      ) : (
        <>
          <div className="hidden w-full grid-cols-4 gap-5 md:grid">
            {movie.movies.upcoming.slice(prev, prev + 4).map((value, idx) => {
              return (
                <MovieCard
                  key={idx}
                  data={{
                    img: `https://image.tmdb.org/t/p/w500${value.poster_path}`,
                    title: value.original_title,
                    date: value.release_date,
                    genre: value.genre_ids.map((id) =>
                      movie.movies.genres.find((v) => v.id === id),
                    ),
                    href: `movies/${value.id}/${value.original_title.toLowerCase().split(" ").join("-")}`,
                  }}
                />
              );
            })}
          </div>

          <div className="no-scrollbar flex w-full snap-x gap-4 overflow-x-auto md:hidden">
            {movie.movies.upcoming.map((value, idx) => {
              return (
                <MovieCard
                  key={idx}
                  data={{
                    img: `https://image.tmdb.org/t/p/w500${value.poster_path}`,
                    title: value.original_title,
                    genre: value.genre_ids.map((id) =>
                      movie.movies.genres.find((v) => v.id === id),
                    ),
                    href: `movies/${value.id}/${value.original_title.toLowerCase().split(" ").join("-")}`,
                    isActive: activeIndex === idx,
                    onClick: () =>
                      setActiveIndex(activeIndex === idx ? null : idx),
                  }}
                />
              );
            })}
          </div>
        </>
      )}
    </section>
  );
}
