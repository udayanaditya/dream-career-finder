
import React from 'react';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { QuizQuestion as QuizQuestionType } from "@/utils/quizQuestions";
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface QuizQuestionProps {
  question: QuizQuestionType;
  selectedAnswer: string | null;
  onAnswerSelect: (value: string) => void;
  onNext: () => void;
  onPrevious: () => void;
  currentStep: number;
  totalSteps: number;
  isFirstQuestion: boolean;
  isLastQuestion: boolean;
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({
  question,
  selectedAnswer,
  onAnswerSelect,
  onNext,
  onPrevious,
  currentStep,
  totalSteps,
  isFirstQuestion,
  isLastQuestion
}) => {
  return (
    <div className="animate-fade-in">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-500">
            Question {currentStep} of {totalSteps}
          </span>
          <span className="text-sm font-medium text-gray-500">
            {Math.round((currentStep / totalSteps) * 100)}% Complete
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-career-purple h-2 rounded-full transition-all"
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          ></div>
        </div>
      </div>

      <h2 className="text-xl font-bold mb-6">{question.question}</h2>

      <RadioGroup 
        value={selectedAnswer || ''}
        onValueChange={onAnswerSelect}
        className="space-y-4"
      >
        {question.options.map((option) => (
          <div key={option.id} className="flex items-center space-x-2 border rounded-lg p-4 transition-all hover:border-career-purple">
            <RadioGroupItem value={option.value} id={option.id} />
            <Label htmlFor={option.id} className="flex-grow cursor-pointer">{option.text}</Label>
          </div>
        ))}
      </RadioGroup>

      <div className="flex justify-between mt-8">
        <Button 
          variant="outline" 
          onClick={onPrevious}
          disabled={isFirstQuestion}
          className="flex items-center"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Previous
        </Button>
        
        <Button 
          onClick={onNext}
          disabled={!selectedAnswer}
          className="flex items-center"
        >
          {isLastQuestion ? 'See Results' : 'Next'}
          {!isLastQuestion && <ArrowRight className="ml-2 h-4 w-4" />}
        </Button>
      </div>
    </div>
  );
};

export default QuizQuestion;
