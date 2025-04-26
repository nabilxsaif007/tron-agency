
import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);
  
  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 bg-white bg-opacity-90 backdrop-blur-md shadow-sm' : 'py-6'}`}>
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="font-bold text-xl">
          BASIC/ECHO
        </Link>
        
        <nav className="hidden lg:flex items-center gap-8">
          <Link to="/work" className="nav-link">Work</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/news" className="nav-link">News</Link>
          <Link to="/thinking" className="nav-link">Thinking</Link>
          <Link to="/careers" className="nav-link">Careers</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </nav>
        
        <button 
          onClick={() => setIsOpen(true)}
          className="lg:hidden flex items-center gap-2 font-medium"
          aria-label="Open menu"
        >
          Menu <Menu size={20} />
        </button>
      </div>
      
      {/* Mobile menu */}
      <div className={`fixed inset-0 bg-white z-50 transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="container-custom py-6 flex justify-between">
          <Link to="/" className="font-bold text-xl" onClick={() => setIsOpen(false)}>
            BASIC/ECHO
          </Link>
          <button 
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2 font-medium"
            aria-label="Close menu"
          >
            Close <X size={20} />
          </button>
        </div>
        
        <div className="container-custom h-full flex flex-col justify-center pb-20">
          <nav className="flex flex-col gap-6">
            {['Work', 'About', 'News', 'Thinking', 'Careers', 'Contact'].map((item) => (
              <Link 
                key={item} 
                to={`/${item.toLowerCase()}`} 
                className="text-4xl md:text-5xl lg:text-6xl font-bold hover:text-gray-700 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
