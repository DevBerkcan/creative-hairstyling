// components/Team.tsx
import { motion } from 'framer-motion';
import '../styles/Team.css';

const teamMembers = [
  {
    name: "Anna Müller",
    role: "Hairstylist & Inhaberin",
    bio: "Mit über 15 Jahren Erfahrung in der Branche spezialisiert auf Farbtechniken und moderne Schnitte.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  },
  {
    name: "Lisa Schmidt",
    role: "Hairstylistin",
    bio: "Expertin für natürliche Looks und pflegende Behandlungen mit einem Auge für Details.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  },
  {
    name: "Markus Weber",
    role: "Barbier",
    bio: "Spezialist für klassische Herrenschnitte und Rasur mit traditionellen Techniken.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  },
];

export const Team = () => {
  return (
    <section id="team" className="team">
      <div className="team-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="team-header"
        >
          <h2 className="team-title">Unser Team</h2>
          <p className="team-subtitle">
            Lernen Sie unser freundliches und professionelles Team kennen. 
            Jedes Mitglied bringt besondere Expertise und Leidenschaft für Haare mit.
          </p>
        </motion.div>
        
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="team-card"
              whileHover={{ y: -5 }}
            >
              <div className="team-image-container">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="team-image"
                />
              </div>
              <div className="team-info">
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <div className="team-line"></div>
                <p className="team-bio">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};