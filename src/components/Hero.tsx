import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import "../styles/Hero.css";
import backgroundImage1 from "../assets/frisur.jpg";
import backgroundImage2 from "../assets/gettyimages-450245049_sf.webp";
import { FaPhone, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

export const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacityBg = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);

  const slides = [
    {
      title: "Ihr perfekter Haarschnitt",
      description: "Professionelle Haarpflege und Styling in entspannter Atmosphäre. Entdecken Sie unsere Premium-Dienstleistungen für Ihren perfekten Look.",
      buttonText: "Jetzt Termin buchen",
      background: backgroundImage1
    },
    {
      title: "Luxuriöses Salon-Erlebnis",
      description: "Genießen Sie erstklassigen Service in unserem exklusiven Ambiente. Wir verwenden nur hochwertigste Produkte für Ihr Haar.",
      buttonText: "Unsere Leistungen",
      background: backgroundImage2
    },
    {
      title: "New York's Since 2004",
      description: "Tradition meets modern hairstyling. Unser erfahrenes Team steht Ihnen mit jahrelanger Expertise zur Verfügung.",
      buttonText: "Über uns",
      background: backgroundImage1
    }
  ];

  // Auto slide change every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="home" className="hero" ref={ref}>
      {/* Top left icons */}
      <div className="hero-top-icons">
        <a href="tel:+123456789" className="hero-icon-link">
          <FaPhone className="hero-icon" />
        </a>
        <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="hero-icon-link">
          <FaMapMarkerAlt className="hero-icon" />
        </a>
        <a href="https://booking-provider.com/haarstudio-schoenheit" target="_blank" rel="noopener noreferrer" className="hero-icon-link">
          <FaCalendarAlt className="hero-icon" />
        </a>
      </div>

      {/* Full-screen background images */}
      {slides.map((slide, index) => (
        <motion.div 
          key={index}
          className={`hero-background-image ${index === activeSlide ? 'active' : ''}`}
          style={{
            backgroundImage: `url(${slide.background})`,
            y: yBg,
            opacity: index === activeSlide ? opacityBg : 0
          }}
        >
          <div className="hero-background-overlay"></div>
        </motion.div>
      ))}

      {/* Content container */}
      <div className="hero-container">
        <div className="hero-content-centered">
          <motion.div
            key={activeSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="hero-text-content"
          >
            <h1 className="hero-title">
              {slides[activeSlide].title.split(' ').map((word, i) => (
                <span key={i} className="hero-title-word">
                  {word}{' '}
                </span>
              ))}
            </h1>
            <p className="hero-description">
              {slides[activeSlide].description}
            </p>
            <div className="hero-buttons">
              <motion.a
                href={activeSlide === 0 ? "https://booking-provider.com/haarstudio-schoenheit" : "#services"}
                target={activeSlide === 0 ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="hero-button hero-button-primary"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0px 5px 15px rgba(0,0,0,0.2)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                {slides[activeSlide].buttonText}
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Slider navigation */}
      <div className="hero-slider-nav">
        <div className="hero-slider-numbers">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`hero-slider-number ${index === activeSlide ? 'active' : ''}`}
              onClick={() => setActiveSlide(index)}
            >
              {String(index + 1).padStart(2, '0')}
            </button>
          ))}
        </div>
        
        <div className="hero-slider-arrows">
          <button className="hero-slider-arrow" onClick={prevSlide}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
            </svg>
          </button>
          <button className="hero-slider-arrow" onClick={nextSlide}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Vertical navigation menu - connected to sections */}
      <nav className="hero-vertical-nav">
        <ul>
          <li onClick={() => scrollToSection('home')}>HOME</li>
          <li onClick={() => scrollToSection('services')}>SERVICES</li>
          <li onClick={() => scrollToSection('team')}>TEAM</li>
          <li onClick={() => scrollToSection('gallery')}>GALLERY</li>
          <li onClick={() => scrollToSection('pricing')}>PRICING</li>
          <li onClick={() => scrollToSection('testimonials')}>TESTIMONIALS</li>
        </ul>
      </nav>
    </section>
  );
};