import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/LegalPages.css';

export const Datenschutz = () => {
  return (
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
        
        <h1 className="legal-title">Datenschutzerklärung</h1>
        
        <div className="legal-content">
          <h2>1. Datenschutz auf einen Blick</h2>
          <h3>Allgemeine Informationen</h3>
          <p>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, 
            wenn Sie unsere Website besuchen oder unsere Dienstleistungen in Anspruch nehmen.
          </p>

          <h3>Datenerfassung auf unserer Website</h3>
          <p>
            <strong>Wer ist verantwortlich für die Datenerfassung?</strong><br />
            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum entnehmen.
          </p>

          <h2>2. Allgemeine Informationen und Pflichtangaben</h2>
          <h3>Datenschutz</h3>
          <p>
            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. 
            Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften.
          </p>

          <h3>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
          <p>
            Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. 
            Sie können eine bereits erteilte Einwilligung jederzeit widerrufen.
          </p>

          <h2>3. Datenerfassung auf unserer Website</h2>
          <h3>Kontaktformular</h3>
          <p>
            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben inklusive der von Ihnen dort angegebenen 
            Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
          </p>

          <h3>Terminbuchung</h3>
          <p>
            Für die Buchung von Terminen erfassen wir folgende Daten: Name, Telefonnummer, E-Mail-Adresse und gewünschte Dienstleistung. 
            Diese Daten werden ausschließlich zur Terminvereinbarung und -erinnerung verwendet.
          </p>

          <h2>4. Analyse-Tools und Tools von Drittanbietern</h2>
          <p>
            Beim Besuch unserer Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor allem mit Cookies.
          </p>

          <h2>5. Plugins und Tools</h2>
          <h3>Google Web Fonts</h3>
          <p>
            Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Web Fonts, die von Google bereitgestellt werden.
          </p>
        </div>
      </motion.div>
    </div>
  );
};