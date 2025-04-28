// pages/Home.tsx
import { BeforeAfter } from '../components/BeforeAfter';
import { Footer } from '../components/Footer';
import { Hero } from '../components/Hero';
import { Partners } from '../components/Partners';
import { Services } from '../components/Services';
import { Team } from '../components/Team';
import { Testimonials } from '../components/Testimonials';

export const Home = () => {
  return (
    <div>
      <Hero />
      <Partners />
      <Services />
      <Team />
      <BeforeAfter />
      <Testimonials />
      <Footer />
    </div>
  );
};