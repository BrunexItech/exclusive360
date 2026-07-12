import { useState, useEffect, useRef } from 'react';

const WhyChooseUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const features = [
    {
      title: 'Rooted in Africa',
      description: 'Our roots run deep in East Africa. For over three decades, we\'ve been crafting safaris that honor the land, its wildlife, and the people who call it home. Every journey carries the wisdom of generations.',
      borderColor: 'border-[#8B0000]'
    },
    {
      title: 'More Than a Safari',
      description: 'When you travel with us, you\'re not a guest—you\'re family. We share our stories, our laughter, and our deep reverence for this incredible continent. Welcome home.',
      borderColor: 'border-[#8B7355]'
    },
    {
      title: 'Beyond the Map',
      description: 'Our long-standing relationships across East Africa unlock doors that remain closed to others. Private conservancies, exclusive camps, and moments that feel like they were meant just for you.',
      borderColor: 'border-[#556B2F]'
    },
    {
      title: 'The Art of Listening',
      description: 'No crowds, no schedules that aren\'t yours. Every experience is guided by deep local knowledge, designed to reveal the Africa that exists beyond the guidebooks.',
      borderColor: 'border-[#8B0000]'
    },
    {
      title: 'Always By Your Side',
      description: 'From the moment you arrive until you depart, you\'re supported by the same trusted team. No handoffs, no strangers—just familiar faces who know your story.',
      borderColor: 'border-[#8B7355]'
    },
    {
      title: 'Your Story, Your Way',
      description: 'Your safari, your pace. Whether you want to chase the migration or sit quietly watching a sunset, every detail is shaped entirely around your dreams.',
      borderColor: 'border-[#556B2F]'
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
      className="py-16 sm:py-20 md:py-24 bg-[#FAF5EB] relative overflow-hidden"
    >
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 20px,
              rgba(139, 0, 0, 0.05) 20px,
              rgba(139, 0, 0, 0.05) 21px
            )
          `,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 text-[#8B7355]/5 text-6xl font-serif hidden lg:block animate-float-slow">✦</div>
      <div className="absolute bottom-20 right-10 text-[#8B7355]/5 text-6xl font-serif hidden lg:block animate-float-slow-delayed">✦</div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <span className="text-[#8B0000] text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#2C1810] mt-2 font-serif tracking-wide">
            The <span className="text-[#8B0000]">Exclusive 360</span> Difference
          </h2>
          <div className="w-16 h-0.5 bg-[#8B7355] mx-auto mt-4"></div>
          <p className="text-[#2C1810]/60 mt-4 max-w-2xl mx-auto text-sm sm:text-base font-light leading-relaxed">
            We go beyond expectations to create safaris that stay with you forever.
          </p>
        </div>

        {/* Features Grid - 3 columns on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((item, index) => (
            <div 
              key={index}
              className={`group bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border-l-4 ${item.borderColor} border border-[#2C1810]/5 hover:border-[#8B0000]/20 relative overflow-hidden ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#8B0000]/20"></div>
              </div>
              <div className="absolute bottom-0 left-0 w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#8B0000]/20"></div>
              </div>

              {/* Decorative number */}
              <div className="text-[#8B7355]/10 text-6xl font-serif absolute -top-2 -right-2 select-none">
                {String(index + 1).padStart(2, '0')}
              </div>
              
              {/* Title */}
              <h3 className="text-lg sm:text-xl font-light text-[#2C1810] mb-3 font-serif tracking-wide relative">
                {item.title}
                <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-[#8B7355]/30 group-hover:w-12 transition-all duration-500"></span>
              </h3>
              
              {/* Description */}
              <p className="text-[#2C1810]/60 text-sm sm:text-base leading-relaxed font-light">
                {item.description}
              </p>

              {/* Decorative dot pattern */}
              <div className="flex gap-1 mt-4 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8B7355]"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#8B7355]"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#8B7355]"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#8B7355] opacity-50"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#8B7355] opacity-30"></span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Decorative Line */}
        <div className={`mt-12 flex justify-center items-center gap-4 transition-all duration-700 delay-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="w-8 h-px bg-[#8B7355]/30"></div>
          <span className="text-[#8B7355]/40 text-xs tracking-[0.2em] uppercase font-light">✦ Excellence ✦</span>
          <div className="w-8 h-px bg-[#8B7355]/30"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }
        @keyframes float-slow-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(-5deg); }
        }
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        .animate-float-slow-delayed {
          animation: float-slow-delayed 7s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;