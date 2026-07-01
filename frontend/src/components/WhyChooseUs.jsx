import { useState, useEffect } from 'react';
import { whyChooseUsAPI } from '../api';

const WhyChooseUs = () => {
  const [features, setFeatures] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    whyChooseUsAPI.getItems()
      .then(data => {
        setFeatures(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <section className="py-16 px-4 bg-[#FAF5EB]">
        <div className="container mx-auto text-center text-[#3B1F0B]/60">Loading...</div>
      </section>
    );
  }

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-[#FAF5EB] relative overflow-hidden">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 20px,
              rgba(128, 0, 32, 0.05) 20px,
              rgba(128, 0, 32, 0.05) 21px
            )
          `,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-[#800020] text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#3B1F0B] mt-2 font-serif">
            The <span className="text-[#800020]">Exclusive 360</span> Difference
          </h2>
          <div className="w-16 h-0.5 bg-[#d1973e] mx-auto mt-4"></div>
          <p className="text-[#3B1F0B]/60 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            We go beyond expectations to create safaris that stay with you forever.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((item, index) => (
            <div 
              key={index}
              className="group bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-[#3B1F0B]/5 hover:border-[#800020]/20 relative overflow-hidden"
            >
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[#800020]/20"></div>
              </div>
              <div className="absolute bottom-0 left-0 w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[#800020]/20"></div>
              </div>

              {/* Icon */}
              <div className="text-4xl sm:text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-lg sm:text-xl font-semibold text-[#3B1F0B] mb-2 font-serif">
                {item.title}
              </h3>
              
              {/* Description */}
              <p className="text-[#3B1F0B]/70 text-sm sm:text-base leading-relaxed">
                {item.description}
              </p>

              {/* Underline accent on hover */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#800020] group-hover:w-12 transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Bottom Decorative Line */}
        <div className="mt-12 flex justify-center items-center gap-4">
          <div className="w-8 h-px bg-[#800020]/20"></div>
          <span className="text-[#800020]/30 text-xs tracking-[0.2em] uppercase">✦ Excellence ✦</span>
          <div className="w-8 h-px bg-[#800020]/20"></div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;