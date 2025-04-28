import { FiMapPin, FiPhone, FiMail, FiClock, FiInstagram, FiFacebook } from 'react-icons/fi';
import '../styles/Footer.css';

export const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="footer-wave"></div>
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-about">
            <h3 className="footer-logo">Creativ Hairstyling</h3>
            <p className="footer-description">
              Ihr professioneller Haarsalon in Leverkusen für erstklassige Haarpflege und modernes Styling.
            </p>
            <div className="footer-social">
              <a href="#" aria-label="Instagram" className="social-icon">
                <FiInstagram />
              </a>
              <a href="#" aria-label="Facebook" className="social-icon">
                <FiFacebook />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Kontakt</h4>
            <ul className="footer-list">
              <li className="footer-item">
                <FiMapPin className="footer-icon" />
                <address>
                  Hauptstraße 71<br />
                  51373 Leverkusen
                </address>
              </li>
              <li className="footer-item">
                <FiPhone className="footer-icon" />
                <a href="tel:02148692859">0214 8692859</a>
              </li>
              <li className="footer-item">
                <FiMail className="footer-icon" />
                <a href="mailto:info@haarstudio-schoenheit.de">info@haarstudio-schoenheit.de</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Öffnungszeiten</h4>
            <ul className="footer-list">
              <li className="footer-item">
                <FiClock className="footer-icon" />
                <span>Mo-Fr: 9:00 - 19:00 Uhr</span>
              </li>
              <li className="footer-item">
                <FiClock className="footer-icon" />
                <span>Sa: 10:00 - 16:00 Uhr</span>
              </li>
              <li className="footer-item">
                <FiClock className="footer-icon" />
                <span>So: Geschlossen</span>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-links">
              <li><a href="#home" className="footer-link">Startseite</a></li>
              <li><a href="#services" className="footer-link">Leistungen</a></li>
              <li><a href="#team" className="footer-link">Team</a></li>
              <li><a href="#gallery" className="footer-link">Galerie</a></li>
              <li>
                <a 
                  href="https://booking-provider.com/haarstudio-schoenheit" 
                  className="footer-link footer-booking"
                >
                  Online Termin
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} Creativ Hairstyling. Alle Rechte vorbehalten.
          </p>
          <div className="footer-legal">
            <a href="#" className="legal-link">Impressum</a>
            <a href="#" className="legal-link">Datenschutz</a>
            <a href="#" className="legal-link">AGB</a>
          </div>
        </div>
      </div>
    </footer>
  );
};