
import { useEffect, useRef } from "react";

interface Skill {
  name: string;
  percentage: number;
}

interface Tool {
  name: string;
  icon: string;
}

const Skills = () => {
  const progressRefs = useRef<HTMLDivElement[]>([]);

  const skills: Skill[] = [
    { name: "Administrative Support", percentage: 90 },
    { name: "Customer Service & Guest Relations", percentage: 85 },
    { name: "Email Management", percentage: 80 },
    { name: "Project Management", percentage: 85 },
    { name: "Cash Handling & POS Operations", percentage: 90 },
  ];

  const tools: Tool[] = [
    { name: "Microsoft Office", icon: "📄" },
    { name: "Google Workspace", icon: "📊" },
    { name: "Trello", icon: "📋" },
    { name: "Asana", icon: "✓" },
    { name: "Slack", icon: "💬" },
    { name: "Zoom", icon: "🎥" },
    { name: "WhatsApp Business", icon: "📱" },
    { name: "Opera MS", icon: "🏨" },
    { name: "SambaPOS", icon: "💸" },
    { name: "Micros POS", icon: "🧾" },
  ];

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="animate-fade-in-left">
            <h3 className="text-2xl font-bold mb-8">Professional Skills</h3>
            <div className="space-y-8">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.percentage}%</span>
                  </div>
                  <div className="h-2 w-full bg-pastel-gray rounded-full overflow-hidden">
                    <div
                      ref={(el) => {
                        if (el) progressRefs.current[index] = el;
                      }}
                      className="h-full bg-primary rounded-full"
                      data-percentage={skill.percentage}
                      style={{ width: "0%" }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-fade-in-right">
            <h3 className="text-2xl font-bold mb-8">Tools & Technologies</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {tools.map((tool, index) => (
                <div 
                  key={index}
                  className="flex flex-col items-center p-4 bg-pastel-blue/20 rounded-lg hover:bg-pastel-blue/40 transition-colors"
                >
                  <div className="text-3xl mb-2">{tool.icon}</div>
                  <span className="text-center font-medium">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
