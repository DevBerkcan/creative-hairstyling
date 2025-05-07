// components/Testimonials.tsx
import { motion } from "framer-motion";
import "../styles/Testimonials.css";

const testimonials = [
  {
    name: "Jennifer Adolphs",
    content:
      "Sehr zu empfehlen! Nette Chefin & Mitarbeiter. Ich persönlich stelle mich als Modell für die Ausbildung zur Verfügung und bin sehr zufrieden. Natürlich ist es aufgrund der Ausbildung zeitintensiver, was aber auch so sein muss! Man bekommt dann auch mit wie andere Kunden bedient werden, was die gute Atmosphäre & Professonalität wiederspiegelt. Ich kann es nur empfehlen, vielleicht stellt sich jemand , der das jetzt liest, auch als Modell zur Verfügung",
    rating: 5,
  },
  {
    name: "Mira Boutique",
    content:
      "Super tolle Chefin und Mitarbeiterinnen. Sehr sympathisch und freundlich. Man hat sich sehr wohl und willkommen gefühlt. Sie haben auch einen Bereich für Hijabis und waren sehr hilfsbereit. Der Schnitt war der beste Schnitt den ich bisher hatte und Föhnen war auch top. Sehr sehr zufrieden und komme aufjedenfall wieder.",
    rating: 5,
  },
  {
    name: "Isabella Baumann",
    content:
      "Ich bin am 16.06.23 verzweifelt in den Friseurladen gekommen😭 mir wurde von zwei vorherigen Friseursalons mitgeteilt dass man meinen schwarzen Ansatz 🤣😂🤣😂( ist jetzt unser persönlicher Insider ) leider nicht hell bekommt.\nIch war natürlich verzweifelt ,da ich wieder schönes blondes Haar haben wollte.\nMir wurde von Fatma und ihrer Mitarbeiterin sofort zugesichert ,dass man das selbstverständlich hinbekommt und ich mir keine Sorgen machen muss.\nIch war bei Fatma und ihrem Team in den besten Händen 🥰🫶 seitdem geh ich nirgendwo anders mehr hin ☺️ man fühlt sich absolut sicher aufgehoben.\nEs ist eine sehr gemütlich warme Atmosphäre.\nMan hat immer was zu quatschen und zu lachen😊🫶",
    rating: 5,
  },
];

const RatingStars = ({ rating }: { rating: number }) => {
  return (
    <div className="rating-stars">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`star ${i < rating ? "filled" : "empty"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

export const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials">
      <div className="testimonials-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="testimonials-header"
        >
          <h2 className="testimonials-title">Kundenstimmen</h2>
          <p className="testimonials-subtitle">
            Das sagen unsere zufriedenen Kunden über uns
          </p>
        </motion.div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="testimonial-card"
              whileHover={{ y: -5 }}
            >
              <div className="testimonial-content">
                <RatingStars rating={testimonial.rating} />
                <p className="testimonial-text">"{testimonial.content}"</p>
                <div className="testimonial-author">
                  <div className="author-info">
                    <h4 className="author-name">{testimonial.name}</h4>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="more-reviews-button-container">
          <a
            href="https://www.google.com/search?sa=X&sca_esv=bf2c799dee4adccd&rlz=1C1GCEU_deDE1102DE1102&tbm=lcl&sxsrf=AHTn8zqLgtVI3PXRiNf4MuJNA4b7kKcvOQ:1746610066389&q=Creativ+Hairstyling+Reviews&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIxNLCwMLU0szQ0MDc0MzE1NzEzMN7AyPiKUdq5KDWxJLNMwSMxs6i4pDInMy9dISi1LDO1vHgRKz5ZAFOpIolXAAAA&rldimm=10885969107164574603&hl=en-DE&ved=2ahUKEwiw1sXEhZGNAxUi2wIHHRm3BH8Q9fQKegQIQhAF&biw=1536&bih=729&dpr=1.25#lkt=LocalPoiReviews"
            className="more-reviews-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Weitere Bewertungen anzeigen
          </a>
        </div>
      </div>
    </section>
  );
};
