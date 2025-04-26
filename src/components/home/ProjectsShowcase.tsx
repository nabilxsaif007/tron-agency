
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

// Sample project data
const projects = [
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
];

const ProjectsShowcase = () => {
  console.log('ProjectsShowcase rendering'); // Debug log
  
  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-start justify-between mb-16">
          <h2 className="h2 max-w-lg mb-6 md:mb-0">Featured Work</h2>
          <div className="max-w-md">
            <p className="large-text mb-6">
              We collaborate with ambitious brands and people.
            </p>
            <Link 
              to="/work" 
              className="inline-flex items-center text-lg group"
            >
              View all work
              <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="project-card group"
            >
              <Link to={`/work/${project.id}`} className="block">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-card-image w-full aspect-[4/3] object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>
                <div className="mt-6">
                  <span className="block text-sm text-gray-500 mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-lg">{project.description}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
