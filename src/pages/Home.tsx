// pages/Home.tsx
import { BeforeAfter } from '../components/BeforeAfter';
import { Footer } from '../components/Footer';
import { Hero } from '../components/Hero';
import { Partners } from '../components/Partners';
import { Services } from '../components/Services';
import { Testimonials } from '../components/Testimonials';
import { UberUns } from '../components/UberUns';

export const Home = () => {
  return (
    <div>
      <Hero />
      <Partners />
      <Services />
      <UberUns />
      <BeforeAfter />
      <Testimonials />
      <Footer />
    </div>
  );
};