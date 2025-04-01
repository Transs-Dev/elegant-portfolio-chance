
import { useState } from "react";
import { GraduationCap, Award, X, ChevronRight } from "lucide-react";

interface EducationItem {
  id: number;
  type: "education" | "certification";
  title: string;
  institution: string;
  period: string;
  icon: "graduation" | "certificate";
  description: string;
}

const Education = () => {
  const [selectedItem, setSelectedItem] = useState<EducationItem | null>(null);

  const educationItems: EducationItem[] = [
    {
      id: 1,
      type: "education",
      title: "Bachelor of Commerce - Business and Administration",
      institution: "Daystar University",
      period: "2013 - 2017",
      icon: "graduation",
      description: "Completed a comprehensive business administration program with a focus on management, marketing, and financial accounting. Participated in several business case competitions and leadership development programs."
    },
    {
      id: 2,
      type: "education",
      title: "Diploma in Tourism and Hospitality",
      institution: "KWS Training Institute",
      period: "2017",
      icon: "graduation",
      description: "Specialized training in tourism management, customer service, and hospitality operations. Gained practical experience through internships in the hospitality industry and developed strong guest relations skills."
    },
    {
      id: 3,
      type: "certification",
      title: "Virtual Assistant Certification",
      institution: "ALX Africa",
      period: "2024",
      icon: "certificate",
      description: "Comprehensive training in virtual assistance skills including time management, client communications, project management tools, document management, and remote work best practices."
    },
    {
      id: 4,
      type: "certification",
      title: "Artificial Intelligence Career Essentials",
      institution: "ALX Africa",
      period: "2024",
      icon: "certificate",
      description: "Introduction to AI technologies and their application in business settings. Learned about AI tools that enhance productivity, automation possibilities, and how to leverage AI for client support."
    },
    {
      id: 5,
      type: "certification",
      title: "French Language Certification",
      institution: "Alliance Françoise",
      period: "In Progress",
      icon: "certificate",
      description: "Currently pursuing intermediate level French language skills to enhance communication capabilities with a diverse client base. Focus on business terminology and hospitality vocabulary."
    },
    {
      id: 6,
      type: "certification",
      title: "Customer Service Excellence Certification",
      institution: "Professional Training Institute",
      period: "2022",
      icon: "certificate",
      description: "Specialized training in advanced customer service techniques, conflict resolution, and maintaining client satisfaction. Includes training in digital customer service channels and remote support protocols."
    },
    {
      id: 7,
      type: "certification",
      title: "Cash Handling & Financial Transactions Training",
      institution: "Finance Professional Association",
      period: "2021",
      icon: "certificate",
      description: "Comprehensive training in secure cash handling procedures, financial transaction processing, and basic accounting principles. Includes training on digital payment systems and financial record keeping."
    },
    {
      id: 8,
      type: "certification",
      title: "POS System and Retail Operations Certification",
      institution: "Retail Management Institute",
      period: "2020",
      icon: "certificate",
      description: "Specialized training in point-of-sale systems, inventory management, and retail operations. Includes hands-on experience with various POS software and customer transaction handling."
    }
  ];

  const openModal = (item: EducationItem) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <section id="education" className="py-20 bg-pastel-pink/20">
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
              className="bg-white p-6 rounded-lg border border-border shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in flex cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openModal(item)}
            >
              <div className="mr-4 text-warmPink">
                {item.icon === "graduation" ? (
                  <GraduationCap size={24} />
                ) : (
                  <Award size={24} />
                )}
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="text-lightBlue">{item.institution}</p>
                <p className="text-sm text-muted-foreground mt-1 flex items-center justify-between">
                  <span>{item.period}</span>
                  <ChevronRight size={16} className="text-muted-foreground" />
                </p>
              </div>
            </div>
          ))}
        </div>

        {selectedItem && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 animate-fade-in p-4"
            onClick={closeModal}
          >
            <div 
              className="bg-white rounded-lg max-w-md w-full mx-auto shadow-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-warmPink">
                    {selectedItem.icon === "graduation" ? (
                      <GraduationCap size={24} />
                    ) : (
                      <Award size={24} />
                    )}
                  </div>
                  <button 
                    onClick={closeModal}
                    className="p-1 rounded-full hover:bg-muted transition-colors"
                    aria-label="Close modal"
                  >
                    <X size={20} />
                  </button>
                </div>
                
                <h3 className="text-xl font-bold mb-2">{selectedItem.title}</h3>
                <p className="text-lightBlue mb-1">{selectedItem.institution}</p>
                <p className="text-sm text-muted-foreground mb-4">{selectedItem.period}</p>
                
                <div className="border-t border-border pt-4">
                  <p className="text-muted-foreground">{selectedItem.description}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Education;
