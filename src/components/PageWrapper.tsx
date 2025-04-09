
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface PageWrapperProps {
  children: React.ReactNode;
  backgroundImage?: string;
  backgroundOverlay?: boolean;
  darkOverlay?: boolean;
  hero?: boolean;
}

const PageWrapper = ({ 
  children, 
  backgroundImage = "/lovable-uploads/7d63c63f-f878-4842-8a33-471746a730f9.png", 
  backgroundOverlay = true,
  darkOverlay = true,
  hero = false
}: PageWrapperProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {backgroundOverlay && (
        <div 
          className={`fixed inset-0 -z-10 ${hero ? 'hero-gradient' : ''}`} 
          style={!hero ? { 
            backgroundImage: `linear-gradient(to right, rgba(11, 27, 51, 0.95), rgba(11, 27, 51, 0.95)), url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          } : {}}
        />
      )}
      <Navbar />
      <main className="flex-grow pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default PageWrapper;
