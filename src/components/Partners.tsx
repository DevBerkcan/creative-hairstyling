import "../styles/Partners.css";
import { motion } from "framer-motion";
import bergrath from "../assets/bergrath.svg";
import echos from "../assets/echos2.jpg";
import ghd from "../assets/ghd.jpeg";
import hi from "../assets/hi.png";
import milbon from "../assets/milbon2.jpg";

const partners = [
  { 
    name: "Bergrath", 
    logo: bergrath,
    alt: "Bergrath Professional Haircare Logo"
  },
  { 
    name: "Echos", 
    logo: echos,
    alt: "Echos Hair Products Logo"
  },
  { 
    name: "GHD", 
    logo: ghd,
    alt: "GHD Hair Tools Logo"
  },
  { 
    name: "HI", 
    logo: hi,
    alt: "HI Haircare Logo"
  },
  { 
    name: "Milbon", 
    logo: milbon,
    alt: "Milbon Professional Haircare Logo"
  }
];

export const Partners = () => {
  return (
    <section className="partners-section">
      <div className="partners-container">
        <motion.div 
          className="partners-track"
          initial={{ x: 0 }}
          animate={{ x: '-50%' }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {[...partners, ...partners].map((partner, index) => (
            <motion.div 
              key={`${partner.name}-${index}`} 
              className="partner-logo"
              whileHover={{ scale: 1.1 }}
            >
              <img 
                src={partner.logo} 
                alt={partner.alt}
                className="partner-image"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};