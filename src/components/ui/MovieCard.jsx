import { Link } from "react-router";

export default function MovieCard({ data }) {
  return (
    <article
      onClick={data.onClick}
      className="grid h-fit min-w-48 snap-start gap-5 text-left md:w-full"
    >
      <header className="group relative overflow-hidden rounded-md">
        <img className="w-full rounded-md" src={data.img} alt={data.title} />

        <div
          className={`absolute inset-0 flex-col items-center justify-center gap-4 bg-black/70 px-10 text-center ${data.isActive ? "flex" : "hidden"} md:hidden md:group-hover:flex`}
        >
          <Link
            to={data.href}
            state={{ genre: data.genre }}
            className="w-full rounded-sm border border-white py-3 text-white"
          >
            Details
          </Link>
          <Link
            to={data.href}
            state={{ genre: data.genre }}
            className="bg-primary w-full rounded-sm py-3 text-white"
          >
            Buy Ticket
          </Link>
        </div>
      </header>

      <section className="flex w-full flex-col items-start gap-2">
        <h4 className="text-lg font-bold text-gray-900 md:text-left">
          {data.title}
        </h4>
        {data.date && (
          <p className="text-primary text-lg font-bold">{data.date}</p>
        )}
        <div className="flex flex-wrap gap-1">
          {data.genre.map((value, idx) => {
            if (!value) return null;
            return (
              <span
                key={idx}
                className="bg-tertiary/10 text-tertiary rounded-full px-3 py-1"
              >
                {value.name}
              </span>
            );
          })}
        </div>
      </section>
    </article>
  );
}
