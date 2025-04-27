// components/Testimonials.tsx
import { motion } from 'framer-motion';
import '../styles/Testimonials.css';

const testimonials = [
  {
    name: "Sarah K.",
    role: "Stammkundin",
    content: "Ich gehe seit Jahren zu Anna und war noch nie enttäuscht. Das Team ist super freundlich und die Ergebnisse immer perfekt!",
    rating: 5
  },
  {
    name: "Michael B.",
    role: "Neukunde",
    content: "Der beste Herrenschnitt, den ich je hatte. Markus hat sich viel Zeit genommen und genau zugehört, was ich wollte.",
    rating: 5
  },
  {
    name: "Julia W.",
    role: "Kundin",
    content: "Meine Balayage-Strähnen sehen absolut natürlich aus. Lisa ist eine echte Künstlerin! Der Salon hat eine wundervolle Atmosphäre.",
    rating: 4
  }
];

const RatingStars = ({ rating }: { rating: number }) => {
  return (
    <div className="rating-stars">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`star ${i < rating ? 'filled' : 'empty'}`}
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
                    <p className="author-role">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};