
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Let's talk.</h2>
            <Link 
              to="/contact" 
              className="inline-flex items-center text-xl group"
            >
              Get in touch
              <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-sm text-gray-400 mb-4 uppercase">Social</h4>
              <ul className="space-y-3">
                {['Instagram', 'Twitter', 'LinkedIn', 'Facebook'].map((item) => (
                  <li key={item}>
                    <a 
                      href={`https://${item.toLowerCase()}.com`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="nav-link"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm text-gray-400 mb-4 uppercase">Offices</h4>
              <ul className="space-y-3">
                {['San Francisco', 'San Diego', 'New York', 'London', 'Berlin'].map((item) => (
                  <li key={item}>
                    <span className="block">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm text-gray-400 mb-4 uppercase">Navigation</h4>
              <ul className="space-y-3">
                {['Work', 'About', 'News', 'Thinking', 'Careers', 'Contact'].map((item) => (
                  <li key={item}>
                    <Link to={`/${item.toLowerCase()}`} className="nav-link">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} BASIC/ECHO. All Rights Reserved.
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-sm text-gray-400">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link to="/cookie-policy" className="hover:text-white transition-colors">
              Cookie Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
