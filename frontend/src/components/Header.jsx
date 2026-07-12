import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/exclusive360.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
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
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/destinations', label: 'Destinations' },
    { to: '/packages', label: 'Packages' },
    { to: '/blog', label: 'Blog' },
    { to: '/contact', label: 'Contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-white'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo - select-none cursor-pointer */}
          <Link 
            to="/" 
            className="flex items-center gap-2 group select-none cursor-pointer"
            onClick={scrollToTop}
          >
            <img 
              src={logo} 
              alt="Exclusive 360" 
              className="h-10 sm:h-12 w-auto transition-transform duration-300 group-hover:scale-105" 
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    onClick={() => {
                      if (link.to === '/') scrollToTop();
                      setIsOpen(false);
                    }}
                    className={`relative text-sm font-light tracking-wide transition-colors duration-300 select-none cursor-pointer ${
                      scrolled ? 'text-[#3B1F0B]' : 'text-[#3B1F0B]'
                    } hover:text-[#d1973e] ${
                      isActive(link.to) ? 'text-[#d1973e]' : ''
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute -bottom-1 left-0 w-full h-[1.5px] bg-[#d1973e] transition-all duration-300 ${
                        isActive(link.to) ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                      }`}
                    />
                  </Link>
                </li>
              ))}
            </ul>

            {/* CTA Button - "Book Now" - select-none cursor-pointer */}
            <button
              onClick={openWhatsApp}
              className="bg-[#d1973e] hover:bg-[#c4882a] text-white px-6 py-2 rounded-full text-sm font-medium tracking-wider transition duration-300 hover:scale-105 select-none cursor-pointer"
            >
              Book Now
            </button>
          </nav>

          {/* Mobile Menu Button - select-none cursor-pointer */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden flex items-center justify-center w-10 h-10 select-none cursor-pointer"
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <FontAwesomeIcon 
                icon={faTimes} 
                className={`w-6 h-6 ${scrolled ? 'text-[#3B1F0B]' : 'text-[#3B1F0B]'}`} 
              />
            ) : (
              <FontAwesomeIcon 
                icon={faBars} 
                className={`w-6 h-6 ${scrolled ? 'text-[#3B1F0B]' : 'text-[#3B1F0B]'}`} 
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Slide Out */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-[#FAF5EB] shadow-2xl transform transition-transform duration-500 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } lg:hidden`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-[#3B1F0B]/10">
            <img src={logo} alt="Exclusive 360" className="h-8 w-auto select-none" />
            <button
              onClick={() => setIsOpen(false)}
              className="text-[#3B1F0B] hover:text-[#800020] select-none cursor-pointer"
            >
              <FontAwesomeIcon icon={faTimes} className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Menu Links */}
          <nav className="flex-1 overflow-y-auto p-6">
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    onClick={() => {
                      if (link.to === '/') scrollToTop();
                      setIsOpen(false);
                    }}
                    className={`block text-base font-light tracking-wide transition-colors duration-300 select-none cursor-pointer ${
                      isActive(link.to) ? 'text-[#800020] font-medium' : 'text-[#3B1F0B] hover:text-[#800020]'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Footer */}
          <div className="p-6 border-t border-[#3B1F0B]/10 space-y-4">
            <button
              onClick={() => {
                setIsOpen(false);
                openWhatsApp();
              }}
              className="block w-full text-center bg-[#d1973e] hover:bg-[#c4882a] text-white px-6 py-3 rounded-full text-sm font-medium tracking-wider transition select-none cursor-pointer"
            >
              Book Now
            </button>
            <button
              onClick={() => {
                setIsOpen(false);
                openWhatsApp();
              }}
              className="block w-full text-center border border-[#3B1F0B]/20 hover:border-[#800020] text-[#3B1F0B] px-6 py-3 rounded-full text-sm font-medium tracking-wider transition select-none cursor-pointer"
            >
              Talk to an Expert
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 transition-opacity duration-500 z-40 lg:hidden ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />
    </header>
  );
};

export default Header;