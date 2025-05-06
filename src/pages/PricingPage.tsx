// components/PricingSection.tsx
import { motion } from "framer-motion";
import "../styles/PricingSection.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Footer } from "../components/Footer";

export const PricingPage = () => {

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div>
      <section id="pricing" className="pricing-section">
        <div className="pricing-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="pricing-header"
          >
            <h2 className="pricing-title">Preisliste</h2>
            <p className="pricing-subtitle">
              Transparente Preise für alle unsere Leistungen
            </p>
          </motion.div>

          <div className="pricing-grid">
            {/* Damen */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="pricing-card"
            >
              <div className="pricing-card-header">
                <h3>Damen</h3>
                <div className="length-options">
                  <span>Kurz</span>
                  <span>Mittel</span>
                  <span>Lang</span>
                </div>
              </div>
              <div className="pricing-items">
                <div className="pricing-item">
                  <span>Waschen/Schneiden/Föhnen</span>
                  <div className="price-tiers">
                    <span>32 €</span>
                    <span>36 €</span>
                    <span>43 €</span>
                  </div>
                </div>
                <div className="pricing-item">
                  <span>Waschen/Schneiden/Selber Föhnen</span>
                  <div className="price-tiers">
                    <span>23 €</span>
                    <span>28 €</span>
                    <span>31 €</span>
                  </div>
                </div>
                <div className="pricing-item">
                  <span>Locken/Wellen/Stylung</span>
                  <div className="price-tiers">
                    <span>24 €</span>
                    <span>27 €</span>
                    <span>37 €</span>
                  </div>
                </div>
                <div className="pricing-item">
                  <span>Waschen/Föhnen</span>
                  <div className="price-tiers">
                    <span>24 €</span>
                    <span>26 €</span>
                    <span>32 €</span>
                  </div>
                </div>
                <div className="pricing-item">
                  <span>Brautfrisuren</span>
                  <div className="price-tiers">
                    <span>25 €</span>
                    <span>54 €</span>
                    <span>75 €</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Herren */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="pricing-card"
            >
              <div className="pricing-card-header">
                <h3>Herren</h3>
                <div className="length-options">
                  <span>Kurz</span>
                  <span>Mittel</span>
                </div>
              </div>
              <div className="pricing-items">
                <div className="pricing-item">
                  <span>Waschen/Schneiden/Föhnen</span>
                  <div className="price-tiers">
                    <span>21 €</span>
                    <span>23 €</span>
                  </div>
                </div>
                <div className="pricing-item">
                  <span>Trockenschnitt</span>
                  <div className="price-tiers">
                    <span>16 €</span>
                    <span>21 €</span>
                  </div>
                </div>
                <div className="pricing-item">
                  <span>Farbe</span>
                  <div className="price-tiers">
                    <span>28 €</span>
                    <span>31 €</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Kinder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pricing-card"
            >
              <div className="pricing-card-header">
                <h3>Kinder</h3>
              </div>
              <div className="pricing-items">
                <div className="pricing-item">
                  <span>Schneiden/bis 6 Jahre</span>
                  <span className="pricing-value">15 €</span>
                </div>
                <div className="pricing-item">
                  <span>Schneiden ab 4-14 Jahre</span>
                  <span className="pricing-value">23 €</span>
                </div>
                <div className="pricing-item">
                  <span>Waschen/schneiden/föhnen</span>
                  <span className="pricing-value">30 €</span>
                </div>
              </div>
            </motion.div>

            {/* Farbe */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pricing-card highlight"
            >
              <div className="pricing-card-header">
                <h3>Farbe</h3>
                <div className="length-options">
                  <span>Kurz</span>
                  <span>Mittel</span>
                  <span>Lang</span>
                </div>
              </div>
              <div className="pricing-items">
                <div className="pricing-item">
                  <span>Ansatz färben bis 2cm</span>
                  <div className="price-tiers">
                    <span>39 €</span>
                    <span>45 €</span>
                    <span>    </span>
                  </div>
                </div>
                <div className="pricing-item">
                  <span>Fallensträhnen (je nach Aufwand)</span>
                  <div className="price-tiers">
                    <span>38 €</span>
                    <span>58 €</span>
                    <span>68 €</span>
                  </div>
                </div>
                <div className="pricing-item">
                  <span>Balayage</span>
                  <div className="price-tiers">
                    <span>    </span>
                    <span>85 €</span>
                    <span>95 €</span>
                  </div>
                </div>
                <div className="pricing-item">
                  <span>Intensive Tonung</span>
                  <div className="price-tiers">
                    <span>32 €</span>
                    <span>45 €</span>
                    <span>55/75 €</span>
                  </div>
                </div>
                <div className="pricing-item">
                  <span>Blondierung</span>
                  <div className="price-tiers">
                    <span>45 €</span>
                    <span>ab 52 €</span>
                    <span>ab 65 €</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Kosmetik */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="pricing-card"
            >
              <div className="pricing-card-header">
                <h3>Kosmetik</h3>
              </div>
              <div className="pricing-items">
                <div className="pricing-item">
                  <span>Augenbrauen zupfen</span>
                  <span className="pricing-value">8 €</span>
                </div>
                <div className="pricing-item">
                  <span>Augenbrauen u. Wimpern</span>
                  <span className="pricing-value">je 8 €</span>
                </div>
                <div className="pricing-item">
                  <span>Gesichtshaare entfernen komplett</span>
                  <span className="pricing-value">18 €</span>
                </div>
              </div>
            </motion.div>

            {/* Pflege */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="pricing-card"
            >
              <div className="pricing-card-header">
                <h3>Pflege</h3>
              </div>
              <div className="pricing-items">
                <div className="pricing-item">
                  <span>Olaplex je nach coloration</span>
                  <span className="pricing-value">23 €</span>
                </div>
                <div className="pricing-item">
                  <span>Olaplex Premium</span>
                  <span className="pricing-value">58 €</span>
                </div>
                <div className="pricing-item">
                  <span>Pflegebehandlung Premium</span>
                  <span className="pricing-value">23 €</span>
                </div>
                <div className="pricing-item">
                  <span>Intensiv Haarkur</span>
                  <span className="pricing-value">10 €</span>
                </div>
              </div>
            </motion.div>

            {/* Extensions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="pricing-card"
            >
              <div className="pricing-card-header">
                <h3>Extensions</h3>
              </div>
              <div className="pricing-items">
                <div className="pricing-item">
                  <span>Haarverdichtung</span>
                  <span className="pricing-value">ab 80 €</span>
                </div>
                <div className="pricing-item">
                  <span>Haarverlängerung</span>
                  <span className="pricing-value">ab 300 €</span>
                </div>
                <div className="pricing-item">
                  <span>Keratin Behandlung</span>
                  <span className="pricing-value">ab 150 €</span>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="pricing-disclaimer"
          >
            <p>
              * Alle Preise sind in Euro inkl. MwSt. Preise können je nach
              Aufwand variieren.
            </p>
            <p>** Kostenlose Beratungstermine verfügbar.</p>
          </motion.div>
        </div>
        {/* Vertical navigation menu - connected to sections */}
        <nav className="hero-vertical-nav">
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/contact">CONTACT</Link>
            </li>
            <li>
              <Link to="/gallery">GALLERY</Link>
            </li>
          </ul>
        </nav>
      </section>
      <Footer />
    </div>
  );
};
