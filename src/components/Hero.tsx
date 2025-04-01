
import { useState, useEffect } from "react";
import { ArrowRight, Linkedin, Briefcase } from "lucide-react";
import MovingBubbles from "@/components/MovingBubbles";

const Hero = () => {
  const [typedIndex, setTypedIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const headlines = [
    "Highly Organized Virtual Assistant",
    "Expert in Administrative Support",
    "Customer Service Professional",
    "Hospitality Specialist"
  ];
  
  useEffect(() => {
    // Reset for new headline
    if (wordIndex === 0) {
      setDisplayText("");
    }
    
    const currentHeadline = headlines[typedIndex];
    const words = currentHeadline.split(" ");
    
    if (wordIndex < words.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + (prev ? " " : "") + words[wordIndex]);
        setWordIndex(prev => prev + 1);
      }, 800); // Slower word-by-word animation
      
      return () => clearTimeout(timer);
    } else {
      // Move to next headline after displaying current one completely
      const timer = setTimeout(() => {
        setTypedIndex((prev) => (prev + 1) % headlines.length);
        setWordIndex(0);
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [typedIndex, wordIndex, headlines]);
  
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
      className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-pastel-pink/40 to-pastel-blue/40 relative overflow-hidden"
    >
      <MovingBubbles />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center animate-fade-in">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Chanice Wangui
            </h1>
            <div className="h-1 w-24 bg-warmPink mx-auto mb-6"></div>
            <div className="h-16 flex justify-center items-center">
              <h2 className="text-xl md:text-2xl font-medium text-muted-foreground">
                {displayText}
              </h2>
            </div>
            
            <p className="mt-4 mb-8 max-w-2xl mx-auto text-muted-foreground">
              Transforming chaos into clarity with meticulous organization and exceptional support. 
              Let me handle the details while you focus on what matters most.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 floating">
            <a
              href="#contact"
              className="btn-primary flex items-center justify-center gap-2 bg-warmPink hover:bg-warmPink/90 transform hover:scale-105 transition-all duration-300"
            >
              Hire Me <ArrowRight size={16} />
            </a>
            <button
              onClick={handleDownloadCV}
              className="btn-outline flex items-center justify-center gap-2 border-lightBlue text-lightBlue hover:bg-lightBlue/10 transform hover:scale-105 transition-all duration-300"
            >
              Download My CV <ArrowRight size={16} />
            </button>
          </div>

          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/chanicewangui"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://www.upwork.com/freelancers/~01ff4264e0bbd64526?companyReference=1728677673260314625&mp_source=share"
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
