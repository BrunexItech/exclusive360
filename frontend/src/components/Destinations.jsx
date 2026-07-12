// Destinations.jsx
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

// Export destinations so other components can use the data
export const destinations = [
  {
    id: 'nairobi',
    name: 'Nairobi',
    region: 'Nairobi County',
    image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&q=80',
    description: 'The vibrant capital city, home to Nairobi National Park, where wildlife meets urban life.',
    attractions: ['Nairobi National Park', 'David Sheldrick', 'Giraffe Centre', 'Karen Blixen'],
    bestTime: 'Jun - Oct',
    price: 'From $500',
    rating: 4.8,
    duration: '2-3 Days',
    wildlife: 'Big 5 & City Life',
    badge: 'City & Safari'
  },
  {
    id: 'nakuru',
    name: 'Nakuru',
    region: 'Nakuru County',
    image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&q=80',
    description: 'Famous for Lake Nakuru National Park, home to millions of flamingos and a rhino sanctuary.',
    attractions: ['Lake Nakuru', 'Flamingos', 'Rhino Sanctuary', 'Menengai Crater'],
    bestTime: 'Jun - Sep',
    price: 'From $600',
    rating: 4.7,
    duration: '2-3 Days',
    wildlife: 'Rhinos & Flamingos',
    badge: 'Bird Watching Paradise'
  },
  {
    id: 'narok',
    name: 'Narok',
    region: 'Narok County',
    image: 'https://images.unsplash.com/photo-1614531341773-3bff8b7cb3fc?w=800&q=80',
    description: 'The heart of the Maasai Mara, home to the Great Migration and rich Maasai culture.',
    attractions: ['Maasai Mara', 'Great Migration', 'Maasai Village', 'Big 5 Safaris'],
    bestTime: 'Jul - Oct',
    price: 'From $800',
    rating: 4.9,
    duration: '3-5 Days',
    wildlife: 'Big 5 & Migration',
    badge: 'Great Migration'
  },
  {
    id: 'laikipia',
    name: 'Laikipia',
    region: 'Laikipia County',
    image: 'https://images.unsplash.com/photo-1591005383946-16532ba69aee?w=800&q=80',
    description: 'A wildlife haven with private conservancies, rare species, and stunning landscapes.',
    attractions: ['Ol Pejeta', 'Endangered Species', 'Safari Walks', 'Mount Kenya Views'],
    bestTime: 'Jun - Oct',
    price: 'From $700',
    rating: 4.6,
    duration: '3-4 Days',
    wildlife: 'Endangered Species',
    badge: 'Conservancy Experience'
  },
  {
    id: 'kajiado',
    name: 'Kajiado',
    region: 'Kajiado County',
    image: 'https://images.unsplash.com/photo-1545200381-89c298dea43d?w=800&q=80',
    description: 'Home to Amboseli National Park with breathtaking views of Mount Kilimanjaro and large elephant herds.',
    attractions: ['Amboseli NP', 'Elephant Herds', 'Kilimanjaro Views', 'Maasai Culture'],
    bestTime: 'Jun - Oct',
    price: 'From $650',
    rating: 4.7,
    duration: '2-4 Days',
    wildlife: 'Elephants & Kilimanjaro',
    badge: 'Mountain Views'
  },
  {
    id: 'kwale',
    name: 'Kwale',
    region: 'Kwale County',
    image: 'https://images.unsplash.com/photo-1582574643306-d00ea3f7d49b?w=800&q=80',
    description: 'Coastal paradise with pristine beaches, coral reefs, and the lush Shimba Hills National Reserve.',
    attractions: ['Diani Beach', 'Shimba Hills', 'Coral Reefs', 'Marine Life'],
    bestTime: 'Jul - Mar',
    price: 'From $500',
    rating: 4.5,
    duration: '3-5 Days',
    wildlife: 'Marine Life & Forests',
    badge: 'Beach & Forest'
  }
];

const Destinations = () => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [hoveredId, setHoveredId] = useState(null);
  const [visibleCards, setVisibleCards] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRefs = useRef([]);
  const sectionRef = useRef(null);

  const regions = ['all', 'Nairobi County', 'Nakuru County', 'Narok County', 'Laikipia County', 'Kajiado County', 'Kwale County'];

  const filteredDestinations = destinations.filter(dest => {
    const matchesFilter = filter === 'all' || dest.region === filter;
    const matchesSearch = dest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          dest.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          dest.region.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.dataset.id;
            setVisibleCards(prev => [...prev, id]);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    cardRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [filteredDestinations]);

  // Mouse move effect for 3D tilt
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height
        });
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
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

  // Get random animation class
  const getAnimationClass = (index) => {
    const animations = [
      'animate-slide-left',
      'animate-slide-right', 
      'animate-zoom-in',
      'animate-float-up',
      'animate-scale-in',
      'animate-rotate-in'
    ];
    return animations[index % animations.length];
  };

  return (
    <section ref={sectionRef} className="bg-white min-h-screen overflow-hidden">
      {/* Hero Section with Kenya focus */}
      <div className="relative h-[60vh] min-h-[400px] max-h-[600px] overflow-hidden">
        {/* Background Image with Parallax */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1920&q=80" 
            alt="Kenya Safari" 
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
          
          {/* Animated overlay pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 animate-shimmer" style={{
              backgroundImage: `
                repeating-linear-gradient(
                  45deg,
                  transparent,
                  transparent 20px,
                  rgba(255, 255, 255, 0.05) 20px,
                  rgba(255, 255, 255, 0.05) 21px
                )
              `,
              backgroundSize: '60px 60px'
            }} />
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
          <div className="max-w-4xl animate-hero-in">
            <span className="text-[#d1973e] text-sm font-light tracking-[0.4em] uppercase inline-block relative">
              <span className="absolute -left-8 top-1/2 -translate-y-1/2 w-6 h-px bg-[#d1973e]/50 hidden sm:block"></span>
              Explore Kenya
              <span className="absolute -right-8 top-1/2 -translate-y-1/2 w-6 h-px bg-[#d1973e]/50 hidden sm:block"></span>
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white mt-4 font-serif tracking-wide">
              Kenya's <span className="text-[#d1973e] font-script">Finest</span> Counties
            </h1>
            <p className="text-white/60 text-base sm:text-lg md:text-xl mt-4 max-w-2xl mx-auto font-light leading-relaxed">
              From the savannas of the Maasai Mara to the beaches of Kwale — discover Kenya's most captivating destinations.
            </p>
            
            {/* Search Bar with pulse animation */}
            <div className="mt-8 max-w-xl mx-auto animate-search-pulse">
              <div className="relative group">
                <input
                  type="text"
                  placeholder="Search counties, attractions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-6 py-4 pl-14 rounded-full bg-white/10 backdrop-blur-md text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#d1973e] border border-white/20 transition-all duration-300 text-base font-light group-hover:bg-white/20"
                />
                <svg className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40 group-hover:text-[#d1973e] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Safari Elements */}
        <div className="absolute top-20 left-10 text-6xl opacity-5 animate-float hidden lg:block">🦒</div>
        <div className="absolute bottom-20 right-10 text-5xl opacity-5 animate-float-delay hidden lg:block">🐘</div>
        <div className="absolute top-1/3 right-20 text-4xl opacity-5 animate-float-slower hidden lg:block">🌅</div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-center justify-center">
            <div className="w-1 h-2 rounded-full bg-white/50 animate-pulse mt-1"></div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Filter Tabs with slide animation */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 animate-fade-down">
          {regions.map((region) => (
            <button
              key={region}
              onClick={() => setFilter(region)}
              className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-light tracking-wide transition-all duration-500 whitespace-nowrap ${
                filter === region
                  ? 'bg-[#800020] text-white shadow-lg transform scale-105 ring-2 ring-[#800020]/30'
                  : 'bg-white text-[#3B1F0B] hover:bg-[#800020]/5 hover:scale-105 shadow-sm border border-gray-100'
              }`}
            >
              {region === 'all' ? 'All Counties' : region.replace(' County', '')}
            </button>
          ))}
        </div>

        {/* Results Count with counter animation */}
        <div className="text-center mb-8">
          <span className="text-[#3B1F0B]/40 text-sm font-light tracking-wider inline-block animate-count-in">
            {filteredDestinations.length} DESTINATIONS
          </span>
        </div>

        {/* Destinations Grid with unique animations */}
        {filteredDestinations.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredDestinations.map((dest, index) => {
              const isHovered = hoveredId === dest.id;
              const isVisible = visibleCards.includes(dest.id);
              const animationClass = getAnimationClass(index);
              const delay = index * 0.1;

              return (
                <div
                  key={dest.id}
                  ref={(el) => (cardRefs.current[index] = el)}
                  data-id={dest.id}
                  className={`group relative transition-all duration-1000 ${
                    isVisible ? `opacity-100 translate-y-0 ${animationClass}` : 'opacity-0 translate-y-16'
                  }`}
                  style={{ transitionDelay: `${delay}s` }}
                  onMouseEnter={() => setHoveredId(dest.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <div className="relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-2xl transition-all duration-700 hover:-translate-y-3">
                    {/* Image Container with zoom effect */}
                    <div className="relative h-72 overflow-hidden">
                      <img
                        src={dest.image}
                        alt={dest.name}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        loading="lazy"
                      />
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#3B1F0B]/90 via-[#3B1F0B]/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>

                      {/* Animated Badge - rotates on hover */}
                      <div className="absolute top-4 left-4 z-10">
                        <span className="inline-block bg-[#d1973e] text-[#3B1F0B] text-[10px] sm:text-xs font-bold px-3 py-1.5 rounded-full shadow-lg transform -rotate-3 group-hover:rotate-0 transition-transform duration-500">
                          {dest.badge}
                        </span>
                      </div>

                      {/* Rating with pulse on hover */}
                      <div className="absolute top-4 right-4 z-10">
                        <span className="bg-white/90 backdrop-blur-sm text-[#3B1F0B] text-[10px] sm:text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1 group-hover:scale-110 transition-transform duration-300">
                          <span className="text-[#d1973e] animate-pulse-on-hover">★</span> {dest.rating}
                        </span>
                      </div>

                      {/* Region with slide in */}
                      <div className="absolute bottom-4 left-4 z-10">
                        <span className="bg-black/50 backdrop-blur-sm text-white text-[10px] sm:text-xs font-light px-3 py-1 rounded-full border border-white/20 transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300">
                          {dest.region}
                        </span>
                      </div>

                      {/* Gold Shimmer Line */}
                      <div className={`absolute bottom-0 left-0 h-1 bg-[#d1973e] transition-all duration-1000 ${
                        isHovered ? 'w-full' : 'w-0'
                      }`}></div>
                    </div>

                    {/* Content with reveal animation */}
                    <div className="p-5 sm:p-6 relative">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="text-xl sm:text-2xl font-light text-[#3B1F0B] font-serif tracking-wide group-hover:text-[#800020] transition-colors duration-500">
                          {dest.name}
                        </h3>
                        <span className="text-[#d1973e] text-sm font-light group-hover:scale-110 transition-transform duration-300">
                          {dest.duration}
                        </span>
                      </div>
                      
                      <p className="text-[#3B1F0B]/50 text-xs sm:text-sm mb-1 font-light">
                        {dest.wildlife} <span className="text-[#3B1F0B]/20">•</span> Best: {dest.bestTime}
                      </p>
                      
                      <p className="text-[#3B1F0B]/50 text-sm mb-4 line-clamp-2 font-light leading-relaxed group-hover:text-[#3B1F0B]/70 transition-colors duration-500">
                        {dest.description}
                      </p>

                      {/* Decorative Safari Dots */}
                      <div className="flex gap-1.5 mb-3 opacity-30 group-hover:opacity-60 transition-opacity duration-500">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#d1973e]"></span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#d1973e]"></span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#d1973e]"></span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#d1973e] opacity-50"></span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#d1973e] opacity-30"></span>
                      </div>

                      <div className="flex items-center justify-between pt-3 border-t border-[#3B1F0B]/5">
                        <span className="text-[#800020] text-sm sm:text-base font-light font-serif">
                          {dest.price}
                        </span>
                        <div className="flex gap-2 sm:gap-3">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              openWhatsApp();
                            }}
                            className="bg-[#d1973e] hover:bg-[#c4882a] text-[#3B1F0B] text-[10px] sm:text-xs font-semibold px-4 sm:px-5 py-1.5 sm:py-2 rounded-full transition transform hover:scale-105 tracking-wider shadow-md hover:shadow-lg"
                          >
                            Book Now
                          </button>
                          <Link
                            to={`/destinations/${dest.id}`}
                            className="border border-[#3B1F0B]/20 hover:border-[#800020] text-[#3B1F0B] text-[10px] sm:text-xs font-light px-4 sm:px-5 py-1.5 sm:py-2 rounded-full transition hover:bg-[#800020]/5"
                          >
                            Explore
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Hover Border Effect */}
                    <div className={`absolute inset-0 border-2 border-[#d1973e]/0 group-hover:border-[#d1973e]/20 rounded-2xl transition-all duration-700 pointer-events-none`}></div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20 animate-fade">
            <div className="text-6xl mb-4 opacity-20 animate-float">🔍</div>
            <h3 className="text-2xl font-light text-[#3B1F0B] font-serif">No destinations found</h3>
            <p className="text-[#3B1F0B]/40 mt-2 font-light">Try adjusting your search or filter</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setFilter('all');
              }}
              className="mt-6 bg-[#800020] hover:bg-[#3B1F0B] text-white px-8 py-3 rounded-full font-light tracking-wider transition transform hover:scale-105"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes heroIn {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(30px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        @keyframes fadeDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        @keyframes floatDelayed {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes floatSlower {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes shimmer {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }
        @keyframes searchPulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.01);
          }
        }
        @keyframes slideLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes zoomIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes floatUp {
          from {
            opacity: 0;
            transform: translateY(40px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.7) rotate(-5deg);
          }
          to {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }
        @keyframes rotateIn {
          from {
            opacity: 0;
            transform: rotate(-10deg) scale(0.8);
          }
          to {
            opacity: 1;
            transform: rotate(0deg) scale(1);
          }
        }
        @keyframes countIn {
          from {
            opacity: 0;
            transform: scale(0.5);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-hero-in {
          animation: heroIn 1.2s ease-out forwards;
        }
        .animate-fade-down {
          animation: fadeDown 0.8s ease-out forwards;
        }
        .animate-fade {
          animation: fade 1s ease-out forwards;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: floatDelayed 7s ease-in-out infinite;
        }
        .animate-float-slower {
          animation: floatSlower 8s ease-in-out infinite;
        }
        .animate-shimmer {
          animation: shimmer 8s linear infinite;
        }
        .animate-search-pulse {
          animation: searchPulse 3s ease-in-out infinite;
        }
        .animate-slide-left {
          animation: slideLeft 0.8s ease-out forwards;
        }
        .animate-slide-right {
          animation: slideRight 0.8s ease-out forwards;
        }
        .animate-zoom-in {
          animation: zoomIn 0.8s ease-out forwards;
        }
        .animate-float-up {
          animation: floatUp 0.8s ease-out forwards;
        }
        .animate-scale-in {
          animation: scaleIn 0.8s ease-out forwards;
        }
        .animate-rotate-in {
          animation: rotateIn 0.8s ease-out forwards;
        }
        .animate-count-in {
          animation: countIn 0.6s ease-out forwards;
        }
        .animate-pulse-on-hover {
          animation: pulse 2s ease-in-out infinite;
        }
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
        }
      `}</style>
    </section>
  );
};

export default Destinations;