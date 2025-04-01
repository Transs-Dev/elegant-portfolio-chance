
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import ServiceModal from "./ServiceModal";

interface Service {
  id: number;
  title: string;
  icon: string;
  shortDescription: string;
  fullDescription: string;
  remoteCapable: boolean;
}

const Services = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const services: Service[] = [
    {
      id: 1,
      title: "Administrative Support & Office Management",
      icon: "📁",
      shortDescription: "Comprehensive administrative support for day-to-day operations",
      fullDescription: "Providing comprehensive administrative support including document management, email correspondence, scheduling, data entry, and general office management to ensure smooth day-to-day operations for your business.",
      remoteCapable: true
    },
    {
      id: 2,
      title: "Customer Service & Guest Relations",
      icon: "🤝",
      shortDescription: "Professional handling of customer inquiries and needs",
      fullDescription: "Handling customer inquiries, resolving complaints, and ensuring exceptional service delivery across all communication channels. Specializing in building positive relationships with clients and maintaining high satisfaction levels.",
      remoteCapable: true
    },
    {
      id: 3,
      title: "Reservations & Scheduling",
      icon: "📅",
      shortDescription: "Efficient management of appointments and bookings",
      fullDescription: "Managing calendars, scheduling appointments, coordinating meetings, and handling reservations systems with precision and attention to detail, ensuring no double bookings or missed opportunities.",
      remoteCapable: true
    },
    {
      id: 4,
      title: "Airbnb & Vacation Rental Management",
      icon: "🏠",
      shortDescription: "Complete management of your short-term rental properties",
      fullDescription: "Managing your Airbnb or vacation rental property listings, handling guest communications, coordinating cleaning services, managing calendars, and optimizing pricing to maximize occupancy and revenue.",
      remoteCapable: true
    },
    {
      id: 5,
      title: "Email Management & Communication",
      icon: "📧",
      shortDescription: "Organized inbox management and professional correspondence",
      fullDescription: "Managing and organizing inbox communications, drafting professional emails, filtering important messages, and maintaining timely responses to ensure effective communication with clients and partners.",
      remoteCapable: true
    },
    {
      id: 6,
      title: "Travel & Hospitality Management",
      icon: "✈️",
      shortDescription: "Expert arrangement of travel itineraries and accommodations",
      fullDescription: "Coordinating travel arrangements, booking accommodations, planning itineraries, and managing all travel-related logistics to ensure smooth and stress-free travel experiences.",
      remoteCapable: true
    },
    {
      id: 7,
      title: "Project Management & Task Coordination",
      icon: "📊",
      shortDescription: "Organized tracking and execution of projects using modern tools",
      fullDescription: "Using platforms like Trello, Asana, and Slack to manage projects, track progress, coordinate team efforts, and ensure timely completion of tasks and deliverables.",
      remoteCapable: true
    },
    {
      id: 8,
      title: "Social Media Management",
      icon: "📱",
      shortDescription: "Strategic management of social media accounts and content",
      fullDescription: "Managing social media accounts, creating content calendars, scheduling posts, engaging with followers, and analyzing performance metrics to grow your online presence.",
      remoteCapable: true
    },
    {
      id: 9,
      title: "Online Research & Data Analysis",
      icon: "🔍",
      shortDescription: "Thorough research and data compilation for informed decisions",
      fullDescription: "Conducting comprehensive online research, gathering relevant information, analyzing data, and presenting findings in organized reports to support decision-making processes.",
      remoteCapable: true
    }
  ];

  const openModal = (service: Service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <section id="services" className="py-20 bg-pastel-gray/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-heading">My Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the range of virtual assistance services I offer to help you streamline 
            your operations and focus on what matters most. All services can be delivered remotely.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className="service-card flex flex-col h-full animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-muted-foreground mb-4 flex-grow">{service.shortDescription}</p>
              {service.remoteCapable && (
                <div className="mb-4">
                  <span className="text-xs bg-green-100 text-green-800 px-3 py-1 rounded-full">
                    100% Remote Friendly
                  </span>
                </div>
              )}
              <button
                onClick={() => openModal(service)}
                className="text-warmPink hover:text-warmPink/80 font-medium flex items-center gap-1 transition-colors mt-auto"
              >
                View Service <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>

        {selectedService && (
          <ServiceModal
            title={selectedService.title}
            description={selectedService.fullDescription}
            isOpen={!!selectedService}
            onClose={closeModal}
          />
        )}
      </div>
    </section>
  );
};

export default Services;
