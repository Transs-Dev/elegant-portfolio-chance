
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 animate-fade-in-left">
            <h2 className="section-heading">About Me</h2>
            <p className="text-lg mb-6">
              I am a highly skilled and detail-oriented Virtual Assistant with extensive 
              experience in customer service, hospitality, and administrative support. 
              My background spans various roles where I've honed my skills in managing 
              complex tasks, providing exceptional client service, and streamlining operations.
            </p>
            <p className="text-lg mb-8">
              With a passion for organization and efficiency, I help businesses and professionals 
              manage their day-to-day operations smoothly. My expertise in project management 
              tools, customer relationship management, and administrative processes enables me 
              to provide comprehensive support tailored to your specific needs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="bg-pastel-blue p-2 rounded-full">
                  <Mail className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Email</h3>
                  <a href="mailto:wanguichanice143@gmail.com" className="text-foreground hover:text-primary">
                    wanguichanice143@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-pastel-green p-2 rounded-full">
                  <Phone className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Phone</h3>
                  <a href="tel:+971508934734" className="text-foreground hover:text-primary">
                    +971508934734
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-pastel-yellow p-2 rounded-full">
                  <MapPin className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Location</h3>
                  <p className="text-foreground">Dubai, United Arab Emirates</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-pastel-pink p-2 rounded-full">
                  <Clock className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Availability</h3>
                  <p className="text-foreground">
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Open for work
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 animate-fade-in-right flex justify-center">
            <div className="w-full max-w-md relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-pastel-pink to-pastel-blue opacity-30 rounded-lg transform rotate-3"></div>
              <div className="relative bg-white p-4 rounded-lg shadow-lg border border-border transform -rotate-3">
                <img
                  src="/placeholder.svg"
                  alt="Chanice Wangui"
                  className="w-full h-auto rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
