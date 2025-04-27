
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  console.log('ContactSection rendering - simplified version');
  
  return (
    <section className="py-24 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Let's work together</h2>
          <p className="text-xl mb-10">
            We collaborate with ambitious brands and people. Drop us a line if you're interested in working with us.
          </p>
          <Button 
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-black group"
            asChild
          >
            <Link to="/contact">
              Get in touch
              <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
