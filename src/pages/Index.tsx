
import React, { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import PageWrapper from '@/components/PageWrapper';
import ContactForm from '@/components/ContactForm';
import { CheckCircle } from 'lucide-react';

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

  const features = [
    {
      title: "Personalized Assessment",
      description: "Get career recommendations tailored to your unique personality, interests, and abilities.",
      color: "teal"
    },
    {
      title: "Career Insights",
      description: "Explore detailed information about various career paths including salary, growth potential, and educational requirements.",
      color: "purple"
    },
    {
      title: "Expert Guidance",
      description: "Access professional advice and resources to help navigate your career journey with confidence.",
      color: "teal"
    }
  ];

  return (
    <PageWrapper hero={true}>
      <div className="min-h-screen">
        {/* Hero Section */}
        <div className="pt-20 pb-16 md:pt-32 md:pb-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16 reveal">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white font-display">Find Your Perfect Career Path</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Discover career opportunities aligned with your interests, skills, and aspirations.
              </p>
              <div className="flex justify-center">
                <Button asChild size="lg" className="premium-btn">
                  <a href="/quiz">Take Career Quiz</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Features Section */}
        <div className="py-16 bg-background/60">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 reveal">
              <h2 className="text-3xl font-bold mb-4 text-gradient font-display">Why Choose Us</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We provide comprehensive career guidance to help you make informed decisions about your future.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className={`feature-card ${feature.color} reveal reveal-delay-${index + 1} card-hover`}
                >
                  <div className="flex items-center mb-4">
                    <CheckCircle className={`mr-2 ${feature.color === 'purple' ? 'text-white' : 'text-primary'}`} />
                    <h3 className={`font-bold text-xl ${feature.color === 'purple' ? 'text-white' : 'text-foreground'}`}>
                      {feature.title}
                    </h3>
                  </div>
                  <p className={feature.color === 'purple' ? 'text-white/90' : 'text-muted-foreground'}>
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Contact Section */}
        <div className="py-16 contact-section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12 reveal">
                <h2 className="text-3xl font-bold mb-4 text-gradient font-display">Get In Touch</h2>
                <p className="text-muted-foreground">Have questions or feedback? We'd love to hear from you.</p>
              </div>
              <div className="reveal reveal-delay-2 glass-card p-8 rounded-lg">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Index;
