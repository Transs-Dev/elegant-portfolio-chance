
import { useState, useEffect } from "react";
import { ArrowRight, Linkedin, Briefcase } from "lucide-react";

const Hero = () => {
  const [typedIndex, setTypedIndex] = useState(0);
  const headlines = [
    "Highly Organized Virtual Assistant",
    "Expert in Administrative Support",
    "Customer Service Professional",
    "Hospitality Specialist"
  ];
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setTypedIndex((prev) => (prev + 1) % headlines.length);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, [typedIndex, headlines.length]);
  
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/chanice.pdf';
    link.download = 'Chanice_Wangui_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-pastel-pink/40 to-pastel-blue/40"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center animate-fade-in">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Chanice Wangui
            </h1>
            <div className="h-1 w-24 bg-warmPink mx-auto mb-6"></div>
            <div className="h-16 flex justify-center items-center">
              <h2 className="text-xl md:text-2xl font-medium text-muted-foreground typewriter">
                {headlines[typedIndex]}
              </h2>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 floating">
            <a
              href="#contact"
              className="btn-primary flex items-center justify-center gap-2 bg-warmPink hover:bg-warmPink/90"
            >
              Hire Me <ArrowRight size={16} />
            </a>
            <button
              onClick={handleDownloadCV}
              className="btn-outline flex items-center justify-center gap-2 border-lightBlue text-lightBlue hover:bg-lightBlue/10"
            >
              Download My CV <ArrowRight size={16} />
            </button>
          </div>

          <div className="flex space-x-4">
            <a
              href="https://linkedin.com/in/chanice-wangui"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://www.upwork.com/freelancers/chanicewangui"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="Upwork"
            >
              <Briefcase size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
