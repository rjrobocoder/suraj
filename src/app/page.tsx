import HeroSection from "@/components/homepage/HeroSection";
import AboutSection from "@/components/homepage/AboutSection";
import AcademicSection from "@/components/homepage/AcademicSection";
import ProjectsSection from "@/components/homepage/ProjectsSection";
import ProficienciesSection from "@/components/homepage/ProficienciesSection";
import ContactSection from "@/components/homepage/ContactSection";
import FooterSection from "@/components/homepage/FooterSection";
import MagicDock from "@/components/MagicDock";

const HomePage = () => {
  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection />
      <AboutSection />
      <AcademicSection />
      <ProjectsSection />
      <ProficienciesSection />
      <ContactSection />
      <MagicDock />
      <FooterSection />
    </main>
  );
};

export default HomePage;
