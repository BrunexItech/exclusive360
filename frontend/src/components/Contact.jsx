const Contact = () => {
  return (
    <section className="py-20 px-4 bg-gray-50 min-h-screen">
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-5xl font-bold text-darkgreen mb-6 text-center">Contact Us</h1>
        <div className="w-24 h-1 bg-yellow-400 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-darkgreen mb-2">📍 Address</h3>
              <p className="text-darkbrown">Jamhuri Heights, Jonathan Ngeno Rd, Langata</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-darkgreen mb-2">📞 Phone</h3>
              <p className="text-darkbrown">0729 140 646</p>
              <p className="text-darkbrown">0729 874 888</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-darkgreen mb-2">📧 Email</h3>
              <p className="text-darkbrown">info@exclusive360.com</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-darkgreen mb-2">🕐 Working Hours</h3>
              <p className="text-darkbrown">Mon - Fri: 8:00 AM - 6:00 PM</p>
              <p className="text-darkbrown">Sat: 9:00 AM - 4:00 PM</p>
              <p className="text-darkbrown">Sun: Closed</p>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-4 bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-darkgreen mb-4">Send a Message</h3>
            <input 
              type="text" 
              placeholder="Your Name" 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-darkgreen"
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-darkgreen"
            />
            <input 
              type="text" 
              placeholder="Subject" 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-darkgreen"
            />
            <textarea 
              rows="4" 
              placeholder="Your Message..." 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-darkgreen"
            ></textarea>
            <button 
              type="submit" 
              className="w-full bg-darkgreen hover:bg-darkbrown text-white py-3 rounded-lg font-semibold transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-darkgreen text-center mb-4">Find Us Here</h3>
          <div className="w-16 h-1 bg-yellow-400 mx-auto mb-6"></div>
          <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-yellow-400/50 hover:border-yellow-400 transition duration-300">
            <iframe
              width="100%"
              height="400"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              src="https://www.openstreetmap.org/export/embed.html?bbox=36.78%2C-1.35%2C36.82%2C-1.31&layer=mapnik&marker=-1.33%2C36.80"
              title="Exclusive 360 Location"
              className="hover:scale-105 transition duration-500"
            />
          </div>
          <p className="text-center text-darkbrown/60 text-sm mt-3">
            📍 Jamhuri Heights, Jonathan Ngeno Rd, Langata
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;