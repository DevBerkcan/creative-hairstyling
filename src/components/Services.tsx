import { motion } from 'framer-motion';
import { 
  FaPalette, 
  FaCut, 
  FaLongArrowAltRight,
  FaSprayCan,
  FaShower,
  FaLeaf
} from 'react-icons/fa';
import '../styles/Services.css';

const services = [
  {
    title: "Coloration",
    description: "Du verspürst wieder Lust auf Farbe? Ob Balayage, Paintings oder Strähnen, wir beraten Dich gerne!",
    icon: <FaPalette />
  },
  {
    title: "Haardesign & Styling",
    description: "Du wünschst Dir ein neues Styling? Gerne! Wir beraten Dich und schauen gemeinsam, was am besten zu Dir passt!",
    icon: <FaCut />
  },
  {
    title: "Extensions / Haarverlängerung",
    description: "Hier kann Dein Traum von langen dichten Haaren in Erfüllung gehen. Inspirationen findest Du bei uns auf Instagram!",
    icon: <FaLongArrowAltRight />
  },
  {
    title: "Kosmetik",
    description: "Professionelle Beauty-Behandlungen für ein strahlendes Aussehen. Wir verwenden nur hochwertige Produkte.",
    icon: <FaSprayCan />
  },
  {
    title: "Basics",
    description: "Natürlich bieten wir Dir alle Grund-Dienstleistungen wie Styling, Schnitt und Pflege in unseren Salons an!",
    icon: <FaShower />
  },
  {
    title: "Pflege",
    description: "Intensive Haarbehandlungen für geschädigtes Haar. Wir verwenden ausschließlich Premium-Pflegeprodukte.",
    icon: <FaLeaf />
  }
];

export const Services = () => {
  return (
    <section id="services" className="services">
      <div className="services-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="services-header"
        >
          <h2 className="services-title">Unsere Dienstleistungen</h2>
          <p className="services-subtitle">
            Ein Lächeln bei jedem Besuch - Dein Bo'n Say Hairlounge Team!
          </p>
        </motion.div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="service-card"
              whileHover={{ y: -5 }}
            >
              <div className="service-icon">
                {service.icon}
              </div>
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="services-booking"
        >
          <a 
            href="https://booking-provider.com/haarstudio-schoenheit" 
            target="_blank"
            rel="noopener noreferrer"
            className="booking-button"
          >
            Jetzt Termin vereinbaren
          </a>
        </motion.div>
      </div>
    </section>
  );
};