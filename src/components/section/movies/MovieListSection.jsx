import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { movieActions } from "../../../redux/slices/movie.slice";
import MovieCard from "../../ui/MovieCard";

export default function MovieListSection() {
  const [genre, setGenre] = useState({
    Action: false,
    Adventure: false,
    Animation: false,
    Comedy: false,
    Crime: false,
    Documentary: false,
    Drama: false,
    Family: false,
    Fantasy: false,
    History: false,
    Horror: false,
    Music: false,
    Mystery: false,
    Romance: false,
    "Science Fiction": false,
    "TV Movie": false,
    Thriller: false,
    War: false,
    Western: false,
  });
  const movie = useSelector((state) => state.movie.movies);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(movieActions.getNowPlaying());
    dispatch(movieActions.getMovieGenres());
  }, [dispatch]);

  return (
    <section className="px-main md:mt-10">
      <form className="relative flex gap-5">
        <div>
          <label className="mb-3 block" htmlFor="search">
            Cari Event
          </label>
          <input
            className="border-tertiary rounded-md border p-2 outline-0"
            type="text"
            name="search"
            id="search"
            placeholder="New Born Expert"
          />
        </div>
        <div className="no-scrollbar flex gap-5 overflow-x-scroll pt-8 before:absolute before:top-0 before:content-['Filter']">
          {movie.genres.map((value) => {
            return (
              <div className="flex items-center justify-center" key={value.id}>
                <label
                  className={`cursor-pointer rounded-lg px-6 py-2.5 whitespace-nowrap select-none ${genre[value.name] ? "bg-primary text-white" : ""}`}
                  htmlFor={value.name}
                >
                  {value.name}
                </label>
                <input
                  className="hidden"
                  type="checkbox"
                  name={value.name}
                  id={value.name}
                  defaultChecked={genre[value.name]}
                  onChange={(e) =>
                    setGenre((v) => ({ ...v, [value.name]: e.target.checked }))
                  }
                />
              </div>
            );
          })}
        </div>
      </form>
      <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-4">
        {movie.now_playing.map((value, idx) => {
          return (
            <MovieCard
              key={idx}
              img={`https://image.tmdb.org/t/p/w500${value.poster_path}`}
              title={value.original_title}
              genre={value.genre_ids.map(
                (id) => movie.genres.find((v) => v.id === id).name,
              )}
              href={`${value.id}/${value.original_title.toLowerCase().split(" ").join("-")}`}
            />
          );
        })}
      </div>
    </section>
  );
}
