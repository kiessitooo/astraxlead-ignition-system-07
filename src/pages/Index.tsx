
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import SocialProof from '@/components/SocialProof';
import CaseStudies from '@/components/CaseStudies';
import About from '@/components/About';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <SocialProof />
      <Services />
      <CaseStudies />
      <About />
      <CTA />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
