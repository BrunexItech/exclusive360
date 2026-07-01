import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faGlobe, faBox, faEnvelope, faPen, faNewspaper } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/exclusive360.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    const whatsappBtn = document.querySelector('.whatsapp-trigger');
    if (whatsappBtn) {
      whatsappBtn.click();
    } else {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
      setTimeout(() => {
        const btn = document.querySelector('.whatsapp-trigger');
        if (btn) btn.click();
      }, 500);
    }
  };

  const navLinks = [
    { to: '/', label: 'Home', icon: faHome },
    { to: '/about', label: 'About', icon: faInfoCircle },
    { to: '/destinations', label: 'Destinations', icon: faGlobe },
    { to: '/packages', label: 'Packages', icon: faBox },
    { to: '/blog', label: 'Blog', icon: faPen },
    { to: '/contact', label: 'Contact', icon: faEnvelope },
  ];

  const isActive = (path) => location.pathname === path;

  const handleNavClick = (to) => {
    if (to === '/') {
      scrollToTop();
    }
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#FAF5EB]/95 backdrop-blur-md shadow-lg' : 'bg-[#FAF5EB]'
      }`}
    >
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center gap-2 group"
          onClick={scrollToTop}
        >
          <div className="bg-white p-1.5 rounded-lg border-2 border-[#d1973e]/60 shadow-[0_0_15px_rgba(209,151,62,0.15)]">
            <img 
              src={logo} 
              alt="Exclusive 360" 
              className="h-10 w-auto transition-transform group-hover:scale-105" 
            />
          </div>
          <span className="text-xl font-serif text-[#3B1F0B]">
            Exclusive <span className="text-[#800020] font-extrabold">360</span> Journeys
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-8 text-sm uppercase tracking-wider text-[#3B1F0B]">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                onClick={() => handleNavClick(link.to)}
                className={`relative font-medium transition-all duration-300 hover:text-[#800020] flex items-center gap-2 ${
                  isActive(link.to) ? 'text-[#800020]' : 'text-[#3B1F0B]'
                }`}
              >
                <FontAwesomeIcon icon={link.icon} className="text-xs" />
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 w-full h-0.5 bg-[#d1973e] transition-all duration-300 ${
                    isActive(link.to) ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`}
                />
              </Link>
            </li>
          ))}
          <li>
            <button
              onClick={openWhatsApp}
              className="flex items-center gap-2 bg-[#800020] hover:bg-[#3B1F0B] text-white px-4 py-1.5 rounded-full text-xs font-bold transition transform hover:scale-105"
            >
              📅 Book Now
            </button>
          </li>
        </ul>

        {/* Animated Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 group"
          aria-label="Toggle Menu"
        >
          <span
            className={`block w-7 h-0.5 bg-[#3B1F0B] transition-all duration-300 ease-in-out origin-center ${
              isOpen ? 'rotate-45 translate-y-1.5' : ''
            }`}
          />
          <span
            className={`block w-7 h-0.5 bg-[#3B1F0B] transition-all duration-300 ease-in-out ${
              isOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
            }`}
          />
          <span
            className={`block w-7 h-0.5 bg-[#3B1F0B] transition-all duration-300 ease-in-out origin-center ${
              isOpen ? '-rotate-45 -translate-y-1.5' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="bg-[#FAF5EB]/95 backdrop-blur-md px-6 pb-6 flex flex-col gap-4 text-sm uppercase tracking-wider text-[#3B1F0B] border-t border-[#3B1F0B]/10">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`flex items-center gap-3 py-2 hover:text-[#800020] transition-colors duration-300 ${
                  isActive(link.to) ? 'text-[#800020]' : 'text-[#3B1F0B]'
                }`}
                onClick={() => handleNavClick(link.to)}
              >
                <FontAwesomeIcon icon={link.icon} className="w-5 text-[#d1973e]" />
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-2 border-t border-[#3B1F0B]/10">
            <button
              onClick={() => {
                setIsOpen(false);
                openWhatsApp();
              }}
              className="flex items-center justify-center gap-2 bg-[#800020] hover:bg-[#3B1F0B] text-white px-4 py-2 rounded-full text-sm font-bold transition w-full"
            >
              📅 Book Now
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;