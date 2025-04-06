
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface PageWrapperProps {
  children: React.ReactNode;
  backgroundImage?: string;
  backgroundOverlay?: boolean;
  darkOverlay?: boolean; // New prop for darker overlay
}

const PageWrapper = ({ 
  children, 
  backgroundImage = "https://images.unsplash.com/photo-1464802686167-b939a6910659?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2333&q=80", 
  backgroundOverlay = true,
  darkOverlay = false
}: PageWrapperProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <div 
        className="fixed inset-0 -z-10" 
        style={{ 
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      {backgroundOverlay && (
        <div className={`fixed inset-0 ${darkOverlay ? 'bg-black/90' : 'bg-black/80'} -z-10`} />
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
