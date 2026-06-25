import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { heroVideoAPI } from '../api';

const Hero = () => {
  const [videos, setVideos] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    heroVideoAPI.getVideos()
      .then(data => {
        setVideos(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (videos.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [videos.length]);

  useEffect(() => {
    if (videoRef.current && videos.length > 0) {
      videoRef.current.load();
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }
    }
  }, [currentIndex, videos]);

  const baseUrl = import.meta.env.VITE_API_URL 
    ? import.meta.env.VITE_API_URL.replace('/api', '')
    : 'http://127.0.0.1:8007';

  if (loading) {
    return (
      <section className="pt-20 h-screen flex items-center justify-center bg-darkgreen">
        <div className="text-white text-xl">Loading...</div>
      </section>
    );
  }

  if (videos.length === 0) {
    return (
      <section className="pt-20 h-screen flex items-center justify-center bg-darkgreen">
        <div className="text-white text-xl">No videos available</div>
      </section>
    );
  }

  return (
    <section id="home" className="relative h-[90vh] sm:h-[95vh] w-full overflow-hidden pt-20">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          key={currentIndex}
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
          src={videos[currentIndex]?.video ? `${baseUrl}${videos[currentIndex].video}` : ''}
          autoPlay
          muted
          playsInline
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/50 z-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Exclusive <span className="text-yellow-400">360</span> Journeys
        </h1>
        <p className="text-xl md:text-2xl mb-8">Luxury Safari Experiences Across Africa</p>
        <Link
          to="/packages"
          className="bg-yellow-400 hover:bg-yellow-500 text-darkbrown px-8 py-3 rounded-lg font-semibold transition inline-block"
        >
          Explore Packages
        </Link>
      </div>
    </section>
  );
};

export default Hero;