import { useSelector } from "react-redux";

export default function HeroSection() {
  const movie = useSelector((state) => state.movie);  

  return (
    <section className="flex flex-col justify-between gap-5 md:min-h-dvh md:flex-row md:items-center md:gap-10 lg:gap-20 pt-[140px] md:pt-0">
      <div className="flex flex-col gap-4 text-center md:flex-1 md:gap-8 md:text-left">
        <h2 className="text-primary text-lg leading-8 font-bold tracking-[0.75px]">
          MOVIE TICKET PURCHASES #1 IN INDONESIA
        </h2>
        <p className="text-secondary text-[32px] font-normal tracking-[1px] md:text-left md:text-[38px] md:leading-14 xl:text-5xl">
          Experience the Magic of Cinema: Book Your Tickets Today
        </p>
        <p className="text-tertiary">
          Sign up and get the ticket with a lot of discount
        </p>
      </div>
      <div className="flex-1 md:pl-15 lg:pl-30">
        {movie.fetchStatus.now_playing.isLoading ? (
          <div className="grid animate-pulse grid-cols-2 grid-rows-[150px_60px_150px] gap-3 md:grid-rows-[140px_60px_140px] lg:grid-rows-[180px_100px_180px]">
            <span className="h-full w-full rounded-t-3xl bg-gray-300"></span>
            <span className="row-span-2 h-full w-full rounded-t-3xl bg-gray-300"></span>
            <span className="row-span-2 h-full w-full rounded-b-3xl bg-gray-300"></span>
            <span className="h-full w-full rounded-b-3xl bg-gray-300"></span>
          </div>
        ) : (
          <div className="grid grid-cols-2 grid-rows-[150px_60px_150px] gap-3 md:grid-rows-[140px_60px_140px] lg:grid-rows-[180px_100px_180px]">
            {movie.movies.now_playing.slice(0, 4).map((value, idx) => {
              if (idx === 0) {
                return (
                  <img
                    key={idx}
                    className="h-full w-full rounded-t-3xl object-cover"
                    src={`https://image.tmdb.org/t/p/w500${value.poster_path}`}
                    alt={value.original_title}
                  />
                );
              }
              if (idx === 1) {
                return (
                  <img
                    key={idx}
                    className="row-span-2 h-full w-full rounded-t-3xl object-cover"
                    src={`https://image.tmdb.org/t/p/w500${value.poster_path}`}
                    alt={value.original_title}
                  />
                );
              }
              if (idx === 2) {
                return (
                  <img
                    key={idx}
                    className="row-span-2 h-full w-full rounded-b-3xl object-cover"
                    src={`https://image.tmdb.org/t/p/w500${value.poster_path}`}
                    alt={value.original_title}
                  />
                );
              }
              if (idx === 3) {
                return (
                  <img
                    key={idx}
                    className="h-full w-full rounded-b-3xl object-cover"
                    src={`https://image.tmdb.org/t/p/w500${value.poster_path}`}
                    alt={value.original_title}
                  />
                );
              }
            })}
          </div>
        )}
      </div>
    </section>
  );
}
