
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Sample awards data
const awards = [
  {
    id: 1,
    name: 'Agency of the Year',
    source: 'Awwwards',
    year: '2023',
  },
  {
    id: 2,
    name: 'Design Company of the Year',
    source: 'FastCompany',
    year: '2022',
  },
  {
    id: 3,
    name: 'Grand Prix',
    source: 'Cannes Lions',
    year: '2023',
  },
  {
    id: 4,
    name: 'Best Agency Culture',
    source: 'AdAge',
    year: '2022',
  },
];

const AwardsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const awardRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };
    
    const handleIntersect: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    };
    
    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    if (textRef.current) observer.observe(textRef.current);
    
    awardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    
    return () => {
      if (textRef.current) observer.unobserve(textRef.current);
      
      awardRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);
  
  return (
    <section ref={sectionRef} className="py-24 bg-secondary">
      <div className="container-custom">
        <div 
          ref={textRef} 
          className="flex flex-col md:flex-row items-start justify-between mb-20 reveal"
        >
          <h2 className="h2 max-w-md mb-6 md:mb-0">Recognition</h2>
          <div className="max-w-md">
            <p className="large-text mb-6">
              Our work has been recognized by the industry's most respected institutions.
            </p>
            <Link 
              to="/about" 
              className="inline-flex items-center text-lg group"
            >
              Learn more about us
              <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {awards.map((award, index) => (
            <div
              key={award.id}
              ref={(el) => (awardRefs.current[index] = el)}
              className="reveal p-8 bg-white border border-gray-200 flex flex-col"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="flex-1">
                <span className="text-sm text-gray-500 block mb-2">{award.source}</span>
                <h3 className="text-2xl font-semibold mb-2">{award.name}</h3>
              </div>
              <div className="text-lg font-medium mt-4">{award.year}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
