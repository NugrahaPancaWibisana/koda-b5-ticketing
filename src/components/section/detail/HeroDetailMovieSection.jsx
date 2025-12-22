import { useDispatch, useSelector } from "react-redux";
import { movieActions } from "../../../redux/slices/movie.slice";
import { useEffect } from "react";
import { useParams } from "react-router";

export default function HeroDetailMovie() {
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.movie.movies.detail_movie);
  const { id } = useParams();

  useEffect(() => {
    dispatch(movieActions.getDetailMovie(id));
  }, [dispatch, id]);

  return (
    <section className="flex flex-col md:min-h-dvh md:pt-[91px]">
      <div className="relative flex h-[415px] w-full items-center justify-start">
        {movie.backdrop_path && (
          <img
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt={movie.title || "Movie backdrop"}
            className="absolute -z-10 h-full w-full object-cover"
          />
        )}

        <div className="absolute inset-0 -z-5 bg-black/50"></div>

        <div className="px-main flex flex-col gap-5 md:translate-y-1/2 md:flex-row">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title || "Movie backdrop"}
            className="rounded-md object-cover md:h-[500px]"
          />
          <div className="flex translate-y-1/2 flex-col gap-5">
            <p className="text-3xl font-bold">{movie.original_title}</p>
            <div className="flex gap-3">
              {movie.genres &&
                movie.genres.map((value, idx) => {
                  if (!value) return null;
                  return (
                    <span
                      key={idx}
                      className="bg-tertiary/10 text-tertiary w-fit rounded-full px-3 py-1"
                    >
                      {value.name}
                    </span>
                  );
                })}
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <p className="text-tertiary text-sm">Release Date</p>
                <p className="text-base">{movie.release_date}</p>
              </div>
              <div>
                <p className="text-tertiary text-sm">Directed by</p>
                <p className="text-base">Jon Watss</p>
              </div>
              <div>
                <p className="text-tertiary text-sm">Duration</p>
                <p className="text-base">
                  {movie.runtime
                    ? `${Math.floor(movie.runtime / 60)} hours ${movie.runtime % 60} minutes`
                    : "2 hours 13 minutes"}
                </p>
              </div>
              <div>
                <p className="text-tertiary text-sm">Casts</p>
                <p className="text-base">
                  Tom Holland, Michael Keaton, Robert Downey Jr
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:px-main md:mt-[350px]">
        <p className="text-xl font-semibold">Synopsis</p>
        <p className="text-tertiary mt-2 max-w-[821px] text-lg">
          {movie.overview}
        </p>
      </div>
    </section>
  );
}
