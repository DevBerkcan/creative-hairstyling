import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/LegalPages.css';
import { Footer } from '../components/Footer';
import { useEffect } from 'react';

export const AGB = () => {

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
        
        <h1 className="legal-title">Allgemeine Geschäftsbedingungen (AGB)</h1>
        
        <div className="legal-content">
          <h2>1. Geltungsbereich</h2>
          <p>
            Diese Allgemeinen Geschäftsbedingungen gelten für alle Dienstleistungen des Haarstudio Schönheit, 
            Musterstraße 123, 10115 Berlin, nachfolgend "Friseursalon" genannt.
          </p>

          <h2>2. Leistungen und Preise</h2>
          <p>
            a) Der Friseursalon erbringt die vereinbarten Dienstleistungen nach dem jeweils gültigen Preisverzeichnis.<br />
            b) Alle Preise verstehen sich in Euro inklusive der gesetzlichen Mehrwertsteuer.
          </p>

          <h2>3. Terminvereinbarung und Stornierung</h2>
          <p>
            a) Termine können telefonisch, per E-Mail oder online vereinbart werden.<br />
            b) Bei Nichterscheinen oder Verspätung von mehr als 15 Minuten behalten wir uns vor, 
            eine Ausfallgebühr in Höhe von 50% des vereinbarten Preises zu berechnen.<br />
            c) Stornierungen sind bis zu 24 Stunden vor dem Termin kostenfrei möglich.
          </p>

          <h2>4. Zahlungsbedingungen</h2>
          <p>
            a) Die Zahlung erfolgt unmittelbar nach Erbringung der Leistung in bar oder mit EC-Karte.<br />
            b) Rechnungen sind sofort nach Erhalt fällig.
          </p>

          <h2>5. Haftung</h2>
          <p>
            a) Der Friseursalon haftet nicht für leichte Fahrlässigkeit.<br />
            b) Bei allergischen Reaktionen auf verwendete Produkte muss der Kunde den Friseursalon unverzüglich informieren.
          </p>

          <h2>6. Datenschutz</h2>
          <p>
            Die Erhebung und Verarbeitung personenbezogener Daten erfolgt gemäß der geltenden Datenschutzbestimmungen.
          </p>

          <h2>7. Schlussbestimmungen</h2>
          <p>
            a) Gerichtsstand ist Berlin.<br />
            b) Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt die Gültigkeit der übrigen Bestimmungen unberührt.
          </p>

          <p className="effective-date">Gültig ab: 01. Januar 2023</p>
        </div>
      </motion.div>

    </div>
    <Footer/>
    </div>
  );
};