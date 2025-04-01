
import { useState } from "react";
import { X, MessageCircle } from "lucide-react";

interface WhatsAppService {
  id: number;
  name: string;
  message: string;
}

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const services: WhatsAppService[] = [
    {
      id: 1,
      name: "Email Management",
      message: "Hello Chanice, I'm interested in your Email Management services. Can you tell me more?"
    },
    {
      id: 2,
      name: "Calendar Management",
      message: "Hello Chanice, I'm interested in your Calendar Management services. Can you help me with scheduling?"
    },
    {
      id: 3,
      name: "Administrative Support",
      message: "Hello Chanice, I need help with Administrative Support. Are you available to discuss?"
    },
    {
      id: 4,
      name: "Travel & Booking",
      message: "Hello Chanice, I'm looking for assistance with Travel & Booking services. Can you help?"
    },
    {
      id: 5,
      name: "Data Entry",
      message: "Hello Chanice, I need help with Data Entry services. Can we discuss the details?"
    },
    {
      id: 6,
      name: "Social Media Management",
      message: "Hello Chanice, I'm interested in your Social Media Management services. Can you share more information?"
    },
    {
      id: 7,
      name: "Airbnb Management",
      message: "Hello Chanice, I need help managing my Airbnb property. Are you available to discuss?"
    }
  ];

  const toggleWidget = () => {
    setIsOpen(!isOpen);
  };

  const contactViaWhatsApp = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/971508934734?text=${encodedMessage}`, '_blank');
  };

  return (
    <>
      <div 
        className="whatsapp-floating-button"
        onClick={toggleWidget}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </div>

      <div className={`whatsapp-widget ${isOpen ? 'open' : ''}`}>
        <div className="bg-green-500 text-white p-3">
          <h3 className="font-bold">Chat with Chanice</h3>
          <p className="text-xs">Virtual Assistant Services</p>
        </div>
        
        <div className="max-h-60 overflow-y-auto p-3">
          <p className="text-gray-600 text-sm mb-4">
            Hello! 👋 I'm Chanice. Select a service to start a conversation:
          </p>
          
          <div className="space-y-2">
            {services.map((service) => (
              <button
                key={service.id}
                className="w-full text-left p-2 border border-gray-200 rounded hover:bg-green-50 text-sm transition-colors"
                onClick={() => contactViaWhatsApp(service.message)}
              >
                {service.name}
              </button>
            ))}
          </div>
        </div>
        
        <div className="border-t border-gray-200 p-3 text-center">
          <button 
            onClick={() => contactViaWhatsApp("Hello Chanice, I'd like to discuss how you can help with my business needs.")}
            className="text-green-500 text-sm font-medium hover:text-green-700"
          >
            Start Custom Conversation
          </button>
        </div>
      </div>
    </>
  );
};

export default WhatsAppWidget;
