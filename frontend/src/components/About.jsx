import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  const [isBookOpen, setIsBookOpen] = useState(false);
  const [showTestimonials, setShowTestimonials] = useState(false);
  const [showSignature1, setShowSignature1] = useState(false);
  const [showSignature2, setShowSignature2] = useState(false);
  const [hoveredPoint, setHoveredPoint] = useState(null);
  const [activeTimeline, setActiveTimeline] = useState(null);
  const testimonialRef = useRef(null);
  const signature1Ref = useRef(null);
  const signature2Ref = useRef(null);

  // Director Testimonials
  const directorTestimonials = [
    {
      name: 'James Mwangi',
      title: 'Co-Founder & Safari Director',
      message: `For me, Africa is not just a place—it's a feeling. Every sunrise over the savanna, every elephant's gentle stride, every fire-lit evening under a blanket of stars—these moments are the heartbeat of what we do.

I grew up in the shadow of Mount Kilimanjaro, where the rhythm of the wild was my lullaby. My father was a guide. He taught me that the best safaris aren't about checking off the Big Five—they're about connection. Connection to the land, to the animals, to the people who call this home.

At Exclusive 360, we don't just take you on safari. We welcome you into our family. We share our stories, our laughter, our deep reverence for this incredible continent. Every itinerary is crafted with the same care and passion that I felt on my very first game drive—wide-eyed, curious, and utterly in love with Africa.`,
      signature: 'James Mwangi'
    },
    {
      name: 'Grace Akinyi',
      title: 'Co-Founder & Experience Curator',
      message: `They say the best journeys answer questions you didn't even know you had. I believe that with my whole heart. Every time I step into the bush, I discover something new—not just about the wildlife, but about myself.

I was born in the coastal town of Malindi, where the Indian Ocean meets the African soul. My grandmother was a storyteller. She taught me that every creature, every tree, every grain of sand has a story to tell. And that's what I bring to Exclusive 360—the art of listening to Africa's stories and weaving them into unforgettable experiences.

For me, luxury isn't about thread counts or champagne. It's about the feeling of being truly seen. It's about waking up to the sound of lions roaring in the distance. It's about sharing a meal with a Maasai elder and feeling the weight of centuries in their words. This is the Africa I love. This is the Africa I want to share with you.`,
      signature: 'Grace Akinyi'
    }
  ];

  // Difference Points
  const differencePoints = [
    'Journeys informed by generations of African heritage and lived experience.',
    'Sharing our home, not selling a destination.',
    'Long-standing relationships that allow rare access to outsiders.',
    'Authentic, private experiences guided by deep local knowledge.',
    'Continuity and discretion with the same trusted team throughout.',
    'Every journey individually designed, shaped entirely around your needs.',
    'Pioneering commitment to empowering women in the safari industry.'
  ];

  // Timeline Events
  const timelineEvents = [
    {
      year: '2015',
      title: 'A Dream is Born',
      description: 'A passion for the wild and an unwavering commitment to creating unforgettable journeys began beneath the African sky.'
    },
    {
      year: '2016',
      title: 'First Safari',
      description: 'Exclusive 360 Journeys launched its first safari operation in the heart of the Maasai Mara.'
    },
    {
      year: '2018',
      title: 'Expansion',
      description: 'Expanded across Kenya, Tanzania, and Southern Africa, curating authentic experiences with luxury and care.'
    },
    {
      year: '2020',
      title: 'Resilience & Growth',
      description: 'Navigated challenges while supporting partners, conservation efforts, and local communities.'
    },
    {
      year: '2022',
      title: 'A New Chapter',
      description: 'Crafted bespoke journeys blending luxury, sustainability, and genuine human connection.'
    },
    {
      year: '2024',
      title: 'The Legacy Continues',
      description: 'Today, we craft love letters to Africa — curated experiences that honor the land, wildlife, and people.'
    }
  ];

  // Animate book opening on load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsBookOpen(true);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  // Intersection Observer for testimonials
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShowTestimonials(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (testimonialRef.current) {
      observer.observe(testimonialRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Signature observers
  useEffect(() => {
    if (showTestimonials) {
      setTimeout(() => {
        const observer1 = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setShowSignature1(true);
                observer1.disconnect();
              }
            });
          },
          { threshold: 0.3 }
        );
        if (signature1Ref.current) {
          observer1.observe(signature1Ref.current);
        }

        const observer2 = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setShowSignature2(true);
                observer2.disconnect();
              }
            });
          },
          { threshold: 0.3 }
        );
        if (signature2Ref.current) {
          observer2.observe(signature2Ref.current);
        }

        return () => {
          observer1.disconnect();
          observer2.disconnect();
        };
      }, 500);
    }
  }, [showTestimonials]);

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
    <section className="min-h-screen bg-white overflow-x-hidden">
      
      {/* Hero Section - Almost Zero Opacity Overlay */}
      <div className="relative min-h-[550px] sm:min-h-[650px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1614531341773-3bff8b7cb3fc?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="African Safari Sunset"
            className="w-full h-full object-cover brightness-105"
            loading="eager"
          />
          {/* Almost zero opacity overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#2C1810]/5 via-[#2C1810]/3 to-[#2C1810]/10"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#8B0000]/5 via-transparent to-[#556B2F]/3"></div>
        </div>

        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: Math.random() * 6 + 2 + 'px',
                height: Math.random() * 6 + 2 + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                background: ['#D4C5A9', '#8B7355', '#8B0000', '#556B2F'][Math.floor(Math.random() * 4)],
                opacity: 0.08 + Math.random() * 0.15,
                animation: `gentleFloat ${8 + Math.random() * 10}s ease-in-out infinite ${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>

        <div className={`relative z-10 w-full max-w-6xl mx-auto px-4 transition-all duration-1000 ${isBookOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="relative bg-[#F5F0E8]/95 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden border border-[#D4C5A9]/30">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#8B0000] via-[#8B7355] to-[#2C1810]"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#D4C5A9]/5 via-transparent to-[#556B2F]/5"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 sm:p-10 md:p-14">
              <div className="space-y-5">
                <div className="flex items-center gap-3 text-[#8B0000]">
                  <span className="text-[11px] tracking-[0.35em] uppercase font-semibold bg-[#8B0000]/10 px-4 py-1.5 rounded-full">Welcome</span>
                  <div className="flex-1 h-px bg-gradient-to-r from-[#8B7355]/40 to-transparent"></div>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light font-serif text-[#2C1810] leading-[1.1]">
                  The Story of
                  <br />
                  <span className="text-[#8B0000] font-serif relative inline-block">
                    Exclusive 360
                    <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-[#8B7355] to-transparent"></span>
                  </span>
                </h1>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-0.5 bg-[#8B7355]"></div>
                  <span className="text-[#2C1810]/40 text-xs tracking-widest font-light">EST. 2015</span>
                </div>
                <p className="text-[#2C1810]/60 text-base sm:text-lg italic font-serif leading-relaxed max-w-md">
                  "Every journey begins with a story. Ours started under the African sun."
                </p>
                <div className="flex gap-3 mt-2">
                  {[...Array(3)].map((_, i) => (
                    <div 
                      key={i}
                      className="w-2 h-2 rounded-full bg-[#8B7355] animate-pulse"
                      style={{ animationDelay: `${i * 150}ms` }}
                    />
                  ))}
                </div>
              </div>

              <div className="relative flex items-center justify-center">
                <div className="w-full rounded-xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80" 
                    alt="African Safari"
                    className="w-full h-56 sm:h-64 md:h-72 object-cover hover:scale-105 transition duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810]/20 to-transparent"></div>
                </div>
                <div className="absolute -bottom-3 -right-3 w-20 h-20 border border-[#8B7355]/20 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The Difference */}
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="text-center mb-16">
          <span className="text-[#8B0000] text-xs sm:text-sm font-semibold tracking-[0.35em] uppercase bg-[#8B0000]/10 px-6 py-2 rounded-full inline-block">
            The Exclusive 360 Difference
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-[#2C1810] mt-6 font-serif tracking-wide">
            What Sets <span className="text-[#8B0000]">Us Apart</span>
          </h2>
          <div className="flex justify-center mt-6">
            <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-[#8B7355] to-transparent"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {differencePoints.map((point, index) => (
            <div 
              key={index} 
              className="group relative bg-[#F5F0E8] p-6 rounded-2xl border border-[#D4C5A9]/30 hover:border-[#8B7355]/50 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
              onMouseEnter={() => setHoveredPoint(index)}
              onMouseLeave={() => setHoveredPoint(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#D4C5A9]/20 to-[#556B2F]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#8B7355]/10 flex items-center justify-center group-hover:bg-[#8B7355]/20 transition-all duration-300">
                  <span className="text-[#8B7355] text-lg font-serif">✦</span>
                </div>
                <p className="text-[#2C1810] text-sm leading-relaxed font-light group-hover:text-[#2C1810]/90 transition-colors">
                  {point}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="bg-[#FAF7F2] py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 30% 50%, #D4C5A9 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />
        </div>
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <span className="text-[#8B0000] text-xs sm:text-sm font-semibold tracking-[0.35em] uppercase bg-white/80 backdrop-blur-sm px-6 py-2 rounded-full inline-block">
              Our Journey
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-[#2C1810] mt-6 font-serif tracking-wide">
              The <span className="text-[#8B0000]">Exclusive 360</span> Timeline
            </h2>
            <div className="flex justify-center mt-6">
              <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-[#8B7355] to-transparent"></div>
            </div>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-[#D4C5A9] via-[#8B7355] to-[#D4C5A9]"></div>

            {timelineEvents.map((event, index) => (
              <div 
                key={index} 
                className={`relative flex items-start mb-12 last:mb-0 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                } group`}
                onMouseEnter={() => setActiveTimeline(index)}
                onMouseLeave={() => setActiveTimeline(null)}
              >
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div 
                    className={`w-4 h-4 rounded-full border-4 border-white shadow-lg transition-all duration-500 ${
                      activeTimeline === index ? 'scale-150' : 'scale-100'
                    }`}
                    style={{ 
                      background: activeTimeline === index ? '#8B0000' : '#8B7355',
                      boxShadow: activeTimeline === index ? '0 0 30px rgba(139, 0, 0, 0.3)' : '0 0 20px rgba(139, 115, 85, 0.2)'
                    }}
                  />
                </div>

                <div className={`w-[calc(50%-30px)] ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div 
                    className={`bg-white p-6 rounded-xl shadow-sm transition-all duration-500 ${
                      activeTimeline === index ? 'shadow-xl scale-[1.02]' : 'hover:shadow-md'
                    }`}
                    style={{
                      borderLeft: index % 2 === 0 ? '3px solid #8B7355' : 'none',
                      borderRight: index % 2 !== 0 ? '3px solid #8B7355' : 'none'
                    }}
                  >
                    <span className="text-[#8B0000] text-xl font-light font-serif block mb-1">{event.year}</span>
                    <h3 className="text-lg font-light text-[#2C1810] font-serif tracking-wide">{event.title}</h3>
                    <div className={`w-10 h-0.5 bg-[#8B7355] mt-1.5 ${index % 2 === 0 ? 'ml-auto' : 'ml-0'}`}></div>
                    <p className="text-[#2C1810]/60 text-sm leading-relaxed font-light mt-2">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Director Testimonials - Side by Side with Handwritten Fonts */}
      <div ref={testimonialRef} className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24 bg-white">
        <div className="text-center mb-16">
          <span className="text-[#8B0000] text-xs sm:text-sm font-semibold tracking-[0.35em] uppercase bg-[#8B0000]/10 px-6 py-2 rounded-full inline-block">
            From Our Founders
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-[#2C1810] mt-6 font-serif tracking-wide">
            Words from <span className="text-[#8B0000]">The Heart</span>
          </h2>
          <div className="flex justify-center mt-6">
            <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-[#8B7355] to-transparent"></div>
          </div>
          <p className="text-[#2C1810]/50 mt-5 text-sm font-light max-w-2xl mx-auto">
            Two stories. One passion. A lifetime of dedication to Africa.
          </p>
        </div>

        <div className="relative">
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#D4C5A9]/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#556B2F]/10 rounded-full blur-3xl"></div>

          <div className="grid md:grid-cols-2 gap-8">
            {directorTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`transition-all duration-1000 transform ${
                  showTestimonials ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 300}ms` }}
              >
                <div className="h-full bg-[#F5F0E8] rounded-3xl shadow-xl border border-[#D4C5A9]/30 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                  <div className="p-6 sm:p-8 md:p-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#8B0000] to-[#8B7355] flex items-center justify-center text-white text-2xl font-light font-serif shadow-lg flex-shrink-0">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-light text-[#2C1810] font-serif tracking-wide">
                          {testimonial.name}
                        </h3>
                        <p className="text-[#2C1810]/50 text-xs sm:text-sm font-light">{testimonial.title}</p>
                      </div>
                    </div>

                    {/* Directors' Letters - Handwritten with Caveat font */}
                    <div className="relative">
                      <div className="text-[#8B7355] text-4xl opacity-10 absolute -top-2 -left-1 font-serif">"</div>
                      <div className="space-y-3 text-[#2C1810] leading-relaxed pt-3">
                        {testimonial.message.split('\n\n').map((paragraph, idx) => (
                          <p key={idx} className="text-base sm:text-lg md:text-xl font-['Caveat'] font-medium text-[#2C1810] pl-5">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>

                    {/* Signatures - Different styles for each director */}
                    <div ref={index === 0 ? signature1Ref : signature2Ref} className="mt-6 pt-5 border-t border-[#D4C5A9]/40">
                      <div className="flex items-end justify-between flex-wrap gap-3">
                        <div>
                          {(index === 0 ? showSignature1 : showSignature2) && (
                            <div className="animate-fade-in">
                              {index === 0 ? (
                                // James Mwangi - Dancing Script (more formal cursive)
                                <p className="font-['Dancing_Script'] text-2xl sm:text-3xl text-[#8B0000] tracking-wide">
                                  {testimonial.signature}
                                </p>
                              ) : (
                                // Grace Akinyi - Satisfy (more elegant vintage script)
                                <p className="font-['Satisfy'] text-2xl sm:text-3xl text-[#8B0000] tracking-wide">
                                  {testimonial.signature}
                                </p>
                              )}
                            </div>
                          )}
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-[#8B7355]/30 text-[10px]">✦</span>
                          <span className="text-[#2C1810]/20 text-[8px] font-light tracking-widest">Exclusive 360</span>
                          <span className="text-[#8B7355]/30 text-[10px]">✦</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission & Vision - Stacked Vertically */}
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pb-20 bg-white">
        <div className="space-y-8">
          <div className="group bg-[#F5F0E8] p-8 sm:p-10 rounded-3xl border-l-4 border-[#8B7355] shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-[#8B7355]/10 flex items-center justify-center group-hover:bg-[#8B7355]/20 transition-colors">
                <span className="text-[#8B7355] text-xl">✦</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-light text-[#8B0000] font-serif">Our Mission</h3>
            </div>
            <p className="text-[#2C1810] text-base sm:text-lg leading-relaxed font-light">
              To create transformative safari experiences that connect travelers with Africa's wilderness, 
              cultures, and communities — while preserving its natural heritage for generations to come.
            </p>
          </div>
          
          <div className="group bg-[#F5F0E8] p-8 sm:p-10 rounded-3xl border-l-4 border-[#556B2F] shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-[#556B2F]/10 flex items-center justify-center group-hover:bg-[#556B2F]/20 transition-colors">
                <span className="text-[#556B2F] text-xl">✦</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-light text-[#8B0000] font-serif">Our Vision</h3>
            </div>
            <p className="text-[#2C1810] text-base sm:text-lg leading-relaxed font-light">
              To be Africa's most trusted luxury safari brand, celebrated for excellence, sustainability, 
              and the profound joy we bring to every traveler who journeys with us.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action - With Borders on Both Sides */}
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pb-20 bg-white">
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-[#8B7355] to-[#D4C5A9] rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
          <div className="relative text-center bg-[#F5F0E8] p-10 sm:p-14 md:p-20 rounded-3xl shadow-xl overflow-hidden border-l-4 border-r-4 border-[#8B7355]">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0" style={{
                backgroundImage: `
                  repeating-linear-gradient(
                    45deg,
                    transparent,
                    transparent 30px,
                    rgba(139, 115, 85, 0.05) 30px,
                    rgba(139, 115, 85, 0.05) 31px
                  )
                `,
                backgroundSize: '60px 60px'
              }} />
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#2C1810] mb-4 font-serif tracking-wide">
                Ready for Your Safari Adventure?
              </h3>
              <p className="text-[#2C1810]/60 text-sm sm:text-base mb-8 max-w-lg mx-auto font-light">
                Let's craft the journey of a lifetime — tailored just for you.
              </p>
              <button 
                onClick={openWhatsApp}
                className="inline-block bg-[#8B0000] hover:bg-[#6B0000] text-white px-10 sm:px-12 py-4 sm:py-4.5 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-[1.02] active:scale-95"
              >
                Book Your Adventure
              </button>
              <div className="mt-6 flex items-center justify-center gap-2 text-[#2C1810]/20 text-xs tracking-widest">
                <span>✦</span>
                <span>Exclusive 360 Journeys</span>
                <span>✦</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations - Only essential animations */}
      <style jsx>{`
        @keyframes gentleFloat {
          0%, 100% { 
            transform: translateY(0) rotate(0deg) scale(1); 
            opacity: 0.08; 
          }
          50% { 
            opacity: 0.2; 
            transform: translateY(-40px) rotate(8deg) scale(1.1); 
          }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.1); opacity: 0.8; }
        }
        .animate-fade-in { animation: fadeIn 0.8s ease-out forwards; }
        .animate-pulse { animation: pulse 2s ease-in-out infinite; }
        .perspective-1000 { perspective: 1000px; }
        .animate-book-open {
          animation: bookOpen 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        @keyframes bookOpen {
          0% { transform: rotateY(-8deg) scale(0.96); opacity: 0; }
          100% { transform: rotateY(0) scale(1); opacity: 1; }
        }
        .shadow-3xl { box-shadow: 0 30px 60px -15px rgba(44, 24, 16, 0.3); }
        .delay-100 { animation-delay: 0.1s; }
        .delay-150 { animation-delay: 0.15s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-700 { animation-delay: 0.7s; }
      `}</style>
    </section>
  );
};

export default About;