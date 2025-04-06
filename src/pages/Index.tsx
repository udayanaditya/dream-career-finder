
import React from 'react';
import { Button } from "@/components/ui/button";
import PageWrapper from '@/components/PageWrapper';
import StreamSuggestions from '@/components/StreamSuggestions';

const Index = () => {
  return (
    <PageWrapper backgroundImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80" darkOverlay={true}>
      <div className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 text-gradient">Find Your Perfect Career Path</h1>
            <p className="text-xl text-gray-300 mb-8">
              Discover career opportunities aligned with your interests, skills, and aspirations.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-career-purple hover:bg-purple-700">
                <a href="/quiz">Take Career Quiz</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-black/30 border-white/10 hover:bg-black/50 text-white">
                <a href="/careers">Explore All Careers</a>
              </Button>
            </div>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <StreamSuggestions />
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Index;
