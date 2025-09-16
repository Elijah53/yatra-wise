import React from 'react';
import { cn } from '@/lib/utils';

interface InterestTagProps {
  id: string;
  label: string;
  icon: string;
  selected: boolean;
  onToggle: (id: string) => void;
}

const InterestTag: React.FC<InterestTagProps> = ({ id, label, icon, selected, onToggle }) => {
  return (
    <label 
      className={cn(
        "interest-tag flex items-center gap-2 px-4 py-3 rounded-lg cursor-pointer border-2 transition-all",
        selected 
          ? "bg-primary text-primary-foreground border-primary shadow-travel" 
          : "bg-muted text-muted-foreground border-border hover:border-primary/30 hover:bg-muted/80"
      )}
    >
      <input
        type="checkbox"
        id={id}
        checked={selected}
        onChange={() => onToggle(id)}
        className="sr-only"
      />
      <span className="text-lg">{icon}</span>
      <span className="font-medium text-sm">{label}</span>
    </label>
  );
};

export default InterestTag;