import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/LegalPages.css';
import { Footer } from '../components/Footer';
import { useEffect } from 'react';

export const Impressum = () => {

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <div>
    <div className="legal-page">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="legal-container"
      >
        <Link to="/" className="back-button">
          ← Zurück zur Startseite
        </Link>
        
        <h1 className="legal-title">Impressum</h1>
        
        <div className="legal-content">
          <h2>Angaben gemäß § 5 TMG</h2>
          <p>
            Haarstudio Schönheit<br />
            Inhaber: Max Mustermann<br />
            Musterstraße 123<br />
            10115 Berlin
          </p>

          <h2>Kontakt</h2>
          <p>
            Telefon: +49 30 12345678<br />
            E-Mail: info@haarstudio-schoenheit.de<br />
            Termine nur nach Vereinbarung
          </p>

          <h2>Umsatzsteuer-ID</h2>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß §27a Umsatzsteuergesetz:<br />
            DE123456789
          </p>

          <h2>Berufsbezeichnung und berufsrechtliche Regelungen</h2>
          <p>
            Berufsbezeichnung: Friseurmeister<br />
            Zuständige Kammer: Handwerkskammer Berlin<br />
            Verliehen in: Deutschland<br />
            Es gelten die Berufsordnung der Friseurinnung Berlin.
          </p>

          <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
          <p>
            Max Mustermann<br />
            Musterstraße 123<br />
            10115 Berlin
          </p>

          <h2>EU-Streitschlichtung</h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:<br />
            <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">
              https://ec.europa.eu/consumers/odr/
            </a><br />
            Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>

          <h2>Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
          <p>
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </div>
      </motion.div>
    </div>
    <Footer />
    </div>
  );
};