
import React, { useEffect, useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import CustomCursor from '../components/utils/CustomCursor';
import ScrollReveal from '../components/utils/ScrollReveal';
import { ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    console.log('Form data submitted:', formData);
    
    // Show success toast
    toast({
      title: "Message sent",
      description: "We'll get back to you as soon as possible.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      message: '',
    });
  };
  
  return (
    <div className="min-h-screen bg-white">
      <CustomCursor />
      <Navbar />
      
      <main>
        <section className="pt-32 pb-16">
          <div className="container-custom">
            <ScrollReveal>
              <h1 className="h1 mb-8 max-w-5xl">Contact</h1>
              <p className="large-text max-w-2xl">
                Let's create something together. Get in touch and let's discuss your project.
              </p>
            </ScrollReveal>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              <ScrollReveal>
                <div>
                  <h2 className="h3 mb-6">Contact information</h2>
                  <ul className="space-y-6">
                    <li>
                      <span className="block text-sm text-gray-500 mb-1">Email</span>
                      <a href="mailto:hello@basicecho.com" className="large-text hover:underline">
                        hello@basicecho.com
                      </a>
                    </li>
                    <li>
                      <span className="block text-sm text-gray-500 mb-1">Phone</span>
                      <a href="tel:+1234567890" className="large-text hover:underline">
                        +1 (234) 567-890
                      </a>
                    </li>
                  </ul>
                  
                  <div className="mt-12">
                    <h3 className="text-xl font-semibold mb-4">Offices</h3>
                    <ul className="space-y-6">
                      <li>
                        <span className="block font-medium mb-1">San Francisco</span>
                        <address className="not-italic text-gray-600">
                          123 Market St, Suite 400<br />
                          San Francisco, CA 94103
                        </address>
                      </li>
                      <li>
                        <span className="block font-medium mb-1">New York</span>
                        <address className="not-italic text-gray-600">
                          456 Broadway, 5th Floor<br />
                          New York, NY 10013
                        </address>
                      </li>
                      <li>
                        <span className="block font-medium mb-1">London</span>
                        <address className="not-italic text-gray-600">
                          789 Oxford Street<br />
                          London, W1D 2HG, UK
                        </address>
                      </li>
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={0.2}>
                <form onSubmit={handleSubmit} className="space-y-8">
                  <h2 className="h3 mb-6">Send us a message</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 focus:border-black transition-colors outline-none"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 focus:border-black transition-colors outline-none"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 focus:border-black transition-colors outline-none"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full p-3 border border-gray-300 focus:border-black transition-colors outline-none"
                      />
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    className="btn btn-primary group"
                  >
                    <span>Send message</span>
                    <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                  </button>
                </form>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
