import { Footer } from '../components/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import vorher1 from "../assets/vorher1.jpg";
import nacher1 from "../assets/nacher1.jpg";
import vorher2 from "../assets/vorher2.jpg";
import nacher2 from "../assets/nacher2.jpg";
import vorher3 from "../assets/vorher3.jpg";
import nacher3 from "../assets/nacher3.jpg";
import "../styles/GalleryPage.css";

const galleryImages = [
  { id: 1, src: vorher1, title: "Before 1" },
  { id: 2, src: nacher1, title: "After 1" },
  { id: 3, src: vorher2, title: "Before 2" },
  { id: 4, src: nacher2, title: "After 2" },
  { id: 5, src: vorher3, title: "Before 3" },
  { id: 6, src: nacher3, title: "After 3" },
];

export const GalleryPage = () => {
  return (
    <div className="gallery-page">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="gallery-container"
      >
        <Link to="/" className="back-button">
          ← Back to Home
        </Link>
        <h1 className="gallery-title">Our Gallery</h1>
        <div className="gallery-grid">
          {galleryImages.map((image) => (
            <motion.div
              key={image.id}
              whileHover={{ scale: 1.03 }}
              className="gallery-item"
            >
              <img src={image.src} alt={image.title} className="gallery-image" />
              <div className="image-overlay">
                <p>{image.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
                  {/* Vertical navigation menu - connected to sections */}
                  <nav className="hero-vertical-nav">
        <ul>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/pricing">PRICING</Link></li>
          <li><Link to="/contact">CONTACT</Link></li> 
          <li><Link to="/gallery">GALLERY</Link></li> 
        </ul>
      </nav>
      <Footer />
    </div>
  );
};