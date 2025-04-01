
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Portfolio from "@/components/Portfolio";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import WelcomePopup from "@/components/WelcomePopup";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Skills />
      <Portfolio />
      <Experience />
      <Education />
      <Contact />
      <Footer />
      <WhatsAppWidget />
      <WelcomePopup />
    </div>
  );
};

export default Index;
