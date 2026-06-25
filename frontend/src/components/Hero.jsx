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
    <section id="home" className="relative h-[90vh] sm:h-[95vh] w-full overflow-hidden pt-20">
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
            
            {/* Compass Rose Decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10">
              <div className="w-64 h-64 rounded-full border-4 border-white/20 animate-spin-slow" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border-2 border-white/10" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white/20 rounded-full" />
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
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center text-white px-4 max-w-4xl mx-auto">
        {/* Brand Name */}
        <div className="mb-6">
          <span className="text-yellow-400 text-sm tracking-[0.3em] uppercase font-semibold">Premium Safari</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-4 font-serif">
          Exclusive <span className="text-yellow-400">360</span> Journeys
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 font-light tracking-wide">
          Luxury Safari Experiences Across Africa
        </p>

        {/* Package Indicators */}
        <div className="flex gap-4 mb-8">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
            <span className="text-xs uppercase tracking-wider text-yellow-400/80">Platinum</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400"></span>
            <span className="text-xs uppercase tracking-wider text-amber-400/80">Gold</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-600"></span>
            <span className="text-xs uppercase tracking-wider text-amber-600/80">Bronze</span>
          </div>
        </div>

        <Link
          to={buttonLink}
          className="bg-yellow-400 hover:bg-yellow-500 text-[#3B1F0B] px-8 py-3 rounded-lg font-semibold transition transform hover:scale-105 inline-block shadow-lg"
        >
          Explore Packages
        </Link>
      </div>

      {/* Add custom animations */}
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-shimmer {
          animation: shimmer 3s infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;