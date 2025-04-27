// components/BookingBanner.tsx
import { motion } from 'framer-motion';
import { FiCalendar, FiScissors, FiSmile } from 'react-icons/fi';
import '../styles/BookingBanner.css';

export const BookingBanner = () => {
  return (
    <section className="booking-banner">
      <div className="booking-banner-decoration">
        <div className="booking-banner-circle-1"></div>
        <div className="booking-banner-circle-2"></div>
      </div>
      
      <div className="booking-banner-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="booking-banner-content"
        >
          <div className="booking-banner-text">
            <h2>Ihr perfekter Termin wartet auf Sie</h2>
            <p>
              Vereinbaren Sie noch heute einen Termin mit unseren Experten und erleben Sie 
              erstklassigen Service in entspannter Atmosphäre.
            </p>
            
            <div className="booking-features">
              <div className="booking-feature">
                <div className="booking-feature-icon">
                  <FiCalendar />
                </div>
                <span>Einfache Online-Buchung</span>
              </div>
              <div className="booking-feature">
                <div className="booking-feature-icon">
                  <FiScissors />
                </div>
                <span>Professionelle Stylisten</span>
              </div>
              <div className="booking-feature">
                <div className="booking-feature-icon">
                  <FiSmile />
                </div>
                <span>100% Zufriedenheit</span>
              </div>
            </div>
          </div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="booking-button-container"
          >
            <a 
              href="https://booking-provider.com/haarstudio-schoenheit" 
              target="_blank"
              rel="noopener noreferrer"
              className="booking-button"
            >
              <FiCalendar className="booking-button-icon" />
              Online Termin buchen
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};