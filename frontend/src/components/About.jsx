import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className="py-24 px-4 bg-white min-h-screen">
      <div className="container mx-auto max-w-6xl">
        
        {/* Hero Section */}
        <div className="relative rounded-2xl overflow-hidden mb-16 shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200" 
            alt="Exclusive 360 Journeys Safari"
            className="w-full h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-darkgreen/80 to-transparent flex items-end">
            <div className="p-8 text-white">
              <h1 className="text-4xl md:text-5xl font-bold">About Exclusive 360 Journeys</h1>
              <p className="text-xl text-yellow-400 mt-2">Luxury Safari Experiences Across Africa</p>
            </div>
          </div>
        </div>

        {/* Our Story */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-darkgreen mb-4">Our Story</h2>
          <div className="w-16 h-1 bg-yellow-400 mb-6"></div>
          <div className="space-y-4 text-darkbrown text-lg leading-relaxed max-w-4xl">
            <p>
              <span className="font-bold text-darkgreen">Exclusive 360 Journeys Ltd</span> was born from a deep love for Africa's wild beauty and a passion for creating unforgettable experiences. 
              Founded by a team of seasoned safari experts, we set out to redefine luxury travel across East Africa.
            </p>
            <p>
              What started as a small guiding operation has grown into a premium safari company trusted by travelers from over 50 countries. 
              Our journey has been shaped by countless sunsets over the savanna, the thrill of spotting the Big Five, and the warmth of African hospitality.
            </p>
            <p>
              Today, we continue to curate journeys that blend comfort, authenticity, and adventure — every detail crafted to reflect your unique story.
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-darkgreen/5 p-6 rounded-xl border-l-4 border-yellow-400">
            <h3 className="text-2xl font-bold text-darkgreen mb-2">🎯 Our Mission</h3>
            <p className="text-darkbrown">
              To create transformative safari experiences that connect travelers with Africa's wilderness, 
              cultures, and communities — while preserving its natural heritage for generations to come.
            </p>
          </div>
          <div className="bg-darkgreen/5 p-6 rounded-xl border-l-4 border-yellow-400">
            <h3 className="text-2xl font-bold text-darkgreen mb-2">👁️ Our Vision</h3>
            <p className="text-darkbrown">
              To be Africa's most trusted luxury safari brand, celebrated for excellence, sustainability, 
              and the profound joy we bring to every traveler who journeys with us.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-darkgreen mb-4 text-center">Why Choose Exclusive 360</h2>
          <div className="w-16 h-1 bg-yellow-400 mx-auto mb-8"></div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4">
              <div className="text-4xl mb-2">🦁</div>
              <h4 className="font-bold text-darkgreen">Expert Guides</h4>
              <p className="text-sm text-darkbrown/70">10+ years experience, local knowledge, and a passion for wildlife.</p>
            </div>
            <div className="text-center p-4">
              <div className="text-4xl mb-2">🌍</div>
              <h4 className="font-bold text-darkgreen">Tailored Safaris</h4>
              <p className="text-sm text-darkbrown/70">Custom itineraries designed around your preferences and budget.</p>
            </div>
            <div className="text-center p-4">
              <div className="text-4xl mb-2">🏕️</div>
              <h4 className="font-bold text-darkgreen">Luxury & Comfort</h4>
              <p className="text-sm text-darkbrown/70">Premium lodges, camps, and vehicles for a seamless experience.</p>
            </div>
            <div className="text-center p-4">
              <div className="text-4xl mb-2">🌿</div>
              <h4 className="font-bold text-darkgreen">Sustainable Tourism</h4>
              <p className="text-sm text-darkbrown/70">Committed to conservation and supporting local communities.</p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16 bg-darkgreen/5 p-8 rounded-2xl">
          <h2 className="text-3xl font-bold text-darkgreen mb-4 text-center">Our Core Values</h2>
          <div className="w-16 h-1 bg-yellow-400 mx-auto mb-8"></div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-xl shadow-sm text-center">
              <span className="text-2xl">🤝</span>
              <h5 className="font-bold text-darkgreen">Integrity</h5>
              <p className="text-sm text-darkbrown/60">Honest, transparent, and ethical in everything we do.</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm text-center">
              <span className="text-2xl">⭐</span>
              <h5 className="font-bold text-darkgreen">Excellence</h5>
              <p className="text-sm text-darkbrown/60">We never compromise on quality or attention to detail.</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm text-center">
              <span className="text-2xl">🌱</span>
              <h5 className="font-bold text-darkgreen">Sustainability</h5>
              <p className="text-sm text-darkbrown/60">Protecting Africa's wildlife and ecosystems for the future.</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm text-center">
              <span className="text-2xl">❤️</span>
              <h5 className="font-bold text-darkgreen">Customer Focus</h5>
              <p className="text-sm text-darkbrown/60">Your happiness is our greatest reward.</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm text-center">
              <span className="text-2xl">💡</span>
              <h5 className="font-bold text-darkgreen">Innovation</h5>
              <p className="text-sm text-darkbrown/60">Constantly evolving to offer fresh, exciting experiences.</p>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 text-center">
          <div className="bg-darkgreen text-white p-6 rounded-xl">
            <div className="text-4xl font-bold">10+</div>
            <div className="text-sm text-yellow-400">Years of Experience</div>
          </div>
          <div className="bg-darkgreen text-white p-6 rounded-xl">
            <div className="text-4xl font-bold">500+</div>
            <div className="text-sm text-yellow-400">Successful Safaris</div>
          </div>
          <div className="bg-darkgreen text-white p-6 rounded-xl">
            <div className="text-4xl font-bold">50+</div>
            <div className="text-sm text-yellow-400">Countries Served</div>
          </div>
          <div className="bg-darkgreen text-white p-6 rounded-xl">
            <div className="text-4xl font-bold">100%</div>
            <div className="text-sm text-yellow-400">Client Satisfaction</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-darkgreen to-darkbrown p-10 rounded-2xl shadow-xl">
          <h3 className="text-3xl font-bold text-white mb-3">Ready for Your Safari Adventure?</h3>
          <p className="text-white/70 mb-6">Let's craft the journey of a lifetime — tailored just for you.</p>
          <Link 
            to="/contact" 
            className="inline-block bg-yellow-400 hover:bg-yellow-500 text-darkbrown px-8 py-3 rounded-lg font-bold transition text-lg"
          >
            Book Your Adventure
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;