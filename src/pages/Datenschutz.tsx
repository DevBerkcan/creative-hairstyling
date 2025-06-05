import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/LegalPages.css';
import { Footer } from '../components/Footer';
import { useEffect } from 'react';

export const Datenschutz = () => {

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

          <h1 className="legal-title">Datenschutzerklärung</h1>

          <div className="legal-content">
            <h2>Allgemein</h2>
            <p>
              Als Betreiber dieser Webseite und als Unternehmen kommen wir mit Ihren personenbezogenen Daten in Kontakt.
              Gemeint sind alle Daten, die etwas über Sie aussagen und mit denen Sie identifiziert werden können.
              In dieser Datenschutzerklärung möchten wir Ihnen erläutern, in welcher Weise, zu welchem Zweck und auf welcher
              rechtlichen Grundlage wir Ihre Daten verarbeiten.
            </p>

            <h2>Verantwortliche Stelle</h2>
            <p>
              Creativ Hair Styling<br />
              Hauptstraße 71<br />
              51373 Leverkusen<br />
              Deutschland<br />
              Telefon: +49 177 3525548<br />
              E-Mail: duman38fatos@hotmail.de
            </p>

            <h2>Erhebung und Speicherung personenbezogener Daten</h2>
            <p>
              Beim Besuch dieser Website werden automatisch Informationen allgemeiner Natur erfasst.
              Diese Informationen (Server-Logfiles) beinhalten z. B. die Art des Webbrowsers, das verwendete Betriebssystem,
              den Domainnamen Ihres Internet Service Providers und Ähnliches. Hierbei handelt es sich ausschließlich um Informationen,
              welche keine Rückschlüsse auf Ihre Person zulassen.
            </p>

            <h2>Kontaktformular</h2>
            <p>
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Formular inklusive der von Ihnen
              dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
              Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>

            <h2>Ihre Rechte</h2>
            <p>Sie haben das Recht:</p>
            <ul>
              <li>Auskunft über Ihre bei uns gespeicherten Daten und deren Verarbeitung zu erhalten,</li>
              <li>Berichtigung unrichtiger personenbezogener Daten zu verlangen,</li>
              <li>Löschung Ihrer bei uns gespeicherten Daten zu verlangen („Recht auf Vergessenwerden“),</li>
              <li>die Einschränkung der Datenverarbeitung zu verlangen, sofern wir Ihre Daten aufgrund gesetzlicher Pflichten noch nicht löschen dürfen,</li>
              <li>Widerspruch gegen die Verarbeitung Ihrer Daten einzulegen,</li>
              <li>und Datenübertragbarkeit zu verlangen, sofern Sie in die Datenverarbeitung eingewilligt haben oder einen Vertrag mit uns abgeschlossen haben.</li>
            </ul>

            <h2>Beschwerderecht bei der Aufsichtsbehörde</h2>
            <p>
              Sie können sich jederzeit mit einer Beschwerde an die für Sie zuständige Aufsichtsbehörde wenden.
              Ihre zuständige Aufsichtsbehörde richtet sich nach dem Bundesland Ihres Wohnsitzes, Ihrer Arbeit oder der mutmaßlichen Verletzung.
            </p>

            <h2>Änderung unserer Datenschutzbestimmungen</h2>
            <p>
              Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht
              oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen, z. B. bei der Einführung neuer Services.
            </p>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};
