import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const autoPlayRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah & Michael Thompson',
      location: 'London, UK',
      quote: '"Our safari with Exclusive 360 was absolutely life-changing. The attention to detail, the knowledgeable guides, and the breathtaking wildlife encounters exceeded every expectation. We saw the Big Five in just three days!"',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face',
      rating: 5,
      trip: 'Kenya Safari'
    },
    {
      id: 2,
      name: 'David & Maria Rodriguez',
      location: 'Miami, USA',
      quote: '"From the moment we landed in Tanzania, everything was perfectly orchestrated. The camps were incredible, the food was outstanding, and our guide made sure we had the most memorable experience. We\'re already planning our next trip!"',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
      rating: 5,
      trip: 'Tanzania Safari'
    },
    {
      id: 3,
      name: 'Emma Wilson',
      location: 'Sydney, Australia',
      quote: '"I traveled solo and felt completely safe and welcomed throughout. The gorilla trekking in Rwanda was the most incredible experience of my life. Exclusive 360 made it seamless and unforgettable."',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face',
      rating: 5,
      trip: 'Rwanda Gorilla Trek'
    },
    {
      id: 4,
      name: 'James & Priya Patel',
      location: 'Mumbai, India',
      quote: '"The Okavango Delta exceeded all our dreams. Floating through the channels in a mokoro canoe, watching elephants swim, and sleeping under the stars — pure magic. Exclusive 360 delivered a once-in-a-lifetime adventure."',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face',
      rating: 5,
      trip: 'Botswana Safari'
    },
    {
      id: 5,
      name: 'Linda & Robert Chen',
      location: 'Toronto, Canada',
      quote: '"We\'ve traveled extensively, but nothing compares to the attention and care we received from Exclusive 360. Every detail was perfect, from the luxury lodges to the private game drives. Highly recommend!"',
      image: 'https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?w=200&h=200&fit=crop&crop=face',
      rating: 5,
      trip: 'South Africa Safari'
    }
  ];

  // Intersection Observer for animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-play carousel
  useEffect(() => {
    if (!isHovered && isVisible) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 6000);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isHovered, isVisible]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 6000);
    }
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section 
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-20 bg-[#3B1F0B] relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 20px,
              rgba(255, 255, 255, 0.03) 20px,
              rgba(255, 255, 255, 0.03) 21px
            )
          `,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 text-4xl opacity-10 animate-float hidden lg:block">✦</div>
      <div className="absolute bottom-20 right-10 text-5xl opacity-10 animate-float delay-1000 hidden lg:block">✦</div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className={`text-center mb-8 sm:mb-12 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <span className="text-[#d1973e] text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mt-2 font-serif">
            What Our <span className="text-[#d1973e] font-script">Travelers</span> Say
          </h2>
          <div className="w-16 h-0.5 bg-[#d1973e] mx-auto mt-4"></div>
        </div>

        {/* Testimonial Slider */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 text-white p-2 sm:p-3 rounded-full transition transform hover:scale-110 -ml-4 sm:-ml-6 border border-white/20"
            aria-label="Previous testimonial"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 text-white p-2 sm:p-3 rounded-full transition transform hover:scale-110 -mr-4 sm:-mr-6 border border-white/20"
            aria-label="Next testimonial"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Testimonial Card - Like Asilia & Roar Africa */}
          <div className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 md:p-10 border border-white/10">
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                {/* Image */}
                <div className="flex-shrink-0">
                  <img
                    src={current.image}
                    alt={current.name}
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-2 border-[#d1973e] shadow-lg"
                  />
                </div>

                {/* Content */}
                <div className="flex-1">
                  {/* Quote Icon */}
                  <div className="text-[#d1973e] text-4xl sm:text-5xl font-script leading-none mb-2">
                    "
                  </div>
                  
                  {/* Quote */}
                  <p className="text-white/90 text-sm sm:text-base md:text-lg font-light leading-relaxed italic">
                    {current.quote}
                  </p>

                  {/* Rating Stars */}
                  <div className="flex gap-1 mt-3">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-[#d1973e] text-sm sm:text-base">
                        ★
                      </span>
                    ))}
                  </div>

                  {/* Name & Location */}
                  <div className="mt-3">
                    <h4 className="text-white font-semibold font-serif text-base sm:text-lg">
                      {current.name}
                    </h4>
                    <p className="text-white/50 text-xs sm:text-sm font-light">
                      {current.location} • {current.trip}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex 
                    ? 'w-8 h-1.5 bg-[#d1973e]' 
                    : 'w-1.5 h-1.5 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;