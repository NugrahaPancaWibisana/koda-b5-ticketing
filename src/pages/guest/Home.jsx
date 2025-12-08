import ChooseUsSection from "../../components/section/ChooseUsSection";
import HeroSection from "../../components/section/HeroSection";
import MovieSection from "../../components/section/MovieSection";
import SubscibeSection from "../../components/section/SubscibeSection";
import UpcomingMoviesSection from "../../components/section/UpcomingMoviesSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ChooseUsSection />
      <MovieSection />
      <UpcomingMoviesSection />
      <SubscibeSection />
    </>
  );
}
