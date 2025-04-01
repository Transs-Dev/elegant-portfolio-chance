
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const WelcomePopup = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Show popup when component mounts
    setOpen(true);

    // Auto close after 15 seconds
    const timer = setTimeout(() => {
      setOpen(false);
    }, 15000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-warmPink">Welcome to My Portfolio!</DialogTitle>
          <DialogDescription className="text-center">
            <div className="py-4">
              <p className="mb-4">
                I'm Chanice, a dedicated Virtual Assistant ready to transform your administrative challenges into seamless operations.
              </p>
              <p className="mb-4">
                Discover how my expertise in administrative support, customer service, and project management can help your business thrive.
              </p>
            </div>
            <div className="flex justify-center space-x-4 mt-2">
              <Button 
                onClick={() => setOpen(false)} 
                className="bg-warmPink hover:bg-warmPink/90"
              >
                Explore Portfolio
              </Button>
              <Button 
                onClick={() => {
                  setOpen(false);
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                variant="outline"
                className="border-lightBlue text-lightBlue hover:bg-lightBlue/10"
              >
                Get in Touch
              </Button>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default WelcomePopup;
