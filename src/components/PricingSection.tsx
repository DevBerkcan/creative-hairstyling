// components/PricingSection.tsx
import { motion } from 'framer-motion';
import '../styles/PricingSection.css';

export const PricingSection = () => {
  return (
    <section id="pricing" className="pricing-section">
      <div className="pricing-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="pricing-header"
        >
          <h2 className="pricing-title">Unsere Preise</h2>
          <p className="pricing-subtitle">
            Transparente Preisgestaltung für alle Leistungen
          </p>
        </motion.div>
        
        <div className="pricing-grid">
          {/* Women's Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="pricing-card"
          >
            <div className="pricing-card-header">
              <h3>Damen</h3>
              <span>Haarschnitte</span>
            </div>
            <div className="pricing-items">
              <div className="pricing-item">
                <span>Waschen, Schneiden & Föhnen</span>
                <div className="pricing-tier">
                  <span>Kurz: 32 €</span>
                  <span>Mittel: 36 €</span>
                  <span>Lang: 43 €</span>
                </div>
              </div>
              <div className="pricing-item">
                <span>Waschen & Schneiden</span>
                <div className="pricing-tier">
                  <span>Kurz: 23 €</span>
                  <span>Mittel: 28 €</span>
                  <span>Lang: 31 €</span>
                </div>
              </div>
              <div className="pricing-item">
                <span>Brautfrisuren</span>
                <span className="pricing-value">ab 75 €</span>
              </div>
            </div>
          </motion.div>

          {/* Men's Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="pricing-card"
          >
            <div className="pricing-card-header">
              <h3>Herren</h3>
              <span>Haarpflege</span>
            </div>
            <div className="pricing-items">
              <div className="pricing-item">
                <span>Waschen, Schneiden & Föhnen</span>
                <span className="pricing-value">24 €</span>
              </div>
              <div className="pricing-item">
                <span>Trockenschnitt</span>
                <span className="pricing-value">22 €</span>
              </div>
              <div className="pricing-item">
                <span>Bartpflege & Styling</span>
                <span className="pricing-value">18 €</span>
              </div>
            </div>
          </motion.div>

          {/* Color Services - Highlighted */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pricing-card highlight"
          >
            <div className="pricing-card-header">
              <h3>Farbe & Strähnen</h3>
              <span>Coloration</span>
            </div>
            <div className="pricing-items">
              <div className="pricing-item">
                <span>Ansatz färben (bis 2cm)</span>
                <span className="pricing-value">ab 39 €</span>
              </div>
              <div className="pricing-item">
                <span>Vollfärbung</span>
                <span className="pricing-value">ab 45 €</span>
              </div>
              <div className="pricing-item">
                <span>Balayage</span>
                <span className="pricing-value">ab 85 €</span>
              </div>
            </div>
          </motion.div>

          {/* Treatments */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pricing-card"
          >
            <div className="pricing-card-header">
              <h3>Haarpflege</h3>
              <span>Behandlungen</span>
            </div>
            <div className="pricing-items">
              <div className="pricing-item">
                <span>Olaplex Behandlung</span>
                <span className="pricing-value">ab 23 €</span>
              </div>
              <div className="pricing-item">
                <span>Keratin Glättung</span>
                <span className="pricing-value">ab 120 €</span>
              </div>
            </div>
          </motion.div>

          {/* Children */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="pricing-card"
          >
            <div className="pricing-card-header">
              <h3>Kinder</h3>
              <span>bis 14 Jahre</span>
            </div>
            <div className="pricing-items">
              <div className="pricing-item">
                <span>Schneiden (bis 6 Jahre)</span>
                <span className="pricing-value">23 €</span>
              </div>
              <div className="pricing-item">
                <span>Waschen, Schneiden & Föhnen</span>
                <span className="pricing-value">30 €</span>
              </div>
            </div>
          </motion.div>

          {/* Cosmetics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="pricing-card"
          >
            <div className="pricing-card-header">
              <h3>Kosmetik</h3>
              <span>Augen & Gesicht</span>
            </div>
            <div className="pricing-items">
              <div className="pricing-item">
                <span>Augenbrauen zupfen (Faden)</span>
                <span className="pricing-value">8 €</span>
              </div>
              <div className="pricing-item">
                <span>Vollständige Gesichtsbehandlung</span>
                <span className="pricing-value">ab 48 €</span>
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
          <p>* Alle Preise sind Richtwerte. Der endgültige Preis kann je nach Aufwand und Haarlänge variieren.</p>
          <p>** Beratungstermine sind kostenlos und unverbindlich.</p>
        </motion.div>
      </div>
    </section>
  );
};