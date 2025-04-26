
import React, { useEffect } from 'react';
import HeroSection from '../components/home/HeroSection';
import ProjectsShowcase from '../components/home/ProjectsShowcase';
import AwardsSection from '../components/home/AwardsSection';
import AboutSection from '../components/home/AboutSection';
import ClientsSection from '../components/home/ClientsSection';
import ContactSection from '../components/home/ContactSection';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import CustomCursor from '../components/utils/CustomCursor';

const Index = () => {
  useEffect(() => {
    // Smooth scroll setup
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-white">
      <CustomCursor />
      <Navbar />
      
      <main>
        <HeroSection />
        <ProjectsShowcase />
        <AwardsSection />
        <AboutSection />
        <ClientsSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
