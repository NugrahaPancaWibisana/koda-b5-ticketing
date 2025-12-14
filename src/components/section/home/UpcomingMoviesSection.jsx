import { Card, CardContent, CardHeader, CardTitle } from "../../ui/Card";
import { Carousel, CarouselItem } from "../../ui/Carousel";
import { SectionContent } from "../../ui/Section";
import test from "../../../assets/test.png";

export default function UpcomingMoviesSection() {
  return (
    <SectionContent className='lg:px-[130px] md:text-start items-start mt-20'>
      <div className='flex md:justify-between justify-center items-center w-full'>
        <div>
          <h1 className='text-primary font-bold text-lg leading-8 tracking-[0.75px]'>
            UPCOMING MOVIES
          </h1>
          <h2 className='text-secondary font-normal text-[32px] leading-11 tracking-[1px]'>
            Exciting Movie Coming Soon
          </h2>
        </div>
        <div className='md:flex gap-2 hidden'>
          <button className='p-5 rotate-180 bg-tertiary rounded-full'>
            <svg
              className='stroke-white'
              width='20'
              height='20'
              viewBox='0 0 20 20'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M17.5 10L2.5 10'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M12.5 5L17.5 10L12.5 15'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </button>
          <button className='p-5 bg-primary rounded-full'>
            <svg
              className='stroke-white'
              width='20'
              height='20'
              viewBox='0 0 20 20'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M17.5 10L2.5 10'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M12.5 5L17.5 10L12.5 15'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </button>
        </div>
      </div>

      <div className='md:grid grid-cols-4 gap-5 hidden'>
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
    </SectionContent>
  );
}
