import { useState, useEffect, useRef } from 'react';

const Stats = () => {
  const [counts, setCounts] = useState({
    years: 0,
    safaris: 0,
    countries: 0,
    satisfaction: 0
  });
  const statsRef = useRef(null);
  const hasAnimated = useRef(false);

  const statsData = [
    { id: 'years', label: 'Years of Experience', target: 10, icon: '📅', suffix: '+' },
    { id: 'safaris', label: 'Successful Safaris', target: 500, icon: '🦁', suffix: '+' },
    { id: 'countries', label: 'Countries Served', target: 50, icon: '🌍', suffix: '+' },
    { id: 'satisfaction', label: 'Client Satisfaction', target: 100, icon: '⭐', suffix: '%' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            startCounting();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const startCounting = () => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    statsData.forEach((stat) => {
      let current = 0;
      const increment = stat.target / steps;

      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.target) {
          current = stat.target;
          clearInterval(timer);
        }
        setCounts(prev => ({
          ...prev,
          [stat.id]: Math.floor(current)
        }));
      }, interval);
    });
  };

  return (
    <>
      {/* Decorative Wave Transition */}
      <div className="relative -mb-1 z-10">
        <svg 
          viewBox="0 0 1440 60" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path 
            d="M0 40 C240 20, 480 60, 720 40 C960 20, 1200 60, 1440 40 L1440 60 L0 60Z" 
            fill="#3B1F0B"
            opacity="0.8"
          />
          <path 
            d="M0 45 C240 25, 480 65, 720 45 C960 25, 1200 65, 1440 45 L1440 60 L0 60Z" 
            fill="#3B1F0B"
            opacity="0.5"
          />
        </svg>
      </div>

      <section 
        ref={statsRef} 
        className="relative overflow-hidden pt-12 pb-16 sm:pt-16 sm:pb-20 bg-[#3B1F0B]"
      >
        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#3B1F0B]/0 via-[#800020]/10 to-[#800020]/20"></div>
        
        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              repeating-linear-gradient(
                45deg,
                transparent,
                transparent 20px,
                rgba(255, 255, 255, 0.1) 20px,
                rgba(255, 255, 255, 0.1) 21px
              )
            `,
            backgroundSize: '40px 40px'
          }} />
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-5 left-5 text-4xl opacity-5 animate-float hidden lg:block">✦</div>
        <div className="absolute bottom-10 right-10 text-5xl opacity-5 animate-float delay-700 hidden lg:block">✦</div>
        <div className="absolute top-1/2 left-[5%] text-3xl opacity-5 animate-float delay-500 hidden lg:block">✦</div>
        <div className="absolute top-1/3 right-[8%] text-3xl opacity-5 animate-float delay-300 hidden lg:block">✦</div>

        {/* Subtle top glow line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[#d1973e]/20 to-transparent"></div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {statsData.map((stat) => (
              <div 
                key={stat.id} 
                className="text-center group relative"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-[#d1973e]/0 group-hover:bg-[#d1973e]/5 rounded-xl transition-all duration-500 -z-10"></div>
                
                <div className="text-3xl sm:text-4xl md:text-5xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-light text-[#d1973e] font-serif">
                  {counts[stat.id] || 0}{stat.suffix}
                </div>
                <div className="text-white/70 text-xs sm:text-sm mt-1 font-light">
                  {stat.label}
                </div>
                <div className="w-0 h-0.5 bg-[#d1973e] mx-auto mt-2 group-hover:w-12 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Stats;