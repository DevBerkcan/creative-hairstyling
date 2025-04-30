import { Footer } from '../components/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import salonImage from "../assets/vorher1.jpg";
import "../styles/ContactPage.css";

export const ContactPage = () => {
  return (
    <div className="contact-page">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="contact-container"
      >
        <Link to="/" className="back-button">
          ← Back to Home
        </Link>
        
        <div className="contact-content">
          <div className="contact-info">
            <h1 className="contact-title">Contact Us</h1>
            <div className="contact-details">
              <p className="contact-address">
                <strong>Salon Name</strong><br />
                Musterstraße 123<br />
                12345 Berlin<br />
                Germany
              </p>
              <p className="contact-phone">
                <strong>Phone:</strong> +49 30 12345678
              </p>
              <p className="contact-email">
                <strong>Email:</strong> info@salonname.com
              </p>
            </div>
            <div className="opening-hours">
              <h3>Opening Hours</h3>
              <p>Monday - Friday: 9:00 - 19:00</p>
              <p>Saturday: 9:00 - 16:00</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
          
          <div className="contact-image-container">
            <img src={salonImage} alt="Our Salon" className="contact-image" />
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
      </motion.div>
            {/* Vertical navigation menu - connected to sections */}
            <nav className="hero-vertical-nav">
        <ul>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/pricing">PRICING</Link></li>
          <li><Link to="/contact">CONTACT</Link></li> 
          <li><Link to="/gallery">GALLERY</Link></li> 
        </ul>
      </nav>
      <Footer />
    </div>
  );
};