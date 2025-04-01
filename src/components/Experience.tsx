
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  responsibilities: string[];
  isExpanded?: boolean;
}

const Experience = () => {
  const [experiences, setExperiences] = useState<ExperienceItem[]>([
    {
      id: 1,
      title: "Shift Manager",
      company: "Country House Gardens",
      location: "Nairobi, Kenya",
      period: "Jan 2025 – Mar 2025",
      description: "Managed daily operations and supervised staff in a fast-paced hospitality environment.",
      responsibilities: [
        "Oversaw daily operations and supervised a team of 8 staff members",
        "Managed customer inquiries, complaints, and special requests",
        "Handled cash management and end-of-day accounting",
        "Ensured adherence to quality standards and safety protocols",
        "Coordinated with other departments to ensure smooth service delivery"
      ],
      isExpanded: false
    },
    {
      id: 2,
      title: "Client Service Executive",
      company: "Zamara Actuaries and Consultants",
      location: "Nairobi, Kenya",
      period: "Oct 2021 – Nov 2023",
      description: "Provided exceptional client service and administrative support in a professional consulting environment.",
      responsibilities: [
        "Served as the primary point of contact for client inquiries and requests",
        "Processed client documentation and maintained accurate records",
        "Coordinated meetings, appointments, and events",
        "Generated reports and presentations for client meetings",
        "Collaborated with internal teams to ensure client needs were met efficiently"
      ],
      isExpanded: false
    }
  ]);

  const toggleExpand = (id: number) => {
    setExperiences(experiences.map(exp => 
      exp.id === id ? { ...exp, isExpanded: !exp.isExpanded } : exp
    ));
  };

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-heading">Work Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey across customer service, administration, and hospitality roles.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative pl-8 border-l-2 border-border">
            {experiences.map((exp, index) => (
              <div 
                key={exp.id} 
                className="timeline-entry relative mb-12 last:mb-0 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="timeline-dot"></div>
                <div className="bg-white rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold">{exp.title}</h3>
                      <p className="text-primary font-medium">{exp.company} - {exp.location}</p>
                    </div>
                    <p className="text-sm text-muted-foreground bg-pastel-blue/20 px-3 py-1 rounded-full mt-2 sm:mt-0 w-fit">
                      {exp.period}
                    </p>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">{exp.description}</p>
                  
                  <button
                    onClick={() => toggleExpand(exp.id)}
                    className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                  >
                    {exp.isExpanded ? "Hide Details" : "View Details"}
                    {exp.isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                  
                  {exp.isExpanded && (
                    <div className="mt-4 pl-4 border-l-2 border-pastel-blue animate-fade-in">
                      <h4 className="font-medium mb-2">Key Responsibilities:</h4>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        {exp.responsibilities.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
