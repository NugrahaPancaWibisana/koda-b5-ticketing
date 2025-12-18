export default function HeroMovieListSection() {
  return (
    <section className="flex md:min-h-[462px] md:pt-[91px]">
      <div className=" top-0 left-0 flex h-[462px] w-full items-center justify-start bg-[url('/background.png')] bg-center bg-cover relative z-0 before:absolute before:bg-black/50 before:inset-0 before:-z-10">
        {/* <img
          className="-z-20 h-[462px] w-full object-cover"
          src="/background.png"
          alt="bg"
        /> */}
        {/* <div className="absolute -z-10 h-[462px] w-full bg-black/60"></div> */}
        <div className="flex flex-col gap-2 text-white md:px-main">
          <h1 className="text-left text-lg">LIST MOVIE OF THE WEEK</h1>
          <p className="text-left text-5xl font-medium md:w-[638px]">
            Experience the Magic of Cinema: Book Your Tickets Today
          </p>
        </div>
      </div>
    </section>
  );
}
