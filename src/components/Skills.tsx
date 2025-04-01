
import { useEffect, useRef, useState } from "react";
import { HelpCircle } from "lucide-react";

interface Skill {
  name: string;
  percentage: number;
}

interface Tool {
  name: string;
  icon: string;
  description: string;
}

const Skills = () => {
  const progressRefs = useRef<HTMLDivElement[]>([]);
  const [activeToolIndex, setActiveToolIndex] = useState<number | null>(null);

  const skills: Skill[] = [
    { name: "Administrative Support", percentage: 95 },
    { name: "Customer Service & Communication", percentage: 90 },
    { name: "Email Management", percentage: 95 },
    { name: "Calendar Management", percentage: 90 },
    { name: "Data Entry & Management", percentage: 85 },
    { name: "Social Media Management", percentage: 80 },
    { name: "Project Coordination", percentage: 85 },
    { name: "Online Research", percentage: 90 },
    { name: "Event Planning", percentage: 80 },
    { name: "Travel Arrangements", percentage: 85 }
  ];

  const tools: Tool[] = [
    { 
      name: "Microsoft Office", 
      icon: "📄", 
      description: "Expert in Word, Excel, PowerPoint, and Outlook for document creation, data analysis, presentations, and email management."
    },
    { 
      name: "Google Workspace", 
      icon: "📊", 
      description: "Proficient in Google Docs, Sheets, Slides, and Gmail for collaborative work and cloud-based document management."
    },
    { 
      name: "Trello", 
      icon: "📋", 
      description: "Skilled in creating and managing boards for project tracking, task assignment, and workflow visualization."
    },
    { 
      name: "Asana", 
      icon: "✓", 
      description: "Experienced in setting up projects, assigning tasks, and tracking progress to ensure deadlines are met."
    },
    { 
      name: "Slack", 
      icon: "💬", 
      description: "Adept at using channels, direct messaging, and integrations for effective team communication."
    },
    { 
      name: "Zoom", 
      icon: "🎥", 
      description: "Proficient in setting up, hosting, and managing virtual meetings, webinars, and training sessions."
    },
    { 
      name: "WhatsApp Business", 
      icon: "📱", 
      description: "Experienced in using business features for client communication, automated messages, and quick responses."
    },
    { 
      name: "Canva", 
      icon: "🎨", 
      description: "Skilled in creating professional graphics, social media posts, and presentations using templates and custom designs."
    },
    { 
      name: "Hootsuite", 
      icon: "📣", 
      description: "Proficient in scheduling and managing social media content across multiple platforms."
    },
    { 
      name: "Calendly", 
      icon: "📆", 
      description: "Experienced in setting up booking systems and managing appointment scheduling efficiently."
    },
    { 
      name: "Airbnb Platform", 
      icon: "🏠", 
      description: "Skilled in managing property listings, guest communications, and booking management."
    },
    { 
      name: "Opera MS", 
      icon: "🏨", 
      description: "Knowledgeable in hotel property management system for reservations and guest services."
    }
  ];

  const toggleToolDescription = (index: number) => {
    setActiveToolIndex(activeToolIndex === index ? null : index);
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const progressBar = entry.target as HTMLDivElement;
          progressBar.style.setProperty(
            "--progress-width",
            `${progressBar.dataset.percentage}%`
          );
          progressBar.classList.add("progress-bar-fill");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    progressRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      progressRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-heading">Skills & Tools</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Proficient in a range of skills and tools that enable me to provide 
            exceptional virtual assistance services to my clients.
          </p>
        </div>

        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8 text-center">Professional Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex justify-between">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-muted-foreground">{skill.percentage}%</span>
                </div>
                <div className="h-2 w-full bg-pastel-gray rounded-full overflow-hidden">
                  <div
                    ref={(el) => {
                      if (el) progressRefs.current[index] = el;
                    }}
                    className="h-full rounded-full"
                    style={{ 
                      background: `linear-gradient(to right, #FFDEE2, #D3E4FD)`,
                      width: "0%" 
                    }}
                    data-percentage={skill.percentage}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Tools & Technologies</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {tools.map((tool, index) => (
              <div key={index} className="relative animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div 
                  className="tool-card group"
                  onClick={() => toggleToolDescription(index)}
                >
                  <div className="text-3xl mb-2 floating">{tool.icon}</div>
                  <span className="text-center font-medium">{tool.name}</span>
                  <HelpCircle size={16} className="absolute top-2 right-2 text-muted-foreground opacity-60" />
                </div>
                
                {activeToolIndex === index && (
                  <div className="absolute z-10 top-full left-0 right-0 mt-2 p-4 bg-white rounded-lg shadow-lg border border-border animate-fade-in">
                    <p className="text-sm text-muted-foreground">{tool.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
