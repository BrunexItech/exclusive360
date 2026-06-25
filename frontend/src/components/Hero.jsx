import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { heroAPI, heroVideoAPI } from '../api';

const Hero = () => {
  const [heroData, setHeroData] = useState(null);
  const [videoUrl, setVideoUrl] = useState('');
  const [showVideo, setShowVideo] = useState(false);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const videoRef = useRef(null);

  // Fetch hero image and video
  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        const imageData = await heroAPI.getHero();
        setHeroData(imageData);

        const videoData = await heroVideoAPI.getVideos();
        if (videoData && videoData.length > 0) {
          const baseUrl = import.meta.env.VITE_API_URL 
            ? import.meta.env.VITE_API_URL.replace('/api', '')
            : 'http://127.0.0.1:8007';
          setVideoUrl(`${baseUrl}${videoData[0].video}`);
        }
      } catch (error) {
        console.error('Error fetching hero data:', error);
      }
    };

    fetchHeroData();
  }, []);

  // Handle video loading
  useEffect(() => {
    if (videoRef.current && videoUrl) {
      videoRef.current.load();
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsVideoReady(true);
          })
          .catch(() => {
            setIsVideoReady(true);
          });
      }
    }
  }, [videoUrl]);

  // Smooth swap after video is ready
  useEffect(() => {
    if (isVideoReady) {
      const timer = setTimeout(() => {
        setShowVideo(true);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isVideoReady]);

  const baseUrl = import.meta.env.VITE_API_URL 
    ? import.meta.env.VITE_API_URL.replace('/api', '')
    : 'http://127.0.0.1:8007';

  const buttonLink = heroData?.button_link || '/packages';

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden pt-16 sm:pt-20">
      {/* Background Layer */}
      <div className="absolute inset-0 w-full h-full">
        {/* Safari Gradient Background with Pattern */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#800020] via-[#3B1F0B] to-[#1B3B1B]">
          {/* Animated Pattern Overlay */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                repeating-linear-gradient(
                  45deg,
                  transparent,
                  transparent 20px,
                  rgba(255, 255, 255, 0.05) 20px,
                  rgba(255, 255, 255, 0.05) 21px
                ),
                repeating-linear-gradient(
                  -45deg,
                  transparent,
                  transparent 20px,
                  rgba(255, 255, 255, 0.05) 20px,
                  rgba(255, 255, 255, 0.05) 21px
                )
              `,
              animation: 'shimmer 8s linear infinite',
              backgroundSize: '60px 60px'
            }} />
            
            {/* Compass Rose Decoration - Responsive */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10">
              <div className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full border-2 sm:border-4 border-white/20 animate-spin-slow" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 sm:w-36 sm:h-36 md:w-48 md:h-48 rounded-full border border-white/10" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 sm:w-8 sm:h-8 bg-white/20 rounded-full" />
            </div>
          </div>

          {/* Loading Shimmer Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-shimmer" />
        </div>

        {/* Video - hidden initially, fades in when ready */}
        <div 
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            showVideo ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            src={videoUrl}
            autoPlay
            loop
            muted
            playsInline
            aria-hidden="true"
            onLoadedData={() => setIsVideoReady(true)}
          />
        </div>
        
        {/* Dark Overlay - reduced opacity for better gradient visibility */}
        <div className="absolute inset-0 bg-black/30 z-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 min-h-screen flex flex-col items-center justify-center text-center text-white px-4 sm:px-6 md:px-8 max-w-4xl mx-auto">
        {/* Brand Name */}
        <div className="mb-3 sm:mb-4 md:mb-6">
          <span className="text-yellow-400 text-[10px] sm:text-xs md:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase font-semibold">
            Premium Safari
          </span>
        </div>
        
        <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-2 sm:mb-3 md:mb-4 font-serif leading-tight">
          Exclusive <span className="text-yellow-400">360</span> Journeys
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 font-light tracking-wide px-2">
          Luxury Safari Experiences Across Africa
        </p>

        {/* Package Indicators - Responsive */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-yellow-400"></span>
            <span className="text-[8px] sm:text-[10px] md:text-xs uppercase tracking-wider text-yellow-400/80">
              Platinum
            </span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-amber-400"></span>
            <span className="text-[8px] sm:text-[10px] md:text-xs uppercase tracking-wider text-amber-400/80">
              Gold
            </span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-amber-600"></span>
            <span className="text-[8px] sm:text-[10px] md:text-xs uppercase tracking-wider text-amber-600/80">
              Bronze
            </span>
          </div>
        </div>

        <Link
          to={buttonLink}
          className="bg-yellow-400 hover:bg-yellow-500 text-[#3B1F0B] px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold transition transform hover:scale-105 inline-block shadow-lg text-sm sm:text-base"
        >
          Explore Packages
        </Link>
      </div>

      {/* Add custom animations - moved to global CSS */}
    </section>
  );
};

export default Hero;