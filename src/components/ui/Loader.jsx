export default function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center gap-2 bg-white/70">
      <div className="bg-primary h-8 w-8 animate-bounce rounded-full [animation-delay:-0.3s]"></div>
      <div className="bg-primary h-8 w-8 animate-bounce rounded-full [animation-delay:-0.15s]"></div>
      <div className="bg-primary h-8 w-8 animate-bounce rounded-full"></div>
    </div>
  );
}
