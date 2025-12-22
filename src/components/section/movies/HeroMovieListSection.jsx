export default function HeroMovieListSection() {
  return (
    <section className="flex md:min-h-[462px] md:pt-[91px]">
      <div className="relative top-0 left-0 z-0 flex h-[462px] w-full items-center justify-start bg-[url('/background.png')] bg-cover bg-center before:absolute before:inset-0 before:-z-10 before:bg-black/50">
        <div className="md:px-main flex flex-col gap-2 text-white">
          <h1 className="text-left text-lg">LIST MOVIE OF THE WEEK</h1>
          <p className="text-left text-5xl font-medium md:w-[638px]">
            Experience the Magic of Cinema: Book Your Tickets Today
          </p>
        </div>
      </div>
    </section>
  );
}
