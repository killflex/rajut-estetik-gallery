
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProductCatalog from '@/components/ProductCatalog';
import Gallery from '@/components/Gallery';
import AboutUs from '@/components/AboutUs';
import Testimonials from '@/components/Testimonials';
import LocationMap from '@/components/LocationMap';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ProductCatalog />
        <Gallery />
        <AboutUs />
        <Testimonials />
        <LocationMap />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
