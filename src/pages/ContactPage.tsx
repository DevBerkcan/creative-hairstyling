import { Footer } from '../components/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import salonImage from "../assets/vorher1.jpg";
import "../styles/ContactPage.css";
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi';
import { useEffect } from 'react';

export const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contact-page">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="contact-container"
      >
        <div className="contact-wrapper">
          <div className="contact-content">
            <div className="contact-info">
              <h1 className="contact-title">Kontakt</h1>
              <div className="contact-details">
                <div className="contact-item">
                  <FiMapPin className="contact-icon" />
                  <div>
                    <strong>Creativ Hairstyling</strong><br />
                    Hauptstraße 71<br />
                    51373 Leverkusen<br />
                    Deutschland
                  </div>
                </div>
                <div className="contact-item">
                  <FiPhone className="contact-icon" />
                  <a href="tel:02148692859">0214 8692859</a>
                </div>
                <div className="contact-item">
                  <FiMail className="contact-icon" />
                  <a href="mailto:info@haarstudio-schoenheit.de">info@haarstudio-schoenheit.de</a>
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
            
            <div className="contact-image-container">
              <img src={salonImage} alt="Unser Salon" className="contact-image" />
            </div>
          </div>
          
          <div className="map-container">
            <iframe
              title="Salon Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2509.1693438298325!2d6.982519766057152!3d51.03149296919135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bf2eed754b316d%3A0x9712bb3a046bb38b!2sCreativ%20Hairstyling!5e0!3m2!1sen!2sde!4v1746001307899!5m2!1sen!2sde"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </motion.div>
      <nav className="hero-vertical-nav">
        <ul>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/pricing">PRICING</Link></li>
          <li><Link to="/gallery">GALLERY</Link></li> 
        </ul>
      </nav>
      <Footer />
    </div>
  );
};