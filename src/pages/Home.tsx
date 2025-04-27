// pages/Home.tsx
import { Footer } from '../components/Footer';
import { Gallery } from '../components/Gallery';
import { Hero } from '../components/Hero';
import { PricingSection } from '../components/PricingSection';
import { Services } from '../components/Services';
import { Team } from '../components/Team';
import { Testimonials } from '../components/Testimonials';

export const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Team />
      <Gallery />
      <PricingSection/>
      <Testimonials />
      <Footer />
    </div>
  );
};