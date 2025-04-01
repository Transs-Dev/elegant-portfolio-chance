
import { Heart, Linkedin, Briefcase, Mail, Phone } from "lucide-react";

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
              className="hover:text-warmPink transition-colors duration-300"
            >
              Home
            </a>
            <a
              href="#about"
              className="hover:text-warmPink transition-colors duration-300"
            >
              About
            </a>
            <a
              href="#services"
              className="hover:text-warmPink transition-colors duration-300"
            >
              Services
            </a>
            <a
              href="#portfolio"
              className="hover:text-warmPink transition-colors duration-300"
            >
              Portfolio
            </a>
            <a
              href="#contact"
              className="hover:text-warmPink transition-colors duration-300"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col items-center">
          <div className="flex space-x-4 mb-6">
            <a
              href="https://linkedin.com/in/chanice-wangui"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon bg-white/10 hover:bg-warmPink"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://www.upwork.com/freelancers/chanicewangui"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon bg-white/10 hover:bg-warmPink"
              aria-label="Upwork"
            >
              <Briefcase size={20} />
            </a>
            <a
              href="mailto:wanguichanice143@gmail.com"
              className="social-icon bg-white/10 hover:bg-warmPink"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href="tel:+971508934734"
              className="social-icon bg-white/10 hover:bg-warmPink"
              aria-label="Phone"
            >
              <Phone size={20} />
            </a>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center w-full">
            <p>© {currentYear} Chanice Wangui. All rights reserved.</p>
            <p className="mt-2 md:mt-0 flex items-center gap-1">
              Design by OMAR <Heart size={16} className="text-warmPink fill-warmPink" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
