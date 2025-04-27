// components/Services.tsx
import { motion } from 'framer-motion';
import '../styles/Services.css';

const services = [
  {
    title: "Damenhaarschnitte",
    description: "Moderne und klassische Schnitte, perfekt auf Ihre Gesichtsform und Ihren Lebensstil abgestimmt.",
    price: "ab 45€"
  },
  {
    title: "Herrenhaarschnitte",
    description: "Präzise Schnitte mit modernen Techniken für ein perfektes Ergebnis.",
    price: "ab 35€"
  },
  {
    title: "Coloration",
    description: "Natürliche oder auffällige Farben - wir verwenden nur hochwertige Produkte.",
    price: "ab 65€"
  },
  {
    title: "Strähnen",
    description: "Ob Balayage, Ombré oder klassische Strähnen - wir kreieren den perfekten Look.",
    price: "ab 85€"
  },
  {
    title: "Haarbehandlungen",
    description: "Intensive Pflegebehandlungen für geschädigtes Haar.",
    price: "ab 55€"
  },
  {
    title: "Hochsteckfrisuren",
    description: "Perfekte Frisuren für besondere Anlässe wie Hochzeiten oder Bälle.",
    price: "ab 75€"
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
            Entdecken Sie unser umfassendes Angebot an Haarpflege- und Stylingdienstleistungen. 
            Jede Behandlung wird individuell auf Ihre Bedürfnisse abgestimmt.
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
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <div className="service-footer">
                  <span className="service-price">{service.price}</span>
                  <div className="service-line"></div>
                </div>
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