
import FeatureCources from './component/FeatureCources';
import Footer from './component/Footer';
import HeroSection from './component/HeroSection';
import Instructors from './component/Instructors';
import TestimonialCards from './component/TestimonialCards';
import UpcomingWebinars from './component/UpcomingWebinars';
import WhyChooseUs from './component/WhyChooseUs';

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <h1 className="text-2xl text-center"></h1>
      <HeroSection/>
      <FeatureCources/>
      <WhyChooseUs/>
      <TestimonialCards/>
      <UpcomingWebinars/>
      <Instructors/>
      <Footer/>
    </main>
  );
}
