import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

const CTABanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeWord, setActiveWord] = useState(0);
  const sectionRef = useRef(null);

  const rotatingWords = [
    'Safari Adventure',
    'Wildlife Encounter',
    'Luxury Escape',
    'Bucket List Dream',
    'African Journey'
  ];

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

  // Rotate words every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveWord((prev) => (prev + 1) % rotatingWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

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
    <section 
      ref={sectionRef}
      className="relative py-12 sm:py-16 md:py-20 overflow-hidden bg-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`
          max-w-5xl mx-auto relative 
          border-2 border-[#8B0000]/20
          rounded-2xl 
          p-6 sm:p-8 md:p-10
          transition-all duration-1000
          ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
        `}>
          
          {/* Decorative Corner Accents */}
          <div className="absolute -top-[1px] -left-[1px] w-10 h-10 border-t-3 border-l-3 border-[#8B0000]/30 rounded-tl-xl"></div>
          <div className="absolute -top-[1px] -right-[1px] w-10 h-10 border-t-3 border-r-3 border-[#8B0000]/30 rounded-tr-xl"></div>
          <div className="absolute -bottom-[1px] -left-[1px] w-10 h-10 border-b-3 border-l-3 border-[#8B0000]/30 rounded-bl-xl"></div>
          <div className="absolute -bottom-[1px] -right-[1px] w-10 h-10 border-b-3 border-r-3 border-[#8B0000]/30 rounded-br-xl"></div>

          {/* Content */}
          <div className="relative z-10 text-center">
            
            {/* Small badge */}
            <div className={`inline-block mb-4 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}>
              <span className="bg-[#800020]/10 text-[#800020] text-xs font-semibold tracking-[0.3em] uppercase px-4 py-1.5 rounded-full border border-[#800020]/10">
                Begin Your Journey
              </span>
            </div>

            {/* Main Heading with rotating word */}
            <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-[#2C1810] font-serif tracking-wide transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              Your{' '}
              <span className="relative inline-block min-w-[160px] sm:min-w-[200px] md:min-w-[240px]">
                <span className="text-[#800020] font-serif">
                  {rotatingWords[activeWord]}
                </span>
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#800020] to-transparent"></span>
              </span>
              {' '}Starts Here
            </h2>

            {/* Subtitle */}
            <p className={`text-[#2C1810]/50 text-sm sm:text-base mt-4 max-w-2xl mx-auto font-light leading-relaxed transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              From the golden plains of the Maasai Mara to the turquoise waters of the coast — 
              let us craft the safari of your dreams.
            </p>

            {/* Decorative divider */}
            <div className={`flex items-center justify-center gap-4 mt-6 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}>
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#800020]/20"></div>
              <span className="text-[#800020]/20 text-xs tracking-[0.3em] uppercase font-light">✦</span>
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#800020]/20"></div>
            </div>

            {/* Single CTA Button */}
            <div className={`mt-6 transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <Link
                to="/packages"
                className="inline-flex items-center gap-3 bg-[#800020] hover:bg-[#6B001A] text-white px-10 sm:px-12 py-3.5 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg text-sm sm:text-base"
              >
                <span>Explore Packages</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Trust indicators */}
            <div className={`flex flex-wrap items-center justify-center gap-6 sm:gap-10 mt-8 transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}>
              <div className="flex items-center gap-2">
                <span className="text-[#800020]/20 text-xs">✦</span>
                <span className="text-[#2C1810]/40 text-[10px] font-light tracking-widest">EXPERT GUIDES</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#800020]/20 text-xs">✦</span>
                <span className="text-[#2C1810]/40 text-[10px] font-light tracking-widest">LUXURY SAFARIS</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#800020]/20 text-xs">✦</span>
                <span className="text-[#2C1810]/40 text-[10px] font-light tracking-widest">24/7 SUPPORT</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;