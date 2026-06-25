import { useState } from 'react';
import { Link } from 'react-router-dom';

const Destinations = () => {
  const [hoveredId, setHoveredId] = useState(null);

  const destinations = [
    {
      id: 'kenya',
      name: 'Kenya',
      image: 'https://images.unsplash.com/photo-1614531341773-3bff8b7cb3fc?w=800&q=80',
      description: 'Home to the Great Migration, Maasai culture, and iconic savanna landscapes.',
      bestTime: 'Jun - Oct',
      keyAttraction: 'Maasai Mara',
      badge: 'Great Migration',
      rating: 4.9,
      duration: '7-10 Days',
      price: 'From $5,000'
    },
    {
      id: 'tanzania',
      name: 'Tanzania',
      image: 'https://images.unsplash.com/photo-1589177900326-900782f88a55?w=800&q=80',
      description: 'Serengeti plains, Mount Kilimanjaro, and Zanzibar beaches.',
      bestTime: 'Jun - Sep',
      keyAttraction: 'Serengeti',
      badge: 'Big 5 Safari',
      rating: 4.8,
      duration: '8-12 Days',
      price: 'From $6,500'
    },
    {
      id: 'botswana',
      name: 'Botswana',
      image: 'https://images.unsplash.com/photo-1591005383946-16532ba69aee?w=800&q=80',
      description: 'Okavango Delta, elephant herds, and luxury tented camps.',
      bestTime: 'May - Oct',
      keyAttraction: 'Okavango Delta',
      badge: 'Luxury Safari',
      rating: 4.9,
      duration: '7-14 Days',
      price: 'From $8,000'
    },
    {
      id: 'south-africa',
      name: 'South Africa',
      image: 'https://plus.unsplash.com/premium_photo-1697730061063-ad499e343f26?w=800&q=80',
      description: 'Cape Town, Kruger National Park, and world-class winelands.',
      bestTime: 'May - Sep',
      keyAttraction: 'Cape Town & Kruger',
      badge: 'Diverse Experiences',
      rating: 4.7,
      duration: '5-10 Days',
      price: 'From $4,500'
    },
    {
      id: 'rwanda',
      name: 'Rwanda',
      image: 'https://images.unsplash.com/photo-1489640818597-89b1edc97db5?w=800&q=80',
      description: 'Mountain gorilla trekking in the misty Volcanoes National Park.',
      bestTime: 'Jun - Sep',
      keyAttraction: 'Gorilla Trekking',
      badge: 'Gorilla Trekking',
      rating: 4.9,
      duration: '3-5 Days',
      price: 'From $7,500'
    },
    {
      id: 'namibia',
      name: 'Namibia',
      image: 'https://images.unsplash.com/photo-1545200381-89c298dea43d?w=800&q=80',
      description: 'Towering sand dunes, Sossusvlei, and desert-adapted wildlife.',
      bestTime: 'May - Oct',
      keyAttraction: 'Sossusvlei Dunes',
      badge: 'Desert Adventure',
      rating: 4.7,
      duration: '7-10 Days',
      price: 'From $5,500'
    }
  ];

  // Helper to open WhatsApp
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
    <section className="py-12 sm:py-16 md:py-20 bg-white relative overflow-hidden">
      {/* Floating Decorations */}
      <div className="absolute top-20 left-10 text-4xl opacity-5 animate-float hidden lg:block">🌿</div>
      <div className="absolute bottom-20 right-10 text-5xl opacity-5 animate-float delay-1000 hidden lg:block">🌍</div>
      
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <span className="text-[#800020] text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase">
            Where to Go
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#3B1F0B] mt-2 font-serif">
            Featured Safari <span className="text-[#800020]">Destinations</span>
          </h2>
          <div className="w-16 h-1 bg-yellow-400 mx-auto mt-4"></div>
          <p className="text-[#3B1F0B]/60 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            Discover Africa's most iconic wildlife destinations, each offering unique experiences and unforgettable encounters.
          </p>
        </div>

        {/* Destination Grid - 6 Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {destinations.map((dest) => {
            const isHovered = hoveredId === dest.id;

            return (
              <div
                key={dest.id}
                className="relative rounded-2xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
                onMouseEnter={() => setHoveredId(dest.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{
                  transform: isHovered ? 'scale(1.02)' : 'scale(1)',
                  transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-64 sm:h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3B1F0B]/90 via-[#3B1F0B]/30 to-transparent"></div>

                  {/* Badge */}
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-10">
                    <span className="bg-yellow-400 text-[#3B1F0B] text-[10px] sm:text-xs font-bold px-2.5 sm:px-3 py-1 rounded-full shadow-lg">
                      {dest.badge}
                    </span>
                  </div>

                  {/* Rating */}
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-10">
                    <span className="bg-white/90 backdrop-blur-sm text-[#3B1F0B] text-[10px] sm:text-xs font-bold px-2.5 sm:px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                      ★ {dest.rating}
                    </span>
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 z-10">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-white font-serif">
                        {dest.name}
                      </h3>
                      <span className="text-yellow-400 text-sm sm:text-base font-semibold">
                        {dest.duration}
                      </span>
                    </div>
                    
                    <p className="text-white/80 text-xs sm:text-sm mb-1">
                      {dest.keyAttraction} • Best: {dest.bestTime}
                    </p>
                    <p className="text-white/60 text-xs sm:text-sm mb-3 line-clamp-1">
                      {dest.description}
                    </p>

                    {/* Price and CTA */}
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
                          className="bg-yellow-400 hover:bg-yellow-500 text-[#3B1F0B] text-[10px] sm:text-xs font-bold px-3 sm:px-4 py-1.5 rounded-lg transition transform hover:scale-105"
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

                  {/* Hover Indicator Line */}
                  <div className={`absolute bottom-0 left-0 h-1 bg-yellow-400 transition-all duration-500 ${
                    isHovered ? 'w-full' : 'w-0'
                  }`}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-10 sm:mt-12">
          <Link
            to="/destinations"
            className="inline-flex items-center gap-2 bg-[#800020] hover:bg-[#3B1F0B] text-white px-6 sm:px-8 py-3 rounded-lg font-semibold transition transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <span>Explore All Destinations</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Destinations;