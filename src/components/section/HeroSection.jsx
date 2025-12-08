import test from "../../assets/test.png";
import { SectionContent } from "../ui/Section";

export default function HeroSection() {
  return (
    <SectionContent className='md:flex-row lg:px-[130px] md:justify-between md:min-h-dvh'>
      <div className='flex flex-col md:items-start gap-5'>
        <h1 className='text-primary font-bold text-lg leading-8 tracking-[0.75px]'>
          MOVIE TICKET PURCHASES #1 IN INDONESIA
        </h1>
        <h2 className='text-secondary font-normal text-[32px] md:text-[38px] xl:text-5xl md:text-left leading-[70px] md:leading-14 tracking-[1px] md:w-[538px] xl:w-[638px]'>
          Experience the Magic of Cinema: Book Your Tickets Today
        </h2>
        <p className='text-tertiary'>
          Sign up and get the ticket with a lot of discount
        </p>
      </div>
      <div className='flex gap-2 md:max-h-[436px]'>
        <div className='flex flex-col gap-2'>
          <img
            className='rounded-t-3xl object-cover object-top h-[125px] md:min-h-[70px] md:min-w-[117px] lg:min-h-[120px] lg:min-w-[167px] xl:min-h-[220px] xl:min-w-[267px]'
            src={test}
            alt='test image'
          />
          <img
            className='rounded-b-3xl object-cover object-top flex-1 md:max-h-[150px] lg:max-h-[200px] xl:max-h-[300px] md:flex-0 md:w-full'
            src={test}
            alt='test image'
          />
        </div>
        <div className='flex flex-col gap-2'>
          <img
            className='rounded-t-3xl object-cover object-top flex-1 md:max-h-[150px] lg:max-h-[200px] xl:max-h-[300px] md:flex-0 md:w-full'
            src={test}
            alt='test image'
          />
          <img
            className='rounded-b-3xl object-cover object-top h-[125px] md:min-h-[70px] md:min-w-[117px] lg:min-h-[120px] lg:min-w-[167px] xl:min-h-[220px] xl:min-w-[267px]'
            src={test}
            alt='test image'
          />
        </div>
      </div>
    </SectionContent>
  );
}
