import { useState, useRef, useEffect } from 'react';

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const formRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  const openWhatsApp = () => {
    const trigger = document.querySelector('.whatsapp-trigger');
    if (trigger) trigger.click();
  };

  return (
    <section className="pt-[85px] sm:pt-24 md:pt-28 pb-12 sm:pb-16 md:pb-20 lg:pb-24 px-4 sm:px-6 bg-[#FAF5EB] min-h-screen">
      <div className="container mx-auto max-w-6xl">
        {/* Header with Script Font */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <span className="text-[#800020] text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase">
            Get In Touch
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#3B1F0B] mb-4 font-serif">
            <span className="font-script text-[#800020]">Connect</span> With Us
          </h1>
          <div className="w-20 sm:w-24 h-0.5 bg-[#d1973e] mx-auto"></div>
          <p className="text-[#3B1F0B]/60 text-sm sm:text-base mt-4 max-w-2xl mx-auto font-light">
            Have questions about your safari adventure? We're here to help you plan the journey of a lifetime.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-10">
          {/* Contact Info - Left Column */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-5">
            {/* Address Card */}
            <div className="bg-white/80 backdrop-blur-sm p-5 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 border border-[#3B1F0B]/5 hover:border-[#800020]/10 group">
              <h3 className="text-lg sm:text-xl font-light text-[#3B1F0B] mb-3 flex items-center gap-2 font-serif">
                <span className="text-2xl group-hover:scale-110 transition duration-300">📍</span> 
                <span className="font-medium">Address</span>
              </h3>
              <p className="text-[#3B1F0B]/70 text-sm sm:text-base leading-relaxed font-light">
                Jamhuri Heights, <br />
                Jonathan Ngeno Rd, Langata
              </p>
            </div>

            {/* Phone Card */}
            <div className="bg-white/80 backdrop-blur-sm p-5 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 border border-[#3B1F0B]/5 hover:border-[#800020]/10 group">
              <h3 className="text-lg sm:text-xl font-light text-[#3B1F0B] mb-3 flex items-center gap-2 font-serif">
                <span className="text-2xl group-hover:scale-110 transition duration-300">📞</span> 
                <span className="font-medium">Phone</span>
              </h3>
              <div className="space-y-1.5">
                <p className="text-[#3B1F0B]/70 text-sm sm:text-base hover:text-[#800020] transition font-light">
                  <a href="tel:+254729140646" className="flex items-center gap-2">
                    <span className="text-xs bg-[#800020]/10 text-[#800020] px-2 py-0.5 rounded-full">Mobile</span>
                    0729 140 646
                  </a>
                </p>
                <p className="text-[#3B1F0B]/70 text-sm sm:text-base hover:text-[#800020] transition font-light">
                  <a href="tel:+254729874888" className="flex items-center gap-2">
                    <span className="text-xs bg-[#800020]/10 text-[#800020] px-2 py-0.5 rounded-full">Mobile</span>
                    0729 874 888
                  </a>
                </p>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white/80 backdrop-blur-sm p-5 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 border border-[#3B1F0B]/5 hover:border-[#800020]/10 group">
              <h3 className="text-lg sm:text-xl font-light text-[#3B1F0B] mb-3 flex items-center gap-2 font-serif">
                <span className="text-2xl group-hover:scale-110 transition duration-300">📧</span> 
                <span className="font-medium">Email</span>
              </h3>
              <a 
                href="mailto:info@exclusive360.com" 
                className="text-[#3B1F0B]/70 text-sm sm:text-base hover:text-[#800020] transition break-all font-light"
              >
                info@exclusive360.com
              </a>
            </div>

            {/* Hours Card */}
            <div className="bg-white/80 backdrop-blur-sm p-5 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 border border-[#3B1F0B]/5 hover:border-[#800020]/10 group">
              <h3 className="text-lg sm:text-xl font-light text-[#3B1F0B] mb-3 flex items-center gap-2 font-serif">
                <span className="text-2xl group-hover:scale-110 transition duration-300">🕐</span> 
                <span className="font-medium">Working Hours</span>
              </h3>
              <div className="space-y-1.5 text-[#3B1F0B]/70 text-sm sm:text-base font-light">
                <div className="flex justify-between items-center border-b border-[#3B1F0B]/5 pb-1.5">
                  <span>Mon - Fri</span>
                  <span className="font-medium text-[#800020]">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center border-b border-[#3B1F0B]/5 pb-1.5">
                  <span>Saturday</span>
                  <span className="font-medium text-[#800020]">9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Sunday</span>
                  <span className="font-medium text-[#800020]/60">Closed</span>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA - Inspired by Asilia */}
            <div className="bg-gradient-to-r from-[#800020] to-[#3B1F0B] p-4 sm:p-5 rounded-xl shadow-lg text-white text-center relative overflow-hidden">
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
              <div className="relative z-10">
                <p className="text-sm sm:text-base font-light font-serif">
                  <span className="font-script text-[#d1973e]">Chat</span> with us instantly
                </p>
                <p className="text-white/60 text-xs sm:text-sm mt-1 font-light">Prefer WhatsApp?</p>
                <button 
                  onClick={openWhatsApp}
                  className="mt-3 bg-[#d1973e] hover:bg-[#b8862e] text-[#3B1F0B] px-4 sm:px-6 py-2 rounded-lg font-semibold text-sm sm:text-base transition transform hover:scale-105 shadow-lg"
                >
                  💬 Chat on WhatsApp
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form - Right Column */}
          <div className="lg:col-span-3">
            <div className="bg-white/80 backdrop-blur-sm p-5 sm:p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 border border-[#3B1F0B]/5">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">✉️</span>
                <h3 className="text-xl sm:text-2xl font-light text-[#3B1F0B] font-serif">
                  Send a <span className="font-script text-[#800020]">Message</span>
                </h3>
              </div>
              <p className="text-[#3B1F0B]/50 text-sm mb-6 font-light">
                We'll get back to you within 24 hours
              </p>
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-[#3B1F0B] text-sm font-medium mb-1.5">
                    Your Name <span className="text-[#800020]">*</span>
                  </label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name" 
                    className="w-full px-4 py-3 bg-white border border-[#3B1F0B]/10 rounded-lg focus:outline-none focus:border-[#800020] focus:ring-2 focus:ring-[#800020]/10 transition font-light"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-[#3B1F0B] text-sm font-medium mb-1.5">
                    Your Email <span className="text-[#800020]">*</span>
                  </label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email address" 
                    className="w-full px-4 py-3 bg-white border border-[#3B1F0B]/10 rounded-lg focus:outline-none focus:border-[#800020] focus:ring-2 focus:ring-[#800020]/10 transition font-light"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-[#3B1F0B] text-sm font-medium mb-1.5">
                    Phone Number
                  </label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number" 
                    className="w-full px-4 py-3 bg-white border border-[#3B1F0B]/10 rounded-lg focus:outline-none focus:border-[#800020] focus:ring-2 focus:ring-[#800020]/10 transition font-light"
                  />
                </div>
                
                <div>
                  <label className="block text-[#3B1F0B] text-sm font-medium mb-1.5">
                    Subject <span className="text-[#800020]">*</span>
                  </label>
                  <select 
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white border border-[#3B1F0B]/10 rounded-lg focus:outline-none focus:border-[#800020] focus:ring-2 focus:ring-[#800020]/10 transition appearance-none font-light"
                    required
                  >
                    <option value="">Select a subject...</option>
                    <option value="safari-inquiry">Safari Inquiry</option>
                    <option value="booking">Booking Question</option>
                    <option value="custom-trip">Custom Trip Request</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-[#3B1F0B] text-sm font-medium mb-1.5">
                    Your Message <span className="text-[#800020]">*</span>
                  </label>
                  <textarea 
                    rows="4" 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your dream safari..." 
                    className="w-full px-4 py-3 bg-white border border-[#3B1F0B]/10 rounded-lg focus:outline-none focus:border-[#800020] focus:ring-2 focus:ring-[#800020]/10 transition resize-y min-h-[100px] font-light"
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-[#800020] hover:bg-[#3B1F0B] text-white py-3.5 rounded-lg font-semibold transition transform hover:scale-[1.02] active:scale-95 shadow-md hover:shadow-lg font-serif"
                >
                  {formSubmitted ? '✓ Message Sent!' : 'Send Message ✧'}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12 sm:mt-16">
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="text-2xl sm:text-3xl font-light text-[#3B1F0B] font-serif">
              Find <span className="font-script text-[#800020]">Us</span> Here
            </h3>
            <div className="w-16 h-0.5 bg-[#d1973e] mx-auto mt-3"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Map */}
            <div className="md:col-span-2 rounded-2xl overflow-hidden shadow-2xl border-4 border-[#d1973e]/30 hover:border-[#d1973e] transition duration-300">
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

            {/* Map Info - Inspired by Asilia */}
            <div className="bg-white/80 backdrop-blur-sm p-5 sm:p-6 rounded-2xl shadow-lg flex flex-col justify-center border border-[#3B1F0B]/5 hover:border-[#800020]/10 transition duration-300">
              <div className="space-y-3">
                <div className="flex items-start gap-3 group">
                  <span className="text-2xl mt-0.5 group-hover:scale-110 transition duration-300">📍</span>
                  <div>
                    <h4 className="font-medium text-[#3B1F0B] text-sm font-serif">Address</h4>
                    <p className="text-[#3B1F0B]/60 text-sm font-light">Jamhuri Heights, Jonathan Ngeno Rd, Langata</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 group">
                  <span className="text-2xl mt-0.5 group-hover:scale-110 transition duration-300">🚗</span>
                  <div>
                    <h4 className="font-medium text-[#3B1F0B] text-sm font-serif">Getting Here</h4>
                    <p className="text-[#3B1F0B]/60 text-sm font-light">Located near Langata Shopping Centre, easy access from the highway</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 group">
                  <span className="text-2xl mt-0.5 group-hover:scale-110 transition duration-300">🅿️</span>
                  <div>
                    <h4 className="font-medium text-[#3B1F0B] text-sm font-serif">Parking</h4>
                    <p className="text-[#3B1F0B]/60 text-sm font-light">Ample free parking available on-site</p>
                  </div>
                </div>
                <button 
                  onClick={() => window.open('https://maps.google.com/maps?q=Jamhuri+Heights+Jonathan+Ngeno+Rd+Langata', '_blank')}
                  className="w-full mt-2 bg-[#800020]/10 hover:bg-[#800020] text-[#800020] hover:text-white py-2.5 rounded-lg font-semibold text-sm transition font-serif"
                >
                  Open in Google Maps ✧
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