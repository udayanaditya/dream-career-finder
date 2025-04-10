
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
  backgroundImage = "/lovable-uploads/04a305ea-73b6-4c4b-8f5f-118977d1a0c5.png", 
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
            backgroundImage: `linear-gradient(to right, rgba(10, 25, 50, 0.97), rgba(10, 25, 50, 0.97)), url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          } : {}}
        />
      )}
      <div className="fixed inset-0 -z-20 bg-image-overlay" />
      <Navbar />
      <main className="flex-grow pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default PageWrapper;
