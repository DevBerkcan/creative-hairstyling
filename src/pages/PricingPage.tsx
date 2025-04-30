// pages/PricingPage.tsx
import { Footer } from '../components/Footer';
import { PricingSection } from '../components/PricingSection';
import { motion } from 'framer-motion';

export const PricingPage = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="pricing-page-container"
      >
        <PricingSection fullPage={true} />
        <Footer />
      </motion.div>
    </div>
  );
};