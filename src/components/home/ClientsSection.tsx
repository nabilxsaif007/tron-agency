
import React, { useEffect, useRef } from 'react';

// Sample client logos (use placeholder logos for educational purposes)
const clients = [
  {
    id: 1,
    name: 'Google',
    logo: 'https://storage.googleapis.com/basic-agency.appspot.com/logos/google.svg'
  },
  {
    id: 2,
    name: 'Apple',
    logo: 'https://storage.googleapis.com/basic-agency.appspot.com/logos/apple.svg'
  },
  {
    id: 3,
    name: 'Nike',
    logo: 'https://storage.googleapis.com/basic-agency.appspot.com/logos/nike.svg'
  },
  {
    id: 4,
    name: 'Amazon',
    logo: 'https://storage.googleapis.com/basic-agency.appspot.com/logos/amazon.svg'
  },
  {
    id: 5,
    name: 'Microsoft',
    logo: 'https://storage.googleapis.com/basic-agency.appspot.com/logos/microsoft.svg'
  },
  {
    id: 6,
    name: 'Adidas',
    logo: 'https://storage.googleapis.com/basic-agency.appspot.com/logos/adidas.svg'
  },
  {
    id: 7,
    name: 'Coca-Cola',
    logo: 'https://storage.googleapis.com/basic-agency.appspot.com/logos/coca-cola.svg'
  },
  {
    id: 8,
    name: 'Samsung',
    logo: 'https://storage.googleapis.com/basic-agency.appspot.com/logos/samsung.svg'
  }
];

const ClientsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  
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
    
    if (titleRef.current) observer.observe(titleRef.current);
    if (gridRef.current) observer.observe(gridRef.current);
    
    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (gridRef.current) observer.unobserve(gridRef.current);
    };
  }, []);
  
  return (
    <section ref={sectionRef} className="py-24 bg-white border-t border-gray-100">
      <div className="container-custom">
        <h2
          ref={titleRef}
          className="text-2xl md:text-3xl font-medium mb-16 text-center reveal"
        >
          Brands we've partnered with
        </h2>
        
        <div 
          ref={gridRef} 
          className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-16 reveal"
        >
          {clients.map((client) => (
            <div 
              key={client.id}
              className="flex justify-center items-center"
            >
              {/* Placeholder for client logo */}
              <div className="h-12 flex items-center justify-center">
                {/* If you have actual logos, use them. For now, display the name */}
                <span className="text-xl font-bold text-gray-800">{client.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
