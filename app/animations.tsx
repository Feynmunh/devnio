'use client';

import { useEffect, useRef } from 'react';

export function useScrollAnimation(className: string = 'animate-in') {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(className);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [className]);

  return ref;
}

export function ScrollAnimationWrapper({ 
  children, 
  className = '' 
}: { 
  children: React.ReactNode; 
  className?: string;
}) {
  const ref = useScrollAnimation();

  return (
    <div ref={ref as any} className={`opacity-0 transition-all duration-700 ${className}`}>
      {children}
    </div>
  );
}
