import Hero from './Hero';
import Packages from './Packages';
import WhyChooseUs from './WhyChooseUs';
import Testimonials from './Testimonials';
import Gallery from './Gallery';
import Destinations from './Destinations';
import Stats from './Stats';
import Sustainability from './Sustainability';
import CTABanner from './CTABanner';
import WhatsAppChat from './WhatsAppChat';

const Home = () => {
  return (
    <>
      <Hero />
      <Stats />
      <Destinations />
      <Packages />
      <WhyChooseUs />
      <Testimonials />
      <Sustainability />
      <Gallery />
      <CTABanner />
      <WhatsAppChat />
    </>
  );
};

export default Home;