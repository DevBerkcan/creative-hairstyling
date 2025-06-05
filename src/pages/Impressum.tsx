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
          <h2>Anbieter:</h2>
          <p>
            Creativ Hair Styling<br />
            Hauptstraße 71<br />
            51373 Leverkusen<br />
            Deutschland
          </p>

          <h2>Kontakt</h2>
          <p>
            Telefon: +49 177 3525548<br />
            E-Mail: duman38fatos@hotmail.de
          </p>

          <h2>Umsatzsteuer-ID</h2>
          <p>
            Umsatzsteuer-Identifikationsnummer: DE359715717
          </p>

          <h2>Kammer:</h2>
          <p>
            Handwerkskammer zu Köln<br />
            Heumarkt 12<br />
            50667 Köln<br />
            Deutschland<br />
            E-Mail: info@hwk-koeln.de<br />
            Webseite: <a href="https://www.hwk-koeln.de" target="_blank" rel="noopener noreferrer">https://www.hwk-koeln.de</a><br />
            Telefon: 0221 2022-0
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

          <p>
            Im Falle von Abweichungen zwischen der deutschen und der englischen Fassung hat die deutsche Fassung Vorrang.
          </p>
        </div>
      </motion.div>
    </div>
    <Footer />
    </div>
  );
};