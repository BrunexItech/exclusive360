import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { heroAPI } from '../api';

const Hero = () => {
  const [heroData, setHeroData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    heroAPI.getHero()
      .then(data => {
        setHeroData(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <section className="pt-20 h-screen flex items-center justify-center bg-darkgreen">
        <div className="text-white text-xl">Loading...</div>
      </section>
    );
  }

  // Build the base URL from environment variable
  const baseUrl = import.meta.env.VITE_API_URL 
    ? import.meta.env.VITE_API_URL.replace('/api', '')
    : 'http://127.0.0.1:8007';

  const imageUrl = heroData?.background_image 
    ? `${baseUrl}${heroData.background_image}`
    : 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200';

  const buttonLink = heroData?.button_link || '/packages';

  return (
    <section
      id="home"
      className="pt-20 h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 text-center px-4 text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Exclusive <span className="text-yellow-400">360</span> Journeys
        </h1>
        <p className="text-xl md:text-2xl mb-8">Luxury Safari Experiences Across Africa</p>
        <Link
          to={buttonLink}
          className="bg-yellow-400 hover:bg-yellow-500 text-darkbrown px-8 py-3 rounded-lg font-semibold transition inline-block"
        >
          Explore Packages
        </Link>
      </div>
    </section>
  );
};

export default Hero;