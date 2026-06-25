import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const PackagesPage = () => {
  const [expandedId, setExpandedId] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);
  const cardRefs = useRef({});
  const packagesTopRef = useRef(null);

  const packages = [
    {
      id: 'platinum',
      tier: 'Platinum',
      price: 'KES 650,000',
      tagline: 'The Ultimate Safari Experience',
      icon: '👑',
      color: 'from-yellow-400 to-amber-600',
      borderColor: 'border-yellow-400',
      badge: 'Best Seller',
      description: 'For those who seek the extraordinary. The Platinum package redefines luxury safari with exclusive access, private villas, and once-in-a-lifetime encounters.',
      whyChoose: 'Perfect for honeymooners, anniversaries, and discerning travelers who demand the very best.',
      duration: '7 Days / 6 Nights',
      groupSize: 'Private (2-6 pax)',
      accommodation: '5-star luxury lodges & private villas with butler service',
      vehicle: 'Custom luxury 4x4 safari vehicle with pop-up roof',
      guide: 'Senior certified guide with 15+ years experience',
      included: [
        'All park entry fees and conservation levies',
        'Full board accommodation (breakfast, lunch, dinner)',
        'Private 4x4 safari vehicle throughout',
        'Bush breakfast and sundowner experiences',
        'Hot air balloon safari with champagne breakfast',
        'Helicopter scenic flight over the Rift Valley',
        'Masai village cultural visit',
        'Laundry service',
        'Premium drinks and alcoholic beverages',
        'Airport transfers'
      ],
      excluded: [
        'International flights',
        'Visa fees',
        'Travel insurance',
        'Personal items and souvenirs',
        'Tips and gratuities'
      ],
      itinerary: [
        { day: 1, title: 'Arrival & Welcome', desc: 'Arrive at Jomo Kenyatta International Airport. Private transfer to your luxury lodge. Welcome dinner under the stars.' },
        { day: 2, title: 'Full Day Safari – Amboseli', desc: 'Early morning game drive in Amboseli National Park. View Mount Kilimanjaro with elephants in the foreground. Bush breakfast.' },
        { day: 3, title: 'Lake Nakuru & Flamingos', desc: 'Fly to Lake Nakuru. Afternoon game drive to see rhinos, flamingos, and the famous tree-climbing lions.' },
        { day: 4, title: 'Masai Mara – The Big Five', desc: 'Fly to Masai Mara National Reserve. Afternoon game drive in search of the Big Five.' },
        { day: 5, title: 'Hot Air Balloon Safari', desc: 'Sunrise hot air balloon ride over the Mara. Champagne breakfast in the bush. Full day game drive.' },
        { day: 6, title: 'Masai Culture & Sundowners', desc: 'Visit a Masai village and learn about their traditions. Sundowner cocktails overlooking the savanna.' },
        { day: 7, title: 'Departure', desc: 'Morning game drive. Transfer to airstrip for flight to Nairobi. Final transfer to the airport for departure.' }
      ],
      gallery: [
        'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&q=80',
        'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&q=80',
        'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=600&q=80',
        'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?w=600&q=80'
      ]
    },
    {
      id: 'gold',
      tier: 'Gold',
      price: 'KES 350,000',
      tagline: 'The Perfect Safari Balance',
      icon: '⭐',
      color: 'from-yellow-200 to-yellow-600',
      borderColor: 'border-yellow-300',
      badge: 'Popular Choice',
      description: 'The Gold package offers the perfect balance of luxury and value. Experience the best of African safari with premium accommodations and expert guiding.',
      whyChoose: 'Ideal for families, small groups, and travelers who want exceptional quality at a great value.',
      duration: '6 Days / 5 Nights',
      groupSize: 'Small group (4-8 pax)',
      accommodation: '4-star luxury tented camps & eco-lodges',
      vehicle: 'Custom safari vehicle with pop-up roof',
      guide: 'Professional guide with 10+ years experience',
      included: [
        'All park entry fees and conservation levies',
        'Full board accommodation (breakfast, lunch, dinner)',
        'Shared 4x4 safari vehicle (6 guests max)',
        'Bush breakfast and sundowner experiences',
        'Lake Nakuru boat cruise',
        'Masai village cultural visit',
        'Airport transfers'
      ],
      excluded: [
        'International flights',
        'Visa fees',
        'Travel insurance',
        'Personal items and souvenirs',
        'Tips and gratuities'
      ],
      itinerary: [
        { day: 1, title: 'Arrival & Welcome', desc: 'Arrive at Nairobi. Transfer to your luxury tented camp. Welcome dinner with traditional entertainment.' },
        { day: 2, title: 'Lake Nakuru Safari', desc: 'Full day game drive in Lake Nakuru National Park. See rhinos, flamingos, and the famous tree-climbing lions.' },
        { day: 3, title: 'Masai Mara Arrival', desc: 'Fly to Masai Mara National Reserve. Afternoon game drive in search of the Big Five.' },
        { day: 4, title: 'Full Day Game Drive', desc: 'Full day safari with packed lunch. Explore the vast plains of the Mara and witness the Great Migration (seasonal).' },
        { day: 5, title: 'Bush Breakfast & Sundowners', desc: 'Morning game drive with bush breakfast. Evening sundowner cocktail overlooking the savanna.' },
        { day: 6, title: 'Departure', desc: 'Morning game drive. Transfer to airstrip for flight to Nairobi. Final transfer to the airport for departure.' }
      ],
      gallery: [
        'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&q=80',
        'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&q=80',
        'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=600&q=80',
        'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?w=600&q=80'
      ]
    },
    {
      id: 'bronze',
      tier: 'Bronze',
      price: 'KES 150,000',
      tagline: "The Adventurer's Choice",
      icon: '🔥',
      color: 'from-amber-600 to-amber-800',
      borderColor: 'border-amber-600',
      badge: 'Best Value',
      description: "The Bronze package is designed for adventurers who want to experience the magic of African safari without the luxury price tag. Authentic, exciting, and memorable.",
      whyChoose: 'Perfect for backpackers, students, and budget-conscious travelers who still want an authentic safari experience.',
      duration: '5 Days / 4 Nights',
      groupSize: 'Group (8-12 pax)',
      accommodation: '3-star budget camps & guesthouses',
      vehicle: 'Standard safari vehicle with pop-up roof',
      guide: 'Experienced local guide with 5+ years experience',
      included: [
        'All park entry fees and conservation levies',
        'Full board accommodation (breakfast, lunch, dinner)',
        'Shared safari vehicle (10 guests max)',
        'Bush lunch experience',
        'Nature walks with local guides',
        'Airport transfers'
      ],
      excluded: [
        'International flights',
        'Visa fees',
        'Travel insurance',
        'Personal items and souvenirs',
        'Tips and gratuities',
        'Alcoholic drinks'
      ],
      itinerary: [
        { day: 1, title: 'Arrival & Welcome', desc: 'Arrive at Nairobi. Transfer to your budget camp. Welcome dinner and briefing.' },
        { day: 2, title: 'Lake Nakuru Safari', desc: 'Full day game drive in Lake Nakuru National Park. See rhinos, flamingos, and the famous tree-climbing lions.' },
        { day: 3, title: 'Masai Mara Arrival', desc: 'Drive to Masai Mara National Reserve. Afternoon game drive in search of the Big Five.' },
        { day: 4, title: 'Full Day Game Drive', desc: 'Full day safari with packed lunch. Explore the vast plains of the Mara.' },
        { day: 5, title: 'Departure', desc: 'Morning game drive. Drive back to Nairobi. Final transfer to the airport for departure.' }
      ],
      gallery: [
        'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&q=80',
        'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&q=80',
        'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=600&q=80',
        'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?w=600&q=80'
      ]
    }
  ];

  // Function to scroll back to top of packages
  const scrollToPackagesTop = () => {
    if (packagesTopRef.current) {
      packagesTopRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    // Close the expanded card after scrolling
    setTimeout(() => {
      setExpandedId(null);
    }, 300);
  };

  // Function to open WhatsApp chat (triggers the WhatsApp component)
  const openWhatsApp = () => {
    // Find and click the WhatsApp trigger button
    const trigger = document.querySelector('.whatsapp-trigger');
    if (trigger) {
      trigger.click();
    } else {
      // Fallback: try to find by class
      const buttons = document.querySelectorAll('button');
      for (let btn of buttons) {
        if (btn.classList.contains('whatsapp-trigger')) {
          btn.click();
          break;
        }
      }
    }
  };

  const toggleExpand = (id) => {
    if (expandedId === id) {
      // If clicking the same card, close it and scroll to top
      scrollToPackagesTop();
    } else {
      setExpandedId(id);
      // Scroll to card with smooth animation
      setTimeout(() => {
        const ref = cardRefs.current[id];
        if (ref) {
          ref.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

  const selectedPackage = packages.find(pkg => pkg.id === expandedId);

  // Helper to get tier color
  const getTierColor = (tier) => {
    switch(tier) {
      case 'Platinum': return 'text-yellow-400';
      case 'Gold': return 'text-yellow-300';
      case 'Bronze': return 'text-amber-600';
      default: return 'text-darkgreen';
    }
  };

  const getTierBadgeColor = (tier) => {
    switch(tier) {
      case 'Platinum': return 'bg-yellow-400 text-darkbrown';
      case 'Gold': return 'bg-yellow-200 text-darkbrown';
      case 'Bronze': return 'bg-amber-700 text-white';
      default: return 'bg-darkgreen text-white';
    }
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 bg-gray-50 min-h-screen">
      <div className="container mx-auto max-w-7xl">
        {/* Header - with ref for scrolling back */}
        <div ref={packagesTopRef} className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-darkgreen mb-4 font-serif">
            Choose Your Safari
          </h1>
          <p className="text-darkbrown text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
            Three unique ways to experience the wild. One unforgettable adventure.
          </p>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mt-4"></div>
        </div>

        {/* Package Cards with Sticky Stacking */}
        <div className="space-y-8 md:space-y-12">
          {packages.map((pkg, index) => {
            const isExpanded = expandedId === pkg.id;
            const isHovered = hoveredId === pkg.id;

            return (
              <div
                key={pkg.id}
                ref={(el) => (cardRefs.current[pkg.id] = el)}
                className={`
                  sticky top-4 sm:top-8 md:top-20 
                  transition-all duration-700 ease-in-out
                  ${isExpanded ? 'z-30' : 'z-10'}
                  ${isExpanded ? 'scale-100' : 'hover:scale-[1.01]'}
                `}
                style={{
                  transform: isExpanded ? 'scale(1)' : 'scale(0.98)',
                  opacity: isExpanded ? 1 : 0.95,
                  marginTop: index === 0 ? '0' : `${index * 20}px`
                }}
                onMouseEnter={() => setHoveredId(pkg.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className={`
                  bg-white rounded-2xl overflow-hidden shadow-lg 
                  transition-all duration-500 ease-in-out
                  ${isExpanded ? 'shadow-2xl ring-2 ring-yellow-400/50' : 'shadow-lg hover:shadow-xl'}
                  ${isExpanded ? 'border-t-4' : 'border-t-0'}
                  ${pkg.borderColor}
                `}>
                  {/* Card Content */}
                  <div className="flex flex-col lg:flex-row">
                    {/* Left - Visual (60%) */}
                    <div className="lg:w-[60%] relative min-h-[300px] sm:min-h-[400px] lg:min-h-[500px] bg-darkgreen/10 overflow-hidden">
                      {/* Background Image with Safari Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#800020] via-[#3B1F0B] to-[#1B3B1B]">
                        {/* Animated Pattern */}
                        <div className="absolute inset-0 opacity-20">
                          <div className="absolute inset-0" style={{
                            backgroundImage: `
                              repeating-linear-gradient(
                                45deg,
                                transparent,
                                transparent 20px,
                                rgba(255, 255, 255, 0.05) 20px,
                                rgba(255, 255, 255, 0.05) 21px
                              ),
                              repeating-linear-gradient(
                                -45deg,
                                transparent,
                                transparent 20px,
                                rgba(255, 255, 255, 0.05) 20px,
                                rgba(255, 255, 255, 0.05) 21px
                              )
                            `,
                            animation: 'shimmer 8s linear infinite',
                            backgroundSize: '60px 60px'
                          }} />
                        </div>
                      </div>

                      {/* Package Icon and Tier Badge - Overlay */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 p-6 text-white">
                        <div className="text-6xl sm:text-7xl md:text-8xl mb-3 animate-fade-in-up">
                          {pkg.icon}
                        </div>
                        <div className={`
                          text-2xl sm:text-3xl md:text-4xl font-bold font-serif mb-2
                          ${getTierColor(pkg.tier)}
                        `}>
                          {pkg.tier}
                        </div>
                        <div className="text-sm sm:text-base md:text-lg text-white/80 text-center max-w-xs">
                          {pkg.tagline}
                        </div>
                        <div className="mt-4">
                          <span className={`
                            inline-block text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full
                            ${getTierBadgeColor(pkg.tier)}
                          `}>
                            {pkg.badge}
                          </span>
                        </div>
                      </div>

                      {/* Back Button - Only shows when expanded */}
                      {isExpanded && (
                        <div className="absolute top-4 left-4 z-20">
                          <button
                            onClick={scrollToPackagesTop}
                            className="bg-white/90 hover:bg-white text-darkbrown px-4 py-2 rounded-lg text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            Back
                          </button>
                        </div>
                      )}

                      {/* Expand/Close Details Button */}
                      <div className="absolute bottom-4 right-4 z-20">
                        <button
                          onClick={() => {
                            if (isExpanded) {
                              scrollToPackagesTop();
                            } else {
                              toggleExpand(pkg.id);
                            }
                          }}
                          className={`
                            bg-white/90 hover:bg-white text-darkbrown 
                            px-4 py-2 rounded-lg text-sm font-semibold
                            transition-all duration-300
                            flex items-center gap-2
                            ${isExpanded ? 'shadow-lg' : 'shadow-md hover:shadow-lg'}
                          `}
                        >
                          {isExpanded ? (
                            <>
                              <span>Close Details</span>
                              <svg className="w-4 h-4 rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                              </svg>
                            </>
                          ) : (
                            <>
                              <span>View Details</span>
                              <svg className="w-4 h-4 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </>
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Right - Details (40%) */}
                    <div className="lg:w-[40%] p-6 md:p-8 flex flex-col justify-between bg-white">
                      <div>
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h3 className="text-xl sm:text-2xl font-bold text-darkgreen">
                              {pkg.tier}
                            </h3>
                            <p className="text-sm text-darkbrown/60 mt-0.5">{pkg.duration}</p>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl sm:text-3xl font-extrabold text-darkbrown">
                              {pkg.price}
                            </div>
                            <div className="text-xs text-darkbrown/50">per person</div>
                          </div>
                        </div>

                        <p className="text-darkbrown/70 text-sm mt-3 line-clamp-2">
                          {pkg.tagline}
                        </p>

                        {/* Quick Specs */}
                        <div className="mt-4 grid grid-cols-2 gap-2">
                          <div className="bg-gray-50 rounded-lg p-2 text-center">
                            <div className="text-xs text-darkbrown/50">Duration</div>
                            <div className="text-sm font-semibold text-darkgreen">{pkg.duration}</div>
                          </div>
                          <div className="bg-gray-50 rounded-lg p-2 text-center">
                            <div className="text-xs text-darkbrown/50">Group</div>
                            <div className="text-sm font-semibold text-darkgreen">{pkg.groupSize}</div>
                          </div>
                        </div>

                        {/* Expanded Content - Slides down with animation */}
                        <div className={`
                          overflow-hidden transition-all duration-700 ease-in-out
                          ${isExpanded ? 'max-h-[5000px] opacity-100 mt-6' : 'max-h-0 opacity-0'}
                        `}>
                          <div className="space-y-6 animate-fade-in">
                            {/* Description */}
                            <div>
                              <h4 className="text-sm font-semibold text-darkgreen uppercase tracking-wider mb-1">
                                About This Package
                              </h4>
                              <p className="text-darkbrown/80 text-sm leading-relaxed">
                                {pkg.description}
                              </p>
                              <p className="text-darkgreen/70 text-sm italic mt-2">
                                {pkg.whyChoose}
                              </p>
                            </div>

                            {/* Accommodation & Guide */}
                            <div className="grid grid-cols-2 gap-3">
                              <div className="bg-gray-50 rounded-lg p-3">
                                <div className="text-xs text-darkbrown/50">Accommodation</div>
                                <div className="text-sm font-medium text-darkgreen mt-0.5">{pkg.accommodation}</div>
                              </div>
                              <div className="bg-gray-50 rounded-lg p-3">
                                <div className="text-xs text-darkbrown/50">Guide</div>
                                <div className="text-sm font-medium text-darkgreen mt-0.5">{pkg.guide}</div>
                              </div>
                            </div>

                            {/* What's Included */}
                            <div>
                              <h4 className="text-sm font-semibold text-darkgreen uppercase tracking-wider mb-2">
                                ✅ What's Included
                              </h4>
                              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                                {pkg.included.map((item, idx) => (
                                  <li key={idx} className="flex items-start gap-2 text-sm text-darkbrown/80">
                                    <span className="text-green-600 mt-0.5">✓</span>
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* What's Not Included */}
                            <div>
                              <h4 className="text-sm font-semibold text-darkgreen uppercase tracking-wider mb-2">
                                ❌ What's Not Included
                              </h4>
                              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                                {pkg.excluded.map((item, idx) => (
                                  <li key={idx} className="flex items-start gap-2 text-sm text-darkbrown/80">
                                    <span className="text-red-500 mt-0.5">✗</span>
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Itinerary */}
                            <div>
                              <h4 className="text-sm font-semibold text-darkgreen uppercase tracking-wider mb-2">
                                🗓️ Itinerary
                              </h4>
                              <div className="space-y-2 max-h-[400px] overflow-y-auto pr-2">
                                {pkg.itinerary.map((day, idx) => (
                                  <div key={idx} className="border-l-4 border-yellow-400 pl-3 py-2 bg-gray-50 rounded-r-lg">
                                    <div className="flex items-center gap-2">
                                      <span className="font-bold text-darkgreen text-sm">Day {day.day}:</span>
                                      <span className="font-semibold text-darkbrown text-sm">{day.title}</span>
                                    </div>
                                    <p className="text-sm text-darkbrown/70 mt-0.5">{day.desc}</p>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Gallery */}
                            <div>
                              <h4 className="text-sm font-semibold text-darkgreen uppercase tracking-wider mb-2">
                                📸 Safari Moments
                              </h4>
                              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                                {pkg.gallery.map((img, idx) => (
                                  <img
                                    key={idx}
                                    src={img}
                                    alt={`Safari ${idx + 1}`}
                                    className="rounded-lg h-20 w-full object-cover hover:scale-105 transition duration-300 cursor-pointer"
                                    loading="lazy"
                                  />
                                ))}
                              </div>
                            </div>

                            {/* CTA Buttons - Open WhatsApp */}
                            <div className="pt-4 border-t border-gray-200">
                              <div className="flex flex-col sm:flex-row gap-3">
                                <button
                                  onClick={openWhatsApp}
                                  className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-darkbrown px-6 py-3 rounded-lg font-bold transition text-center"
                                >
                                  Book Now
                                </button>
                                <button
                                  onClick={openWhatsApp}
                                  className="flex-1 border-2 border-darkgreen/20 hover:border-darkgreen text-darkgreen px-6 py-3 rounded-lg font-semibold transition text-center"
                                >
                                  Talk to an Expert
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA - Opens WhatsApp */}
        <div className="text-center mt-16 md:mt-24">
          <div className="bg-darkgreen/5 rounded-2xl p-8 md:p-12 max-w-3xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-darkgreen mb-2">
              Not sure which package is right for you?
            </h3>
            <p className="text-darkbrown/70 mb-6">
              Our safari experts will help you choose the perfect experience for your needs.
            </p>
            <button
              onClick={openWhatsApp}
              className="inline-block bg-yellow-400 hover:bg-yellow-500 text-darkbrown px-8 py-3 rounded-lg font-bold transition"
            >
              Talk to an Expert
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackagesPage;