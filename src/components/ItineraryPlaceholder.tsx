import React from 'react';
import { Compass } from 'lucide-react';

const ItineraryPlaceholder: React.FC = () => {
  return (
    <div 
      id="itinerary-output" 
      className="bg-card rounded-2xl p-12 shadow-card border border-border max-w-4xl mx-auto text-center"
    >
      <div className="animate-float mb-6">
        <Compass size={64} className="text-primary mx-auto" />
      </div>
      <h3 className="text-2xl font-semibold text-secondary mb-4">
        Ready for Your Adventure?
      </h3>
      <p className="text-muted-foreground text-lg max-w-md mx-auto">
        Your personalized itinerary will appear here once you generate your yatra. 
        Get ready to explore the incredible diversity of India! 🇮🇳
      </p>
    </div>
  );
};

export default ItineraryPlaceholder;