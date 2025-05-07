import { Footer } from "../components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import salonImage from "../assets/salon.jpeg";
import "../styles/ContactPage.css";
import { FiMapPin, FiPhone, FiMail, FiClock } from "react-icons/fi";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export const ContactPage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="contact-page">
      {/* Mobile menu button (only visible on small screens) */}
      {windowWidth <= 768 && (
        <button className="mobile-menu-button" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="contact-container"
      >
        <div className="contact-wrapper">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="contact-header"
          >
            <h2 className="contact-title">Kontakt</h2>
            <p className="contact-subtitle">
              Wir freuen uns auf Ihren Besuch in unserem Salon. Vereinbaren Sie
              noch heute einen Termin.
            </p>
          </motion.div>

          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-details">
                <div className="contact-item">
                  <FiMapPin className="contact-icon" />
                  <div>
                    <strong>Creativ Hairstyling</strong>
                    <br />
                    Hauptstraße 71
                    <br />
                    51373 Leverkusen
                    <br />
                    Deutschland
                  </div>
                </div>
                <div className="contact-item">
                  <FiPhone className="contact-icon" />
                  <a href="tel:02148692859">0214 8692859</a>
                </div>
                <div className="contact-item">
                  <FiMail className="contact-icon" />
                  <a href="mailto:salon@creativhairstling.de">
                    salon@creativhairstling.de
                  </a>
                </div>
              </div>
              <div className="opening-hours">
                <h3 className="hours-title">
                  <FiClock className="hours-icon" />
                  Öffnungszeiten
                </h3>
                <div className="hours-item">
                  <span>Dienstag-Freitag:</span>
                  <span>9:00 - 18:00 Uhr</span>
                </div>
                <div className="hours-item">
                  <span>Samstag:</span>
                  <span>9:00 - 15:00 Uhr</span>
                </div>
                <div className="hours-item">
                  <span>Sonntag & Montag:</span>
                  <span>Geschlossen</span>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="contact-image-container"
            >
              <img
                src={salonImage}
                alt="Unser Salon"
                className="contact-image"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="map-container"
          >
            <iframe
              title="Salon Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2509.1693438298325!2d6.982519766057152!3d51.03149296919135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bf2eed754b316d%3A0x9712bb3a046bb38b!2sCreativ%20Hairstyling!5e0!3m2!1sen!2sde!4v1746001307899!5m2!1sen!2sde"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </motion.div>
        </div>
      </motion.div>

      {/* Mobile Navigation Menu */}
      <nav
        className={`contact-mobile-nav ${
          isMobileMenuOpen ? "mobile-open" : ""
        }`}
      >
        <ul>
          <li>
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
              HOME
            </Link>
          </li>
          <li>
            <Link to="/pricing" onClick={() => setIsMobileMenuOpen(false)}>
              PREISLISTE
            </Link>
          </li>
          <li>
            <Link to="/gallery" onClick={() => setIsMobileMenuOpen(false)}>
              GALLERY
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
              KONTAKT
            </Link>
          </li>
        </ul>
      </nav>

      {/* Desktop Navigation Menu */}
      {windowWidth > 768 && (
        <nav className="hero-vertical-nav">
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/pricing">PREISLISTE</Link>
            </li>
            <li>
              <Link to="/gallery">GALLERY</Link>
            </li>
          </ul>
        </nav>
      )}

      <Footer />
    </div>
  );
};
