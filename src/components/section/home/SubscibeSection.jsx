import { Card, CardContent, CardHeader, CardTitle } from "../../ui/Card";
import { SectionContent } from "../../ui/Section";

export default function SubscibeSection() {
  return (
    <SectionContent className='lg:px-[130px] md:text-start items-start mt-20'>
      <Card className='bg-primary rounded-2xl min-h-[538px] relative px-9 md:px-52 overflow-hidden'>
        <CardHeader className="justify-center items-center">
          <CardTitle className="text-center text-white text-3xl md:text-7xl">Subscribe to our newsletter</CardTitle>
        </CardHeader>
        <CardContent>
          <form className='w-full flex flex-col md:flex-row gap-3'>
            <input
              className='w-full h-16 pl-5 bg-white/10 outline-0 border border-white text-white rounded-md'
              type='text'
              name='name'
              placeholder='First name'
            />
            <input
              className='w-full h-16 pl-5 bg-white/10 outline-0 border border-white text-white rounded-md'
              type='email'
              name='email'
              placeholder='Email address'
            />
            <button className='w-full h-16 bg-white rounded-md text-primary font-bold' type='button'>
              Subscribe Now
            </button>
          </form>
          <span className='block w-[200px] h-[200px] border-8 border-white rounded-full absolute -bottom-24 -right-24'></span>
        </CardContent>
      </Card>
    </SectionContent>
  );
}
