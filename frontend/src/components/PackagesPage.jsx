import { useState } from 'react';
import { Link } from 'react-router-dom';

const PackagesPage = () => {
  const [selectedTier, setSelectedTier] = useState(null);

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
        'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600',
        'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600',
        'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=600',
        'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?w=600'
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
        'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600',
        'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600',
        'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=600',
        'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?w=600'
      ]
    },
    {
      id: 'bronze',
      tier: 'Bronze',
      price: 'KES 150,000',
      tagline: 'The Adventurer\'s Choice',
      icon: '🔥',
      color: 'from-amber-600 to-amber-800',
      borderColor: 'border-amber-600',
      badge: 'Best Value',
      description: 'The Bronze package is designed for adventurers who want to experience the magic of African safari without the luxury price tag. Authentic, exciting, and memorable.',
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
        'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600',
        'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600',
        'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=600',
        'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?w=600'
      ]
    }
  ];

  const selectedPackage = packages.find(pkg => pkg.id === selectedTier);

  return (
    <section className="py-24 px-4 bg-gray-50 min-h-screen">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-darkgreen mb-4">Choose Your Safari</h1>
          <p className="text-darkbrown text-lg max-w-2xl mx-auto">
            Three unique ways to experience the wild. One unforgettable adventure.
          </p>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mt-4"></div>
        </div>

        {/* Package Cards Grid */}
        {!selectedTier ? (
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div 
                key={pkg.id}
                className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2 border-t-4 ${pkg.borderColor}`}
              >
                <div className="p-6 text-center">
                  <div className="text-5xl mb-2">{pkg.icon}</div>
                  <h3 className="text-2xl font-bold text-darkgreen">{pkg.tier}</h3>
                  <p className="text-3xl font-extrabold text-darkbrown mt-2">{pkg.price}</p>
                  <p className="text-sm text-darkbrown/60 mt-1">{pkg.duration}</p>
                  <div className="mt-2">
                    <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full ${
                      pkg.id === 'platinum' ? 'bg-yellow-400 text-darkbrown' :
                      pkg.id === 'gold' ? 'bg-yellow-200 text-darkbrown' :
                      'bg-amber-700 text-white'
                    }`}>
                      {pkg.badge}
                    </span>
                  </div>
                  <p className="text-darkbrown/70 text-sm mt-3">{pkg.tagline}</p>
                  <button 
                    onClick={() => setSelectedTier(pkg.id)}
                    className="mt-4 w-full bg-darkgreen hover:bg-darkbrown text-white py-2 rounded-lg font-semibold transition"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Detailed View
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Back Button */}
            <button 
              onClick={() => setSelectedTier(null)}
              className="m-4 text-darkgreen hover:text-yellow-400 transition font-semibold"
            >
              ← Back to Packages
            </button>

            {/* Package Header */}
            <div className={`bg-gradient-to-r ${selectedPackage.color} p-8 text-darkbrown`}>
              <div className="flex items-center gap-4">
                <span className="text-5xl">{selectedPackage.icon}</span>
                <div>
                  <h2 className="text-4xl font-bold">{selectedPackage.tier}</h2>
                  <p className="text-lg font-semibold">{selectedPackage.price}</p>
                  <p className="text-sm opacity-80">{selectedPackage.duration}</p>
                </div>
              </div>
            </div>

            <div className="p-8 space-y-8">
              {/* Tagline & Description */}
              <div>
                <h3 className="text-2xl font-bold text-darkgreen mb-2">{selectedPackage.tagline}</h3>
                <p className="text-darkbrown">{selectedPackage.description}</p>
                <p className="text-sm text-darkgreen/70 mt-2 italic">{selectedPackage.whyChoose}</p>
              </div>

              {/* Quick Specs */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-gray-50 p-4 rounded-xl">
                <div><span className="font-bold text-darkgreen">Duration:</span> {selectedPackage.duration}</div>
                <div><span className="font-bold text-darkgreen">Group Size:</span> {selectedPackage.groupSize}</div>
                <div><span className="font-bold text-darkgreen">Accommodation:</span> {selectedPackage.accommodation}</div>
                <div><span className="font-bold text-darkgreen">Vehicle:</span> {selectedPackage.vehicle}</div>
              </div>

              {/* What's Included */}
              <div>
                <h4 className="text-xl font-bold text-darkgreen mb-3">✅ What's Included</h4>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {selectedPackage.included.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-darkbrown">
                      <span className="text-green-600">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* What's Not Included */}
              <div>
                <h4 className="text-xl font-bold text-darkgreen mb-3">❌ What's Not Included</h4>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {selectedPackage.excluded.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-darkbrown">
                      <span className="text-red-600">✗</span> {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Itinerary */}
              <div>
                <h4 className="text-xl font-bold text-darkgreen mb-3">🗓️ Itinerary</h4>
                <div className="space-y-3">
                  {selectedPackage.itinerary.map((day, idx) => (
                    <div key={idx} className="border-l-4 border-yellow-400 pl-4 py-2 bg-gray-50 rounded-r-lg">
                      <span className="font-bold text-darkgreen">Day {day.day}:</span>
                      <span className="font-semibold text-darkbrown"> {day.title}</span>
                      <p className="text-sm text-darkbrown/70">{day.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Gallery */}
              <div>
                <h4 className="text-xl font-bold text-darkgreen mb-3">📸 Safari Moments</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {selectedPackage.gallery.map((img, idx) => (
                    <img key={idx} src={img} alt={`Safari ${idx+1}`} className="rounded-xl h-24 w-full object-cover hover:scale-105 transition" />
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="text-center bg-darkgreen/5 p-6 rounded-xl">
                <h4 className="text-2xl font-bold text-darkgreen">Ready for Your Safari?</h4>
                <p className="text-darkbrown/70 mb-4">Book now and start your African adventure</p>
                <Link to="/contact" className="inline-block bg-yellow-400 hover:bg-yellow-500 text-darkbrown px-8 py-3 rounded-lg font-bold transition">
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PackagesPage;