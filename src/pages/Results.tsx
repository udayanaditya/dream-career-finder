
import React, { useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import CareerCard from '@/components/CareerCard';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Download, Share2 } from 'lucide-react';
import { careers } from '@/utils/careerData';
import PageWrapper from '@/components/PageWrapper';

interface ResultItem {
  id: string;
  matchPercentage: number;
}

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as { results: ResultItem[], answers: Record<number, string> } || null;
  
  useEffect(() => {
    // If no results in state, redirect to quiz
    if (!state || !state.results) {
      navigate('/quiz');
    }
  }, [state, navigate]);

  if (!state || !state.results) {
    return null; // Will redirect due to useEffect
  }

  const matchedCareers = state.results.map(result => {
    const career = careers.find(c => c.id === result.id);
    return {
      ...career,
      matchPercentage: result.matchPercentage
    };
  }).filter(Boolean);

  return (
    <PageWrapper>
      <div className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold mb-2 text-gradient">Your Career Matches</h1>
                <p className="text-white mb-4">
                  Based on your answers, here are the careers that best match your profile.
                </p>
              </div>
              <div className="flex space-x-2 mt-4 md:mt-0">
                <Button variant="outline" size="sm" className="flex items-center border-white/10 bg-black/30 hover:bg-black/50 text-white">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share Results
                </Button>
                <Button variant="outline" size="sm" className="flex items-center border-white/10 bg-black/30 hover:bg-black/50 text-white">
                  <Download className="mr-2 h-4 w-4" />
                  Save as PDF
                </Button>
              </div>
            </div>

            <div className="glass-card rounded-lg p-6 mb-8">
              <h2 className="text-xl font-bold mb-4 text-gradient">Top Career Matches</h2>
              
              <div className="space-y-6">
                {matchedCareers.map((career: any) => (
                  <div key={career.id} className="border-b border-white/10 pb-6 last:border-b-0 last:pb-0">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/3">
                        <CareerCard career={career} matchPercentage={career.matchPercentage} isCompact={true} />
                      </div>
                      <div className="md:w-2/3">
                        <h3 className="text-lg font-semibold mb-2 text-white">{career.title}</h3>
                        <p className="text-white mb-3">{career.description}</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div>
                            <h4 className="font-medium text-sm text-white/70 mb-1">Key Skills</h4>
                            <ul className="list-disc list-inside text-sm text-white">
                              {career.skills.slice(0, 3).map((skill: string, index: number) => (
                                <li key={index}>{skill}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-medium text-sm text-white/70 mb-1">Education</h4>
                            <ul className="list-disc list-inside text-sm text-white">
                              {career.education.slice(0, 2).map((item: string, index: number) => (
                                <li key={index}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        
                        <div className="flex justify-end">
                          <Button asChild size="sm" className="bg-primary hover:bg-primary/80">
                            <Link to={`/careers/${career.id}`}>
                              View Full Details
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-between">
              <Button asChild variant="outline" className="flex items-center border-white/10 bg-black/30 hover:bg-black/50 text-white">
                <Link to="/quiz">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Retake Quiz
                </Link>
              </Button>
              
              <Button asChild className="bg-secondary hover:bg-secondary/80">
                <Link to="/careers">
                  Explore All Careers
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Results;
