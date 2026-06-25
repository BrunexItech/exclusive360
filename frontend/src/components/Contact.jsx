const Contact = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 bg-gray-50 min-h-screen">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-darkgreen mb-4">
            Contact Us
          </h1>
          <div className="w-20 sm:w-24 h-1 bg-yellow-400 mx-auto"></div>
          <p className="text-darkbrown/70 text-sm sm:text-base mt-4 max-w-2xl mx-auto">
            Have questions about your safari adventure? We're here to help you plan the journey of a lifetime.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-10">
          {/* Contact Info - Left Column */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-5">
            <div className="bg-white p-5 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
              <h3 className="text-lg sm:text-xl font-bold text-darkgreen mb-3 flex items-center gap-2">
                <span className="text-2xl">📍</span> Address
              </h3>
              <p className="text-darkbrown text-sm sm:text-base leading-relaxed">
                Jamhuri Heights, <br />
                Jonathan Ngeno Rd, Langata
              </p>
            </div>

            <div className="bg-white p-5 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
              <h3 className="text-lg sm:text-xl font-bold text-darkgreen mb-3 flex items-center gap-2">
                <span className="text-2xl">📞</span> Phone
              </h3>
              <div className="space-y-1.5">
                <p className="text-darkbrown text-sm sm:text-base hover:text-darkgreen transition">
                  <a href="tel:+254729140646" className="flex items-center gap-2">
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Mobile</span>
                    0729 140 646
                  </a>
                </p>
                <p className="text-darkbrown text-sm sm:text-base hover:text-darkgreen transition">
                  <a href="tel:+254729874888" className="flex items-center gap-2">
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Mobile</span>
                    0729 874 888
                  </a>
                </p>
              </div>
            </div>

            <div className="bg-white p-5 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
              <h3 className="text-lg sm:text-xl font-bold text-darkgreen mb-3 flex items-center gap-2">
                <span className="text-2xl">📧</span> Email
              </h3>
              <a 
                href="mailto:info@exclusive360.com" 
                className="text-darkbrown text-sm sm:text-base hover:text-darkgreen transition break-all"
              >
                info@exclusive360.com
              </a>
            </div>

            <div className="bg-white p-5 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
              <h3 className="text-lg sm:text-xl font-bold text-darkgreen mb-3 flex items-center gap-2">
                <span className="text-2xl">🕐</span> Working Hours
              </h3>
              <div className="space-y-1.5 text-darkbrown text-sm sm:text-base">
                <div className="flex justify-between items-center border-b border-gray-50 pb-1.5">
                  <span>Mon - Fri</span>
                  <span className="font-medium text-darkgreen">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-50 pb-1.5">
                  <span>Saturday</span>
                  <span className="font-medium text-darkgreen">9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Sunday</span>
                  <span className="font-medium text-red-600">Closed</span>
                </div>
              </div>
            </div>

            {/* Quick Contact CTA */}
            <div className="bg-gradient-to-r from-darkgreen to-darkbrown p-4 sm:p-5 rounded-xl shadow-lg text-white text-center">
              <p className="text-sm sm:text-base font-semibold">📱 Prefer WhatsApp?</p>
              <p className="text-white/70 text-xs sm:text-sm mt-1">Chat with us instantly</p>
              <button 
                onClick={() => {
                  const trigger = document.querySelector('.whatsapp-trigger');
                  if (trigger) trigger.click();
                }}
                className="mt-3 bg-yellow-400 hover:bg-yellow-500 text-darkbrown px-4 sm:px-6 py-2 rounded-lg font-bold text-sm sm:text-base transition"
              >
                Chat on WhatsApp
              </button>
            </div>
          </div>

          {/* Contact Form - Right Column */}
          <div className="lg:col-span-3">
            <form className="bg-white p-5 sm:p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
              <h3 className="text-xl sm:text-2xl font-bold text-darkgreen mb-4 flex items-center gap-2">
                <span>✉️</span> Send a Message
              </h3>
              <p className="text-darkbrown/60 text-sm mb-6">
                We'll get back to you within 24 hours
              </p>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-darkgreen text-sm font-medium mb-1.5">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    placeholder="Enter your full name" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-darkgreen focus:ring-2 focus:ring-darkgreen/20 transition"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-darkgreen text-sm font-medium mb-1.5">
                    Your Email <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="email" 
                    placeholder="Enter your email address" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-darkgreen focus:ring-2 focus:ring-darkgreen/20 transition"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-darkgreen text-sm font-medium mb-1.5">
                    Phone Number
                  </label>
                  <input 
                    type="tel" 
                    placeholder="Enter your phone number" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-darkgreen focus:ring-2 focus:ring-darkgreen/20 transition"
                  />
                </div>
                
                <div>
                  <label className="block text-darkgreen text-sm font-medium mb-1.5">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-darkgreen focus:ring-2 focus:ring-darkgreen/20 transition appearance-none bg-white">
                    <option value="">Select a subject...</option>
                    <option value="safari-inquiry">Safari Inquiry</option>
                    <option value="booking">Booking Question</option>
                    <option value="custom-trip">Custom Trip Request</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-darkgreen text-sm font-medium mb-1.5">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea 
                    rows="4" 
                    placeholder="Tell us about your dream safari..." 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-darkgreen focus:ring-2 focus:ring-darkgreen/20 transition resize-y min-h-[100px]"
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-darkgreen hover:bg-darkbrown text-white py-3.5 rounded-lg font-semibold transition transform hover:scale-[1.02] active:scale-95 shadow-md hover:shadow-lg"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12 sm:mt-16">
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-darkgreen">Find Us Here</h3>
            <div className="w-16 h-1 bg-yellow-400 mx-auto mt-3"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Map */}
            <div className="md:col-span-2 rounded-2xl overflow-hidden shadow-2xl border-4 border-yellow-400/50 hover:border-yellow-400 transition duration-300">
              <iframe
                width="100%"
                height="350"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                src="https://www.openstreetmap.org/export/embed.html?bbox=36.78%2C-1.35%2C36.82%2C-1.31&layer=mapnik&marker=-1.33%2C36.80"
                title="Exclusive 360 Location"
                className="hover:scale-105 transition duration-500"
              />
            </div>

            {/* Map Info */}
            <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-lg flex flex-col justify-center">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-2xl mt-0.5">📍</span>
                  <div>
                    <h4 className="font-bold text-darkgreen text-sm">Address</h4>
                    <p className="text-darkbrown text-sm">Jamhuri Heights, Jonathan Ngeno Rd, Langata</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl mt-0.5">🚗</span>
                  <div>
                    <h4 className="font-bold text-darkgreen text-sm">Getting Here</h4>
                    <p className="text-darkbrown text-sm">Located near Langata Shopping Centre, easy access from the highway</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl mt-0.5">🅿️</span>
                  <div>
                    <h4 className="font-bold text-darkgreen text-sm">Parking</h4>
                    <p className="text-darkbrown text-sm">Ample free parking available on-site</p>
                  </div>
                </div>
                <button 
                  onClick={() => window.open('https://maps.google.com/maps?q=Jamhuri+Heights+Jonathan+Ngeno+Rd+Langata', '_blank')}
                  className="w-full mt-2 bg-darkgreen/10 hover:bg-darkgreen text-darkgreen hover:text-white py-2.5 rounded-lg font-semibold text-sm transition"
                >
                  Open in Google Maps
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;