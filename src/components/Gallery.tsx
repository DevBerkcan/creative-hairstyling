// components/Gallery.tsx
import { motion } from 'framer-motion';
import '../styles/Gallery.css';

const galleryImages = [
  { 
    src: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", 
    alt: "Damenhaarschnitt",
    category: "Schnitte"
  },
  { 
    src: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", 
    alt: "Coloration",
    category: "Farbe"
  },
  { 
    src: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", 
    alt: "Herrenschnitt",
    category: "Schnitte"
  },
  { 
    src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", 
    alt: "Hochsteckfrisur",
    category: "Styling"
  },
  { 
    src: "https://images.unsplash.com/photo-1559599101-f09722fb4948?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", 
    alt: "Haarbehandlung",
    category: "Pflege"
  },
  { 
    src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80", 
    alt: "Strähnen",
    category: "Farbe"
  }
];

export const Gallery = () => {
  return (
    <section id="gallery" className="gallery">
      <div className="gallery-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="gallery-header"
        >
          <h2 className="gallery-title">Unsere Arbeiten</h2>
          <p className="gallery-subtitle">
            Entdecken Sie eine Auswahl unserer neuesten Arbeiten und lassen Sie sich inspirieren.
          </p>
        </motion.div>

        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="gallery-item"
              whileHover={{ scale: 1.02 }}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="gallery-image"
                loading="lazy"
              />
              <div className="gallery-caption">
                <span className="gallery-category">{image.category}</span>
                <h3 className="gallery-image-title">{image.alt}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};