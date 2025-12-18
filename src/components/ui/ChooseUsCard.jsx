export default function ChooseUsCard({ svg, title, desc }) {
  return (
    <article className="grid w-full gap-4">
      <header className="flex justify-center md:justify-start">
        <div className="bg-primary/20 h-[54px] w-[54px] rounded-full p-3">
          {svg}
        </div>
      </header>
      <section className="flex w-full flex-col justify-center gap-4 md:justify-start">
        <h4 className="text-center font-bold text-gray-900 md:text-left">
          {title}
        </h4>
        <p className="text-[16px] leading-8 font-normal tracking-[0.75px] text-gray-600 md:text-left">
          {desc}
        </p>
      </section>
    </article>
  );
}
