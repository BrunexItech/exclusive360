// Destinations.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';

// Export destinations so other components can use the data
export const destinations = [
  {
    id: 'kenya',
    name: 'Kenya',
    region: 'East Africa',
    image: 'https://images.unsplash.com/photo-1614531341773-3bff8b7cb3fc?w=800&q=80',
    description: 'Home to the Great Migration, Maasai culture, and iconic savanna landscapes.',
    attractions: ['Maasai Mara', 'Great Migration', 'Big 5', 'Maasai Culture'],
    bestTime: 'Jun - Oct',
    price: 'From $5,000',
    rating: 4.9,
    duration: '7-10 Days',
    wildlife: 'Big 5',
    badge: 'Great Migration'
  },
  {
    id: 'tanzania',
    name: 'Tanzania',
    region: 'East Africa',
    image: 'https://images.unsplash.com/photo-1589177900326-900782f88a55?w=800&q=80',
    description: 'Serengeti plains, Mount Kilimanjaro, and Zanzibar beaches.',
    attractions: ['Serengeti', 'Ngorongoro Crater', 'Kilimanjaro', 'Zanzibar'],
    bestTime: 'Jun - Sep',
    price: 'From $6,500',
    rating: 4.8,
    duration: '8-12 Days',
    wildlife: 'Big 5',
    badge: 'Big 5 Safari'
  },
  {
    id: 'botswana',
    name: 'Botswana',
    region: 'Southern Africa',
    image: 'https://images.unsplash.com/photo-1591005383946-16532ba69aee?w=800&q=80',
    description: 'Okavango Delta, elephant herds, and luxury tented camps.',
    attractions: ['Okavango Delta', 'Chobe River', 'Elephant Herds', 'Luxury Camps'],
    bestTime: 'May - Oct',
    price: 'From $8,000',
    rating: 4.9,
    duration: '7-14 Days',
    wildlife: 'Elephant Capital',
    badge: 'Luxury Safari'
  },
  {
    id: 'south-africa',
    name: 'South Africa',
    region: 'Southern Africa',
    image: 'https://plus.unsplash.com/premium_photo-1697730061063-ad499e343f26?w=800&q=80',
    description: 'Cape Town, Kruger National Park, and world-class winelands.',
    attractions: ['Cape Town', 'Kruger Park', 'Winelands', 'Garden Route'],
    bestTime: 'May - Sep',
    price: 'From $4,500',
    rating: 4.7,
    duration: '5-10 Days',
    wildlife: 'Big 5',
    badge: 'Diverse Experiences'
  },
  {
    id: 'rwanda',
    name: 'Rwanda',
    region: 'East Africa',
    image: 'https://images.unsplash.com/photo-1489640818597-89b1edc97db5?w=800&q=80',
    description: 'Mountain gorilla trekking in the misty Volcanoes National Park.',
    attractions: ['Gorilla Trekking', 'Volcanoes NP', 'Lake Kivu', 'Kigali'],
    bestTime: 'Jun - Sep',
    price: 'From $7,500',
    rating: 4.9,
    duration: '3-5 Days',
    wildlife: 'Mountain Gorillas',
    badge: 'Gorilla Trekking'
  },
  {
    id: 'namibia',
    name: 'Namibia',
    region: 'Southern Africa',
    image: 'https://images.unsplash.com/photo-1545200381-89c298dea43d?w=800&q=80',
    description: 'Towering sand dunes, Sossusvlei, and desert-adapted wildlife.',
    attractions: ['Sossusvlei', 'Etosha NP', 'Skeleton Coast', 'Sand Dunes'],
    bestTime: 'May - Oct',
    price: 'From $5,500',
    rating: 4.7,
    duration: '7-10 Days',
    wildlife: 'Desert Wildlife',
    badge: 'Desert Adventure'
  },
  {
    id: 'uganda',
    name: 'Uganda',
    region: 'East Africa',
    image: 'https://plus.unsplash.com/premium_photo-1661876679866-dcad0b7d0742?w=800&q=80',
    description: 'Chimpanzee tracking, lush rainforests, and the Source of the Nile.',
    attractions: ['Chimpanzees', 'Bwindi Forest', 'Source of Nile', 'Rainforests'],
    bestTime: 'Dec - Feb',
    price: 'From $6,000',
    rating: 4.6,
    duration: '4-7 Days',
    wildlife: 'Chimpanzees',
    badge: 'Primate Safari'
  },
  {
    id: 'zambia',
    name: 'Zambia',
    region: 'Southern Africa',
    image: 'https://images.unsplash.com/photo-1639720091626-e8bad0008e23?w=800&q=80',
    description: 'Victoria Falls, walking safaris, and the mighty Zambezi River.',
    attractions: ['Victoria Falls', 'Walking Safaris', 'Zambezi River', 'South Luangwa'],
    bestTime: 'May - Nov',
    price: 'From $4,800',
    rating: 4.5,
    duration: '5-8 Days',
    wildlife: 'Walking Safaris',
    badge: 'Walking Safari'
  },
  {
    id: 'zimbabwe',
    name: 'Zimbabwe',
    region: 'Southern Africa',
    image: 'https://images.unsplash.com/photo-1575285272212-d52e915d01c7?w=800&q=80',
    description: 'Victoria Falls, Hwange National Park, and rich cultural heritage.',
    attractions: ['Victoria Falls', 'Hwange NP', 'Lake Kariba', 'Great Zimbabwe'],
    bestTime: 'May - Oct',
    price: 'From $4,200',
    rating: 4.4,
    duration: '5-8 Days',
    wildlife: 'Big 5',
    badge: 'Wildlife & Culture'
  },
  {
    id: 'seychelles',
    name: 'Seychelles',
    region: 'Island Destinations',
    image: 'https://images.unsplash.com/photo-1617362985992-d0b6814cacef?w=800&q=80',
    description: 'Pristine beaches, crystal clear waters, and luxury island resorts.',
    attractions: ['Pristine Beaches', 'Snorkeling', 'Luxury Resorts', 'Nature Trails'],
    bestTime: 'Apr - Oct',
    price: 'From $6,000',
    rating: 4.8,
    duration: '5-7 Days',
    wildlife: 'Marine Life',
    badge: 'Island Paradise'
  },
  {
    id: 'mauritius',
    name: 'Mauritius',
    region: 'Island Destinations',
    image: 'https://images.unsplash.com/photo-1582574643306-d00ea3f7d49b?w=800&q=80',
    description: 'Tropical paradise with white sand beaches and vibrant coral reefs.',
    attractions: ['White Beaches', 'Coral Reefs', 'Underwater Waterfall', 'Luxury Resorts'],
    bestTime: 'May - Dec',
    price: 'From $5,500',
    rating: 4.7,
    duration: '5-7 Days',
    wildlife: 'Marine Life',
    badge: 'Beach Getaway'
  }
];

const Destinations = () => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [hoveredId, setHoveredId] = useState(null);

  const regions = ['all', 'East Africa', 'Southern Africa', 'Island Destinations'];

  const filteredDestinations = destinations.filter(dest => {
    const matchesFilter = filter === 'all' || dest.region === filter;
    const matchesSearch = dest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          dest.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

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
    <section className="bg-[#faf8f4] min-h-screen">
      {/* Hero Section - ROAR AFRICA Style */}
      <div className="relative h-[60vh] min-h-[400px] max-h-[600px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1920&q=80" 
            alt="African Safari" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a2e]/60 via-[#1a1a2e]/40 to-[#1a1a2e]/80"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
          <div className="max-w-4xl">
            <span className="text-[#c9a84c] text-sm font-light tracking-[0.4em] uppercase">
              WHERE TO GO
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white mt-3 font-serif tracking-wide">
              Explore Africa's <span className="text-[#c9a84c]">Finest</span> Destinations
            </h1>
            <p className="text-white/60 text-base sm:text-lg md:text-xl mt-4 max-w-2xl mx-auto font-light leading-relaxed">
              From the savannas of Kenya to the beaches of Seychelles — find your perfect safari destination.
            </p>
            
            {/* Search Bar - Glass morphism */}
            <div className="mt-8 max-w-xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search destinations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-6 py-4 pl-14 rounded-full bg-white/10 backdrop-blur-md text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#c9a84c] border border-white/20 transition-all duration-300 text-base font-light"
                />
                <svg className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Filter Tabs - ROAR AFRICA minimal style */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-10">
          {regions.map((region) => (
            <button
              key={region}
              onClick={() => setFilter(region)}
              className={`px-5 py-2.5 rounded-full text-sm font-light tracking-wide transition-all duration-300 ${
                filter === region
                  ? 'bg-[#c9a84c] text-white shadow-lg'
                  : 'bg-white text-[#1a1a2e]/60 hover:text-[#1a1a2e] hover:bg-white/80'
              }`}
            >
              {region === 'all' ? 'All Destinations' : region}
            </button>
          ))}
        </div>

        {/* Results Count */}
        <div className="text-center mb-8">
          <span className="text-[#1a1a2e]/40 text-sm font-light tracking-wider">
            {filteredDestinations.length} DESTINATIONS
          </span>
        </div>

        {/* Destinations Grid - ROAR AFRICA card style */}
        {filteredDestinations.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map((dest) => {
              const isHovered = hoveredId === dest.id;
              return (
                <div
                  key={dest.id}
                  className="group"
                  onMouseEnter={() => setHoveredId(dest.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <div className="relative overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-2xl transition-all duration-700">
                    {/* Image Container */}
                    <div className="relative h-80 overflow-hidden">
                      <img
                        src={dest.image}
                        alt={dest.name}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        loading="lazy"
                      />
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

                      {/* Region Badge - Glass morphism */}
                      <div className="absolute top-5 left-5 z-10">
                        <span className="bg-white/10 backdrop-blur-sm text-white text-xs font-light px-4 py-1.5 rounded-full border border-white/20 tracking-wider">
                          {dest.region}
                        </span>
                      </div>

                      {/* Rating */}
                      <div className="absolute top-5 right-5 z-10">
                        <span className="bg-white/10 backdrop-blur-sm text-white text-xs font-light px-4 py-1.5 rounded-full border border-white/20 flex items-center gap-1.5 tracking-wider">
                          <span className="text-[#c9a84c]">★</span> {dest.rating}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                        <div className="transform transition-transform duration-500 group-hover:translate-y-0">
                          <div className="flex items-end justify-between mb-1">
                            <h3 className="text-2xl font-light text-white font-serif tracking-wide">
                              {dest.name}
                            </h3>
                            <span className="text-[#c9a84c] text-sm font-light">
                              {dest.duration}
                            </span>
                          </div>
                          
                          <p className="text-white/50 text-sm mb-1 font-light">
                            {dest.wildlife} <span className="text-white/30">•</span> Best: {dest.bestTime}
                          </p>
                          <p className="text-white/40 text-sm mb-4 line-clamp-2 font-light leading-relaxed">
                            {dest.description}
                          </p>

                          <div className="flex items-center justify-between pt-3 border-t border-white/10">
                            <span className="text-white/50 text-sm font-light">
                              {dest.price}
                            </span>
                            <div className="flex gap-3">
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  openWhatsApp();
                                }}
                                className="bg-[#c9a84c] hover:bg-[#b8973a] text-white text-xs font-medium px-5 py-2 rounded-full transition transform hover:scale-105 tracking-wider"
                              >
                                Book Now
                              </button>
                              <Link
                                to={`/destinations/${dest.id}`}
                                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white text-xs font-light px-5 py-2 rounded-full transition border border-white/20 tracking-wider"
                              >
                                Explore
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Hover Indicator */}
                    <div className={`absolute bottom-0 left-0 h-0.5 bg-[#c9a84c] transition-all duration-700 ${
                      isHovered ? 'w-full' : 'w-0'
                    }`}></div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-5xl mb-4 opacity-20">🔍</div>
            <h3 className="text-2xl font-light text-[#1a1a2e] font-serif">No destinations found</h3>
            <p className="text-[#1a1a2e]/40 mt-2 font-light">Try adjusting your search or filter</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setFilter('all');
              }}
              className="mt-6 bg-[#c9a84c] text-white px-8 py-3 rounded-full font-light tracking-wider hover:bg-[#b8973a] transition"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Destinations;