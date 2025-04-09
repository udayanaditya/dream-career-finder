
import React, { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import PageWrapper from '@/components/PageWrapper';
import StreamSuggestions from '@/components/StreamSuggestions';
import ContactForm from '@/components/ContactForm';

const Index = () => {
  // Add scroll reveal animation
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    
    const reveal = () => {
      revealElements.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };
    
    window.addEventListener('scroll', reveal);
    // Initial check
    reveal();
    
    // Cleanup
    return () => window.removeEventListener('scroll', reveal);
  }, []);

  return (
    <PageWrapper backgroundImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80" darkOverlay={true}>
      <div className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16 reveal">
            <h1 className="text-5xl font-bold mb-6 text-gradient font-display">Find Your Perfect Career Path</h1>
            <p className="text-xl text-gray-300 mb-8">
              Discover career opportunities aligned with your interests, skills, and aspirations.
            </p>
            <div className="flex justify-center">
              <Button asChild size="lg" className="premium-btn">
                <a href="/quiz">Take Career Quiz</a>
              </Button>
            </div>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="reveal reveal-delay-1">
              <StreamSuggestions />
            </div>
          </div>
          
          <div className="mt-24 max-w-4xl mx-auto">
            <div className="text-center mb-12 reveal">
              <h2 className="text-3xl font-bold mb-4 text-gradient font-display">Get In Touch</h2>
              <p className="text-muted-foreground">Have questions or feedback? We'd love to hear from you.</p>
            </div>
            <div className="reveal reveal-delay-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Index;
