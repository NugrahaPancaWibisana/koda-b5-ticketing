export default function SubscibeSection() {
  return (
    <section className="mt-20 flex flex-col items-start justify-start gap-10 md:text-start">
      <article className="bg-primary relative -z-10 grid min-h-[538px] w-full overflow-hidden rounded-2xl px-9 md:px-10 lg:px-52">
        <header className="flex items-center justify-center">
          <h4 className="text-center text-3xl font-bold text-white md:text-7xl">
            Subscribe to our newsletter
          </h4>
        </header>
        <section className="flex w-full flex-col justify-center gap-4 md:justify-start">
          <form className="flex w-full flex-col gap-3 md:flex-row">
            <input
              className="h-16 w-full rounded-md border border-white bg-white/10 pl-5 text-white outline-0"
              type="text"
              name="name"
              placeholder="First name"
            />
            <input
              className="h-16 w-full rounded-md border border-white bg-white/10 pl-5 text-white outline-0"
              type="email"
              name="email"
              placeholder="Email address"
            />
            <button
              className="text-primary h-16 w-full rounded-md bg-white font-bold"
              type="button"
            >
              Subscribe Now
            </button>
          </form>
          <span className="absolute -right-24 -bottom-24 block h-[200px] w-[200px] rounded-full border-8 border-white"></span>
        </section>
      </article>
    </section>
  );
}
