import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import InterestTag from './InterestTag';

interface Interest {
  id: string;
  label: string;
  icon: string;
}

const interests: Interest[] = [
  { id: 'history', label: 'History', icon: '🏛️' },
  { id: 'adventure', label: 'Adventure', icon: '⛰️' },
  { id: 'food', label: 'Local Food', icon: '🍛' },
  { id: 'spirituality', label: 'Spirituality', icon: '🕉️' },
  { id: 'photography', label: 'Photography', icon: '📸' },
  { id: 'relaxation', label: 'Relaxation', icon: '🧘‍♀️' },
];

const TripPlannerCard: React.FC = () => {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [destination, setDestination] = useState('');
  const [duration, setDuration] = useState('3');
  const [budget, setBudget] = useState('moderate');

  const handleInterestToggle = (interestId: string) => {
    setSelectedInterests(prev => 
      prev.includes(interestId)
        ? prev.filter(id => id !== interestId)
        : [...prev, interestId]
    );
  };

  const handleGenerateYatra = () => {
    // For now, just show an alert with the selected options
    const formData = {
      destination,
      duration: parseInt(duration),
      budget,
      interests: selectedInterests
    };
    
    console.log('Generating yatra with:', formData);
    alert(`Generating your yatra to ${destination || 'amazing destinations'} for ${duration} days with ${budget} budget!`);
  };

  return (
    <div className="bg-card rounded-2xl p-8 shadow-card border border-border max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-secondary mb-8 text-center">Create Your Perfect Yatra</h2>
      
      {/* Primary Inputs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="space-y-2">
          <Label htmlFor="destination" className="text-secondary font-semibold">Destination</Label>
          <Input
            id="destination"
            type="text"
            placeholder="e.g., Jaipur, Rajasthan"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="border-2 focus:border-primary rounded-lg"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="duration" className="text-secondary font-semibold">Duration (days)</Label>
          <Input
            id="duration"
            type="number"
            min="1"
            max="30"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="border-2 focus:border-primary rounded-lg"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="budget" className="text-secondary font-semibold">Budget</Label>
          <Select value={budget} onValueChange={setBudget}>
            <SelectTrigger className="border-2 focus:border-primary rounded-lg">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="economy">Economy</SelectItem>
              <SelectItem value="moderate">Moderate</SelectItem>
              <SelectItem value="luxury">Luxury</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      {/* Interests Selection */}
      <div className="mb-8">
        <Label className="text-secondary font-semibold text-lg mb-4 block">Select Your Interests</Label>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {interests.map((interest) => (
            <InterestTag
              key={interest.id}
              id={interest.id}
              label={interest.label}
              icon={interest.icon}
              selected={selectedInterests.includes(interest.id)}
              onToggle={handleInterestToggle}
            />
          ))}
        </div>
      </div>
      
      {/* Action Button */}
      <div className="text-center">
        <Button 
          onClick={handleGenerateYatra}
          className="travel-button px-8 py-4 text-lg font-semibold rounded-xl"
          size="lg"
        >
          Generate My Yatra ✈️
        </Button>
      </div>
    </div>
  );
};

export default TripPlannerCard;