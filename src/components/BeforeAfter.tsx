import { useState } from "react";
import { motion } from "framer-motion";
import vorher1 from "../assets/vorher1.jpg";
import nacher1 from "../assets/nacher1.jpg";
import vorher2 from "../assets/vorher2.jpg";
import nacher2 from "../assets/nacher2.jpg";
import vorher3 from "../assets/vorher3.jpg";
import nacher3 from "../assets/nacher3.jpg";
import "../styles/BeforeAfter.css";
import { Link } from "react-router-dom";

const transformations = [
  {
    id: 1,
    before: vorher3,
    after: nacher3,
    title: "Coloration Transformation",
    description: "Von natürlichem Braun zu hellem Balayage",
  },
  {
    id: 2,
    before: vorher1,
    after: nacher1,
    title: "Haarschnitt Verjüngung",
    description: "Modernes Styling für mehr Volumen",
  },
  {
    id: 3,
    before: vorher2,
    after: nacher2,
    title: "Glättungsbehandlung",
    description: "Von lockig zu glatt und geschmeidig",
  },
];

export const BeforeAfter = () => {
  const [sliderPositions, setSliderPositions] = useState<
    Record<number, number>
  >(transformations.reduce((acc, curr) => ({ ...acc, [curr.id]: 50 }), {}));

  const handleSliderChange = (id: number, value: number) => {
    setSliderPositions((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <section id="before-after" className="before-after">
      <div className="before-after-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="before-after-header"
        >
          <h2 className="before-after-title">Vorher & Nachher</h2>
          <p className="before-after-subtitle">
            Entdecken Sie unsere Transformationsergebnisse - bewegen Sie den
            Slider, um den Unterschied zu sehen!
          </p>
        </motion.div>

        <div className="before-after-grid">
          {transformations.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: item.id * 0.1 }}
              className="before-after-card"
            >
              <div className="image-comparison">
                <div
                  className="before-image"
                  style={{ backgroundImage: `url(${item.before})` }}
                />
                <div
                  className="after-image"
                  style={{
                    backgroundImage: `url(${item.after})`,
                    width: `${sliderPositions[item.id]}%`,
                  }}
                />
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPositions[item.id]}
                  onChange={(e) =>
                    handleSliderChange(item.id, parseInt(e.target.value))
                  }
                  className="slider"
                />
                <div
                  className="slider-button"
                  style={{ left: `${sliderPositions[item.id]}%` }} // Dynamic position
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7l4-4 4 4m0 6l-4 4-4-4"
                    />
                  </svg>
                </div>
              </div>

              <div className="before-after-info">
                <h3 className="transformation-title">{item.title}</h3>
                <p className="transformation-description">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="gallery-button-container">
          <Link to="/gallery" className="booking-button">
            Gesamte Galerie
          </Link>
        </div>
      </div>

    </section>
  );
};
