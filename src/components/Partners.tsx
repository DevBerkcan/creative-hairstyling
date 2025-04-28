
import "../styles/Partners.css";
import { 
  FaAmazon, 
  FaFacebook, 
  FaTwitter, 
  FaDiscord, 
  FaYoutube,
  FaApple,
  FaGoogle,
  FaMicrosoft,
  FaSpotify,
  FaInstagram,
  FaPinterest,
  FaLinkedin,
  FaTiktok
} from "react-icons/fa";

const partners = [
  { name: "Amazon", icon: <FaAmazon /> },
  { name: "Facebook", icon: <FaFacebook /> },
  { name: "Twitter", icon: <FaTwitter /> },
  { name: "Discord", icon: <FaDiscord /> },
  { name: "YouTube", icon: <FaYoutube /> },
  { name: "Apple", icon: <FaApple /> },
  { name: "Google", icon: <FaGoogle /> },
  { name: "Microsoft", icon: <FaMicrosoft /> },
  { name: "Spotify", icon: <FaSpotify /> },
  { name: "Instagram", icon: <FaInstagram /> },
  { name: "Pinterest", icon: <FaPinterest /> },
  { name: "LinkedIn", icon: <FaLinkedin /> },
  { name: "TikTok", icon: <FaTiktok /> },
];

export const Partners = () => {
  return (
    <section className="partners-section">
      <div className="partners-container">
        <div className="partners-track">
          {[...partners, ...partners].map((partner, index) => (
            <div key={`${partner.name}-${index}`} className="partner-logo">
              {partner.icon}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};