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
import image2 from "../assets/2.jpg";
import image3 from "../assets/3.jpg";
import image4 from "../assets/4.jpg";
import image5 from "../assets/5.jpg";
import image6 from "../assets/6.jpg";
import image7 from "../assets/7.jpg";
import image8 from "../assets/8.jpg";
import image9 from "../assets/9.jpg";
import image10 from "../assets/10.jpg";
import vorher4 from "../assets/vorher4.jpg";
import nachher4 from "../assets/nacher4.jpg";
import vorher5 from "../assets/vorher5.jpg";
import nachher5 from "../assets/nacher5.jpg";
import vorher6 from "../assets/vorher6.jpg";
import nachher6 from "../assets/nacher6.jpg";
import vorher7 from "../assets/vorher7.jpg";
import nachher7 from "../assets/nacher7.jpg";
import vorher8 from "../assets/vorher8.jpg";
import nachher8 from "../assets/nacher8.jpg";
import vorher9 from "../assets/vorher9.jpg";
import nachher9 from "../assets/nacher9.jpg";
import "../styles/Gallery.css";
import { Footer } from "../components/Footer";

const galleryImages = [
  { src: vorher1, alt: "Vorher: Natürliches Braun", category: "Coloration", type: "before" },
  { src: nachher1, alt: "Nachher: Helles Balayage", category: "Coloration", type: "after" },
  { src: vorher2, alt: "Vorher: Lockiges Haar", category: "Glättung", type: "before" },
  { src: nachher2, alt: "Nachher: Glattes Haar", category: "Glättung", type: "after" },
  { src: vorher3, alt: "Vorher: Kurzer Schnitt", category: "Haarschnitt", type: "before" },
  { src: nachher3, alt: "Nachher: Moderner Styling", category: "Haarschnitt", type: "after" },
  { src: image2, alt: "Damenhaarschnitt", category: "Schnitte" },
  { src: image3, alt: "Coloration", category: "Farbe" },
  { src: image4, alt: "Haarschnitt", category: "Schnitte" },
  { src: image5, alt: "Hochsteckfrisur", category: "Styling" },
  { src: image6, alt: "Haarbehandlung", category: "Pflege" },
  { src: image7, alt: "Strähnen", category: "Farbe" },
  { src: image8, alt: "Brautfrisur", category: "Styling" },
  { src: image9, alt: "Haarschnitt", category: "Schnitte" },
  { src: image10, alt: "Haarschnitt", category: "Schnitte" },
  { src: vorher4, alt: "Haarschnitt", category: "Vorher", type: "before" },
  { src: nachher4, alt: "Haarschnitt", category: "Nachher", type: "after" },
  { src: vorher5, alt: "Haarschnitt", category: "Vorher", type: "before" },
  { src: nachher5, alt: "Haarschnitt", category: "Nachher", type: "after" },
  { src: vorher6, alt: "Haarschnitt", category: "Vorher", type: "before" },
  { src: nachher6, alt: "Haarschnitt", category: "Nachher", type: "after" },
  { src: vorher7, alt: "Haarschnitt", category: "Vorher", type: "before" },
  { src: nachher7, alt: "Haarschnitt", category: "Nachher", type: "after" },
  { src: vorher8, alt: "Haarschnitt", category: "Vorher", type: "before" },
  { src: nachher8, alt: "Haarschnitt", category: "Nachher", type: "after" },
  { src: vorher9, alt: "Haarschnitt", category: "Vorher", type: "before" },
  { src: nachher9, alt: "Haarschnitt", category: "Nachher", type: "after" },
];

export const Gallery = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [activeFilter, setActiveFilter] = useState("Alle");

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

  const filters = ["Alle", "Schnitte", "Farbe", "Styling", "Pflege", "Vorher/Nachher"];

  const filteredImages = galleryImages.filter((image) => {
    if (activeFilter === "Alle") return true;
    if (activeFilter === "Vorher/Nachher") {
      return image.type === "before" || image.type === "after";
    }
    return image.category === activeFilter;
  });

  return (
    <div>
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
              Entdecken Sie eine Auswahl unserer neuesten Arbeiten und lassen Sie sich inspirieren.
            </p>
          </motion.div>

          <div className="gallery-filters">
            {filters.map((filter) => (
              <button
                key={filter}
                className={`filter-button ${activeFilter === filter ? "active" : ""}`}
                onClick={() => {
                  setActiveFilter(filter);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="gallery-grid">
            {filteredImages.map((image, index) => (
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

        <nav
          className={`gallery-mobile-nav ${isMobileMenuOpen ? "mobile-open" : ""}`}
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

        {windowWidth > 768 && (
          <nav className="hero-vertical-nav">
            <ul>
              <li><Link to="/">HOME</Link></li>
              <li><Link to="/pricing">PREISLISTE</Link></li>
              <li><Link to="/contact">KONTAKT</Link></li>
            </ul>
          </nav>
        )}
      </section>

      <Footer />
    </div>
  );
};
