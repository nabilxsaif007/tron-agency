
import React, { useEffect, useRef } from 'react';

const HeroSection = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!headingRef.current || !containerRef.current) return;
      
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      const containerHeight = containerRef.current.offsetHeight;
      
      // Parallax effect
      const translateY = scrollPosition * 0.4;
      headingRef.current.style.transform = `translateY(${translateY}px)`;
      
      // Opacity effect based on scroll position
      const maxScroll = containerHeight;
      const opacity = 1 - Math.min(1, scrollPosition / maxScroll * 1.5);
      headingRef.current.style.opacity = `${Math.max(0, opacity)}`;
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div ref={containerRef} className="relative h-screen overflow-hidden">
      {/* Background video or image */}
      <div className="absolute inset-0 bg-black/5">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src="https://storage.googleapis.com/basic-agency.appspot.com/hero_reel.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      
      {/* Hero content */}
      <div className="relative h-full flex flex-col justify-end pb-20 container-custom">
        <h1
          ref={headingRef}
          className="h1 max-w-5xl mb-8 transition-transform duration-300 ease-out"
        >
          BASIC/ECHO is a global experience agency.
        </h1>
        
        <p className="text-lg md:text-xl max-w-lg">
          We partner with the world's most ambitious brands to create experiences people can't ignore.
        </p>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <div className="flex flex-col items-center">
          <span className="text-sm font-medium mb-2">Scroll</span>
          <div className="w-[1px] h-6 bg-black/50 relative animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
