function Carousel({ children, className = "" }) {
  return (
    <div className={`w-full snap-x overflow-x-auto no-scrollbar gap-4 flex ${className}`}>
      {children}
    </div>
  );
}

function CarouselItem({ children, className = "" }) {
  return <div className={`snap-start ${className}`}>{children}</div>;
}

export { Carousel, CarouselItem };
