import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaPhone, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import "../styles/Header.css";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      updateActiveLink();
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const updateActiveLink = () => {
    const sections = ["home", "services", "uber-uns", "before-after", "testimonials"];
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 50 && rect.bottom >= 50) {
          setActiveLink(section);
          break;
        }
      }
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveLink(sectionId);
      setIsMobileMenuOpen(false);
    }
  };

  // Navigation configuration
  const navPages = {
    main: [
      { id: "home", label: "HOME", onClick: () => scrollToSection("home"), to: undefined },
      { id: "services", label: "LEISTUNGEN", onClick: () => scrollToSection("services"), to: undefined },
      { id: "uber-uns", label: "ÜBER UNS", onClick: () => scrollToSection("uber-uns"), to: undefined },
      { id: "before-after", label: "VORHER & NACHER", onClick: () => scrollToSection("before-after"), to: undefined },
    ],
    secondary: [
      { id: "pricing", label: "PREISE", to: "/pricing" },
      { id: "contact", label: "KONTAKT", to: "/contact" },
      { id: "gallery", label: "GALLERY", to: "/gallery" },
    ]
  };

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        {/* Contact Icons - Left Side */}
        <div className="header-contact-icons">
          <a href="tel:02148692859" className="header-icon-link" aria-label="Telefon">
            <FaPhone className="header-icon" />
          </a>
          <a 
            href="https://www.google.com/maps/place/Creativ+Hairstyling/@51.0313099,6.9793577,547m/data=!3m2!1e3!4b1!4m6!3m5!1s0x47bf2eed754b316d:0x9712bb3a046bb38b!8m2!3d51.0313066!4d6.9819326!16s%2Fg%2F1tkks_jc?entry=ttu&g_ep=EgoyMDI1MDUwMy4wIKXMDSoASAFQAw%3D%3D" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="header-icon-link"
            aria-label="Standort"
          >
            <FaMapMarkerAlt className="header-icon" />
          </a>
          <a 
            href="https://www.fresha.com/de/a/creative-hair-styling-leverkusen-hauptstrasse-71-ix388dnm/booking?menu=true&pId=2539116&dppub=true&employeeId=4620962" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="header-icon-link"
            aria-label="Termin buchen"
          >
            <FaCalendarAlt className="header-icon" />
          </a>
        </div>

        {/* Desktop Navigation */}
        {/* Desktop Navigation - Centered */}
        <div className="nav-center-container">
          <nav className="desktop-nav">
            <ul className="main-nav-items">
              {navPages.main.map((item) => (
                <li key={item.id} className={activeLink === item.id ? "active" : ""}>
                  {item.to ? (
                    <Link to={item.to}>{item.label}</Link>
                  ) : (
                    <button onClick={item.onClick}>{item.label}</button>
                  )}
                </li>
              ))}
            </ul>
            <ul className="secondary-nav-items">
              {navPages.secondary.map((item) => (
                <li key={item.id}>
                  <Link to={item.to}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Mobile Navigation */}
        <button 
          className="mobile-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menü öffnen"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <div className={`mobile-nav ${isMobileMenuOpen ? "open" : ""}`}>
          <div className="mobile-nav-sections">
            <div className="mobile-nav-section">
              <h3>Navigation</h3>
              <ul>
                {navPages.main.map((item) => (
                  <li key={item.id} className={activeLink === item.id ? "active" : ""}>
                    {item.to ? (
                      <Link to={item.to} onClick={() => setIsMobileMenuOpen(false)}>
                        {item.label}
                      </Link>
                    ) : (
                      <button onClick={() => {
                        item.onClick();
                        setIsMobileMenuOpen(false);
                      }}>
                        {item.label}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mobile-nav-section">
              <h3>Informationen</h3>
              <ul>
                {navPages.secondary.map((item) => (
                  <li key={item.id}>
                    <Link to={item.to} onClick={() => setIsMobileMenuOpen(false)}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div 
            className="mobile-overlay"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </div>
    </header>
  );
};