
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import QuizQuestion from '@/components/QuizQuestion';
import { Card, CardContent } from "@/components/ui/card";
import { quizQuestions } from '@/utils/quizQuestions';
import { careers } from '@/utils/careerData';
import PageWrapper from '@/components/PageWrapper';

const Quiz = () => {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  
  const handleAnswerSelect = (value: string) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestionIndex]: value
    }));
  };

  const handleNext = () => {
    if (currentQuestionIndex === quizQuestions.length - 1) {
      // This is the last question, calculate results and navigate
      calculateResults();
    } else {
      // Move to next question
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const calculateResults = () => {
    // Simple matching algorithm (in a real app, this would be more sophisticated)
    const matchScores: Record<string, number> = {};
    
    // Initialize scores for all careers
    careers.forEach(career => {
      matchScores[career.id] = 0;
    });
    
    // Calculate match scores based on answers
    Object.values(answers).forEach(answer => {
      careers.forEach(career => {
        if (career.traits.includes(answer)) {
          matchScores[career.id] += 1;
        }
        
        // Also check tags for broader matching
        if (career.tags.includes(answer)) {
          matchScores[career.id] += 0.5;
        }
      });
    });
    
    // Convert to percentages and sort
    const maxPossibleScore = Object.keys(answers).length; // Max score if all answers match
    const results = careers.map(career => ({
      id: career.id,
      matchPercentage: Math.round((matchScores[career.id] / maxPossibleScore) * 100)
    }))
    .sort((a, b) => b.matchPercentage - a.matchPercentage);
    
    // Navigate to results page with top matches
    navigate('/results', { 
      state: { 
        results: results.slice(0, 5), // Top 5 matches
        answers
      } 
    });
  };

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const selectedAnswer = answers[currentQuestionIndex] || null;

  return (
    <PageWrapper backgroundImage="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80">
      <div className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold text-center mb-4 text-gradient">Career Finder Quiz</h1>
            <p className="text-center text-gray-300 mb-8">
              Answer the following questions to discover career paths that align with your interests and strengths.
            </p>
            
            <Card className="glass-card border-white/10">
              <CardContent className="p-6">
                <QuizQuestion
                  question={currentQuestion}
                  selectedAnswer={selectedAnswer}
                  onAnswerSelect={handleAnswerSelect}
                  onNext={handleNext}
                  onPrevious={handlePrevious}
                  currentStep={currentQuestionIndex + 1}
                  totalSteps={quizQuestions.length}
                  isFirstQuestion={currentQuestionIndex === 0}
                  isLastQuestion={currentQuestionIndex === quizQuestions.length - 1}
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Quiz;
