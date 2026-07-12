import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const DestinationCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [hoveredId, setHoveredId] = useState(null);
  const timerRef = useRef(null);

  // Kenya Safari Destinations
  const safariDestinations = [
    {
      id: 'nairobi',
      name: 'Nairobi',
      region: 'Nairobi County',
      image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&q=80',
      description: 'Where the wild heart of Africa beats alongside the city pulse. Home to Nairobi National Park, where giraffes roam against a skyline of glass and steel.',
      duration: '2-3 Days',
      price: 'From $500',
      wildlife: 'Big 5 & City Lights',
      rating: 4.8,
      badge: 'Urban Wilderness'
    },
    {
      id: 'nakuru',
      name: 'Nakuru',
      region: 'Nakuru County',
      image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&q=80',
      description: 'A symphony of pink as millions of flamingos dance across Lake Nakuru\'s shores, while rhinos roam freely in one of Africa\'s greatest sanctuaries.',
      duration: '2-3 Days',
      price: 'From $600',
      wildlife: 'Rhinos & Flamingos',
      rating: 4.7,
      badge: 'Feathers & Footprints'
    },
    {
      id: 'narok',
      name: 'Narok',
      region: 'Narok County',
      image: 'https://images.unsplash.com/photo-1614531341773-3bff8b7cb3fc?w=800&q=80',
      description: 'The stage for nature\'s greatest spectacle. Witness the thunderous Great Migration across the Maasai Mara\'s endless golden plains — a dance of survival and wonder.',
      duration: '3-5 Days',
      price: 'From $800',
      wildlife: 'Big 5 & The Great Migration',
      rating: 4.9,
      badge: 'The Great Migration'
    },
    {
      id: 'laikipia',
      name: 'Laikipia',
      region: 'Laikipia County',
      image: 'https://images.unsplash.com/photo-1591005383946-16532ba69aee?w=800&q=80',
      description: 'Where the rarest species find refuge. Explore private conservancies where endangered wildlife thrives against the majestic backdrop of Mount Kenya.',
      duration: '3-4 Days',
      price: 'From $700',
      wildlife: 'Endangered Species',
      rating: 4.6,
      badge: 'Wildlife Refuge'
    },
    {
      id: 'kajiado',
      name: 'Kajiado',
      region: 'Kajiado County',
      image: 'https://images.unsplash.com/photo-1545200381-89c298dea43d?w=800&q=80',
      description: 'The land of giants. Under the watchful gaze of Mount Kilimanjaro, vast elephant herds wander through Amboseli\'s ancient landscapes in timeless majesty.',
      duration: '2-4 Days',
      price: 'From $650',
      wildlife: 'Elephants & Kilimanjaro',
      rating: 4.7,
      badge: 'Where Giants Roam'
    },
    {
      id: 'kwale',
      name: 'Kwale',
      region: 'Kwale County',
      image: 'https://images.unsplash.com/photo-1582574643306-d00ea3f7d49b?w=800&q=80',
      description: 'Where the savanna meets the sea. Dive into turquoise waters, explore coral gardens, and wander through coastal forests where colobus monkeys leap through the canopy.',
      duration: '3-5 Days',
      price: 'From $500',
      wildlife: 'Marine Life & Coastal Forests',
      rating: 4.5,
      badge: 'Where Land Meets Ocean'
    }
  ];

  // Duplicate items for infinite scroll effect
  const carouselItems = [...safariDestinations, ...safariDestinations, ...safariDestinations];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const next = prevIndex + 1;
      if (next >= safariDestinations.length * 2) {
        return safariDestinations.length;
      }
      return next;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const prev = prevIndex - 1;
      if (prev < 0) {
        return safariDestinations.length - 1;
      }
      return prev;
    });
  };

  const goToSlide = (index) => {
    setCurrentIndex(index + safariDestinations.length);
    if (isAutoPlaying) {
      clearInterval(timerRef.current);
      timerRef.current = setInterval(nextSlide, 6000);
    }
  };

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      timerRef.current = setInterval(nextSlide, 6000);
    }
    return () => clearInterval(timerRef.current);
  }, [isAutoPlaying]);

  // Reset position when reaching the duplicate boundaries
  useEffect(() => {
    if (currentIndex >= safariDestinations.length * 2) {
      setTimeout(() => {
        setCurrentIndex(safariDestinations.length);
      }, 50);
    }
    if (currentIndex < 0) {
      setTimeout(() => {
        setCurrentIndex(safariDestinations.length - 1);
      }, 50);
    }
  }, [currentIndex]);

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

  // Get the actual destination data for the current slide index
  const getCurrentDestination = () => {
    const index = currentIndex % safariDestinations.length;
    return safariDestinations[index];
  };

  return (
    <section className="py-16 sm:py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Safari Dreamscape Theme */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-[#800020] text-sm font-semibold tracking-[0.3em] uppercase">
            The Safari Dreamscape
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#2C1810] mt-3 font-serif tracking-wide">
            Where Every Sunrise <span className="text-[#8B0000]">Tells a Story</span>
          </h2>
          <div className="w-12 h-0.5 bg-[#8B7355] mx-auto mt-4"></div>
          <p className="text-[#2C1810]/50 mt-4 max-w-2xl mx-auto text-sm sm:text-base font-light leading-relaxed">
            Step into a world where elephants roam beneath Kilimanjaro, lions rule the golden plains, and the Indian Ocean kisses ancient shores. Your safari adventure begins here.
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative max-w-6xl mx-auto"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Main Carousel */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <div 
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {carouselItems.map((destination, index) => (
                <div
                  key={`${destination.id}-${index}`}
                  className="min-w-full relative"
                  onMouseEnter={() => setHoveredId(destination.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <div className="relative h-[500px] sm:h-[550px] md:h-[600px] overflow-hidden">
                    {/* Background Image */}
                    <img
                      src={destination.image}
                      alt={destination.name}
                      className="w-full h-full object-cover transition-transform duration-1000"
                      style={{
                        transform: hoveredId === destination.id ? 'scale(1.05)' : 'scale(1)'
                      }}
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/95 via-[#2C1810]/40 to-transparent"></div>
                    
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
                          <span className="bg-[#8B7355] text-white text-xs font-semibold px-4 py-1.5 rounded-full tracking-wider">
                            {destination.region}
                          </span>
                          <span className="bg-white/10 backdrop-blur-sm text-white text-xs font-light px-4 py-1.5 rounded-full border border-white/20 flex items-center gap-1.5 tracking-wider">
                            <span className="text-[#D4C5A9]">★</span> {destination.rating}
                          </span>
                        </div>

                        <h3 className="text-3xl sm:text-4xl md:text-5xl font-light text-white font-serif tracking-wide">
                          {destination.name}
                        </h3>
                        
                        <p className="text-white/60 text-sm sm:text-base mt-3 max-w-xl font-light leading-relaxed">
                          {destination.description}
                        </p>

                        <div className="flex flex-wrap items-center gap-4 mt-4">
                          <span className="text-white/40 text-sm font-light tracking-wider">
                            {destination.duration}
                          </span>
                          <span className="text-white/40 text-sm font-light tracking-wider">
                            {destination.price}
                          </span>
                          <span className="text-white/40 text-sm font-light tracking-wider">
                            {destination.wildlife}
                          </span>
                        </div>

                        <div className="flex items-center gap-3 mt-6">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              openWhatsApp();
                            }}
                            className="bg-[#8B7355] hover:bg-[#6B5340] text-white text-sm font-semibold px-6 py-2.5 rounded-full transition transform hover:scale-105 tracking-wider shadow-lg"
                          >
                            Dream It
                          </button>
                          <Link
                            to={`/destinations/${destination.id}`}
                            className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white text-sm font-light px-6 py-2.5 rounded-full transition border border-white/20 tracking-wider"
                          >
                            Live It
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Slide Indicator - Gold Line */}
                    <div className={`absolute bottom-0 left-0 h-0.5 bg-[#D4C5A9] transition-all duration-1000 ${
                      hoveredId === destination.id ? 'w-full' : 'w-0'
                    }`}></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
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

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {safariDestinations.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === (currentIndex % safariDestinations.length)
                    ? 'w-8 h-2 bg-[#8B7355]'
                    : 'w-2 h-2 bg-[#2C1810]/20 hover:bg-[#2C1810]/40'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Slide Counter */}
          <div className="text-center mt-3">
            <span className="text-[#2C1810]/30 text-xs font-light tracking-wider">
              {(currentIndex % safariDestinations.length) + 1} / {safariDestinations.length}
            </span>
          </div>
        </div>

        {/* View All CTA - Begin Your Safari Story */}
        <div className="text-center mt-12 sm:mt-16">
          <Link
            to="/destinations"
            className="inline-flex items-center gap-3 bg-[#8B0000] hover:bg-[#6B0000] text-white px-8 py-3.5 rounded-full font-semibold tracking-wider transition transform hover:scale-105 shadow-lg"
          >
            <span>Begin Your Safari Story</span>
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