import { motion } from 'framer-motion';
import '../styles/Team.css';

export const Team = () => {
  return (
    <section id="uber-uns" className="uber-uns">
      <div className="uber-uns-container">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="uber-uns-content"
        >
          <h2 className="uber-uns-title">Über Uns</h2>
          
          <div className="uber-uns-text">
            <p>
              Seit 2010 verwandeln wir Haare in Kunstwerke und Frisuren in Statements. 
              Unser Salon in Berlin-Mitte ist mehr als nur ein Hairstudio - 
              es ist ein Ort der Kreativität und Entspannung.
            </p>
            
            <p>
              Unser Team aus erfahrenen Stylisten vereint traditionelle Handwerkskunst 
              mit modernsten Techniken. Jeder Besuch bei uns soll sich wie eine 
              Auszeit vom Alltag anfühlen - bei bestem Service und individueller Beratung.
            </p>
            
            <p>
              Wir glauben an nachhaltige Haarpflege und verwenden ausschließlich 
              hochwertige Produkte, die Haar und Umwelt schonen. 
              Dein Wohlbefinden steht bei uns immer im Mittelpunkt.
            </p>
          </div>
        </motion.div>
        
        {/* Team Photo Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="team-photo-container"
        >
          <img 
            src="https://images.unsplash.com/photo-1588514899099-e2df6951dde6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
            alt="Unser Team" 
            className="team-photo"
          />
          <div className="team-photo-overlay">
            <h3 className="team-photo-title">Unser Team</h3>
            <p className="team-photo-subtitle">Leidenschaft für Haare seit über einem Jahrzehnt</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};