import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { heroAPI, heroVideoAPI } from '../api';

const Hero = () => {
  const [heroData, setHeroData] = useState(null);
  const [videoData, setVideoData] = useState(null);
  const [showVideo, setShowVideo] = useState(false);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const videoRef = useRef(null);
  const slideInterval = useRef(null);

  // Hero slides data
  const heroSlides = [
    {
      title: 'Genuine Safaris',
      subtitle: 'Genuine Difference',
      description: 'Discover Exclusive 360\'s authentic safaris in East Africa\'s iconic wilderness that make a genuine difference to local communities and conservation.',
      ctaText: 'Explore Safaris',
      ctaLink: '/packages',
      icon: '✦'
    },
    {
      title: 'Iconic',
      subtitle: 'Camps & Lodges',
      description: 'Our camps and lodges are located within carefully considered and iconic wilderness areas, ranging from authentic tented safari camps to luxurious lodges.',
      ctaText: 'View Accommodations',
      ctaLink: '/destinations',
      icon: '✦'
    },
    {
      title: 'Our People',
      subtitle: 'The Exclusive 360 Family',
      description: 'When you travel with us, you become part of our family. Our passionate and knowledgeable staff are among the best in the industry.',
      ctaText: 'About Us',
      ctaLink: '/about',
      icon: '✦'
    },
    {
      title: 'Empowering',
      subtitle: 'People & Nature',
      description: 'At the heart of everything we do is a deep commitment to empowering the people and crucial wilderness regions of East Africa.',
      ctaText: 'Our Impact',
      ctaLink: '/about',
      icon: '✦'
    }
  ];

  // Fetch hero image and video
  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        const imageData = await heroAPI.getHero();
        setHeroData(imageData);

        const videoData = await heroVideoAPI.getVideos();
        if (videoData && videoData.length > 0) {
          setVideoData(videoData[0]);
        }
      } catch (error) {
        console.error('Error fetching hero data:', error);
      }
    };

    fetchHeroData();
  }, []);

  // Get video source
  const getVideoSrc = () => {
    if (!videoData) return '';
    const baseUrl = import.meta.env.VITE_API_URL 
      ? import.meta.env.VITE_API_URL.replace('/api', '')
      : 'http://127.0.0.1:8007';
    
    if (videoData.type === 'url') {
      return videoData.video;
    } else {
      return `${baseUrl}${videoData.video}`;
    }
  };

  const videoSrc = getVideoSrc();

  // Handle video loading
  useEffect(() => {
    if (videoRef.current && videoSrc) {
      videoRef.current.load();
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsVideoReady(true))
          .catch(() => setIsVideoReady(true));
      }
    }
  }, [videoSrc]);

  // Smooth swap after video is ready
  useEffect(() => {
    if (isVideoReady) {
      const timer = setTimeout(() => setShowVideo(true), 300);
      return () => clearTimeout(timer);
    }
  }, [isVideoReady]);

  // Auto-rotate slides
  useEffect(() => {
    slideInterval.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 8000);

    return () => {
      if (slideInterval.current) {
        clearInterval(slideInterval.current);
      }
    };
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
      slideInterval.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      }, 8000);
    }
  };

  const current = heroSlides[currentSlide];

  return (
    <section className="relative min-h-screen w-full overflow-hidden pt-16 sm:pt-20">
      {/* Background Layer - NO OPACITY, FULLY CLEAR */}
      <div className="absolute inset-0 w-full h-full">
        {/* Poster Image Background - fully clear, no opacity */}
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="https://media.istockphoto.com/id/468961351/photo/zebras-in-tarangire-national-park-tanzania.jpg?s=612x612&w=0&k=20&c=tM2ajwcLDG8Ws9ei-FnsGnEOBjF7mHrrBu-uFSutH0c="
            alt="Safari background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Video - appears after loading, fully clear */}
        <div 
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            showVideo ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {videoSrc && (
            <video
              ref={videoRef}
              className="absolute inset-0 w-full h-full object-cover"
              src={videoSrc}
              autoPlay
              loop
              muted
              playsInline
              aria-hidden="true"
              onLoadedData={() => setIsVideoReady(true)}
              poster="https://media.istockphoto.com/id/468961351/photo/zebras-in-tarangire-national-park-tanzania.jpg?s=612x612&w=0&k=20&c=tM2ajwcLDG8Ws9ei-FnsGnEOBjF7mHrrBu-uFSutH0c="
            />
          )}
        </div>
      </div>

      {/* Dark Overlay - For text readability only */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Content - All text is WHITE */}
      <div className="relative z-20 min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 max-w-4xl mx-auto">
        
        {/* Premium Safari Badge */}
        <div className="mb-3 sm:mb-4 md:mb-6">
          <span className="text-[#d1973e] text-[10px] sm:text-xs md:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase font-semibold">
            Premium Safari
          </span>
        </div>
        
        {/* Dynamic Slides - All text WHITE */}
        <div className="relative w-full min-h-[200px] sm:min-h-[250px] md:min-h-[300px]">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                index === currentSlide 
                  ? 'opacity-100 translate-x-0 z-10' 
                  : index < currentSlide 
                    ? 'opacity-0 -translate-x-full z-0' 
                    : 'opacity-0 translate-x-full z-0'
              }`}
            >
              <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light mb-2 sm:mb-3 md:mb-4 font-serif leading-tight text-white">
                <em className="font-script text-[#d1973e] not-italic">{slide.title}</em>
                <br />
                {slide.subtitle}
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 font-light tracking-wide px-2 max-w-2xl mx-auto text-white/80">
                {slide.description}
              </p>
            </div>
          ))}
        </div>

        {/* Slide Indicators - White */}
        <div className="flex gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide 
                  ? 'w-8 h-2 bg-[#d1973e]' 
                  : 'w-2 h-2 bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Scroll Indicator - White */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-center justify-center">
            <div className="w-1 h-2 rounded-full bg-white/50 animate-pulse mt-1"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;