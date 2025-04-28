// components/Footer.tsx
import { FiMapPin, FiPhone, FiMail, FiClock, FiInstagram, FiFacebook } from 'react-icons/fi';
import '../styles/Footer.css';

export const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-about">
            <h3>Creativ Hairstyling</h3>
            <p>
              Ihr professioneller Haarsalon in Leverkusen für erstklassige Haarpflege und Styling.
            </p>
            <div className="footer-social">
              <a href="#">
                <FiInstagram />
              </a>
              <a href="#">
                <FiFacebook />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Kontakt</h4>
            <ul className="footer-list">
              <li>
                <FiMapPin className="footer-icon" />
                <span>Hauptstraße 71<br />51373 Leverkusen</span>
              </li>
              <li>
                <FiPhone className="footer-icon" />
                <span>02148692859</span>
              </li>
              <li>
                <FiMail className="footer-icon" />
                <span>info@haarstudio-schoenheit.de</span>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Öffnungszeiten</h4>
            <ul className="footer-list">
              <li>
                <FiClock className="footer-icon" />
                <span>Montag - Freitag: 9:00 - 19:00</span>
              </li>
              <li>
                <FiClock className="footer-icon" />
                <span>Samstag: 10:00 - 16:00</span>
              </li>
              <li>
                <FiClock className="footer-icon" />
                <span>Sonntag: Geschlossen</span>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Startseite</a></li>
              <li><a href="#services">Dienstleistungen</a></li>
              <li><a href="#team">Team</a></li>
              <li><a href="#gallery">Galerie</a></li>
              <li>
                <a href="https://booking-provider.com/haarstudio-schoenheit">
                  Termin buchen
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Creativ Hairstyling. Alle Rechte vorbehalten.
          </p>
          <div className="footer-legal">
            <a href="#">Impressum</a>
            <a href="#">Datenschutz</a>
            <a href="#">AGB</a>
          </div>
        </div>
      </div>
    </footer>
  );
};