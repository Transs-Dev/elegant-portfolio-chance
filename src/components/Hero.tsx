
import { ArrowRight, Linkedin, Twitter, Instagram, Facebook } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-pastel-blue/30 to-pastel-pink/30"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center animate-fade-in">
          <div className="mb-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Chanice Wangui
            </h1>
            <div className="h-1 w-24 bg-secondary mx-auto mb-6"></div>
            <h2 className="text-xl md:text-2xl font-medium text-muted-foreground max-w-3xl mx-auto">
              Highly Organized Virtual Assistant | Customer-Focused Professional with 
              Expertise in Administration & Hospitality
            </h2>
          </div>

          <p className="text-lg text-foreground/80 max-w-2xl mb-10">
            Dedicated virtual assistant with extensive experience in customer service,
            administration, and hospitality. Committed to providing exceptional
            support and helping clients streamline their operations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="#contact"
              className="btn-primary flex items-center justify-center gap-2"
            >
              Hire Me <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="btn-outline flex items-center justify-center gap-2"
            >
              Download My CV <ArrowRight size={16} />
            </a>
          </div>

          <div className="flex space-x-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
