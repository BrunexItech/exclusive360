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
    { id: 'years', label: 'Years of Experience', target: 10, suffix: '+' },
    { id: 'safaris', label: 'Successful Safaris', target: 500, suffix: '+' },
    { id: 'countries', label: 'Countries Served', target: 50, suffix: '+' },
    { id: 'satisfaction', label: 'Client Satisfaction', target: 100, suffix: '%' }
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
            fill="#FAF5EB"
          />
          <path 
            d="M0 45 C240 25, 480 65, 720 45 C960 25, 1200 65, 1440 45 L1440 60 L0 60Z" 
            fill="#FAF5EB"
          />
        </svg>
      </div>

      <section 
        ref={statsRef} 
        className="relative overflow-hidden pt-12 pb-16 sm:pt-16 sm:pb-20 bg-[#FAF5EB]"
      >
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {statsData.map((stat, index) => (
              <div 
                key={stat.id} 
                className="text-center group relative"
              >
                {/* Divider Line - vertical between stats */}
                {index < statsData.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-[#d1973e]/20"></div>
                )}
                
                {/* Number */}
                <div className="text-3xl sm:text-4xl md:text-5xl font-light text-[#d1973e] font-serif mb-2 group-hover:scale-110 transition-transform duration-300">
                  {counts[stat.id] || 0}{stat.suffix}
                </div>
                
                {/* Label */}
                <div className="text-[#3B1F0B]/50 text-xs sm:text-sm mt-1 font-light tracking-wide uppercase">
                  {stat.label}
                </div>
                
                {/* Underline on hover */}
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