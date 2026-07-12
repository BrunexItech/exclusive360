import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Packages = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const packages = [
    {
      tier: 'Platinum',
      price: 'KES 650,000',
      color: 'from-[#8B0000]/10 to-[#8B0000]/5',
      borderColor: 'border-[#8B0000]',
      badge: 'Ultimate Luxury',
      description: 'For those who seek the extraordinary. Exclusive access, private villas, and once-in-a-lifetime encounters.',
      features: [
        'Private 4x4 safari vehicle',
        '5-star luxury lodges & villas',
        'Hot air balloon safari',
        'Helicopter scenic flight',
        'Premium drinks & laundry'
      ],
      duration: '7 Days / 6 Nights',
      slug: 'platinum'
    },
    {
      tier: 'Gold',
      price: 'KES 350,000',
      color: 'from-[#8B7355]/10 to-[#8B7355]/5',
      borderColor: 'border-[#8B7355]',
      badge: 'Popular Choice',
      description: 'The perfect balance of luxury and value. Premium accommodations with expert guiding.',
      features: [
        'Shared 4x4 safari vehicle',
        '4-star luxury tented camps',
        'Bush breakfast & sundowners',
        'Lake Nakuru boat cruise',
        'Cultural village visit'
      ],
      duration: '6 Days / 5 Nights',
      slug: 'gold'
    },
    {
      tier: 'Silver',
      price: 'KES 150,000',
      color: 'from-[#556B2F]/10 to-[#556B2F]/5',
      borderColor: 'border-[#556B2F]',
      badge: 'Best Value',
      description: 'The adventurer\'s choice. Experience the magic of safari without the luxury price tag.',
      features: [
        'Shared safari vehicle',
        '3-star budget camps',
        'Nature walks',
        'Bush lunch experience',
        'Airport transfers'
      ],
      duration: '5 Days / 4 Nights',
      slug: 'silver'
    },
    {
      tier: 'Custom',
      price: 'Your Budget',
      color: 'from-[#D4C5A9]/20 to-[#D4C5A9]/10',
      borderColor: 'border-[#D4C5A9]',
      badge: 'Tailor-Made',
      description: 'Design your perfect safari adventure. Complete flexibility on every detail.',
      features: [
        'Custom itinerary',
        'Flexible duration',
        'Choice of accommodation',
        'Private or group options',
        'Expert guide tailored to you'
      ],
      duration: 'Flexible',
      slug: 'custom'
    }
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

  return (
    <section 
      ref={sectionRef}
      id="packages" 
      className="py-16 sm:py-20 md:py-24 px-4 bg-white overflow-hidden relative"
    >
      {/* Separator Line on Top */}
      <div className="absolute top-0 left-0 right-0">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-[#8B7355]/30 to-transparent"></div>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <span className="text-[#8B0000] text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase bg-[#8B0000]/10 px-4 sm:px-6 py-1.5 rounded-full inline-block">
            Choose Your Safari
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#2C1810] mt-4 font-serif tracking-wide">
            Our <span className="text-[#8B0000]">Exclusive</span> Packages
          </h2>
          <div className="flex justify-center mt-4">
            <div className="w-16 h-0.5 bg-[#8B7355]"></div>
          </div>
          <p className="text-[#2C1810]/60 text-sm sm:text-base md:text-lg mt-4 max-w-2xl mx-auto font-light">
            Four unique ways to experience the wild. One unforgettable adventure.
          </p>
        </div>

        {/* Packages Grid - Teaser Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br ${pkg.color} rounded-2xl border ${pkg.borderColor} p-6 sm:p-8 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              } hover:shadow-2xl hover:-translate-y-2 cursor-pointer`}
              style={{ 
                transitionDelay: `${index * 150}ms`,
                background: `linear-gradient(135deg, ${pkg.borderColor.replace('border-', '')}08, transparent)`
              }}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              {/* Decorative gradient overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Badge */}
              <div className="relative z-10">
                <div className="inline-block bg-[#2C1810] text-white text-[10px] sm:text-xs font-semibold px-3 py-1 rounded-full mb-3 tracking-wider">
                  {pkg.badge}
                </div>
              </div>

              {/* Tier Name - No Icons */}
              <div className="relative z-10 mb-2">
                <h3 className="text-xl sm:text-2xl font-light text-[#2C1810] font-serif">
                  {pkg.tier}
                </h3>
              </div>

              {/* Price */}
              <div className="relative z-10">
                <p className="text-2xl sm:text-3xl font-light text-[#2C1810] mb-1">
                  {pkg.price}
                </p>
                <p className="text-[10px] sm:text-xs text-[#2C1810]/40 font-light">
                  {pkg.duration}
                </p>
              </div>

              {/* Description - Teaser only */}
              <p className="relative z-10 text-[#2C1810]/60 text-sm leading-relaxed font-light mt-3 line-clamp-2">
                {pkg.description}
              </p>

              {/* Features - Hidden in teaser, visible on hover */}
              <div className={`relative z-10 overflow-hidden transition-all duration-500 ${
                activeIndex === index ? 'max-h-[300px] opacity-100 mt-4' : 'max-h-0 opacity-0'
              }`}>
                <ul className="space-y-1.5">
                  {pkg.features.slice(0, 3).map((feature, idx) => (
                    <li 
                      key={idx}
                      className="text-[#2C1810]/70 text-xs sm:text-sm font-light flex items-start gap-2 animate-fade-in-up"
                      style={{ animationDelay: `${idx * 100}ms` }}
                    >
                      <span className="text-[#8B7355] mt-0.5">✦</span>
                      {feature}
                    </li>
                  ))}
                  {pkg.features.length > 3 && (
                    <li className="text-[#8B0000]/60 text-xs font-light pl-5">
                      + {pkg.features.length - 3} more features
                    </li>
                  )}
                </ul>
              </div>

              {/* Explore Package Button - Links to Packages Page */}
              <div className="relative z-10 mt-4 sm:mt-6">
                <Link
                  to="/packages"
                  className="block w-full bg-[#8B0000] hover:bg-[#6B0000] text-white py-2.5 sm:py-3 rounded-lg font-semibold text-sm text-center transition-all duration-300 transform hover:scale-[1.02] shadow-md hover:shadow-lg"
                >
                  Explore Package
                </Link>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-[#8B7355]/10 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-[#8B7355]/10 rounded-bl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-12 sm:mt-16 transition-all duration-700 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-[#FAF5EB]/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 md:p-10 max-w-3xl mx-auto border border-[#8B0000]/10">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-[#2C1810] mb-2 font-serif tracking-wide">
              Not sure which package is right for you?
            </h3>
            <p className="text-[#2C1810]/60 text-sm sm:text-base mb-4 sm:mb-6 font-light">
              Our safari experts will help you choose the perfect experience for your needs.
            </p>
            <Link
              to="/packages"
              className="inline-block bg-[#8B0000] hover:bg-[#2C1810] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold transition transform hover:scale-105 text-sm sm:text-base"
            >
              View All Packages
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.4s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default Packages;