import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiClock,
  FiInstagram,
  FiFacebook,
} from "react-icons/fi";
import "../styles/Footer.css";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="footer-wave"></div>
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-about">
            <h3 className="footer-logo">Creativ Hairstyling</h3>
            <p className="footer-description">
              Ihr professioneller Haarsalon in Leverkusen für erstklassige
              Haarpflege und modernes Styling.
            </p>
            <div className="footer-social">
              <a href="https://www.instagram.com/creativ.hair.styling/" aria-label="Instagram" className="social-icon">
                <FiInstagram />
              </a>
              <a href="https://www.facebook.com/creativhairstyling/?locale=de_DE" aria-label="Facebook" className="social-icon">
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
                  Hauptstraße 71
                  <br />
                  51373 Leverkusen
                </address>
              </li>
              <li className="footer-item">
                <FiPhone className="footer-icon" />
                <a href="tel:02148692859">0214 8692859</a>
              </li>
              <li className="footer-item">
                <FiMail className="footer-icon" />
                <a href="mailto:salon@creativhairstling.de">
                  salon@creativhairstling.de
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Öffnungszeiten</h4>
            <ul className="footer-list">
              <li className="footer-item">
                <FiClock className="footer-icon" />
                <span>Dienstag-Freitag: 9:00 - 18:00 Uhr</span>
              </li>
              <li className="footer-item">
                <FiClock className="footer-icon" />
                <span>Samstag: 9:00 - 15:00 Uhr</span>
              </li>
              <li className="footer-item">
                <FiClock className="footer-icon" />
                <span>Sonntag und Montag: Geschlossen</span>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-links">
              <li>
                <a href="#home" className="footer-link">
                  Startseite
                </a>
              </li>
              <li>
                <a href="#services" className="footer-link">
                  Leistungen
                </a>
              </li>
              <li>
                <a href="#ueber-uns" className="footer-link">
                  Team
                </a>
              </li>
              <li>
                <a href="#before-after" className="footer-link">
                  Vorher & Nacher
                </a>
              </li>
              <li>
                <a
                  href="https://www.fresha.com/de/a/creative-hair-styling-leverkusen-hauptstrasse-71-ix388dnm/booking?menu=true&pId=2539116&dppub=true&employeeId=4620962"
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
            &copy; {new Date().getFullYear()} Creativ Hairstyling. Alle Rechte
            vorbehalten.
          </p>
          <div className="footer-legal">
            <Link to="/impressum">Impressum</Link>
            <Link to="/datenschutz">Datenschutz</Link>
            <Link to="/agb">AGB</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
