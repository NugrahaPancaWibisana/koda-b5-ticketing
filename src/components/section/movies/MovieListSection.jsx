import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import MovieCard from "../../ui/MovieCard";
import useInput from "../../../hooks/useInput";
import useDebounce from "../../../hooks/useDebounce";
import { movieActions } from "../../../redux/slices/movie.slice";

export default function MovieListSection() {
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.movie.movies);

  const [searchParams, setSearchParams] = useSearchParams();

  const search = useInput("");
  const debounce = useDebounce(search.value, 300);

  const [activeIndex, setActiveIndex] = useState(null);

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

  const [query, setQuery] = useState(() => {
    const param = {
      search: searchParams.get("search"),
      page: searchParams.get("page"),
      genre: searchParams.get("genre"),
    };
    const data = Object.fromEntries(
      Object.entries(param).filter(
        ([, value]) => value != null && value !== "",
      ),
    );

    return data;
  });

  useEffect(() => {
    dispatch(movieActions.getNowPlaying());
    dispatch(movieActions.getMovieGenres());
  }, [dispatch]);

  useEffect(() => {
    (() => {
      setSearchParams(new URLSearchParams(query));
    })();
  }, [query, setSearchParams]);

  return (
    <section className="md:px-main mt-10 px-7.5">
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
            value={search.value}
            onChange={search.onChangeHandler}
          />
        </div>
        <div className="no-scrollbar flex gap-5 overflow-x-scroll pt-8 before:absolute before:top-0 before:content-['Filter']">
          {movie.genres.map((value) => {
            return (
              <div
                className="justify-centafter:absolute after:content-['>']er flex items-center after:right-0 after:flex after:h-full after:animate-bounce after:items-center"
                key={value.id}
              >
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
        {movie.now_playing
          .slice(0, 12)
          .filter((value) => value)
          .map((value, idx) => {
            return (
              <MovieCard
                key={idx}
                data={{
                  img: `https://image.tmdb.org/t/p/w500${value.poster_path}`,
                  title: value.original_title,
                  genre: value.genre_ids.map((id) =>
                    movie.genres.find((v) => v.id === id),
                  ),
                  href: `${value.id}/${value.original_title.toLowerCase().split(" ").join("-")}`,
                  isActive: activeIndex === idx,
                  onClick: () =>
                    setActiveIndex(activeIndex === idx ? null : idx),
                }}
              />
            );
          })}
      </div>
    </section>
  );
}
