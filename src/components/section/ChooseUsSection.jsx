import { SectionContent } from "../ui/Section";
import { Card, CardContent, CardDesc, CardHeader, CardTitle } from "../ui/Card";

export default function ChooseUsSection() {
  return (
    <SectionContent className='lg:px-[130px] md:text-start items-start mt-20 md:mt-0'>
      <h1 className='text-primary font-bold text-lg leading-8 tracking-[0.75px]'>
        WHY CHOOSE US
      </h1>
      <h2 className='text-secondary font-normal text-[32px] leading-11 tracking-[1px]'>
        Unleashing the Ultimate Movie Experience
      </h2>

      <div className='flex flex-col md:flex-row gap-15 mt-5'>
        <Card className='gap-4'>
          <CardHeader className='justify-center md:justify-start'>
            <div className='w-[54px] h-[54px] bg-primary/20 rounded-full p-3'>
              <svg
                className='w-full'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  className='fill-primary'
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M11.7281 21.9137C11.8388 21.9715 11.9627 22.0009 12.0865 22C12.2103 21.999 12.3331 21.9686 12.4449 21.9097L16.0128 20.0025C17.0245 19.4631 17.8168 18.8601 18.435 18.1579C19.779 16.6282 20.5129 14.6758 20.4998 12.6626L20.4575 6.02198C20.4535 5.25711 19.9511 4.57461 19.2082 4.32652L12.5707 2.09956C12.1711 1.96424 11.7331 1.96718 11.3405 2.10643L4.72824 4.41281C3.9893 4.67071 3.496 5.35811 3.50002 6.12397L3.54231 12.7597C3.5554 14.7758 4.31448 16.7194 5.68062 18.2335C6.3048 18.9258 7.10415 19.52 8.12699 20.0505L11.7281 21.9137ZM10.7836 14.1089C10.9326 14.2521 11.1259 14.3227 11.3192 14.3207C11.5125 14.3198 11.7047 14.2472 11.8517 14.1021L15.7508 10.2581C16.0438 9.96882 16.0408 9.50401 15.7448 9.21866C15.4478 8.9333 14.9696 8.93526 14.6766 9.22454L11.3081 12.5449L9.92885 11.2191C9.63186 10.9337 9.15467 10.9367 8.8607 11.226C8.56774 11.5152 8.57076 11.98 8.86775 12.2654L10.7836 14.1089Z'
                />
              </svg>
            </div>
          </CardHeader>
          <CardContent className='flex-col justify-center md:justify-start gap-4'>
            <CardTitle className='text-center md:text-left'>
              Guaranteed
            </CardTitle>
            <CardDesc className='md:text-left'>
              Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec,
              proin faucibus nibh et sagittis a. Lacinia purus ac amet.
            </CardDesc>
          </CardContent>
        </Card>

        <Card className='gap-4'>
          <CardHeader className='justify-center md:justify-start'>
            <div className='w-[54px] h-[54px] bg-primary/20 rounded-full p-4'>
              <svg
                className='w-full'
                viewBox='0 0 21 21'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g clipPath='url(#clip0_16_9720)'>
                  <path
                    className='fill-primary'
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M10.5 21C16.299 21 21 16.299 21 10.5C21 4.70101 16.299 0 10.5 0C4.70101 0 0 4.70101 0 10.5C0 16.299 4.70101 21 10.5 21ZM15.4616 8.24293C15.8461 7.85852 15.8461 7.23523 15.4616 6.85082C15.0772 6.4664 14.454 6.4664 14.0696 6.85082L8.85938 12.061L6.93043 10.1321C6.54602 9.74765 5.92273 9.74765 5.53832 10.1321C5.1539 10.5165 5.1539 11.1398 5.53832 11.5242L8.16332 14.1491C8.54774 14.5336 9.17101 14.5336 9.55543 14.1491L15.4616 8.24293Z'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_16_9720'>
                    <rect width='21' height='21' fill='white' />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </CardHeader>
          <CardContent className='flex-col justify-center md:justify-start gap-4'>
            <CardTitle className='text-center md:text-left'>
              Affordable
            </CardTitle>
            <CardDesc>
              Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec,
              proin faucibus nibh et sagittis a. Lacinia purus ac amet.
            </CardDesc>
          </CardContent>
        </Card>

        <Card className='gap-4'>
          <CardHeader className='justify-center md:justify-start'>
            <div className='w-[54px] h-[54px] bg-primary/20 rounded-full p-4'>
              <svg
                className='w-full'
                viewBox='0 0 25 23'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  className='fill-primary'
                  d='M2.42867 0C1.0929 0 0 1.04375 0 2.31945V16.2362L3.643 12.757H14.572C15.9078 12.757 17.0007 11.7132 17.0007 10.4375V2.31945C17.0007 1.04375 15.9078 0 14.572 0H2.42867ZM19.4294 5.79863V10.4375C19.4294 12.9959 17.2508 15.0764 14.572 15.0764H7.28601V16.2362C7.28601 17.5119 8.37891 18.5556 9.71468 18.5556H20.6437L24.2867 22.0348V8.11808C24.2867 6.84238 23.1938 5.79863 21.858 5.79863H19.4294Z'
                />
              </svg>
            </div>
          </CardHeader>
          <CardContent className='flex-col justify-center md:justify-start gap-4'>
            <CardTitle className='text-center md:text-left'>
              24/7 Customer Support
            </CardTitle>
            <CardDesc>
              Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec,
              proin faucibus nibh et sagittis a. Lacinia purus ac amet.
            </CardDesc>
          </CardContent>
        </Card>
      </div>
    </SectionContent>
  );
}
