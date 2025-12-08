import { Card, CardContent, CardHeader, CardTitle } from "../ui/Card";
import { Carousel, CarouselItem } from "../ui/Carousel";
import { SectionContent } from "../ui/Section";
import test from "../../assets/test.png";

export default function MovieSection() {
  return (
    <SectionContent className='lg:px-[130px] md:text-start mt-20'>
      <h1 className='text-primary font-bold text-lg leading-8 tracking-[0.75px]'>
        MOVIE
      </h1>
      <h2 className='text-secondary font-normal text-[32px] leading-11 tracking-[1px]'>
        Exciting Movies That Should Be Watched Today
      </h2>

      <div className='md:grid grid-cols-4 gap-5 hidden'>
        <Card className='gap-5'>
          <CardHeader className='relative rounded-md overflow-hidden'>
            <img className='min-w-48' src={test} alt='test' />
            <div className='absolute w-full flex flex-col justify-center items-center h-full px-10 gap-4 bg-black/40'>
              <button className='border border-white text-white rounded-sm w-full py-3'>
                Details
              </button>
              <button className='bg-primary rounded-sm text-white w-full py-3'>
                Buy Ticket
              </button>
            </div>
          </CardHeader>
          <CardContent className='flex-col items-start gap-2'>
            <CardTitle className='text-lg'>John Wick</CardTitle>
            <div className='flex gap-1'>
              <span className='px-3 py-1 bg-tertiary/10 text-tertiary rounded-full'>
                Action
              </span>
              <span className='px-3 py-1 bg-tertiary/10 text-tertiary rounded-full'>
                Action
              </span>
            </div>
          </CardContent>
        </Card>
        <Card className='gap-5'>
          <CardHeader>
            <img className='min-w-48 rounded-md' src={test} alt='test' />
          </CardHeader>
          <CardContent className='flex-col items-start gap-2'>
            <CardTitle className='text-lg'>John Wick</CardTitle>
            <div className='flex gap-1'>
              <span className='px-3 py-1 bg-tertiary/10 text-tertiary rounded-full'>
                Action
              </span>
              <span className='px-3 py-1 bg-tertiary/10 text-tertiary rounded-full'>
                Action
              </span>
            </div>
          </CardContent>
        </Card>
        <Card className='gap-5'>
          <CardHeader>
            <img className='min-w-48 rounded-md' src={test} alt='test' />
          </CardHeader>
          <CardContent className='flex-col items-start gap-2'>
            <CardTitle className='text-lg'>John Wick</CardTitle>
            <div className='flex gap-1'>
              <span className='px-3 py-1 bg-tertiary/10 text-tertiary rounded-full'>
                Action
              </span>
              <span className='px-3 py-1 bg-tertiary/10 text-tertiary rounded-full'>
                Action
              </span>
            </div>
          </CardContent>
        </Card>
        <Card className='gap-5'>
          <CardHeader>
            <img className='min-w-48 rounded-md' src={test} alt='test' />
          </CardHeader>
          <CardContent className='flex-col items-start gap-2'>
            <CardTitle className='text-lg'>John Wick</CardTitle>
            <div className='flex gap-1'>
              <span className='px-3 py-1 bg-tertiary/10 text-tertiary rounded-full'>
                Action
              </span>
              <span className='px-3 py-1 bg-tertiary/10 text-tertiary rounded-full'>
                Action
              </span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Carousel className='md:hidden'>
        <CarouselItem>
          <Card className='gap-5'>
            <CardHeader>
              <img
                className='min-w-60 md:min-w-[264px] rounded-md'
                src={test}
                alt='test'
              />
            </CardHeader>
            <CardContent className='flex-col items-start gap-2'>
              <CardTitle className='text-lg'>John Wick</CardTitle>
              <div className='flex gap-1'>
                <span className='px-3 py-1 bg-tertiary/10 text-tertiary rounded-full'>
                  Action
                </span>
                <span className='px-3 py-1 bg-tertiary/10 text-tertiary rounded-full'>
                  Action
                </span>
              </div>
            </CardContent>
          </Card>
        </CarouselItem>
        <CarouselItem>
          <Card className='gap-5'>
            <CardHeader>
              <img className='min-w-60 rounded-md' src={test} alt='test' />
            </CardHeader>
            <CardContent className='flex-col items-start gap-2'>
              <CardTitle className='text-lg'>John Wick</CardTitle>
              <div className='flex gap-1'>
                <span className='px-3 py-1 bg-tertiary/10 text-tertiary rounded-full'>
                  Action
                </span>
                <span className='px-3 py-1 bg-tertiary/10 text-tertiary rounded-full'>
                  Action
                </span>
              </div>
            </CardContent>
          </Card>
        </CarouselItem>
        <CarouselItem>
          <Card className='gap-5'>
            <CardHeader>
              <img className='min-w-60 rounded-md' src={test} alt='test' />
            </CardHeader>
            <CardContent className='flex-col items-start gap-2'>
              <CardTitle className='text-lg'>John Wick</CardTitle>
              <div className='flex gap-1'>
                <span className='px-3 py-1 bg-tertiary/10 text-tertiary rounded-full'>
                  Action
                </span>
                <span className='px-3 py-1 bg-tertiary/10 text-tertiary rounded-full'>
                  Action
                </span>
              </div>
            </CardContent>
          </Card>
        </CarouselItem>
        <CarouselItem>
          <Card className='gap-5'>
            <CardHeader>
              <img className='min-w-60 rounded-md' src={test} alt='test' />
            </CardHeader>
            <CardContent className='flex-col items-start gap-2'>
              <CardTitle className='text-lg'>John Wick</CardTitle>
              <div className='flex gap-1'>
                <span className='px-3 py-1 bg-tertiary/10 text-tertiary rounded-full'>
                  Action
                </span>
                <span className='px-3 py-1 bg-tertiary/10 text-tertiary rounded-full'>
                  Action
                </span>
              </div>
            </CardContent>
          </Card>
        </CarouselItem>
        <CarouselItem>
          <Card className='gap-5'>
            <CardHeader>
              <img className='min-w-60 rounded-md' src={test} alt='test' />
            </CardHeader>
            <CardContent className='flex-col items-start gap-2'>
              <CardTitle className='text-lg'>John Wick</CardTitle>
              <div className='flex gap-1'>
                <span className='px-3 py-1 bg-tertiary/10 text-tertiary rounded-full'>
                  Action
                </span>
                <span className='px-3 py-1 bg-tertiary/10 text-tertiary rounded-full'>
                  Action
                </span>
              </div>
            </CardContent>
          </Card>
        </CarouselItem>
        <CarouselItem>
          <Card className='gap-5'>
            <CardHeader>
              <img className='min-w-60 rounded-md' src={test} alt='test' />
            </CardHeader>
            <CardContent className='flex-col items-start gap-2'>
              <CardTitle className='text-lg'>John Wick</CardTitle>
              <div className='flex gap-1'>
                <span className='px-3 py-1 bg-tertiary/10 text-tertiary rounded-full'>
                  Action
                </span>
                <span className='px-3 py-1 bg-tertiary/10 text-tertiary rounded-full'>
                  Action
                </span>
              </div>
            </CardContent>
          </Card>
        </CarouselItem>
      </Carousel>
      <div>
        <a
          className='text-primary font-bold leading-8 tracking-[0.75px] flex justify-center items-center gap-2'
          href='#'
        >
          View All
          <svg
            width='20'
            height='20'
            viewBox='0 0 20 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M17.5 10L2.5 10'
              className='stroke-primary'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M12.5 5L17.5 10L12.5 15'
              className='stroke-primary'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </a>
      </div>
    </SectionContent>
  );
}
