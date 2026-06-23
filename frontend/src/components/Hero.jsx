import heroImage from '../assets/exclusive_hero.png';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="pt-20 h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      <div className="relative z-10 text-center px-4 text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Exclusive <span className="text-yellow-400">360</span> Journeys
        </h1>
        <p className="text-xl md:text-2xl mb-8">Luxury Safari Experiences Across Africa</p>
        <button className="bg-yellow-400 hover:bg-yellow-500 text-darkbrown px-8 py-3 rounded-lg font-semibold transition">
          Explore Packages
        </button>
      </div>
    </section>
  );
};

export default Hero;