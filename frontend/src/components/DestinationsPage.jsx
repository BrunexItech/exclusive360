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
  },
  {
    id: 'meru',
    name: 'Meru',
    region: 'Meru County',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80',
    description: 'Home to Meru National Park, a hidden gem with diverse wildlife and the famous Elsa the lioness.',
    attractions: ['Meru NP', 'Elsa\'s Legacy', 'Tana River', 'Game Drives'],
    bestTime: 'Jun - Sep',
    price: 'From $550',
    rating: 4.4,
    duration: '2-4 Days',
    wildlife: 'Big 5 & Lions',
    badge: 'Hidden Gem'
  },
  {
    id: 'samburu',
    name: 'Samburu',
    region: 'Samburu County',
    image: 'https://images.unsplash.com/photo-1549314829-1f5511dbf079?q=80&w=874&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'A semi-arid wonderland with unique wildlife species and vibrant Samburu culture.',
    attractions: ['Samburu NP', 'Reticulated Giraffe', 'Grevy\'s Zebra', 'Samburu Culture'],
    bestTime: 'Jun - Oct',
    price: 'From $650',
    rating: 4.6,
    duration: '3-4 Days',
    wildlife: 'Unique Species',
    badge: 'Cultural Safari'
  }
];

const DestinationsPage = () => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [hoveredId, setHoveredId] = useState(null);
  const [visibleCards, setVisibleCards] = useState([]);
  const cardRefs = useRef([]);

  const regions = ['all', 'Nairobi County', 'Nakuru County', 'Narok County', 'Laikipia County', 'Kajiado County', 'Kwale County', 'Meru County', 'Samburu County'];

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
    <section className="pt-0 pb-16 bg-white min-h-screen">
      {/* Hero Section - Full Screen Height */}
      <div className="relative h-screen min-h-[600px] max-h-[1200px] w-full overflow-hidden">
        {/* Background Image - Clear, No Opacity */}
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="https://images.unsplash.com/photo-1575550959106-5a7defe28b56?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Kenya Safari"
            className="w-full h-full object-cover"
            loading="eager"
          />
          
          {/* Gradient Overlay - For text readability only */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <div className="max-w-4xl animate-hero-in">
            <span className="text-[#d1973e] text-xs sm:text-sm font-semibold tracking-[0.4em] uppercase inline-block relative">
              <span className="absolute -left-8 top-1/2 -translate-y-1/2 w-6 h-px bg-[#d1973e]/50 hidden sm:block"></span>
              Explore Kenya
              <span className="absolute -right-8 top-1/2 -translate-y-1/2 w-6 h-px bg-[#d1973e]/50 hidden sm:block"></span>
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white mt-4 font-serif tracking-wide">
              Kenya's <span className="text-[#d1973e] font-script">Finest</span> Counties
            </h1>
            <div className="w-24 h-0.5 bg-[#d1973e] mx-auto mt-4"></div>
            <p className="text-white/80 text-sm sm:text-base md:text-lg mt-4 max-w-2xl mx-auto font-light leading-relaxed">
              From the savannas of the Maasai Mara to the beaches of Kwale — discover Kenya's most captivating destinations.
            </p>
            
            {/* Search Bar */}
            <div className="mt-8 max-w-lg mx-auto">
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

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-center justify-center">
            <div className="w-1 h-2 rounded-full bg-white/50 animate-pulse mt-1"></div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        {/* Filter Tabs - Scrollable on mobile */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-12 animate-fade-down">
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

        {/* Results Count */}
        <div className="text-center mb-8 animate-fade">
          <span className="text-[#3B1F0B]/40 text-sm font-light tracking-wider">
            Showing {filteredDestinations.length} destination{filteredDestinations.length !== 1 ? 's' : ''}
          </span>
        </div>

        {/* Destinations Grid - Alternating Layout with Visible Vertical Line */}
        {filteredDestinations.length > 0 ? (
          <div className="space-y-12 sm:space-y-16">
            {filteredDestinations.map((dest, index) => {
              const isHovered = hoveredId === dest.id;
              const isEven = index % 2 === 0;
              const isVisible = visibleCards.includes(dest.id);

              return (
                <div
                  key={dest.id}
                  ref={(el) => (cardRefs.current[index] = el)}
                  data-id={dest.id}
                  className={`group relative transition-all duration-1000 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
                  }`}
                >
                  <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-6 lg:gap-0 items-center`}>
                    {/* Image Container */}
                    <div className="lg:w-5/12 relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-700">
                      <div className="relative h-[280px] sm:h-[320px] md:h-[380px] overflow-hidden">
                        <img
                          src={dest.image}
                          alt={dest.name}
                          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#3B1F0B]/60 via-transparent to-transparent"></div>
                        
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-[#800020]/0 group-hover:bg-[#800020]/20 transition-all duration-700"></div>
                        
                        {/* Animated Badge */}
                        <div className="absolute top-4 left-4 z-10">
                          <span className="inline-block bg-[#d1973e] text-[#3B1F0B] text-[10px] sm:text-xs font-bold px-3 sm:px-4 py-1.5 rounded-full shadow-lg transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                            {dest.badge}
                          </span>
                        </div>
                        
                        {/* Rating */}
                        <div className="absolute top-4 right-4 z-10">
                          <span className="bg-white/90 backdrop-blur-sm text-[#3B1F0B] text-[10px] sm:text-xs font-bold px-2.5 sm:px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1">
                            <span className="text-[#d1973e]">★</span> {dest.rating}
                          </span>
                        </div>
                        
                        {/* Region */}
                        <div className="absolute bottom-4 left-4 z-10">
                          <span className="bg-black/40 backdrop-blur-sm text-white text-[10px] sm:text-xs font-light px-3 py-1 rounded-full border border-white/20">
                            {dest.region}
                          </span>
                        </div>
                        
                        {/* Gold Shimmer Line */}
                        <div className={`absolute bottom-0 left-0 h-1 bg-[#d1973e] transition-all duration-1000 ${
                          isHovered ? 'w-full' : 'w-0'
                        }`}></div>
                      </div>
                    </div>

                    {/* Vertical Divider Line - More Visible */}
                    <div className="hidden lg:flex items-center justify-center w-1/12">
                      <div className="w-[2px] h-48 sm:h-56 md:h-64 bg-gradient-to-b from-transparent via-[#d1973e] to-transparent opacity-60"></div>
                    </div>

                    {/* Content Container */}
                    <div className="lg:w-6/12 space-y-3 sm:space-y-4">
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                        <span className="text-[#800020] text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase">
                          {dest.wildlife}
                        </span>
                        <span className="w-6 sm:w-8 h-px bg-[#d1973e]"></span>
                        <span className="text-[#3B1F0B]/40 text-[10px] sm:text-xs font-light">
                          Best: {dest.bestTime}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-[#3B1F0B] font-serif tracking-wide group-hover:text-[#800020] transition-colors duration-500">
                        {dest.name}
                      </h3>
                      
                      <p className="text-[#3B1F0B]/60 text-sm sm:text-base leading-relaxed font-light">
                        {dest.description}
                      </p>
                      
                      {/* Attractions Tags */}
                      <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
                        {dest.attractions.slice(0, 4).map((attraction, idx) => (
                          <span key={idx} className="text-[9px] sm:text-xs text-[#3B1F0B]/50 bg-[#FAF5EB] px-2.5 sm:px-3 py-1 rounded-full font-light">
                            {attraction}
                          </span>
                        ))}
                      </div>
                      
                      {/* Divider */}
                      <div className="w-10 sm:w-12 h-px bg-[#d1973e]/30"></div>
                      
                      {/* Price and CTA */}
                      <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4 pt-1">
                        <div>
                          <span className="text-xl sm:text-2xl md:text-3xl font-light text-[#800020] font-serif">
                            {dest.price}
                          </span>
                          <span className="text-[#3B1F0B]/40 text-[10px] sm:text-xs font-light ml-1">per person</span>
                        </div>
                        <div className="flex gap-2 sm:gap-3">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              openWhatsApp();
                            }}
                            className="bg-[#d1973e] hover:bg-[#c4882a] text-[#3B1F0B] text-[10px] sm:text-sm font-semibold px-4 sm:px-6 py-2 sm:py-2.5 rounded-full transition transform hover:scale-105 shadow-md hover:shadow-lg"
                          >
                            Book Now
                          </button>
                          <Link
                            to={`/destinations/${dest.id}`}
                            className="border border-[#3B1F0B]/20 hover:border-[#800020] text-[#3B1F0B] text-[10px] sm:text-sm font-light px-4 sm:px-6 py-2 sm:py-2.5 rounded-full transition hover:bg-[#800020]/5"
                          >
                            Explore
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20 animate-fade">
            <div className="text-6xl mb-4 opacity-30">🔍</div>
            <h3 className="text-2xl font-light text-[#3B1F0B] font-serif">No destinations found</h3>
            <p className="text-[#3B1F0B]/50 mt-2 font-light">Try adjusting your search or filter</p>
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
            transform: scale(0.95) translateY(20px);
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
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-hero-in {
          animation: heroIn 1s ease-out forwards;
        }
        .animate-fade-down {
          animation: fadeDown 0.8s ease-out forwards;
        }
        .animate-fade {
          animation: fade 1s ease-out forwards;
        }
        .animate-bounce {
          animation: bounce 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default DestinationsPage;