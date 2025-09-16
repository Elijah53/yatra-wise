import React from 'react';
import TripPlannerCard from '@/components/TripPlannerCard';
import ItineraryPlaceholder from '@/components/ItineraryPlaceholder';
import heroImage from '@/assets/india-travel-hero.jpg';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Background */}
      <div 
        className="relative bg-cover bg-center bg-no-repeat py-20"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.7), rgba(255, 153, 51, 0.3)), url(${heroImage})`
        }}
      >
        {/* Header Section */}
        <header className="text-center text-white px-4 mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
            Bharat Yatra Navigator
          </h1>
          <p className="text-xl md:text-2xl font-medium max-w-2xl mx-auto drop-shadow-md">
            Your AI-powered guide to Incredible India!
          </p>
        </header>
      </div>

      {/* Main Content Container */}
      <main className="max-w-6xl mx-auto px-4 -mt-8 relative z-10">
        {/* Trip Planner Section */}
        <section className="mb-12">
          <TripPlannerCard />
        </section>
        
        {/* Itinerary Display Section */}
        <section className="pb-20">
          <ItineraryPlaceholder />
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-8 text-center">
        <p className="text-sm opacity-80">
          © 2024 Bharat Yatra Navigator. Discover the beauty of Incredible India.
        </p>
      </footer>
    </div>
  );
};

export default Index;