import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import FeaturesSection from "./components/FeaturesSection";
import Footer from "./components/Footer";
import GallerySection from "./components/GallerySection";
import HeroSection from "./components/HeroSection";
import IndustriesSection from "./components/IndustriesSection";
import Navbar from "./components/Navbar";
import ServicesSection from "./components/ServicesSection";
import TopContactBar from "./components/TopContactBar"
const App = () => {
  return (
    <>
      <TopContactBar />
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <AboutSection />
        <ServicesSection />
        <IndustriesSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};
export default App;