
import { useState } from "react";
import { X, ArrowRight } from "lucide-react";

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  keyTakeaways: string[];
}

const Portfolio = () => {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: "Email Management",
      category: "Administration",
      image: "/1.jpg",
      description: "Implemented a comprehensive email management system for a busy executive, handling over 100 emails daily with a structured organization system.",
      keyTakeaways: [
        "Reduced email response time by 60%",
        "Created a filing system that improved information retrieval",
        "Set up automated responses for common inquiries",
        "Prioritized emails based on urgency and importance"
      ]
    },
    {
      id: 2,
      title: "Calendar Management",
      category: "Organization",
      image: "/2.jpg",
      description: "Managed complex scheduling needs for a C-level executive, coordinating meetings across multiple time zones and with various stakeholders.",
      keyTakeaways: [
        "Eliminated scheduling conflicts completely",
        "Created buffer times to prevent meeting fatigue",
        "Integrated travel time into scheduling",
        "Set up automated reminders and briefing documents"
      ]
    },
    {
      id: 3,
      title: "Travel & Booking",
      category: "Hospitality",
      image: "/3.jpg",
      description: "Coordinated comprehensive travel arrangements for a business team attending international conferences, including flights, accommodations, and ground transportation.",
      keyTakeaways: [
        "Negotiated preferred rates saving 15% on travel expenses",
        "Created detailed itineraries with local information",
        "Arranged backup plans for potential travel disruptions",
        "Managed expense tracking and reporting"
      ]
    },
    {
      id: 4,
      title: "Data Entry & Management",
      category: "Information Management",
      image: "/4.jpg",
      description: "Developed and maintained a comprehensive database for a small business, organizing client information, project details, and financial records.",
      keyTakeaways: [
        "Improved data accuracy by implementing validation protocols",
        "Created searchable database that reduced information retrieval time by 75%",
        "Developed automated reports for business insights",
        "Implemented secure backup procedures"
      ]
    },
    {
      id: 5,
      title: "Social Media Management",
      category: "Digital Marketing",
      image: "/5.jpg",
      description: "Managed social media presence for a small business, creating content calendars, scheduling posts, and engaging with followers to build community.",
      keyTakeaways: [
        "Increased follower count by 40% within 3 months",
        "Improved engagement rates by 65%",
        "Developed consistent brand voice across platforms",
        "Created analytics reports to guide content strategy"
      ]
    },
    {
      id: 6,
      title: "Online Research",
      category: "Information Gathering",
      image: "/6.jpg",
      description: "Conducted in-depth market research for a startup entering a competitive industry, providing comprehensive reports on competitors, market trends, and potential opportunities.",
      keyTakeaways: [
        "Identified 3 untapped market segments for business growth",
        "Created competitor analysis with actionable insights",
        "Developed research methodology for ongoing market monitoring",
        "Summarized complex findings into executive-friendly reports"
      ]
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
    <section id="portfolio" className="py-20 bg-pastel-blue/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-heading">My Portfolio</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore some of my past projects and achievements in virtual assistance,
            customer service, and administrative support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    <span className="text-xs text-white/80 bg-warmPink/80 px-2 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-muted-foreground mb-4 line-clamp-2">
                {item.description.substring(0, 100)}...
              </p>
              <button
                onClick={() => openModal(item)}
                className="text-lightBlue hover:text-lightBlue/80 font-medium flex items-center gap-1 transition-colors mt-auto"
              >
                View Project <ArrowRight size={16} />
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
              className="bg-white rounded-lg max-w-3xl w-full mx-auto shadow-xl overflow-hidden"
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
                  <span className="text-xs bg-lightBlue/10 text-lightBlue px-3 py-1 rounded-full">
                    {selectedItem.category}
                  </span>
                </div>
                <p className="text-muted-foreground mb-6">{selectedItem.description}</p>
                
                <div className="bg-pastel-gray/30 p-4 rounded-lg">
                  <h4 className="font-bold text-warmPink mb-3">Key Takeaways:</h4>
                  <ul className="space-y-2">
                    {selectedItem.keyTakeaways.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-lightBlue">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
