
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import CustomCursor from '../components/utils/CustomCursor';
import { ArrowRight } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-white">
      <CustomCursor />
      <Navbar />
      
      <main className="pt-32 pb-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="h1 mb-6">404</h1>
            <p className="large-text mb-12">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <Link 
              to="/" 
              className="btn btn-primary group"
            >
              <span>Back to Home</span>
              <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
