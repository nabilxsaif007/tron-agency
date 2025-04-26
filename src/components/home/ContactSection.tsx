
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
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
    
    return () => {
      if (contentRef.current) observer.unobserve(contentRef.current);
    };
  }, []);
  
  return (
    <section ref={sectionRef} className="py-24 bg-black text-white">
      <div className="container-custom">
        <div 
          ref={contentRef}
          className="flex flex-col items-center text-center max-w-3xl mx-auto reveal"
        >
          <h2 className="h1 mb-6">Let's work together</h2>
          <p className="large-text mb-10">
            We collaborate with ambitious brands and people. Drop us a line if you're interested in working with us.
          </p>
          <Link 
            to="/contact" 
            className="btn btn-outline border-white text-white hover:bg-white hover:text-black group"
          >
            <span>Get in touch</span>
            <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
