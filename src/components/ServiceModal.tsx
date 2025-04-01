
import { X } from "lucide-react";

interface ServiceModalProps {
  title: string;
  description: string;
  isOpen: boolean;
  onClose: () => void;
}

const ServiceModal = ({ title, description, isOpen, onClose }: ServiceModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 animate-fade-in">
      <div 
        className="bg-white rounded-lg p-6 max-w-md w-full mx-4 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">{title}</h3>
          <button 
            onClick={onClose}
            className="p-1 rounded-full hover:bg-muted transition-colors"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="mb-6">
          <p className="text-muted-foreground">{description}</p>
        </div>
        
        <div className="mt-4 flex justify-end">
          <a
            href="https://wa.me/971508934734?text=Hello%20Chanice,%20I'm%20interested%20in%20your%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-green-600 px-6 py-2 text-sm font-medium text-white hover:bg-green-700 transition-colors"
          >
            Contact via WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;
