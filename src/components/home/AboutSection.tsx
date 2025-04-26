
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  
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
    
    if (contentRef.current) observer.observe(contentRef.current);
    if (imageRef.current) observer.observe(imageRef.current);
    
    return () => {
      if (contentRef.current) observer.unobserve(contentRef.current);
      if (imageRef.current) observer.unobserve(imageRef.current);
    };
  }, []);
  
  return (
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div 
            ref={contentRef} 
            className="reveal"
          >
            <h2 className="h2 mb-6">We create brand experiences that matter.</h2>
            <p className="large-text mb-8">
              We're a global experience agency that strategically builds end-to-end 
              digital solutions with an emphasis on brand. Great brands know their 
              experience is their most valuable marketing tool.
            </p>
            <Link 
              to="/about" 
              className="inline-flex items-center text-lg group"
            >
              About us
              <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          
          <div 
            ref={imageRef} 
            className="reveal overflow-hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
              alt="BASIC/ECHO Team" 
              className="w-full aspect-[4/3] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
