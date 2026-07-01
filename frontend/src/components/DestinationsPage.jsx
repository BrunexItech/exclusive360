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

const DestinationsPage = () => {
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
    <section className="pt-20 pb-16 bg-[#FAF5EB] min-h-screen">
      {/* Hero Section */}
      <div className="relative h-64 sm:h-80 md:h-96 bg-gradient-to-br from-[#800020] via-[#3B1F0B] to-[#1B3B1B] flex items-center justify-center">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              repeating-linear-gradient(
                45deg,
                transparent,
                transparent 20px,
                rgba(255, 255, 255, 0.05) 20px,
                rgba(255, 255, 255, 0.05) 21px
              )
            `,
            backgroundSize: '40px 40px'
          }} />
        </div>
        <div className="relative z-10 text-center px-4">
          <span className="text-[#d1973e] text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase">
            Where to Go
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mt-2 font-serif">
            Explore Africa's <span className="text-[#d1973e] font-script">Finest</span> Destinations
          </h1>
          <p className="text-white/70 text-sm sm:text-base md:text-lg mt-3 max-w-2xl mx-auto font-light">
            From the savannas of Kenya to the beaches of Seychelles — find your perfect safari destination.
          </p>
          {/* Search Bar */}
          <div className="mt-6 max-w-lg mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search destinations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-5 py-3 pl-12 rounded-full bg-white/90 backdrop-blur-sm text-[#3B1F0B] placeholder-[#3B1F0B]/40 focus:outline-none focus:ring-2 focus:ring-[#d1973e] shadow-lg"
              />
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#3B1F0B]/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-10">
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10">
          {regions.map((region) => (
            <button
              key={region}
              onClick={() => setFilter(region)}
              className={`px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 ${
                filter === region
                  ? 'bg-[#800020] text-white shadow-lg transform scale-105'
                  : 'bg-white/80 text-[#3B1F0B] hover:bg-[#800020]/10'
              }`}
            >
              {region === 'all' ? 'All Destinations' : region}
            </button>
          ))}
        </div>

        {/* Results Count */}
        <div className="text-center mb-6">
          <span className="text-[#3B1F0B]/60 text-sm font-light">
            Showing {filteredDestinations.length} destination{filteredDestinations.length !== 1 ? 's' : ''}
          </span>
        </div>

        {/* Destinations Grid */}
        {filteredDestinations.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filteredDestinations.map((dest, index) => {
              const isHovered = hoveredId === dest.id;
              return (
                <div
                  key={dest.id}
                  className="relative rounded-2xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onMouseEnter={() => setHoveredId(dest.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={dest.image}
                      alt={dest.name}
                      className="w-full h-64 sm:h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-[#3B1F0B]/90 via-[#3B1F0B]/40 to-transparent"></div>

                    {/* Region Badge */}
                    <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-10">
                      <span className="bg-white/20 backdrop-blur-sm text-white text-[10px] sm:text-xs font-semibold px-2.5 sm:px-3 py-1 rounded-full border border-white/30">
                        {dest.region}
                      </span>
                    </div>

                    {/* Rating */}
                    <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-10">
                      <span className="bg-white/90 backdrop-blur-sm text-[#3B1F0B] text-[10px] sm:text-xs font-bold px-2.5 sm:px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                        ★ {dest.rating}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 z-10">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="text-xl sm:text-2xl font-light text-white font-serif">
                          {dest.name}
                        </h3>
                        <span className="text-[#d1973e] text-sm sm:text-base font-semibold">
                          {dest.duration}
                        </span>
                      </div>
                      
                      <p className="text-white/80 text-xs sm:text-sm mb-1">
                        {dest.wildlife} • Best: {dest.bestTime}
                      </p>
                      <p className="text-white/60 text-xs sm:text-sm mb-3 line-clamp-2">
                        {dest.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <span className="text-white/70 text-xs sm:text-sm">
                          {dest.price}
                        </span>
                        <div className="flex gap-2">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              openWhatsApp();
                            }}
                            className="bg-[#d1973e] hover:bg-[#b8862e] text-[#3B1F0B] text-[10px] sm:text-xs font-bold px-3 sm:px-4 py-1.5 rounded-lg transition transform hover:scale-105"
                          >
                            Book Now
                          </button>
                          <Link
                            to={`/destinations/${dest.id}`}
                            className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white text-[10px] sm:text-xs font-semibold px-3 sm:px-4 py-1.5 rounded-lg transition border border-white/30"
                          >
                            Explore
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Hover Indicator */}
                    <div className={`absolute bottom-0 left-0 h-0.5 bg-[#d1973e] transition-all duration-500 ${
                      isHovered ? 'w-full' : 'w-0'
                    }`}></div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-light text-[#3B1F0B] font-serif">No destinations found</h3>
            <p className="text-[#3B1F0B]/60 mt-2 font-light">Try adjusting your search or filter</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setFilter('all');
              }}
              className="mt-4 bg-[#800020] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#3B1F0B] transition"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default DestinationsPage;