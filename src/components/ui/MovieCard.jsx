import { Link } from "react-router";

export default function MovieCard({
  img,
  title,
  genre,
  href,
  isActive,
  onClick,
}) {
  return (
    <article
      onClick={onClick}
      className="grid h-fit min-w-48 snap-start gap-5 text-left md:w-full"
    >
      <header className="group relative overflow-hidden rounded-md">
        <img
          className="min-w-48 rounded-md md:min-w-[264px]"
          src={img}
          alt={title}
        />

        <div
          className={`absolute inset-0 flex-col items-center justify-center gap-4 bg-black/70 px-10 text-center ${isActive ? "flex" : "hidden"} md:hidden md:group-hover:flex`}
        >
          <Link
            to={href}
            className="w-full rounded-sm border border-white py-3 text-white"
          >
            Details
          </Link>
          <Link
            to={href}
            className="bg-primary w-full rounded-sm py-3 text-white"
          >
            Buy Ticket
          </Link>
        </div>
      </header>

      <section className="flex w-full flex-col items-start gap-2">
        <h4 className="text-lg font-bold text-gray-900 md:text-left">
          {title}
        </h4>
        <div className="flex flex-wrap gap-1">
          {genre.map((value, idx) => {
            return (
              <span
                key={idx}
                className="bg-tertiary/10 text-tertiary rounded-full px-3 py-1"
              >
                {value}
              </span>
            );
          })}
        </div>
      </section>
    </article>
  );
}
