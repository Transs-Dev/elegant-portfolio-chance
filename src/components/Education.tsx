
import { GraduationCap, Award } from "lucide-react";

interface EducationItem {
  id: number;
  type: "education" | "certification";
  title: string;
  institution: string;
  period: string;
  icon: "graduation" | "certificate";
}

const Education = () => {
  const educationItems: EducationItem[] = [
    {
      id: 1,
      type: "education",
      title: "Bachelor of Commerce - Business and Administration",
      institution: "Daystar University",
      period: "2013 - 2017",
      icon: "graduation"
    },
    {
      id: 2,
      type: "education",
      title: "Diploma in Tourism and Hospitality",
      institution: "KWS Training Institute",
      period: "2017",
      icon: "graduation"
    },
    {
      id: 3,
      type: "certification",
      title: "Virtual Assistant Certification",
      institution: "ALX Africa",
      period: "2024",
      icon: "certificate"
    },
    {
      id: 4,
      type: "certification",
      title: "Artificial Intelligence Career Essentials",
      institution: "ALX Africa",
      period: "2024",
      icon: "certificate"
    },
    {
      id: 5,
      type: "certification",
      title: "French Language Certification",
      institution: "Alliance Françoise",
      period: "In Progress",
      icon: "certificate"
    },
    {
      id: 6,
      type: "certification",
      title: "Customer Service Excellence Certification",
      institution: "Professional Training Institute",
      period: "2022",
      icon: "certificate"
    },
    {
      id: 7,
      type: "certification",
      title: "Cash Handling & Financial Transactions Training",
      institution: "Finance Professional Association",
      period: "2021",
      icon: "certificate"
    },
    {
      id: 8,
      type: "certification",
      title: "POS System and Retail Operations Certification",
      institution: "Retail Management Institute",
      period: "2020",
      icon: "certificate"
    }
  ];

  return (
    <section id="education" className="py-20 bg-pastel-peach/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-heading">Education & Certifications</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic background and professional certifications that have equipped me
            with the knowledge and skills to excel in my role.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {educationItems.map((item, index) => (
            <div
              key={item.id}
              className="bg-white p-6 rounded-lg border border-border shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in flex"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mr-4 text-primary">
                {item.icon === "graduation" ? (
                  <GraduationCap size={24} />
                ) : (
                  <Award size={24} />
                )}
              </div>
              <div>
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="text-primary">{item.institution}</p>
                <p className="text-sm text-muted-foreground mt-1">
                  {item.period}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
