import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/exclusive360.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-darkgreen text-white shadow-lg fixed w-full top-0 z-50">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Exclusive 360" className="h-12 w-auto" />
          <span className="text-xl font-bold hidden sm:block text-white">
            Exclusive <span className="text-yellow-400 font-extrabold">360</span> Journeys
          </span>
        </div>

        <ul className="hidden lg:flex gap-8 text-sm uppercase tracking-wider text-white">
          <li><Link to="/" className="hover:text-yellow-400 transition font-medium">Home</Link></li>
          <li><Link to="/packages" className="hover:text-yellow-400 transition font-medium">Packages</Link></li>
          <li><Link to="/about" className="hover:text-yellow-400 transition font-medium">About</Link></li>
          <li><Link to="/contact" className="hover:text-yellow-400 transition font-medium">Contact</Link></li>
        </ul>

        <button className="lg:hidden text-3xl text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? '✕' : '☰'}
        </button>
      </nav>

      {isOpen && (
        <ul className="lg:hidden bg-darkgreen px-4 pb-4 flex flex-col gap-4 text-sm uppercase tracking-wider text-white">
          <li><Link to="/" className="block hover:text-yellow-400 transition" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/packages" className="block hover:text-yellow-400 transition" onClick={() => setIsOpen(false)}>Packages</Link></li>
          <li><Link to="/about" className="block hover:text-yellow-400 transition" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link to="/contact" className="block hover:text-yellow-400 transition" onClick={() => setIsOpen(false)}>Contact</Link></li>
        </ul>
      )}
    </header>
  );
};

export default Header;