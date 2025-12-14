import ChooseUsSection from "../../components/section/home/ChooseUsSection";
import HeroSection from "../../components/section/home/HeroSection";
import MovieSection from "../../components/section/home/MovieSection";
import SubscibeSection from "../../components/section/home/SubscibeSection";
import UpcomingMoviesSection from "../../components/section/home/UpcomingMoviesSection";

export default function Home() {
  return (
    <>
      <div className='px-6 md:px-0'>
        <HeroSection />
        <ChooseUsSection />
        <MovieSection />
        <UpcomingMoviesSection />
        <SubscibeSection />
      </div>
    </>
  );
}
