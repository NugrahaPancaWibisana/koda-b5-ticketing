export default function Loader() {
  return (
    <div className='fixed inset-0 bg-white/70 z-50 flex justify-center items-center gap-2'>
      <div className='h-8 w-8 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]'></div>
      <div className='h-8 w-8 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]'></div>
      <div className='h-8 w-8 bg-primary rounded-full animate-bounce'></div>
    </div>
  );
}
