import { motion } from 'framer-motion';
import '../styles/Team.css';
import team from "../assets/team.jpg";

export const UberUns = () => {
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
              Seit 2023 verwandeln wir Haare in Kunstwerke und Frisuren in Statements. 
              Unser Salon in Leverkusen ist mehr als nur ein Hairstudio - 
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
            src={team} 
            alt="Unser Team" 
            className="team-photo"
          />
          <div className="team-photo-overlay">
            <h3 className="team-photo-title">Unser Team</h3>
            <p className="team-photo-subtitle">Leidenschaft für Haare seit 2023</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};