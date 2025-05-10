
import React from 'react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  gradient?: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  className,
  gradient = false
}) => {
  return (
    <div className={cn(
      "p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg",
      gradient 
        ? "bg-gradient-to-br from-benzol-primary/10 to-benzol-accent/5" 
        : "bg-white",
      className
    )}>
      {icon && (
        <div className="mb-4 text-benzol-accent">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default FeatureCard;
