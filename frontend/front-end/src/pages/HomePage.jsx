import HeroSection from "../sections/HeroSection";
import ServicesSection from "../sections/ServicesSection";
import AboutSection from "../sections/AboutSection";
// // import WorkoutSection from "../sections/WorkoutSection";
import ContactSection from "../sections/ContactSection";

function HomePage() {
  return (
    <div className="scroll-container">
      <HeroSection />
      <ServicesSection />
      <AboutSection />

      {/* <WorkoutSection /> */}
      <ContactSection />
    </div>
  );
}

export default HomePage;
