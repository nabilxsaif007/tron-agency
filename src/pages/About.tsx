
import React, { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import CustomCursor from '../components/utils/CustomCursor';
import ScrollReveal from '../components/utils/ScrollReveal';
import ContactSection from '../components/home/ContactSection';

// Sample team data
const teamMembers = [
  {
    id: 1,
    name: 'Alex Smith',
    role: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=400&h=400',
  },
  {
    id: 2,
    name: 'Jamie Chen',
    role: 'Creative Director',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=400&h=400',
  },
  {
    id: 3,
    name: 'Taylor Morgan',
    role: 'Head of Design',
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=400&h=400',
  },
  {
    id: 4,
    name: 'Jordan Lee',
    role: 'Technical Director',
    image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&w=400&h=400',
  },
];

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen bg-white">
      <CustomCursor />
      <Navbar />
      
      <main>
        <section className="pt-32 pb-16">
          <div className="container-custom">
            <ScrollReveal>
              <h1 className="h1 mb-8 max-w-5xl">About us</h1>
              <p className="large-text max-w-2xl">
                BASIC/ECHO is a global experience agency that strategically builds 
                end-to-end digital solutions with an emphasis on brand.
              </p>
            </ScrollReveal>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container-custom">
            <ScrollReveal>
              <div className="relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
                  alt="BASIC/ECHO Team"
                  className="w-full aspect-[21/9] object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              <ScrollReveal>
                <h2 className="h2 mb-6">Our mission</h2>
              </ScrollReveal>
              
              <ScrollReveal delay={0.2}>
                <p className="large-text mb-8">
                  We partner with ambitious brands to create digital experiences that connect with people.
                  Our approach to innovation is anchored in brand experience, pushing the boundaries of what 
                  engaging digital experiences can be.
                </p>
                <p className="large-text">
                  We're driven by the pursuit of better—creating experiences that make people's lives simpler, 
                  more pleasant, and more productive. We believe that the highest level of brand value is delivered 
                  through exceptional experiences.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-secondary">
          <div className="container-custom">
            <ScrollReveal>
              <h2 className="h2 mb-16 text-center">Our team</h2>
            </ScrollReveal>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <ScrollReveal key={member.id} delay={index * 0.1}>
                  <div className="group">
                    <div className="relative overflow-hidden mb-4">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <p className="text-gray-600">{member.role}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
        
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
