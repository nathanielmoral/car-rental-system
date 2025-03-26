import HeroSection from "../Section/HeroSection";
import AboutSection from "../Section/AboutSection";
import FeatureSection from "../Section/FeatureSection"; // If inside `Section/`
import ContactSection from "../Section/ContactSection";

const Home = () => {
  return (
    <div className="bg-base-100">
      <HeroSection />
      <FeatureSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
};

export default Home;
