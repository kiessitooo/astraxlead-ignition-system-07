
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Testimonials from '@/components/Testimonials';
import Services from '@/components/Services';
import SocialProof from '@/components/SocialProof';
import Problems from '@/components/Problems';
import About from '@/components/About';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <Testimonials />
      <SocialProof />
      <Services />
      <Problems />
      <About />
      <CTA />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
