
import { useState } from "react";
import { X, ArrowRight } from "lucide-react";

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

const Portfolio = () => {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: "Guest Service & Relations",
      category: "Hospitality",
      image: "/placeholder.svg",
      description: "Implemented a streamlined guest check-in system that reduced wait times by 30% and improved guest satisfaction scores. Trained staff on effective communication techniques and conflict resolution strategies."
    },
    {
      id: 2,
      title: "Reservations & Scheduling",
      category: "Administration",
      image: "/placeholder.svg",
      description: "Developed and managed a comprehensive booking system for a high-volume establishment, handling over 200 reservations weekly with a 99% accuracy rate. Implemented recovery protocols for potential scheduling conflicts."
    },
    {
      id: 3,
      title: "Customer Service Strategy Development",
      category: "Management",
      image: "/placeholder.svg",
      description: "Created and implemented a customer-first service strategy that increased repeat business by 25%. Established service standards, KPIs, and measurement tools to track and improve performance continuously."
    },
    {
      id: 4,
      title: "Team Leadership & Staff Training",
      category: "Leadership",
      image: "/placeholder.svg",
      description: "Led a team of 12 customer service representatives, conducting regular training sessions on service excellence, product knowledge, and operational procedures. Improved team performance metrics by 40% over six months."
    }
  ];

  const openModal = (item: PortfolioItem) => {
    setSelectedItem(item);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedItem(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section id="portfolio" className="py-20 bg-pastel-purple/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-heading">My Portfolio</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore some of my past projects and achievements in virtual assistance,
            customer service, and administrative support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              className="portfolio-card group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-md mb-4 aspect-video bg-muted">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <span className="text-xs text-white/80 bg-primary/80 px-2 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <button
                onClick={() => openModal(item)}
                className="text-primary hover:text-primary/80 font-medium flex items-center gap-1 transition-colors mt-auto"
              >
                View Details <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>

        {selectedItem && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 animate-fade-in p-4"
            onClick={closeModal}
          >
            <div 
              className="bg-white rounded-lg max-w-xl w-full mx-auto shadow-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-video">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover"
                />
                <button 
                  onClick={closeModal}
                  className="absolute top-2 right-2 p-1 bg-white/80 rounded-full hover:bg-white transition-colors"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">{selectedItem.title}</h3>
                  <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                    {selectedItem.category}
                  </span>
                </div>
                <p className="text-muted-foreground">{selectedItem.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
