import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';
import '../styles/Header.css';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'HOME', href: '#home' },
    { name: 'SERVICES', href: '#services' },
    { name: 'TEAM', href: '#team' },
    { name: 'GALLERY', href: '#gallery' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="header-content">
          <div className="header-logo">
            <img src={logo} alt="Haarstudio Schönheit" className="logo-image" />
          </div>
          
          <nav className="header-nav">
            {navItems.map((item) => (
              <a 
                key={item.name}
                href={item.href}
                className="header-nav-link"
              >
                {item.name}
                <span className="nav-link-underline"></span>
              </a>
            ))}
            <a 
              href="https://booking-provider.com/haarstudio-schoenheit" 
              target="_blank"
              rel="noopener noreferrer"
              className="header-booking-button"
            >
              BOOK NOW
            </a>
          </nav>
          
          <button 
            className="header-menu-button"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
        
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="header-mobile-nav"
          >
            <div className="mobile-nav-links">
              {navItems.map((item) => (
                <a 
                  key={item.name}
                  href={item.href}
                  className="mobile-nav-link"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a 
                href="https://booking-provider.com/haarstudio-schoenheit" 
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-booking-button"
              >
                BOOK NOW
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};