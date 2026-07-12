import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const PackagesPage = () => {
  const [expandedId, setExpandedId] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);
  const cardRefs = useRef({});
  const packagesTopRef = useRef(null);

  // Custom form state
  const [customForm, setCustomForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    destination: '',
    duration: '',
    groupSize: '',
    budget: '',
    travelDate: '',
    accommodation: '',
    interests: [],
    specialRequests: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const packages = [
    {
      id: 'platinum',
      tier: 'Platinum',
      price: 'KES 650,000',
      tagline: 'The Ultimate Safari Experience',
      animal: 'Lion',
      borderColor: 'border-[#8B0000]',
      description: 'For those who seek the extraordinary. The Platinum package redefines luxury safari with exclusive access, private villas, and once-in-a-lifetime encounters.',
      whyChoose: 'Perfect for honeymooners, anniversaries, and discerning travelers who demand the very best.',
      duration: '7 Days / 6 Nights',
      groupSize: 'Private (2-6 pax)',
      accommodation: '5-star luxury lodges & private villas with butler service',
      guide: 'Senior certified guide with 15+ years experience',
      heroImage: 'https://i.ibb.co/V0VhZrYg/lion.jpg',
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
      excluded: ['International flights', 'Visa fees', 'Travel insurance', 'Personal items and souvenirs', 'Tips and gratuities'],
      itinerary: [
        { day: 1, title: 'Arrival & Welcome', desc: 'Arrive at Jomo Kenyatta International Airport. Private transfer to your luxury lodge.' },
        { day: 2, title: 'Full Day Safari – Amboseli', desc: 'Early morning game drive in Amboseli National Park. View Mount Kilimanjaro.' },
        { day: 3, title: 'Lake Nakuru & Flamingos', desc: 'Fly to Lake Nakuru. See rhinos, flamingos, and tree-climbing lions.' },
        { day: 4, title: 'Masai Mara – The Big Five', desc: 'Fly to Masai Mara. Afternoon game drive in search of the Big Five.' },
        { day: 5, title: 'Hot Air Balloon Safari', desc: 'Sunrise hot air balloon ride over the Mara. Champagne breakfast in the bush.' },
        { day: 6, title: 'Masai Culture & Sundowners', desc: 'Visit a Masai village. Sundowner cocktails overlooking the savanna.' },
        { day: 7, title: 'Departure', desc: 'Morning game drive. Transfer to airstrip for flight to Nairobi.' }
      ],
      gallery: [
        'https://i.ibb.co/V0VhZrYg/lion.jpg',
        'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=400&q=80',
        'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=400&q=80',
        'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=400&q=80'
      ]
    },
    {
      id: 'gold',
      tier: 'Gold',
      price: 'KES 350,000',
      tagline: 'The Perfect Safari Balance',
      animal: 'Elephant',
      borderColor: 'border-[#8B7355]',
      description: 'The Gold package offers the perfect balance of luxury and value. Experience the best of African safari with premium accommodations and expert guiding.',
      whyChoose: 'Ideal for families, small groups, and travelers who want exceptional quality at a great value.',
      duration: '6 Days / 5 Nights',
      groupSize: 'Small group (4-8 pax)',
      accommodation: '4-star luxury tented camps & eco-lodges',
      guide: 'Professional guide with 10+ years experience',
      heroImage: 'https://plus.unsplash.com/premium_photo-1664304465748-3c02b0ca6fb7?q=80&w=881&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      included: [
        'All park entry fees and conservation levies',
        'Full board accommodation (breakfast, lunch, dinner)',
        'Shared 4x4 safari vehicle (6 guests max)',
        'Bush breakfast and sundowner experiences',
        'Lake Nakuru boat cruise',
        'Masai village cultural visit',
        'Airport transfers'
      ],
      excluded: ['International flights', 'Visa fees', 'Travel insurance', 'Personal items and souvenirs', 'Tips and gratuities'],
      itinerary: [
        { day: 1, title: 'Arrival & Welcome', desc: 'Arrive at Nairobi. Transfer to your luxury tented camp.' },
        { day: 2, title: 'Lake Nakuru Safari', desc: 'Full day game drive in Lake Nakuru National Park. See rhinos and flamingos.' },
        { day: 3, title: 'Masai Mara Arrival', desc: 'Fly to Masai Mara. Afternoon game drive in search of the Big Five.' },
        { day: 4, title: 'Full Day Game Drive', desc: 'Full day safari with packed lunch. Witness the Great Migration (seasonal).' },
        { day: 5, title: 'Bush Breakfast & Sundowners', desc: 'Morning game drive with bush breakfast. Evening sundowner cocktail.' },
        { day: 6, title: 'Departure', desc: 'Morning game drive. Transfer to airstrip for flight to Nairobi.' }
      ],
      gallery: [
        'https://plus.unsplash.com/premium_photo-1664304465748-3c02b0ca6fb7?q=80&w=881&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=400&q=80',
        'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=400&q=80',
        'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=400&q=80'
      ]
    },
    {
      id: 'silver',
      tier: 'Silver',
      price: 'KES 150,000',
      tagline: "The Adventurer's Choice",
      animal: 'Cheetah',
      borderColor: 'border-[#556B2F]',
      description: "The Silver package is designed for adventurers who want to experience the magic of African safari without the luxury price tag.",
      whyChoose: 'Perfect for backpackers, students, and budget-conscious travelers.',
      duration: '5 Days / 4 Nights',
      groupSize: 'Group (8-12 pax)',
      accommodation: '3-star budget camps & guesthouses',
      guide: 'Experienced local guide with 5+ years experience',
      heroImage: 'https://i.ibb.co/m3mBLMc/cheetah.webp',
      included: [
        'All park entry fees and conservation levies',
        'Full board accommodation (breakfast, lunch, dinner)',
        'Shared safari vehicle (10 guests max)',
        'Bush lunch experience',
        'Nature walks with local guides',
        'Airport transfers'
      ],
      excluded: ['International flights', 'Visa fees', 'Travel insurance', 'Personal items and souvenirs', 'Tips and gratuities', 'Alcoholic drinks'],
      itinerary: [
        { day: 1, title: 'Arrival & Welcome', desc: 'Arrive at Nairobi. Transfer to your budget camp.' },
        { day: 2, title: 'Lake Nakuru Safari', desc: 'Full day game drive in Lake Nakuru National Park.' },
        { day: 3, title: 'Masai Mara Arrival', desc: 'Drive to Masai Mara. Afternoon game drive.' },
        { day: 4, title: 'Full Day Game Drive', desc: 'Full day safari with packed lunch.' },
        { day: 5, title: 'Departure', desc: 'Morning game drive. Drive back to Nairobi.' }
      ],
      gallery: [
        'https://i.ibb.co/m3mBLMc/cheetah.webp',
        'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=400&q=80',
        'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=400&q=80',
        'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=400&q=80'
      ]
    },
    {
      id: 'custom',
      tier: 'Custom',
      price: 'Your Budget',
      tagline: 'Your Dream Safari, Your Way',
      animal: 'Giraffe',
      borderColor: 'border-[#D4C5A9]',
      isCustom: true,
      description: "Design your perfect safari adventure. Tell us your preferences and we'll craft a bespoke itinerary just for you.",
      whyChoose: 'Complete flexibility on every detail — duration, budget, destinations, activities, and accommodation.',
      duration: 'Flexible - You Choose',
      groupSize: 'You Choose',
      accommodation: 'You Choose',
      guide: 'Expert guide tailored to your interests',
      heroImage: 'https://images.unsplash.com/photo-1518709368567-b22d4217b91f?q=80&w=725&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      included: [
        'Custom itinerary designed just for you',
        'Flexible duration based on your availability',
        'Choice of accommodation from budget to luxury',
        'Private or group safari options',
        'Expert guide throughout your journey',
        'Special interests and activities included'
      ],
      excluded: ['International flights', 'Visa fees', 'Travel insurance'],
      itinerary: [
        { day: 1, title: 'Your Journey Begins', desc: 'Tell us your dream, and we\'ll design the perfect itinerary just for you.' },
        { day: 2, title: 'Custom Experiences', desc: 'From wildlife photography to cultural immersion — your safari, your interests.' },
        { day: 3, title: 'Flexible Pacing', desc: 'Spend more time where you love, less where you don\'t.' }
      ],
      gallery: [
        'https://images.unsplash.com/photo-1518709368567-b22d4217b91f?q=80&w=725&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=400&q=80',
        'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=400&q=80',
        'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=400&q=80'
      ]
    }
  ];

  // Handle custom form input changes
  const handleCustomInputChange = (e) => {
    const { name, value } = e.target;
    setCustomForm(prev => ({ ...prev, [name]: value }));
  };

  // Handle interest toggle
  const toggleInterest = (interest) => {
    setCustomForm(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  // Handle custom form submission
  const handleCustomSubmit = (e) => {
    e.preventDefault();
    const message = `🦁 *CUSTOM SAFARI REQUEST*%0A%0A👤 Name: ${customForm.fullName}%0A📧 Email: ${customForm.email}%0A📱 Phone: ${customForm.phone}%0A%0A📍 Destination: ${customForm.destination}%0A📅 Duration: ${customForm.duration}%0A👥 Group Size: ${customForm.groupSize}%0A💰 Budget: ${customForm.budget}%0A🗓️ Travel Date: ${customForm.travelDate}%0A🏨 Accommodation: ${customForm.accommodation}%0A🎯 Interests: ${customForm.interests.join(', ')}%0A📝 Special Requests: ${customForm.specialRequests}`;
    
    const phoneNumber = '254700000000';
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    setFormSubmitted(true);
  };

  const scrollToPackagesTop = () => {
    if (packagesTopRef.current) {
      packagesTopRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setTimeout(() => setExpandedId(null), 300);
  };

  const openWhatsApp = () => {
    const trigger = document.querySelector('.whatsapp-trigger');
    if (trigger) trigger.click();
  };

  const toggleExpand = (id) => {
    if (expandedId === id) {
      scrollToPackagesTop();
    } else {
      setExpandedId(id);
      setTimeout(() => {
        const ref = cardRefs.current[id];
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          window.scrollTo({ top: rect.top + scrollTop - 80, behavior: 'smooth' });
        }
      }, 150);
    }
  };

  const getTierColor = (tier) => {
    switch(tier) {
      case 'Platinum': return 'text-[#8B0000]';
      case 'Gold': return 'text-[#8B7355]';
      case 'Silver': return 'text-[#556B2F]';
      case 'Custom': return 'text-[#D4C5A9]';
      default: return 'text-[#2C1810]';
    }
  };

  const getTierBadgeColor = (tier) => {
    switch(tier) {
      case 'Platinum': return 'bg-[#8B0000] text-white';
      case 'Gold': return 'bg-[#8B7355] text-white';
      case 'Silver': return 'bg-[#556B2F] text-white';
      case 'Custom': return 'bg-[#D4C5A9] text-[#2C1810]';
      default: return 'bg-[#2C1810] text-white';
    }
  };

  const interestOptions = [
    'Wildlife Photography', 'Big 5 Safari', 'Great Migration',
    'Gorilla Trekking', 'Walking Safaris', 'Hot Air Balloon',
    'Cultural Experiences', 'Beach Relaxation'
  ];

  const destinationOptions = ['Kenya', 'Tanzania', 'Botswana', 'South Africa', 'Rwanda', 'Namibia', 'Multiple Destinations'];
  const durationOptions = ['3-5 Days', '6-8 Days', '9-12 Days', '13+ Days', 'Flexible'];
  const groupOptions = ['Solo', 'Couple', '3-4 People', '5-8 People', '9-12 People', '12+ People'];
  const budgetOptions = ['Under $2,000', '$2,000 - $5,000', '$5,000 - $10,000', '$10,000 - $20,000', '$20,000+', 'Flexible'];
  const accommodationOptions = ['Budget Camping', 'Mid-range Lodges', 'Luxury Tented Camps', '5-star Luxury', 'Private Villas'];

  return (
    <section className="pt-[85px] sm:pt-24 md:pt-28 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 lg:px-8 bg-[#FAF5EB] min-h-screen">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div ref={packagesTopRef} className="text-center mb-10 sm:mb-12 md:mb-16">
          <span className="text-[#8B0000] text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase">
            Choose Your Safari
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#2C1810] mt-2 font-serif tracking-wide">
            Your <span className="text-[#8B0000]">Exclusive</span> Adventure
          </h1>
          <p className="text-[#2C1810]/60 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mt-3 font-light leading-relaxed">
            Four unique ways to experience the wild. One unforgettable adventure.
          </p>
          <div className="w-16 h-0.5 bg-[#8B7355] mx-auto mt-4"></div>
        </div>

        {/* Package Cards */}
        <div className="space-y-4 sm:space-y-6 md:space-y-8">
          {packages.map((pkg, index) => {
            const isExpanded = expandedId === pkg.id;

            return (
              <div
                key={pkg.id}
                ref={(el) => (cardRefs.current[pkg.id] = el)}
                className={`
                  transition-all duration-700 ease-in-out
                  sticky top-[85px] sm:top-24 md:top-28
                  ${isExpanded ? 'z-30 scale-100' : 'z-10 hover:scale-[1.01]'}
                  ${isExpanded ? 'mb-8' : 'mb-0'}
                `}
                style={{
                  transform: isExpanded ? 'scale(1)' : 'scale(0.98)',
                  opacity: isExpanded ? 1 : 0.95,
                  marginTop: index === 0 ? '0' : `${Math.min(index * 15, 40)}px`
                }}
                onMouseEnter={() => setHoveredId(pkg.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className={`
                  bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-md 
                  transition-all duration-500 ease-in-out
                  ${isExpanded ? 'shadow-2xl ring-2 ring-[#8B0000]/20' : 'hover:shadow-xl'}
                  ${isExpanded ? 'border-t-4' : 'border-t-0'}
                  ${pkg.borderColor}
                `}>
                  <div className="flex flex-col lg:flex-row">
                    {/* Left Side - Safari Animal Image (Hidden when expanded) */}
                    {!isExpanded && (
                      <div className="lg:w-2/5 relative min-h-[200px] sm:min-h-[240px] md:min-h-[280px] lg:min-h-[350px] overflow-hidden">
                        <img 
                          src={pkg.heroImage} 
                          alt={`${pkg.tier} Safari`}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        {/* Gradient overlay for readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/95 via-[#2C1810]/50 to-[#2C1810]/20"></div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#2C1810]/80"></div>
                        
                        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 p-4 sm:p-6 text-center">
                          <div className={`text-2xl sm:text-3xl md:text-4xl font-light font-serif mb-1 tracking-wide text-white drop-shadow-lg ${getTierColor(pkg.tier)}`}>
                            {pkg.tier}
                          </div>
                          <div className="text-sm sm:text-base md:text-lg text-white/95 text-center max-w-xs font-light px-2 drop-shadow-lg">
                            {pkg.tagline}
                          </div>
                          <div className="mt-2 sm:mt-3 flex flex-wrap items-center gap-1 sm:gap-2 justify-center">
                            <span className={`inline-block text-[10px] sm:text-xs font-semibold px-3 sm:px-4 py-1 rounded-full tracking-wider ${getTierBadgeColor(pkg.tier)}`}>
                              {pkg.tier}
                            </span>
                            {pkg.isCustom && (
                              <span className="inline-block text-[10px] sm:text-xs font-semibold px-2 sm:px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white tracking-wider drop-shadow-lg">
                                Build Your Dream
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="absolute bottom-3 right-3 z-20">
                          <button
                            onClick={() => {
                              if (isExpanded) scrollToPackagesTop();
                              else toggleExpand(pkg.id);
                            }}
                            className={`bg-white/95 hover:bg-white text-[#2C1810] px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-[10px] sm:text-xs font-semibold transition-all duration-300 flex items-center gap-1 sm:gap-2 shadow-md hover:shadow-lg ${isExpanded ? 'ring-2 ring-[#8B0000]' : ''}`}
                          >
                            {isExpanded ? (
                              <>
                                <span>Close</span>
                                <svg className="w-3 h-3 sm:w-4 sm:h-4 rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                                </svg>
                              </>
                            ) : (
                              <>
                                <span>View Details</span>
                                <svg className="w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Right Side - Details (Full width when expanded) */}
                    <div className={`${!isExpanded ? 'lg:w-3/5' : 'w-full'} p-4 sm:p-5 md:p-6 lg:p-8 flex flex-col justify-between bg-white`}>
                      <div>
                        <div className="flex flex-wrap items-start justify-between gap-2">
                          <div className="flex-1 min-w-[120px]">
                            <h3 className="text-lg sm:text-xl md:text-2xl font-light text-[#2C1810] font-serif tracking-wide">
                              {pkg.tier}
                            </h3>
                            <p className="text-xs sm:text-sm text-[#2C1810]/50 mt-0.5 font-light">{pkg.duration}</p>
                          </div>
                          <div className="text-right">
                            <div className={`text-xl sm:text-2xl md:text-3xl font-light ${pkg.isCustom ? 'text-[#8B0000]' : 'text-[#2C1810]'}`}>
                              {pkg.price}
                            </div>
                            <div className="text-[10px] sm:text-xs text-[#2C1810]/40 font-light">per person</div>
                          </div>
                        </div>

                        <p className="text-[#2C1810]/60 text-xs sm:text-sm mt-2 font-light leading-relaxed line-clamp-2">
                          {pkg.tagline}
                        </p>

                        <div className="mt-3 grid grid-cols-2 gap-1.5 sm:gap-2">
                          <div className="bg-[#FAF5EB] rounded-lg p-1.5 sm:p-2 text-center">
                            <div className="text-[9px] sm:text-xs text-[#2C1810]/40 font-light tracking-wider">Duration</div>
                            <div className="text-xs sm:text-sm font-medium text-[#2C1810]">{pkg.duration}</div>
                          </div>
                          <div className="bg-[#FAF5EB] rounded-lg p-1.5 sm:p-2 text-center">
                            <div className="text-[9px] sm:text-xs text-[#2C1810]/40 font-light tracking-wider">Group</div>
                            <div className="text-xs sm:text-sm font-medium text-[#2C1810]">{pkg.groupSize}</div>
                          </div>
                        </div>

                        {/* View Details button when collapsed */}
                        {!isExpanded && (
                          <div className="mt-3">
                            <button
                              onClick={() => toggleExpand(pkg.id)}
                              className="w-full bg-[#8B7355]/10 hover:bg-[#8B7355]/20 text-[#2C1810] py-2 rounded-lg font-medium transition text-sm"
                            >
                              View Full Details →
                            </button>
                          </div>
                        )}

                        {/* Expanded Content */}
                        <div className={`overflow-hidden transition-all duration-700 ease-in-out ${isExpanded ? 'max-h-[9999px] opacity-100 mt-4 sm:mt-6' : 'max-h-0 opacity-0'}`}>
                          <div className="space-y-4 sm:space-y-6 animate-fade-in">
                            {/* Hero Image Section - Full Width with Overlay */}
                            {isExpanded && (
                              <div className="relative w-full rounded-lg overflow-hidden shadow-md">
                                <img 
                                  src={pkg.heroImage} 
                                  alt={`${pkg.tier} Safari Experience`}
                                  className="w-full h-56 sm:h-64 md:h-80 lg:h-96 object-cover"
                                />
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/90 via-[#2C1810]/40 to-transparent"></div>
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#2C1810]/60"></div>
                                
                                {/* Overlay Content */}
                                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
                                  <div className="flex flex-wrap items-end justify-between gap-3">
                                    <div>
                                      <div className={`text-xl sm:text-2xl md:text-3xl font-light font-serif text-white drop-shadow-lg ${getTierColor(pkg.tier)}`}>
                                        {pkg.tier}
                                      </div>
                                      <div className="text-white/90 text-sm sm:text-base md:text-lg font-light drop-shadow-lg">
                                        {pkg.tagline}
                                      </div>
                                      {pkg.isCustom && (
                                        <span className="inline-block text-[10px] sm:text-xs font-semibold px-3 sm:px-4 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white tracking-wider mt-1">
                                          Build Your Dream
                                        </span>
                                      )}
                                    </div>
                                    <div className="text-right">
                                      <div className="text-white text-xl sm:text-2xl md:text-3xl font-light drop-shadow-lg">
                                        {pkg.price}
                                      </div>
                                      <div className="text-white/60 text-[10px] sm:text-xs font-light">per person</div>
                                    </div>
                                  </div>
                                </div>

                                {/* Decorative accent line */}
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#8B0000] via-[#8B7355] to-[#556B2F]"></div>
                              </div>
                            )}

                            {pkg.isCustom ? (
                              <div>
                                <h4 className="text-[10px] sm:text-xs font-semibold text-[#8B0000] uppercase tracking-[0.2em] mb-3">
                                  Build Your Custom Safari
                                </h4>
                                {formSubmitted ? (
                                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                                    <div className="text-3xl mb-2">🎉</div>
                                    <p className="text-[#2C1810] font-semibold">Your custom safari request has been sent!</p>
                                    <p className="text-[#2C1810]/60 text-sm mt-1">Our team will get back to you within 24 hours.</p>
                                    <button
                                      onClick={() => setFormSubmitted(false)}
                                      className="mt-3 text-[#8B0000] font-semibold text-sm hover:underline"
                                    >
                                      Submit Another Request
                                    </button>
                                  </div>
                                ) : (
                                  <form onSubmit={handleCustomSubmit} className="space-y-3">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                      <input
                                        type="text"
                                        name="fullName"
                                        placeholder="Full Name *"
                                        value={customForm.fullName}
                                        onChange={handleCustomInputChange}
                                        required
                                        className="w-full px-3 py-2 rounded-lg border border-[#2C1810]/20 focus:border-[#8B0000] focus:ring-1 focus:ring-[#8B0000] transition outline-none text-sm"
                                      />
                                      <input
                                        type="email"
                                        name="email"
                                        placeholder="Email Address *"
                                        value={customForm.email}
                                        onChange={handleCustomInputChange}
                                        required
                                        className="w-full px-3 py-2 rounded-lg border border-[#2C1810]/20 focus:border-[#8B0000] focus:ring-1 focus:ring-[#8B0000] transition outline-none text-sm"
                                      />
                                    </div>
                                    <input
                                      type="tel"
                                      name="phone"
                                      placeholder="Phone Number *"
                                      value={customForm.phone}
                                      onChange={handleCustomInputChange}
                                      required
                                      className="w-full px-3 py-2 rounded-lg border border-[#2C1810]/20 focus:border-[#8B0000] focus:ring-1 focus:ring-[#8B0000] transition outline-none text-sm"
                                    />
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                      <select
                                        name="destination"
                                        value={customForm.destination}
                                        onChange={handleCustomInputChange}
                                        className="w-full px-3 py-2 rounded-lg border border-[#2C1810]/20 focus:border-[#8B0000] focus:ring-1 focus:ring-[#8B0000] transition outline-none text-sm bg-white"
                                      >
                                        <option value="">Select Destination</option>
                                        {destinationOptions.map(d => <option key={d} value={d}>{d}</option>)}
                                      </select>
                                      <select
                                        name="duration"
                                        value={customForm.duration}
                                        onChange={handleCustomInputChange}
                                        className="w-full px-3 py-2 rounded-lg border border-[#2C1810]/20 focus:border-[#8B0000] focus:ring-1 focus:ring-[#8B0000] transition outline-none text-sm bg-white"
                                      >
                                        <option value="">Select Duration</option>
                                        {durationOptions.map(d => <option key={d} value={d}>{d}</option>)}
                                      </select>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                      <select
                                        name="groupSize"
                                        value={customForm.groupSize}
                                        onChange={handleCustomInputChange}
                                        className="w-full px-3 py-2 rounded-lg border border-[#2C1810]/20 focus:border-[#8B0000] focus:ring-1 focus:ring-[#8B0000] transition outline-none text-sm bg-white"
                                      >
                                        <option value="">Group Size</option>
                                        {groupOptions.map(d => <option key={d} value={d}>{d}</option>)}
                                      </select>
                                      <select
                                        name="budget"
                                        value={customForm.budget}
                                        onChange={handleCustomInputChange}
                                        className="w-full px-3 py-2 rounded-lg border border-[#2C1810]/20 focus:border-[#8B0000] focus:ring-1 focus:ring-[#8B0000] transition outline-none text-sm bg-white"
                                      >
                                        <option value="">Budget Range</option>
                                        {budgetOptions.map(d => <option key={d} value={d}>{d}</option>)}
                                      </select>
                                    </div>
                                    <input
                                      type="date"
                                      name="travelDate"
                                      value={customForm.travelDate}
                                      onChange={handleCustomInputChange}
                                      className="w-full px-3 py-2 rounded-lg border border-[#2C1810]/20 focus:border-[#8B0000] focus:ring-1 focus:ring-[#8B0000] transition outline-none text-sm"
                                    />
                                    <select
                                      name="accommodation"
                                      value={customForm.accommodation}
                                      onChange={handleCustomInputChange}
                                      className="w-full px-3 py-2 rounded-lg border border-[#2C1810]/20 focus:border-[#8B0000] focus:ring-1 focus:ring-[#8B0000] transition outline-none text-sm bg-white"
                                    >
                                      <option value="">Accommodation Preference</option>
                                      {accommodationOptions.map(d => <option key={d} value={d}>{d}</option>)}
                                    </select>
                                    <div>
                                      <p className="text-xs text-[#2C1810]/60 mb-1">Your Interests (click to select)</p>
                                      <div className="flex flex-wrap gap-1">
                                        {interestOptions.map(interest => (
                                          <button
                                            key={interest}
                                            type="button"
                                            onClick={() => toggleInterest(interest)}
                                            className={`px-2 py-1 rounded-full text-xs transition ${customForm.interests.includes(interest) ? 'bg-[#8B0000] text-white' : 'bg-[#FAF5EB] text-[#2C1810]'}`}
                                          >
                                            {interest}
                                          </button>
                                        ))}
                                      </div>
                                    </div>
                                    <textarea
                                      name="specialRequests"
                                      placeholder="Special requests or preferences..."
                                      value={customForm.specialRequests}
                                      onChange={handleCustomInputChange}
                                      rows="2"
                                      className="w-full px-3 py-2 rounded-lg border border-[#2C1810]/20 focus:border-[#8B0000] focus:ring-1 focus:ring-[#8B0000] transition outline-none text-sm resize-y"
                                    />
                                    <button
                                      type="submit"
                                      className="w-full bg-[#8B0000] hover:bg-[#2C1810] text-white py-2.5 rounded-lg font-semibold transition"
                                    >
                                      Submit Custom Safari Request
                                    </button>
                                  </form>
                                )}
                              </div>
                            ) : (
                              <>
                                <div>
                                  <h4 className="text-[10px] sm:text-xs font-semibold text-[#8B0000] uppercase tracking-[0.2em] mb-1">
                                    About This Package
                                  </h4>
                                  <p className="text-[#2C1810]/70 text-xs sm:text-sm leading-relaxed font-light">
                                    {pkg.description}
                                  </p>
                                  <p className="text-[#8B0000]/70 text-xs sm:text-sm italic mt-1 font-light">
                                    {pkg.whyChoose}
                                  </p>
                                </div>

                                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                                  <div className="bg-[#FAF5EB] rounded-lg p-2 sm:p-3">
                                    <div className="text-[9px] sm:text-xs text-[#2C1810]/40 font-light tracking-wider">Accommodation</div>
                                    <div className="text-xs sm:text-sm font-medium text-[#2C1810] mt-0.5">{pkg.accommodation}</div>
                                  </div>
                                  <div className="bg-[#FAF5EB] rounded-lg p-2 sm:p-3">
                                    <div className="text-[9px] sm:text-xs text-[#2C1810]/40 font-light tracking-wider">Guide</div>
                                    <div className="text-xs sm:text-sm font-medium text-[#2C1810] mt-0.5">{pkg.guide}</div>
                                  </div>
                                </div>

                                <div>
                                  <h4 className="text-[10px] sm:text-xs font-semibold text-[#8B0000] uppercase tracking-[0.2em] mb-1">What's Included</h4>
                                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-0.5 sm:gap-1">
                                    {pkg.included.map((item, idx) => (
                                      <li key={idx} className="flex items-start gap-1.5 sm:gap-2 text-xs sm:text-sm text-[#2C1810]/70 font-light">
                                        <span className="text-[#556B2F] mt-0.5">✓</span>
                                        <span>{item}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>

                                <div>
                                  <h4 className="text-[10px] sm:text-xs font-semibold text-[#8B0000] uppercase tracking-[0.2em] mb-1">What's Not Included</h4>
                                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-0.5 sm:gap-1">
                                    {pkg.excluded.map((item, idx) => (
                                      <li key={idx} className="flex items-start gap-1.5 sm:gap-2 text-xs sm:text-sm text-[#2C1810]/70 font-light">
                                        <span className="text-red-500 mt-0.5">✗</span>
                                        <span>{item}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>

                                <div>
                                  <h4 className="text-[10px] sm:text-xs font-semibold text-[#8B0000] uppercase tracking-[0.2em] mb-1">Itinerary</h4>
                                  <div className="space-y-1.5 sm:space-y-2 max-h-[200px] sm:max-h-[250px] overflow-y-auto pr-1 sm:pr-2">
                                    {pkg.itinerary.map((day, idx) => (
                                      <div key={idx} className="border-l-2 border-[#8B7355] pl-2 sm:pl-3 py-1.5 sm:py-2 bg-[#FAF5EB] rounded-r-lg">
                                        <div className="flex flex-wrap items-center gap-1 sm:gap-2">
                                          <span className="font-semibold text-[#8B0000] text-[10px] sm:text-xs tracking-wider">Day {day.day}</span>
                                          <span className="font-medium text-[#2C1810] text-xs sm:text-sm">{day.title}</span>
                                        </div>
                                        <p className="text-[10px] sm:text-xs text-[#2C1810]/60 mt-0.5 font-light">{day.desc}</p>
                                      </div>
                                    ))}
                                  </div>
                                </div>

                                <div>
                                  <h4 className="text-[10px] sm:text-xs font-semibold text-[#8B0000] uppercase tracking-[0.2em] mb-1">Safari Moments</h4>
                                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 sm:gap-2">
                                    {pkg.gallery.map((img, idx) => (
                                      <img key={idx} src={img} alt={`Safari ${idx + 1}`} className="rounded-lg h-12 sm:h-16 w-full object-cover hover:scale-105 transition duration-300 cursor-pointer" loading="lazy" />
                                    ))}
                                  </div>
                                </div>
                              </>
                            )}

                            <div className="pt-3 sm:pt-4 border-t border-[#FAF5EB]">
                              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                                {pkg.isCustom ? (
                                  <button
                                    onClick={() => {
                                      if (!formSubmitted) {
                                        document.querySelector('form')?.dispatchEvent(new Event('submit', { cancelable: true }));
                                      }
                                    }}
                                    className="flex-1 bg-[#8B0000] hover:bg-[#2C1810] text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold transition text-center text-sm sm:text-base"
                                  >
                                    Submit Custom Safari
                                  </button>
                                ) : (
                                  <button
                                    onClick={openWhatsApp}
                                    className="flex-1 bg-[#8B7355] hover:bg-[#6B5340] text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold transition text-center text-sm sm:text-base"
                                  >
                                    Book Now
                                  </button>
                                )}
                                <button
                                  onClick={openWhatsApp}
                                  className="flex-1 border-2 border-[#2C1810]/20 hover:border-[#8B0000] text-[#2C1810] px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold transition text-center text-sm sm:text-base"
                                >
                                  Talk to an Expert
                                </button>
                                <button
                                  onClick={() => {
                                    if (isExpanded) scrollToPackagesTop();
                                    else toggleExpand(pkg.id);
                                  }}
                                  className="flex-1 border-2 border-[#2C1810]/20 hover:border-[#8B0000] text-[#2C1810] px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold transition text-center text-sm sm:text-base"
                                >
                                  {isExpanded ? 'Close' : 'View Details'}
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

        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16 md:mt-24">
          <div className="bg-[#FAF5EB]/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 md:p-12 max-w-3xl mx-auto border border-[#8B0000]/10">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-[#2C1810] mb-2 font-serif tracking-wide">
              Not sure which package is right for you?
            </h3>
            <p className="text-[#2C1810]/60 text-sm sm:text-base mb-4 sm:mb-6 font-light">
              Our safari experts will help you choose the perfect experience for your needs.
            </p>
            <button
              onClick={openWhatsApp}
              className="inline-block bg-[#8B0000] hover:bg-[#2C1810] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold transition transform hover:scale-105 text-sm sm:text-base"
            >
              Talk to an Expert
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default PackagesPage;