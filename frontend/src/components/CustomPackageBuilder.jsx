// CustomPackageBuilder.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';

const CustomPackageBuilder = () => {
  const [formData, setFormData] = useState({
    // Personal Information
    fullName: '',
    email: '',
    phone: '',
    country: '',
    
    // Safari Details
    destination: '',
    duration: '',
    groupSize: '',
    budget: '',
    travelDate: '',
    
    // Preferences
    accommodationPreference: '',
    interests: [],
    dietaryRequirements: '',
    specialRequests: '',
    
    // Additional
    hearAboutUs: '',
    newsletter: false
  });

  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const destinations = [
    'Kenya', 'Tanzania', 'Botswana', 'South Africa', 
    'Rwanda', 'Namibia', 'Uganda', 'Zambia', 
    'Zimbabwe', 'Seychelles', 'Mauritius', 'Multiple Destinations'
  ];

  const accommodationOptions = [
    'Budget Camping', 'Mid-range Lodges', 'Luxury Tented Camps', 
    '5-star Luxury Lodges', 'Private Villas', 'Island Resorts', 'Mixed'
  ];

  const interestOptions = [
    'Wildlife Photography', 'Bird Watching', 'Big 5 Safari', 
    'Great Migration', 'Gorilla Trekking', 'Chimpanzee Tracking',
    'Walking Safaris', 'Hot Air Balloon', 'Boat Cruises',
    'Cultural Experiences', 'Beach Relaxation', 'Adventure Activities'
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleInterestToggle = (interest) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

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

  if (isSubmitted) {
    return (
      <section className="pt-[85px] sm:pt-24 md:pt-28 pb-16 sm:pb-20 md:pb-24 px-4 bg-[#faf8f4] min-h-screen">
        <div className="container mx-auto max-w-3xl">
          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12 text-center">
            <div className="text-6xl mb-4">🎉</div>
            <h2 className="text-3xl sm:text-4xl font-light text-[#1a1a2e] font-serif tracking-wide mb-3">
              Your Safari Dream is Being Crafted!
            </h2>
            <p className="text-[#1a1a2e]/60 font-light leading-relaxed mb-6">
              Thank you for sharing your vision with us. Our safari experts will review your preferences 
              and get back to you within 24 hours with a custom itinerary designed just for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={openWhatsApp}
                className="bg-[#c9a84c] hover:bg-[#b8973a] text-[#1a1a2e] px-8 py-3 rounded-full font-light tracking-wider transition"
              >
                Talk to an Expert Now
              </button>
              <Link
                to="/"
                className="bg-[#1a1a2e] hover:bg-[#2a2a3e] text-white px-8 py-3 rounded-full font-light tracking-wider transition"
              >
                Return Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-[85px] sm:pt-24 md:pt-28 pb-16 sm:pb-20 md:pb-24 px-4 bg-[#faf8f4] min-h-screen">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-10 md:mb-12">
          <span className="text-[#c9a84c] text-xs sm:text-sm font-light tracking-[0.4em] uppercase">
            Design Your Dream Safari
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#1a1a2e] mb-3 font-serif tracking-wide">
            Build Your <span className="text-[#c9a84c]">Custom</span> Package
          </h1>
          <p className="text-[#1a1a2e]/50 max-w-2xl mx-auto font-light leading-relaxed">
            Tell us your vision and we'll craft a safari that's perfectly tailored to you
          </p>
          <div className="w-16 h-0.5 bg-[#c9a84c] mx-auto mt-4"></div>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-between items-center mb-8 max-w-2xl mx-auto">
          {[1, 2, 3, 4].map((s) => (
            <div key={s} className="flex items-center flex-1">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all ${
                step >= s ? 'bg-[#c9a84c] text-[#1a1a2e]' : 'bg-gray-200 text-gray-500'
              }`}>
                {s}
              </div>
              {s < 4 && (
                <div className={`flex-1 h-0.5 mx-2 transition-all ${
                  step > s ? 'bg-[#c9a84c]' : 'bg-gray-200'
                }`} />
              )}
            </div>
          ))}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 md:p-10">
            {/* Step 1: Personal Information */}
            {step === 1 && (
              <div className="space-y-5 animate-fade-in">
                <h3 className="text-xl font-light text-[#1a1a2e] font-serif tracking-wide mb-4">
                  Tell Us About Yourself
                </h3>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-light text-[#1a1a2e]/60 mb-1.5 tracking-wider">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#c9a84c] focus:ring-2 focus:ring-[#c9a84c]/20 transition outline-none text-sm font-light"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-light text-[#1a1a2e]/60 mb-1.5 tracking-wider">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#c9a84c] focus:ring-2 focus:ring-[#c9a84c]/20 transition outline-none text-sm font-light"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-light text-[#1a1a2e]/60 mb-1.5 tracking-wider">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#c9a84c] focus:ring-2 focus:ring-[#c9a84c]/20 transition outline-none text-sm font-light"
                      placeholder="+1234567890"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-light text-[#1a1a2e]/60 mb-1.5 tracking-wider">
                      Country of Residence
                    </label>
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#c9a84c] focus:ring-2 focus:ring-[#c9a84c]/20 transition outline-none text-sm font-light"
                      placeholder="Your country"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Safari Details */}
            {step === 2 && (
              <div className="space-y-5 animate-fade-in">
                <h3 className="text-xl font-light text-[#1a1a2e] font-serif tracking-wide mb-4">
                  Your Safari Vision
                </h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-light text-[#1a1a2e]/60 mb-1.5 tracking-wider">
                      Preferred Destination(s) *
                    </label>
                    <select
                      name="destination"
                      value={formData.destination}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#c9a84c] focus:ring-2 focus:ring-[#c9a84c]/20 transition outline-none text-sm font-light appearance-none bg-white"
                    >
                      <option value="">Select destination</option>
                      {destinations.map(d => (
                        <option key={d} value={d}>{d}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-light text-[#1a1a2e]/60 mb-1.5 tracking-wider">
                      Duration *
                    </label>
                    <select
                      name="duration"
                      value={formData.duration}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#c9a84c] focus:ring-2 focus:ring-[#c9a84c]/20 transition outline-none text-sm font-light appearance-none bg-white"
                    >
                      <option value="">Select duration</option>
                      <option value="3-5 Days">3-5 Days</option>
                      <option value="6-8 Days">6-8 Days</option>
                      <option value="9-12 Days">9-12 Days</option>
                      <option value="13+ Days">13+ Days</option>
                      <option value="Flexible">Flexible</option>
                    </select>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-light text-[#1a1a2e]/60 mb-1.5 tracking-wider">
                      Group Size *
                    </label>
                    <select
                      name="groupSize"
                      value={formData.groupSize}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#c9a84c] focus:ring-2 focus:ring-[#c9a84c]/20 transition outline-none text-sm font-light appearance-none bg-white"
                    >
                      <option value="">Select group size</option>
                      <option value="1">Solo Traveler</option>
                      <option value="2">Couple</option>
                      <option value="3-4">3-4 People</option>
                      <option value="5-8">5-8 People</option>
                      <option value="9-12">9-12 People</option>
                      <option value="12+">12+ People</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-light text-[#1a1a2e]/60 mb-1.5 tracking-wider">
                      Budget Range *
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#c9a84c] focus:ring-2 focus:ring-[#c9a84c]/20 transition outline-none text-sm font-light appearance-none bg-white"
                    >
                      <option value="">Select budget</option>
                      <option value="Under $2,000">Under $2,000</option>
                      <option value="$2,000 - $5,000">$2,000 - $5,000</option>
                      <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                      <option value="$10,000 - $20,000">$10,000 - $20,000</option>
                      <option value="$20,000+">$20,000+</option>
                      <option value="Flexible">Flexible</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-light text-[#1a1a2e]/60 mb-1.5 tracking-wider">
                    Preferred Travel Date
                  </label>
                  <input
                    type="date"
                    name="travelDate"
                    value={formData.travelDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#c9a84c] focus:ring-2 focus:ring-[#c9a84c]/20 transition outline-none text-sm font-light"
                  />
                </div>
              </div>
            )}

            {/* Step 3: Preferences */}
            {step === 3 && (
              <div className="space-y-5 animate-fade-in">
                <h3 className="text-xl font-light text-[#1a1a2e] font-serif tracking-wide mb-4">
                  Your Safari Preferences
                </h3>

                <div>
                  <label className="block text-sm font-light text-[#1a1a2e]/60 mb-1.5 tracking-wider">
                    Accommodation Preference
                  </label>
                  <select
                    name="accommodationPreference"
                    value={formData.accommodationPreference}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#c9a84c] focus:ring-2 focus:ring-[#c9a84c]/20 transition outline-none text-sm font-light appearance-none bg-white"
                  >
                    <option value="">Select accommodation type</option>
                    {accommodationOptions.map(a => (
                      <option key={a} value={a}>{a}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-light text-[#1a1a2e]/60 mb-2 tracking-wider">
                    Your Interests (Select all that apply)
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {interestOptions.map(interest => (
                      <button
                        key={interest}
                        type="button"
                        onClick={() => handleInterestToggle(interest)}
                        className={`px-3 py-2 rounded-lg text-sm font-light transition text-left ${
                          formData.interests.includes(interest)
                            ? 'bg-[#c9a84c] text-[#1a1a2e]'
                            : 'bg-gray-100 text-[#1a1a2e]/60 hover:bg-gray-200'
                        }`}
                      >
                        {interest}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-light text-[#1a1a2e]/60 mb-1.5 tracking-wider">
                    Dietary Requirements
                  </label>
                  <input
                    type="text"
                    name="dietaryRequirements"
                    value={formData.dietaryRequirements}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#c9a84c] focus:ring-2 focus:ring-[#c9a84c]/20 transition outline-none text-sm font-light"
                    placeholder="Any dietary restrictions or preferences"
                  />
                </div>
              </div>
            )}

            {/* Step 4: Additional Information */}
            {step === 4 && (
              <div className="space-y-5 animate-fade-in">
                <h3 className="text-xl font-light text-[#1a1a2e] font-serif tracking-wide mb-4">
                  Final Details
                </h3>

                <div>
                  <label className="block text-sm font-light text-[#1a1a2e]/60 mb-1.5 tracking-wider">
                    Special Requests or Notes
                  </label>
                  <textarea
                    name="specialRequests"
                    value={formData.specialRequests}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#c9a84c] focus:ring-2 focus:ring-[#c9a84c]/20 transition outline-none text-sm font-light resize-y"
                    placeholder="Any special requests, celebrations, or specific requirements..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-light text-[#1a1a2e]/60 mb-1.5 tracking-wider">
                    How did you hear about us?
                  </label>
                  <select
                    name="hearAboutUs"
                    value={formData.hearAboutUs}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#c9a84c] focus:ring-2 focus:ring-[#c9a84c]/20 transition outline-none text-sm font-light appearance-none bg-white"
                  >
                    <option value="">Select option</option>
                    <option value="Google Search">Google Search</option>
                    <option value="Social Media">Social Media</option>
                    <option value="Friends/Family">Friends/Family</option>
                    <option value="Travel Agent">Travel Agent</option>
                    <option value="Blog/Article">Blog/Article</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    name="newsletter"
                    checked={formData.newsletter}
                    onChange={handleChange}
                    className="w-4 h-4 text-[#c9a84c] focus:ring-[#c9a84c] rounded border-gray-300"
                  />
                  <label className="text-sm font-light text-[#1a1a2e]/60 tracking-wider">
                    I'd like to receive safari inspiration and exclusive offers via email
                  </label>
                </div>

                <div className="bg-[#faf8f4] rounded-lg p-4 border border-[#c9a84c]/20">
                  <p className="text-sm font-light text-[#1a1a2e]/60 leading-relaxed">
                    <span className="text-[#c9a84c] font-medium">✨</span> Our safari experts will personally review your preferences 
                    and craft a custom itinerary within 24 hours. All information is kept confidential.
                  </p>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t border-gray-100">
              <button
                type="button"
                onClick={prevStep}
                className={`px-6 py-2.5 rounded-full font-light tracking-wider transition ${
                  step > 1
                    ? 'bg-gray-100 hover:bg-gray-200 text-[#1a1a2e]'
                    : 'opacity-0 cursor-default'
                }`}
                disabled={step === 1}
              >
                Previous
              </button>
              
              {step < 4 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="bg-[#c9a84c] hover:bg-[#b8973a] text-[#1a1a2e] px-8 py-2.5 rounded-full font-light tracking-wider transition"
                >
                  Next Step
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#1a1a2e] hover:bg-[#2a2a3e] text-white px-8 py-2.5 rounded-full font-light tracking-wider transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    'Submit Request'
                  )}
                </button>
              )}
            </div>
          </div>
        </form>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.4s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default CustomPackageBuilder;