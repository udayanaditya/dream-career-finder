
import React, { useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CareerCard from '@/components/CareerCard';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Download, Share2 } from 'lucide-react';
import { careers, getCareersByIds } from '@/utils/careerData';

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
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold mb-2">Your Career Matches</h1>
                <p className="text-gray-600">
                  Based on your answers, here are the careers that best match your profile.
                </p>
              </div>
              <div className="flex space-x-2 mt-4 md:mt-0">
                <Button variant="outline" size="sm" className="flex items-center">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share Results
                </Button>
                <Button variant="outline" size="sm" className="flex items-center">
                  <Download className="mr-2 h-4 w-4" />
                  Save as PDF
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6 mb-8">
              <h2 className="text-xl font-bold mb-4">Top Career Matches</h2>
              
              <div className="space-y-6">
                {matchedCareers.map((career: any) => (
                  <div key={career.id} className="border-b pb-6 last:border-b-0 last:pb-0">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/3">
                        <CareerCard career={career} matchPercentage={career.matchPercentage} isCompact={true} />
                      </div>
                      <div className="md:w-2/3">
                        <h3 className="text-lg font-semibold mb-2">{career.title}</h3>
                        <p className="text-gray-700 mb-3">{career.description}</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div>
                            <h4 className="font-medium text-sm text-gray-500 mb-1">Key Skills</h4>
                            <ul className="list-disc list-inside text-sm">
                              {career.skills.slice(0, 3).map((skill: string, index: number) => (
                                <li key={index}>{skill}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-medium text-sm text-gray-500 mb-1">Education</h4>
                            <ul className="list-disc list-inside text-sm">
                              {career.education.slice(0, 2).map((item: string, index: number) => (
                                <li key={index}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        
                        <div className="flex justify-end">
                          <Button asChild size="sm">
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
              <Button asChild variant="outline" className="flex items-center">
                <Link to="/quiz">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Retake Quiz
                </Link>
              </Button>
              
              <Button asChild>
                <Link to="/careers">
                  Explore All Careers
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Results;
