// DestinationCarousel.jsx
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { destinations } from './Destinations';

const DestinationCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [hoveredId, setHoveredId] = useState(null);
  const timerRef = useRef(null);

  // Use first 6 destinations for the carousel
  const carouselDestinations = destinations.slice(0, 6);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === carouselDestinations.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? carouselDestinations.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    // Reset auto-play timer on manual navigation
    if (isAutoPlaying) {
      clearInterval(timerRef.current);
      timerRef.current = setInterval(nextSlide, 5000);
    }
  };

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      timerRef.current = setInterval(nextSlide, 5000);
    }
    return () => clearInterval(timerRef.current);
  }, [isAutoPlaying, currentIndex]);

  // Pause auto-play on hover
  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
    clearInterval(timerRef.current);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  const openWhatsApp = () => {
    const trigger = document.querySelector('.whatsapp-trigger');
    if (trigger) {
      trigger.click();
    } else {
      const buttons = document.querySelectorAll('button');
      for (let btn of buttons) {
        if (btn.classList.contains('whatsapp-trigger')) {
          btn.click();
          break;
        }
      }
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-[#faf8f4] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - ROAR AFRICA Style */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-[#c9a84c] text-sm font-light tracking-[0.4em] uppercase">
            Featured Destinations
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#1a1a2e] mt-3 font-serif tracking-wide">
            Discover Africa's <span className="text-[#c9a84c]">Finest</span>
          </h2>
          <div className="w-12 h-0.5 bg-[#c9a84c] mx-auto mt-4"></div>
          <p className="text-[#1a1a2e]/50 mt-4 max-w-2xl mx-auto text-sm sm:text-base font-light leading-relaxed">
            Handpicked destinations for the ultimate safari experience
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative max-w-6xl mx-auto"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Main Carousel */}
          <div className="relative overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {carouselDestinations.map((dest) => (
                <div
                  key={dest.id}
                  className="min-w-full relative"
                  onMouseEnter={() => setHoveredId(dest.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <div className="relative h-[500px] sm:h-[550px] md:h-[600px] overflow-hidden">
                    {/* Background Image */}
                    <img
                      src={dest.image}
                      alt={dest.name}
                      className="w-full h-full object-cover transition-transform duration-1000"
                      style={{
                        transform: hoveredId === dest.id ? 'scale(1.05)' : 'scale(1)'
                      }}
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e]/95 via-[#1a1a2e]/40 to-transparent"></div>
                    
                    {/* Decorative Pattern Overlay */}
                    <div className="absolute inset-0 opacity-5">
                      <div className="absolute inset-0" style={{
                        backgroundImage: `
                          repeating-linear-gradient(
                            45deg,
                            transparent,
                            transparent 20px,
                            rgba(255, 255, 255, 0.05) 20px,
                            rgba(255, 255, 255, 0.05) 21px
                          )
                        `,
                        backgroundSize: '40px 40px'
                      }} />
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-10 md:p-12 z-10">
                      <div className="max-w-2xl">
                        {/* Region Badge */}
                        <div className="flex items-center gap-3 mb-3">
                          <span className="bg-[#c9a84c] text-white text-xs font-light px-4 py-1.5 rounded-full tracking-wider">
                            {dest.region}
                          </span>
                          <span className="bg-white/10 backdrop-blur-sm text-white text-xs font-light px-4 py-1.5 rounded-full border border-white/20 flex items-center gap-1.5 tracking-wider">
                            <span className="text-[#c9a84c]">★</span> {dest.rating}
                          </span>
                        </div>

                        <h3 className="text-3xl sm:text-4xl md:text-5xl font-light text-white font-serif tracking-wide">
                          {dest.name}
                        </h3>
                        
                        <p className="text-white/60 text-sm sm:text-base mt-3 max-w-xl font-light leading-relaxed">
                          {dest.description}
                        </p>

                        <div className="flex flex-wrap items-center gap-4 mt-4">
                          <span className="text-white/40 text-sm font-light tracking-wider">
                            🕐 {dest.duration}
                          </span>
                          <span className="text-white/40 text-sm font-light tracking-wider">
                            💰 {dest.price}
                          </span>
                          <span className="text-white/40 text-sm font-light tracking-wider">
                            🦁 {dest.wildlife}
                          </span>
                        </div>

                        <div className="flex items-center gap-3 mt-6">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              openWhatsApp();
                            }}
                            className="bg-[#c9a84c] hover:bg-[#b8973a] text-white text-sm font-light px-6 py-2.5 rounded-full transition transform hover:scale-105 tracking-wider"
                          >
                            Book Now
                          </button>
                          <Link
                            to={`/destinations/${dest.id}`}
                            className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white text-sm font-light px-6 py-2.5 rounded-full transition border border-white/20 tracking-wider"
                          >
                            Explore
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Slide Indicator - Gold Line */}
                    <div className={`absolute bottom-0 left-0 h-0.5 bg-[#c9a84c] transition-all duration-1000 ${
                      hoveredId === dest.id ? 'w-full' : 'w-0'
                    }`}></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows - ROAR AFRICA Style */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 border border-white/20 hover:scale-110 z-20"
              aria-label="Previous slide"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 border border-white/20 hover:scale-110 z-20"
              aria-label="Next slide"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dots Indicator - ROAR AFRICA Style */}
          <div className="flex justify-center gap-2 mt-6">
            {carouselDestinations.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? 'w-8 h-2 bg-[#c9a84c]'
                    : 'w-2 h-2 bg-[#1a1a2e]/20 hover:bg-[#1a1a2e]/40'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Slide Counter - ROAR AFRICA Style */}
          <div className="text-center mt-3">
            <span className="text-[#1a1a2e]/30 text-xs font-light tracking-wider">
              {currentIndex + 1} / {carouselDestinations.length}
            </span>
          </div>
        </div>

        {/* View All CTA - ROAR AFRICA Style */}
        <div className="text-center mt-12 sm:mt-16">
          <Link
            to="/destinations"
            className="inline-flex items-center gap-3 bg-[#1a1a2e] hover:bg-[#2a2a3e] text-white px-8 py-3.5 rounded-full font-light tracking-wider transition transform hover:scale-105"
          >
            <span>Explore All Destinations</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DestinationCarousel;