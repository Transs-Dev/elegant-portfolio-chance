
import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-xl font-bold">
              Chanice Wangui
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-6 md:mb-0">
            <a
              href="#home"
              className="hover:text-secondary transition-colors duration-300"
            >
              Home
            </a>
            <a
              href="#about"
              className="hover:text-secondary transition-colors duration-300"
            >
              About
            </a>
            <a
              href="#services"
              className="hover:text-secondary transition-colors duration-300"
            >
              Services
            </a>
            <a
              href="#portfolio"
              className="hover:text-secondary transition-colors duration-300"
            >
              Portfolio
            </a>
            <a
              href="#contact"
              className="hover:text-secondary transition-colors duration-300"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p>© {currentYear} Chanice Wangui. All rights reserved.</p>
          <p className="mt-2 md:mt-0 flex items-center gap-1">
            Design by OMAR with <Heart size={16} className="text-secondary fill-secondary" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
