
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  id?: string;
  gradient?: boolean;
}

const Section: React.FC<SectionProps> = ({ 
  title, 
  subtitle, 
  children, 
  className, 
  id,
  gradient = false
}) => {
  return (
    <section id={id} className={cn("py-16 px-4", className)}>
      <div className="container mx-auto">
        <h2 className={cn(
          "text-3xl md:text-4xl font-bold mb-2 text-center",
          gradient && "gradient-text"
        )}>
          {title}
        </h2>
        {subtitle && (
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
