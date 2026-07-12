const Sustainability = () => {
  const initiatives = [
    {
      title: 'Wildlife Conservation',
      description: 'We partner with local organizations to protect endangered species and their habitats across Kenya\'s most iconic landscapes. Our conservation efforts ensure the preservation of wildlife for generations to come.',
      image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&q=80',
      stat: '200+',
      statLabel: 'Species Protected'
    },
    {
      title: 'Community Empowerment',
      description: 'Supporting local communities through education, employment, and sustainable tourism initiatives that create lasting impact. We believe in empowering the people who call these wild places home.',
      image: 'https://plus.unsplash.com/premium_photo-1733342422588-c2fc9e279836?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      stat: '500+',
      statLabel: 'Lives Impacted'
    },
    {
      title: 'Eco-Friendly Practices',
      description: 'Minimizing environmental impact through waste reduction, renewable energy, and responsible tourism operations. Every safari leaves a positive footprint on the environment.',
      image: 'https://images.unsplash.com/photo-1696233595086-27bbfed232f9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      stat: '80%',
      statLabel: 'Waste Reduced'
    },
    {
      title: 'Cultural Preservation',
      description: 'Respecting and preserving the rich cultural heritage of African communities through meaningful partnerships. We celebrate the traditions and stories that make each region unique.',
      image: 'https://plus.unsplash.com/premium_photo-1718570262726-fb764ebc89c6?q=80&w=1046&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      stat: '15+',
      statLabel: 'Communities Supported'
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-white relative overflow-hidden">
      {/* Safari-inspired background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Golden sun glow - warm African sunset feel */}
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-[#d1973e]/5 blur-3xl"></div>
        <div className="absolute bottom-[-15%] left-[-8%] w-[500px] h-[500px] rounded-full bg-[#800020]/5 blur-3xl"></div>
        
        {/* Acacia tree silhouette */}
        <div className="absolute bottom-0 left-0 opacity-[0.02] text-[#3B1F0B] text-9xl transform -translate-x-10 translate-y-10">🌳</div>
        <div className="absolute top-0 right-0 opacity-[0.02] text-[#3B1F0B] text-7xl transform translate-x-10 -translate-y-5 rotate-12">🌳</div>
        
        {/* African sunset stripes */}
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-[#d1973e]/10 to-transparent"></div>
        <div className="absolute bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#800020]/5 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with creative safari typography */}
        <div className="text-center mb-14 sm:mb-18">
          <div className="relative inline-block">
            <span className="text-[#800020] text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase relative">
              Our Commitment
              {/* Decorative gold underline with safari dots */}
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1">
                <span className="w-8 h-0.5 bg-[#d1973e]"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#d1973e]"></span>
                <span className="w-8 h-0.5 bg-[#d1973e]"></span>
              </span>
            </span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-[#3B1F0B] mt-6 font-serif tracking-wide">
            Sustainable <span className="text-[#800020] relative">
              Travel
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-[#d1973e]/30"></span>
            </span>
          </h2>
          
          <div className="flex items-center justify-center gap-3 mt-4">
            <span className="w-12 h-0.5 bg-[#d1973e]"></span>
            <span className="text-[#d1973e] text-xs tracking-[0.3em] uppercase font-light">✦</span>
            <span className="w-12 h-0.5 bg-[#d1973e]"></span>
          </div>
          
          <p className="text-[#3B1F0B]/50 mt-4 max-w-2xl mx-auto text-sm sm:text-base font-light leading-relaxed">
            We believe in protecting the wild spaces and communities that make safari experiences possible.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {initiatives.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 hover:-translate-y-4"
              style={{
                animationDelay: `${index * 150}ms`,
                animation: 'fadeInUp 0.8s ease-out forwards',
                opacity: 0
              }}
            >
              {/* Image Container with Safari Zoom Effect */}
              <div className="relative h-52 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#3B1F0B]/70 via-[#3B1F0B]/10 to-transparent z-10"></div>
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  loading="lazy"
                />
                
                {/* Safari Golden Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#d1973e]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 z-10"></div>
                
                {/* Stat Badge - Creative Safari Style */}
                <div className="absolute bottom-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg border border-[#d1973e]/20">
                    <div className="text-lg font-bold text-[#800020] font-serif">{item.stat}</div>
                    <div className="text-[9px] text-[#3B1F0B]/60 uppercase tracking-wider font-light">{item.statLabel}</div>
                  </div>
                </div>
                
                {/* Safari Badge - Top Right */}
                <div className="absolute top-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-90 group-hover:scale-100">
                  <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white bg-[#d1973e]/80 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg">
                    Safari
                  </span>
                </div>
                
                {/* Gold Shimmer Line */}
                <div className="absolute bottom-0 left-0 h-1 bg-[#d1973e] w-0 group-hover:w-full transition-all duration-1000 z-20"></div>
              </div>
              
              <div className="p-6 relative">
                {/* Safari Dot Decoration */}
                <div className="flex gap-1.5 mb-3">
                  <span className="w-2 h-2 rounded-full bg-[#d1973e]"></span>
                  <span className="w-2 h-2 rounded-full bg-[#d1973e]/50"></span>
                  <span className="w-2 h-2 rounded-full bg-[#d1973e]/20"></span>
                </div>
                
                <h3 className="text-lg sm:text-xl font-light text-[#3B1F0B] mb-2 font-serif tracking-wide group-hover:text-[#800020] transition-colors duration-500">
                  {item.title}
                </h3>
                
                <p className="text-[#3B1F0B]/60 text-sm leading-relaxed font-light group-hover:text-[#3B1F0B]/80 transition-colors duration-500">
                  {item.description}
                </p>
                
                {/* Safari Footprint Decoration */}
                <div className="flex items-center gap-2 mt-4 opacity-20">
                  <span className="text-xs">🐾</span>
                  <span className="flex-1 h-px bg-gradient-to-r from-[#d1973e] to-transparent"></span>
                </div>
              </div>
              
              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-2 border-[#d1973e]/0 group-hover:border-[#d1973e]/20 rounded-xl transition-all duration-700 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Sustainability;