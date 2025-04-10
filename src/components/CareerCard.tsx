
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { Career } from '@/utils/careerData';

interface CareerCardProps {
  career: Career;
  matchPercentage?: number;
  isCompact?: boolean;
}

const CareerCard: React.FC<CareerCardProps> = ({ 
  career, 
  matchPercentage,
  isCompact = false
}) => {
  const getColorClass = (color: string) => {
    switch (color) {
      case 'purple':
        return 'bg-career-purple text-white';
      case 'blue':
        return 'bg-career-blue text-white';
      case 'pink':
        return 'bg-career-pink text-white';
      case 'orange':
        return 'bg-career-orange text-white';
      case 'green':
        return 'bg-career-green text-white';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className={`overflow-hidden card-hover ${isCompact ? '' : 'h-full'}`}>
      <div className={`h-2 ${getColorClass(career.color)}`}></div>
      <CardHeader className={isCompact ? 'p-4' : 'p-6'}>
        <div className="flex justify-between items-start">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">{career.icon}</span>
            <CardTitle className={`${isCompact ? 'text-lg' : 'text-xl'} text-black`}>{career.title}</CardTitle>
          </div>
          {matchPercentage && (
            <Badge variant="secondary" className="text-career-purple">
              {matchPercentage}% Match
            </Badge>
          )}
        </div>
        <CardDescription className={isCompact ? 'line-clamp-2' : ''}>
          {career.description}
        </CardDescription>
      </CardHeader>

      {!isCompact && (
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-sm text-gray-500 mb-1">Key Skills</h4>
              <div className="flex flex-wrap gap-2">
                {career.skills.slice(0, 3).map((skill, index) => (
                  <Badge key={index} variant="outline">{skill}</Badge>
                ))}
                {career.skills.length > 3 && (
                  <Badge variant="outline">+{career.skills.length - 3} more</Badge>
                )}
              </div>
            </div>

            <div>
              <h4 className="font-medium text-sm text-gray-500 mb-1">Work Environment</h4>
              <p className="text-sm">{career.workEnvironment}</p>
            </div>
          </div>
        </CardContent>
      )}

      <CardFooter className={isCompact ? 'p-4' : 'p-6'}>
        <Button asChild className="w-full">
          <Link to={`/careers/${career.id}`} className="flex justify-center items-center">
            Learn More <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CareerCard;
