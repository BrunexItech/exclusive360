import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const MediaTextSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const openWhatsApp = () => {
    const trigger = document.querySelector('.whatsapp-trigger');
    if (trigger) trigger.click();
  };

  return (
    <section 
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-20 bg-[#d1973e] relative overflow-hidden"
    >
      {/* Background Pattern - Like Asilia's gold section */}
      <div className="absolute inset-0 opacity-10">
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

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
          {/* Left Column - Text Content */}
          <div className={`space-y-4 sm:space-y-6 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <span className="text-[#3B1F0B] text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase">
              The Exclusive 360 Edit
            </span>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#3B1F0B] font-serif leading-tight">
              <span className="font-script text-white">Ready. Set.</span>
              <br />
              <span className="text-[#3B1F0B]">Safari.</span>
            </h2>
            
            <p className="text-[#3B1F0B]/80 text-sm sm:text-base md:text-lg leading-relaxed max-w-md">
              Four carefully crafted safari experiences. Seamless journeys, led by specialist guides, shared with like-minded travelers. Designed to inspire connection, authenticity, and discovery.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={openWhatsApp}
                className="bg-[#3B1F0B] hover:bg-[#1B1B1B] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold transition transform hover:scale-105 text-sm sm:text-base shadow-lg"
              >
                Join the Journey ✧
              </button>
              <Link
                to="/packages"
                className="bg-white/20 backdrop-blur-sm hover:bg-white/30 border border-white/30 text-[#3B1F0B] px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold transition transform hover:scale-105 text-sm sm:text-base"
              >
                View Packages
              </Link>
            </div>
          </div>

          {/* Right Column - Images (Like Asilia's overlapping images) */}
          <div className={`relative transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <div className="relative">
              {/* Main Image */}
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80"
                  alt="Safari Adventure"
                  className="w-full h-64 sm:h-80 md:h-96 object-cover hover:scale-105 transition duration-500"
                  loading="lazy"
                />
              </div>
              
              {/* Overlapping Image - Like Asilia's secondary image */}
              <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-8 w-32 sm:w-40 md:w-48 rounded-xl overflow-hidden shadow-xl border-4 border-[#d1973e]">
                <img 
                  src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=400&q=80"
                  alt="Safari Moment"
                  className="w-full h-32 sm:h-40 md:h-48 object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaTextSection;