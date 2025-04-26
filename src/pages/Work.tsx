
import React, { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import CustomCursor from '../components/utils/CustomCursor';
import ScrollReveal from '../components/utils/ScrollReveal';

// Sample work data
const workItems = [
  {
    id: 1,
    title: 'Google',
    description: 'A deeply integrated digital ecosystem',
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=1600',
    category: 'Experience Design',
  },
  {
    id: 2,
    title: 'KFC',
    description: 'Finger lickin\' good ecommerce',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1600',
    category: 'Brand Experience',
  },
  {
    id: 3,
    title: 'Patagonia',
    description: 'Digital experience for environmental activism',
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=1600',
    category: 'Design & Technology',
  },
  {
    id: 4,
    title: 'Wilson',
    description: 'A century of sports reimagined',
    image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&q=80&w=1600',
    category: 'Digital Transformation',
  },
  {
    id: 5,
    title: 'Airbnb',
    description: 'Reimagining the future of travel',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1600',
    category: 'Experience Design',
  },
  {
    id: 6,
    title: 'Nike',
    description: 'Digital retail experience',
    image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&q=80&w=1600',
    category: 'Brand Experience',
  },
];

const Work = () => {
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
              <h1 className="h1 mb-8 max-w-5xl">Work</h1>
              <p className="large-text max-w-2xl">
                We create digital experiences that connect with people. Here's a selection 
                of our most impactful work.
              </p>
            </ScrollReveal>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {workItems.map((work, index) => (
                <ScrollReveal key={work.id} delay={index * 0.1}>
                  <div className="project-card group">
                    <div className="relative overflow-hidden">
                      <img
                        src={work.image}
                        alt={work.title}
                        className="project-card-image w-full aspect-[4/3] object-cover"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                    </div>
                    <div className="mt-6">
                      <span className="block text-sm text-gray-500 mb-2">
                        {work.category}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-semibold mb-2">
                        {work.title}
                      </h3>
                      <p className="text-lg">{work.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Work;
