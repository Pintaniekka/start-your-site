import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Services from '@/components/Services';
import BeforeAfter from '@/components/BeforeAfter';
import PriceCalculator from '@/components/PriceCalculator';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Services />
      <BeforeAfter />
      <PriceCalculator />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
