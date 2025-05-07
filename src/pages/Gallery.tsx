// components/Gallery.tsx
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import vorher1 from "../assets/vorher1.jpg";
import nachher1 from "../assets/nacher1.jpg";
import vorher2 from "../assets/vorher2.jpg";
import nachher2 from "../assets/nacher2.jpg";
import vorher3 from "../assets/vorher3.jpg";
import nachher3 from "../assets/nacher3.jpg";
import "../styles/Gallery.css";
import { Footer } from "../components/Footer";

const galleryImages = [
  {
    src: vorher1,
    alt: "Vorher: Natürliches Braun",
    category: "Coloration",
    type: "before",
  },
  {
    src: nachher1,
    alt: "Nachher: Helles Balayage",
    category: "Coloration",
    type: "after",
  },
  {
    src: vorher2,
    alt: "Vorher: Lockiges Haar",
    category: "Glättung",
    type: "before",
  },
  {
    src: nachher2,
    alt: "Nachher: Glattes Haar",
    category: "Glättung",
    type: "after",
  },
  {
    src: vorher3,
    alt: "Vorher: Kurzer Schnitt",
    category: "Haarschnitt",
    type: "before",
  },
  {
    src: nachher3,
    alt: "Nachher: Moderner Styling",
    category: "Haarschnitt",
    type: "after",
  },
  {
    src: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "Damenhaarschnitt",
    category: "Schnitte",
  },
  {
    src: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "Coloration",
    category: "Farbe",
  },
  {
    src: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "Herrenschnitt",
    category: "Schnitte",
  },
  {
    src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "Hochsteckfrisur",
    category: "Styling",
  },
  {
    src: "https://images.unsplash.com/photo-1559599101-f09722fb4948?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "Haarbehandlung",
    category: "Pflege",
  },
  {
    src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "Strähnen",
    category: "Farbe",
  },
  {
    src: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "Brautfrisur",
    category: "Styling",
  },
  {
    src: "https://images.unsplash.com/photo-1581403341630-a6e0b9d2d257?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "Kinderhaarschnitt",
    category: "Schnitte",
  },
];

export const Gallery = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      {/* Mobile menu button (only visible on small screens) */}
      {windowWidth <= 768 && (
        <button className="mobile-menu-button" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      )}

      <section id="gallery" className="gallery">
        <div className="gallery-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="gallery-header"
          >
            <h2 className="gallery-title">Gallery</h2>
            <p className="gallery-subtitle">
              Entdecken Sie eine Auswahl unserer neuesten Arbeiten und lassen
              Sie sich inspirieren.
            </p>
          </motion.div>

          <div className="gallery-filters">
            <button className="filter-button active">Alle</button>
            <button className="filter-button">Schnitte</button>
            <button className="filter-button">Farbe</button>
            <button className="filter-button">Styling</button>
            <button className="filter-button">Pflege</button>
            <button className="filter-button">Vorher/Nachher</button>
          </div>

          <div className="gallery-grid">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`gallery-item ${image.type ? image.type : ""}`}
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="gallery-image"
                  loading="lazy"
                />
                <div className="gallery-caption">
                  {image.type && (
                    <span className={`gallery-type ${image.type}`}>
                      {image.type === "before" ? "Vorher" : "Nachher"}
                    </span>
                  )}
                  <span className="gallery-category">{image.category}</span>
                  <h3 className="gallery-image-title">{image.alt}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <nav
          className={`gallery-mobile-nav ${
            isMobileMenuOpen ? "mobile-open" : ""
          }`}
        >
          <ul>
            <li>
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
                HOME
              </Link>
            </li>
            <li>
              <Link to="/pricing" onClick={() => setIsMobileMenuOpen(false)}>
                PREISLISTE
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                KONTAKT
              </Link>
            </li>
            <li>
              <Link to="/gallery" onClick={() => setIsMobileMenuOpen(false)}>
                GALLERY
              </Link>
            </li>
          </ul>
        </nav>

        {/* Desktop Navigation Menu */}
        {windowWidth > 768 && (
          <nav className="hero-vertical-nav">
            <ul>
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/pricing">PREISLISTE</Link>
              </li>
              <li>
                <Link to="/contact">KONTAKT</Link>
              </li>
            </ul>
          </nav>
        )}
      </section>
      <Footer />
    </div>
  );
};
