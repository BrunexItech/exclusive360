import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  const [isBookOpen, setIsBookOpen] = useState(false);
  const [typedTexts, setTypedTexts] = useState({});
  const [activeParagraph, setActiveParagraph] = useState(-1);
  const [showSignature, setShowSignature] = useState(false);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const storyRef = useRef(null);
  const signatureRef = useRef(null);
  const typingTimerRef = useRef(null);

  // Story data with styling instructions
  const storyParagraphs = [
    {
      text: 'In 2015, a dream was born beneath the vast African sky. A passion for the wild, a love for the land, and an unwavering commitment to creating unforgettable journeys.',
      delay: 800,
      speed: 35,
      italicWords: ['dream', 'passion', 'love'],
      highlightWords: ['unforgettable']
    },
    {
      text: 'What began as a small guiding operation in the heart of the Maasai Mara has blossomed into Exclusive 360 Journeys — a name synonymous with luxury, authenticity, and the magic of Africa.',
      delay: 400,
      speed: 30,
      italicWords: ['Exclusive 360 Journeys', 'luxury', 'authenticity', 'magic'],
      highlightWords: ['Maasai Mara']
    },
    {
      text: 'Our founders, born and raised in the shadows of Mount Kilimanjaro, grew up with the rhythm of the savanna in their veins. Elephants, lions, and the endless golden plains were their playground.',
      delay: 400,
      speed: 32,
      italicWords: ['rhythm of the savanna', 'playground'],
      highlightWords: ['Mount Kilimanjaro']
    },
    {
      text: 'Today, we continue that legacy. Each safari we craft is a love letter to Africa — a carefully curated experience that honors the land, its wildlife, and its people.',
      delay: 300,
      speed: 28,
      italicWords: ['love letter', 'carefully curated'],
      highlightWords: ['Africa']
    },
    {
      text: 'From the lush forests of Uganda to the pristine beaches of Zanzibar, from the majestic Victoria Falls to the iconic Serengeti — we invite you to discover Africa through our eyes.',
      delay: 400,
      speed: 33,
      italicWords: ['discover Africa through our eyes'],
      highlightWords: ['Uganda', 'Zanzibar', 'Victoria Falls', 'Serengeti']
    },
    {
      text: 'This is not just a safari. This is a journey of the soul. This is Exclusive 360 Journeys.',
      delay: 500,
      speed: 40,
      italicWords: ['journey of the soul'],
      highlightWords: ['Exclusive 360 Journeys']
    }
  ];

  // Animate book opening on load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsBookOpen(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // Sequential typing effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && activeParagraph === -1) {
            setActiveParagraph(0);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (storyRef.current) {
      observer.observe(storyRef.current);
    }

    return () => observer.disconnect();
  }, [activeParagraph]);

  // Handle sequential typing
  useEffect(() => {
    if (activeParagraph >= 0 && activeParagraph < storyParagraphs.length) {
      const paragraph = storyParagraphs[activeParagraph];
      const text = paragraph.text;
      const speed = paragraph.speed || 30;
      let index = 0;
      
      if (typingTimerRef.current) {
        clearInterval(typingTimerRef.current);
      }

      typingTimerRef.current = setInterval(() => {
        if (index <= text.length) {
          setTypedTexts(prev => ({
            ...prev,
            [activeParagraph]: text.substring(0, index)
          }));
          index++;
        } else {
          clearInterval(typingTimerRef.current);
          setTimeout(() => {
            if (activeParagraph < storyParagraphs.length - 1) {
              setActiveParagraph(prev => prev + 1);
            } else {
              setIsTypingComplete(true);
              setTimeout(() => {
                if (signatureRef.current) {
                  const sigObserver = new IntersectionObserver(
                    (entries) => {
                      entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                          setShowSignature(true);
                          sigObserver.disconnect();
                        }
                      });
                    },
                    { threshold: 0.3 }
                  );
                  sigObserver.observe(signatureRef.current);
                }
              }, 500);
            }
          }, paragraph.delay || 500);
        }
      }, speed);
    }

    return () => {
      if (typingTimerRef.current) {
        clearInterval(typingTimerRef.current);
      }
    };
  }, [activeParagraph]);

  // Helper to render text with formatting
  const renderFormattedText = (paragraph, text) => {
    const words = text.split(' ');
    const italicWords = paragraph.italicWords || [];
    const highlightWords = paragraph.highlightWords || [];

    return words.map((word, index) => {
      let isItalic = false;
      let isHighlight = false;
      let cleanWord = word.replace(/[.,!?;:"]/g, '');

      italicWords.forEach(phrase => {
        const phraseWords = phrase.split(' ');
        if (phraseWords.some(pw => word.includes(pw) || pw.includes(word))) {
          isItalic = true;
        }
      });

      highlightWords.forEach(phrase => {
        const phraseWords = phrase.split(' ');
        if (phraseWords.some(pw => word.includes(pw) || pw.includes(word))) {
          isHighlight = true;
        }
      });

      let className = '';
      if (isItalic) className += ' italic ';
      if (isHighlight) className += ' text-[#800020] font-semibold ';

      return (
        <span key={index} className={className}>
          {word}
          {index < words.length - 1 ? ' ' : ''}
        </span>
      );
    });
  };

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
    <section className="pt-[85px] sm:pt-24 md:pt-28 pb-12 sm:pb-16 md:pb-20 px-4 bg-[#FAF5EB] min-h-screen">
      <div className="container mx-auto max-w-7xl">
        
        {/* Hero Section - Animated Book Opening */}
        <div className="relative rounded-2xl overflow-hidden mb-16 shadow-2xl min-h-[400px] sm:min-h-[500px] flex items-center justify-center">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#800020] via-[#3B1F0B] to-[#1B3B1B]">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0" style={{
                backgroundImage: `
                  repeating-linear-gradient(
                    45deg,
                    transparent,
                    transparent 20px,
                    rgba(255, 255, 255, 0.03) 20px,
                    rgba(255, 255, 255, 0.03) 21px
                  ),
                  repeating-linear-gradient(
                    -45deg,
                    transparent,
                    transparent 20px,
                    rgba(255, 255, 255, 0.03) 20px,
                    rgba(255, 255, 255, 0.03) 21px
                  )
                `,
                backgroundSize: '60px 60px'
              }} />
            </div>
          </div>

          {/* Book Container */}
          <div className={`relative z-10 w-full max-w-5xl mx-auto px-4 transition-all duration-1000 ${isBookOpen ? 'opacity-100' : 'opacity-0'}`}>
            <div className="animate-book-open perspective-1000">
              {/* Book */}
              <div className="relative bg-[#FAF5EB] rounded-lg shadow-2xl overflow-hidden border border-[#d1973e]/20">
                {/* Book Spine */}
                <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-[#800020] via-[#3B1F0B] to-[#1B3B1B] rounded-l-lg"></div>
                
                {/* Book Pages Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#d1973e]/5 via-transparent to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-l from-[#d1973e]/5 via-transparent to-transparent"></div>

                {/* Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 p-6 sm:p-8 md:p-12">
                  {/* Left Page */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-[#800020]">
                      <span className="text-[10px] sm:text-xs tracking-[0.3em] uppercase font-semibold">Chapter One</span>
                      <div className="flex-1 h-px bg-[#800020]/20"></div>
                    </div>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light font-serif text-[#3B1F0B] leading-tight">
                      The Story of
                      <br />
                      <span className="text-[#800020] font-serif">Exclusive 360</span>
                    </h1>
                    <div className="w-16 h-0.5 bg-[#d1973e]"></div>
                    <p className="text-[#3B1F0B]/70 text-xs sm:text-sm italic">
                      "Every journey begins with a story. Ours started under the African sun."
                    </p>
                    {/* Elegant Decor */}
                    <div className="flex gap-2 mt-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#d1973e] animate-pulse"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-[#d1973e] animate-pulse delay-100"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-[#d1973e] animate-pulse delay-200"></div>
                    </div>
                  </div>

                  {/* Right Page - Safari Image */}
                  <div className="relative flex items-center justify-center">
                    <div className="w-full rounded-lg overflow-hidden shadow-md">
                      <img 
                        src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80" 
                        alt="African Safari Sunset with Acacia Tree"
                        className="w-full h-48 sm:h-56 md:h-64 object-cover hover:scale-105 transition duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>

                {/* Page Number */}
                <div className="absolute bottom-3 sm:bottom-4 right-4 sm:right-8 text-xs text-[#3B1F0B]/30 font-serif">
                  — 1 —
                </div>

                {/* Corner Decorations */}
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 w-4 sm:w-6 h-4 sm:h-6 border-t-2 border-l-2 border-[#800020]/10"></div>
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 w-4 sm:w-6 h-4 sm:h-6 border-t-2 border-r-2 border-[#800020]/10"></div>
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 w-4 sm:w-6 h-4 sm:h-6 border-b-2 border-l-2 border-[#800020]/10"></div>
                <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 w-4 sm:w-6 h-4 sm:h-6 border-b-2 border-r-2 border-[#800020]/10"></div>
              </div>
            </div>
          </div>

          {/* Floating Particles */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-10 left-[10%] animate-particle text-[#d1973e]/20 text-2xl">✦</div>
            <div className="absolute top-20 right-[15%] animate-particle delay-300 text-[#d1973e]/20 text-xl">✦</div>
            <div className="absolute bottom-20 left-[20%] animate-particle delay-700 text-[#d1973e]/20 text-3xl">✦</div>
            <div className="absolute bottom-10 right-[25%] animate-particle delay-500 text-[#d1973e]/20 text-xl">✦</div>
          </div>
        </div>

        {/* Our Story - Live Writing Section */}
        <div ref={storyRef} className="mb-16 max-w-5xl mx-auto">
          <div className="relative">
            {/* Decorative Element */}
            <div className="absolute -top-6 sm:-top-8 -left-4 sm:-left-8 w-12 sm:w-16 h-12 sm:h-16 opacity-5">
              <svg viewBox="0 0 100 100" fill="#800020">
                <path d="M50 10 C30 30, 20 60, 50 90 C80 60, 70 30, 50 10Z" />
                <circle cx="50" cy="50" r="5" fill="#800020" />
              </svg>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-[#3B1F0B] mb-3 sm:mb-4 font-serif">
              <span className="relative">
                Our Story
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#d1973e]"></span>
              </span>
            </h2>
            <div className="w-16 h-0.5 bg-[#d1973e] mb-6 sm:mb-8"></div>

            {/* Story Content - Sequential Typewriter */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 sm:p-8 md:p-10 lg:p-12 shadow-lg border border-[#d1973e]/20">
              <div className="space-y-4 sm:space-y-5 md:space-y-6 text-[#3B1F0B] text-base sm:text-lg leading-relaxed">
                {storyParagraphs.map((paragraph, index) => {
                  const typedText = typedTexts[index] || '';
                  const isActive = index <= activeParagraph;
                  const isComplete = typedText.length === paragraph.text.length;
                  const isLast = index === storyParagraphs.length - 1;

                  return (
                    <div 
                      key={index} 
                      className={`transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`}
                    >
                      <p className="story-paragraph min-h-[2.5rem] font-serif font-light">
                        {isActive ? (
                          renderFormattedText(paragraph, typedText)
                        ) : (
                          <span className="opacity-0">{paragraph.text}</span>
                        )}
                        {isActive && !isComplete && (
                          <span className="inline-block w-0.5 h-5 bg-[#800020] ml-0.5 animate-blink"></span>
                        )}
                        {isActive && isComplete && !isLast && (
                          <span className="inline-block w-0.5 h-5 bg-[#800020]/30 ml-0.5"></span>
                        )}
                        {isActive && isComplete && isLast && (
                          <span className="inline-block w-0.5 h-5 bg-[#800020] ml-0.5 animate-blink"></span>
                        )}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Signature Area */}
              <div ref={signatureRef} className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-[#d1973e]/20">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                  <div className="flex-1">
                    <p className="text-xs sm:text-sm text-[#3B1F0B]/50 font-serif">— Founder's Note</p>
                    {showSignature && (
                      <div className="mt-2 animate-fade-in">
                        <svg className="w-36 sm:w-44 md:w-52 h-12 sm:h-14 md:h-16" viewBox="0 0 200 60">
                          <path
                            d="M10 40 C20 20, 30 10, 40 30 C50 50, 60 20, 70 35 C80 50, 90 25, 100 40 C110 55, 120 30, 130 40 C140 50, 150 35, 160 45 C170 55, 180 40, 190 50"
                            stroke="#800020"
                            strokeWidth="2.5"
                            fill="none"
                            strokeLinecap="round"
                            className={showSignature ? 'animate-draw-signature' : ''}
                            style={{
                              strokeDasharray: 1000,
                              strokeDashoffset: showSignature ? 0 : 1000,
                              transition: 'stroke-dashoffset 2.5s ease-out'
                            }}
                          />
                        </svg>
                        <p className="text-xs sm:text-sm font-semibold text-[#800020] mt-1 font-serif">— Exclusive 360 Journeys Team</p>
                      </div>
                    )}
                  </div>
                  <div className="flex gap-1.5 sm:gap-2">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#d1973e] animate-pulse"></div>
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#d1973e] animate-pulse delay-150"></div>
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#d1973e] animate-pulse delay-300"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-16">
          <div className="bg-white/80 backdrop-blur-sm p-5 sm:p-6 md:p-8 rounded-xl border-l-4 border-[#d1973e] shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-xl sm:text-2xl font-light text-[#800020] mb-2 font-serif">🎯 Our Mission</h3>
            <p className="text-[#3B1F0B] text-sm sm:text-base leading-relaxed">
              To create transformative safari experiences that connect travelers with Africa's wilderness, 
              cultures, and communities — while preserving its natural heritage for generations to come.
            </p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-5 sm:p-6 md:p-8 rounded-xl border-l-4 border-[#d1973e] shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-xl sm:text-2xl font-light text-[#800020] mb-2 font-serif">👁️ Our Vision</h3>
            <p className="text-[#3B1F0B] text-sm sm:text-base leading-relaxed">
              To be Africa's most trusted luxury safari brand, celebrated for excellence, sustainability, 
              and the profound joy we bring to every traveler who journeys with us.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-light text-[#3B1F0B] mb-4 text-center font-serif">Why Choose Exclusive 360</h2>
          <div className="w-16 h-0.5 bg-[#d1973e] mx-auto mb-6 sm:mb-8"></div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="group bg-white/80 backdrop-blur-sm p-4 sm:p-6 rounded-xl text-center shadow-lg hover:shadow-xl transition duration-300 hover:-translate-y-1 border border-[#3B1F0B]/5 hover:border-[#800020]/20">
              <div className="text-3xl sm:text-4xl mb-2 group-hover:scale-110 transition duration-300">🦁</div>
              <h4 className="font-semibold text-[#800020] text-sm sm:text-base font-serif">Expert Guides</h4>
              <p className="text-xs sm:text-sm text-[#3B1F0B]/70">10+ years experience, local knowledge.</p>
            </div>
            <div className="group bg-white/80 backdrop-blur-sm p-4 sm:p-6 rounded-xl text-center shadow-lg hover:shadow-xl transition duration-300 hover:-translate-y-1 border border-[#3B1F0B]/5 hover:border-[#800020]/20">
              <div className="text-3xl sm:text-4xl mb-2 group-hover:scale-110 transition duration-300">🌍</div>
              <h4 className="font-semibold text-[#800020] text-sm sm:text-base font-serif">Tailored Safaris</h4>
              <p className="text-xs sm:text-sm text-[#3B1F0B]/70">Custom itineraries for your needs.</p>
            </div>
            <div className="group bg-white/80 backdrop-blur-sm p-4 sm:p-6 rounded-xl text-center shadow-lg hover:shadow-xl transition duration-300 hover:-translate-y-1 border border-[#3B1F0B]/5 hover:border-[#800020]/20">
              <div className="text-3xl sm:text-4xl mb-2 group-hover:scale-110 transition duration-300">🏕️</div>
              <h4 className="font-semibold text-[#800020] text-sm sm:text-base font-serif">Luxury & Comfort</h4>
              <p className="text-xs sm:text-sm text-[#3B1F0B]/70">Premium lodges and vehicles.</p>
            </div>
            <div className="group bg-white/80 backdrop-blur-sm p-4 sm:p-6 rounded-xl text-center shadow-lg hover:shadow-xl transition duration-300 hover:-translate-y-1 border border-[#3B1F0B]/5 hover:border-[#800020]/20">
              <div className="text-3xl sm:text-4xl mb-2 group-hover:scale-110 transition duration-300">🌿</div>
              <h4 className="font-semibold text-[#800020] text-sm sm:text-base font-serif">Sustainable Tourism</h4>
              <p className="text-xs sm:text-sm text-[#3B1F0B]/70">Conservation and community support.</p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16 bg-[#800020]/5 backdrop-blur-sm p-5 sm:p-8 rounded-2xl shadow-lg border border-[#800020]/10">
          <h2 className="text-2xl sm:text-3xl font-light text-[#3B1F0B] mb-4 text-center font-serif">Our Core Values</h2>
          <div className="w-16 h-0.5 bg-[#d1973e] mx-auto mb-6 sm:mb-8"></div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
            <div className="bg-white/80 backdrop-blur-sm p-3 sm:p-4 rounded-xl shadow-sm text-center hover:shadow-md transition duration-300 border border-[#3B1F0B]/5 hover:border-[#d1973e]/30">
              <span className="text-xl sm:text-2xl">🤝</span>
              <h5 className="font-semibold text-[#800020] text-sm sm:text-base font-serif">Integrity</h5>
              <p className="text-xs sm:text-sm text-[#3B1F0B]/60">Honest and ethical.</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-3 sm:p-4 rounded-xl shadow-sm text-center hover:shadow-md transition duration-300 border border-[#3B1F0B]/5 hover:border-[#d1973e]/30">
              <span className="text-xl sm:text-2xl">⭐</span>
              <h5 className="font-semibold text-[#800020] text-sm sm:text-base font-serif">Excellence</h5>
              <p className="text-xs sm:text-sm text-[#3B1F0B]/60">Quality and detail.</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-3 sm:p-4 rounded-xl shadow-sm text-center hover:shadow-md transition duration-300 border border-[#3B1F0B]/5 hover:border-[#d1973e]/30">
              <span className="text-xl sm:text-2xl">🌱</span>
              <h5 className="font-semibold text-[#800020] text-sm sm:text-base font-serif">Sustainability</h5>
              <p className="text-xs sm:text-sm text-[#3B1F0B]/60">Protecting ecosystems.</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-3 sm:p-4 rounded-xl shadow-sm text-center hover:shadow-md transition duration-300 border border-[#3B1F0B]/5 hover:border-[#d1973e]/30">
              <span className="text-xl sm:text-2xl">❤️</span>
              <h5 className="font-semibold text-[#800020] text-sm sm:text-base font-serif">Customer Focus</h5>
              <p className="text-xs sm:text-sm text-[#3B1F0B]/60">Your happiness matters.</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-3 sm:p-4 rounded-xl shadow-sm text-center hover:shadow-md transition duration-300 border border-[#3B1F0B]/5 hover:border-[#d1973e]/30">
              <span className="text-xl sm:text-2xl">💡</span>
              <h5 className="font-semibold text-[#800020] text-sm sm:text-base font-serif">Innovation</h5>
              <p className="text-xs sm:text-sm text-[#3B1F0B]/60">Fresh, exciting experiences.</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-3 sm:p-4 rounded-xl shadow-sm text-center hover:shadow-md transition duration-300 border border-[#3B1F0B]/5 hover:border-[#d1973e]/30">
              <span className="text-xl sm:text-2xl">🌅</span>
              <h5 className="font-semibold text-[#800020] text-sm sm:text-base font-serif">Passion</h5>
              <p className="text-xs sm:text-sm text-[#3B1F0B]/60">We love what we do.</p>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16 text-center">
          <div className="group bg-gradient-to-br from-[#800020] to-[#3B1F0B] text-white p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2">
            <div className="text-2xl sm:text-3xl md:text-4xl font-light group-hover:text-[#d1973e] transition duration-300 font-serif">10+</div>
            <div className="text-[10px] sm:text-xs md:text-sm text-[#d1973e]/80">Years of Experience</div>
          </div>
          <div className="group bg-gradient-to-br from-[#800020] to-[#3B1F0B] text-white p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2">
            <div className="text-2xl sm:text-3xl md:text-4xl font-light group-hover:text-[#d1973e] transition duration-300 font-serif">500+</div>
            <div className="text-[10px] sm:text-xs md:text-sm text-[#d1973e]/80">Successful Safaris</div>
          </div>
          <div className="group bg-gradient-to-br from-[#800020] to-[#3B1F0B] text-white p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2">
            <div className="text-2xl sm:text-3xl md:text-4xl font-light group-hover:text-[#d1973e] transition duration-300 font-serif">50+</div>
            <div className="text-[10px] sm:text-xs md:text-sm text-[#d1973e]/80">Countries Served</div>
          </div>
          <div className="group bg-gradient-to-br from-[#800020] to-[#3B1F0B] text-white p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2">
            <div className="text-2xl sm:text-3xl md:text-4xl font-light group-hover:text-[#d1973e] transition duration-300 font-serif">100%</div>
            <div className="text-[10px] sm:text-xs md:text-sm text-[#d1973e]/80">Client Satisfaction</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-[#800020] to-[#3B1F0B] p-6 sm:p-8 md:p-12 rounded-2xl shadow-2xl relative overflow-hidden">
          {/* Decorative Background Pattern */}
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
            <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-white mb-2 sm:mb-3 font-serif">
              Ready for Your Safari Adventure?
            </h3>
            <p className="text-white/70 text-sm sm:text-base mb-4 sm:mb-6 max-w-lg mx-auto">
              Let's craft the journey of a lifetime — tailored just for you.
            </p>
            <button 
              onClick={openWhatsApp}
              className="inline-block bg-[#d1973e] hover:bg-[#b8862e] text-[#3B1F0B] px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold transition text-sm sm:text-base shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300"
            >
              Book Your Adventure
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;