import { Link } from 'react-router-dom';

const CTABanner = () => {
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
    <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#800020] via-[#3B1F0B] to-[#1B3B1B]">
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
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Golden Compass Icon */}
          <div className="mb-4 flex justify-center animate-spin-slow">
            <svg 
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-yellow-400" 
              viewBox="0 0 100 100" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Outer Ring */}
              <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2" opacity="0.3"/>
              <circle cx="50" cy="50" r="38" stroke="currentColor" strokeWidth="1.5" opacity="0.5"/>
              
              {/* Compass Points - North */}
              <polygon points="50,8 56,30 44,30" fill="currentColor" opacity="0.9"/>
              <polygon points="50,8 56,30 44,30" fill="white" opacity="0.3"/>
              
              {/* South */}
              <polygon points="50,92 56,70 44,70" fill="currentColor" opacity="0.4"/>
              
              {/* East */}
              <polygon points="92,50 70,56 70,44" fill="currentColor" opacity="0.4"/>
              
              {/* West */}
              <polygon points="8,50 30,56 30,44" fill="currentColor" opacity="0.4"/>
              
              {/* Center */}
              <circle cx="50" cy="50" r="6" fill="currentColor"/>
              <circle cx="50" cy="50" r="3" fill="#1B3B1B"/>
              
              {/* Decorative dots */}
              <circle cx="50" cy="20" r="1.5" fill="currentColor" opacity="0.6"/>
              <circle cx="50" cy="80" r="1.5" fill="currentColor" opacity="0.6"/>
              <circle cx="20" cy="50" r="1.5" fill="currentColor" opacity="0.6"/>
              <circle cx="80" cy="50" r="1.5" fill="currentColor" opacity="0.6"/>
              
              {/* 360 Text */}
              <text x="50" y="62" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1B3B1B" opacity="0.8">
                360°
              </text>
            </svg>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white font-serif mb-4">
            Ready for Your <span className="text-yellow-400">Safari Adventure</span>?
          </h2>
          <p className="text-white/70 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-xl mx-auto">
            Let us help you plan the journey of a lifetime. From luxury lodges to wildlife encounters, we've got you covered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openWhatsApp}
              className="bg-yellow-400 hover:bg-yellow-500 text-[#3B1F0B] px-6 sm:px-8 py-3 rounded-lg font-bold transition transform hover:scale-105 shadow-lg text-sm sm:text-base flex items-center justify-center gap-2"
            >
              <span>📅</span> Book Your Safari Now
            </button>
            <Link
              to="/packages"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/30 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold transition transform hover:scale-105 text-sm sm:text-base"
            >
              Explore Packages
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;