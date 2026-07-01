import Hero from './Hero';
import Stats from './Stats';
import MediaTextSection from './MediaTextSection';
import DestinationCarousel from './DestinationCarousel';
import TestimonialCarousel from './TestimonialCarousel';
import Packages from './Packages';
import WhyChooseUs from './WhyChooseUs';
import Testimonials from './Testimonials';
import Gallery from './Gallery';
import Destinations from './Destinations';
import Sustainability from './Sustainability';
import CTABanner from './CTABanner';
import WhatsAppChat from './WhatsAppChat';

const Home = () => {
  return (
    <>
      <Hero />
      <Stats />
      <MediaTextSection />
      <DestinationCarousel />
      <Packages />
      <WhyChooseUs />
      <TestimonialCarousel />    
      <Testimonials />           
      <Sustainability />
      <Gallery />
      <Destinations />
      <CTABanner />
      <WhatsAppChat />
    </>
  );
};

export default Home;