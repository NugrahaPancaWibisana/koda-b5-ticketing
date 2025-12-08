import { SectionContent } from "../ui/Section";
import background from "../../assets/background.png";

export default function HeroMovieListSection() {
  return (
    <SectionContent className='md:flex-row pt-[91px]'>
      <div className='w-full h-[462px] flex justify-start items-center relative'>
        <img
          className='w-full h-[462px] object-cover absolute -z-20'
          src={background}
          alt='bg'
        />
        <div className="w-full h-[462px] absolute -z-10 bg-black/60"></div>
        <div className='text-white px-[130px] flex flex-col gap-2'>
          <h1 className='text-left text-lg'>LIST MOVIE OF THE WEEK</h1>
          <p className='text-left text-5xl w-[638px] font-medium'>
            Experience the Magic of Cinema: Book Your Tickets Today
          </p>
        </div>
      </div>
    </SectionContent>
  );
}
