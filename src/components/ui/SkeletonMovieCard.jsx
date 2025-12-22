export default function SkeletonMovieCard({ date }) {
  return (
    <article className="grid h-fit min-w-48 animate-pulse snap-start gap-5 text-left md:w-full">
      <header className="group relative overflow-hidden rounded-md">
        <div className="block min-h-64 md:min-h-72 lg:min-h-100 w-full rounded-md bg-gray-300"></div>
      </header>

      <section className="flex w-full flex-col items-start gap-2">
        <div className="h-4 w-3/4 rounded bg-gray-300"></div>
        {date && <div className="h-4 w-2/4 rounded bg-gray-300"></div>}
        <div className="h-4 w-1/4 rounded bg-gray-300"></div>
      </section>
    </article>
  );
}
