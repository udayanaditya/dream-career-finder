import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import PageWrapper from '@/components/PageWrapper';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, BriefcaseBusiness, GraduationCap, LineChart, ListChecks, MapPin } from 'lucide-react';
import { getCareerById, getAllCareers, Career } from '@/utils/careerData';
import CareerCard from '@/components/CareerCard';

const CareerInfo = () => {
  const { id } = useParams<{ id: string }>();
  const [career, setCareer] = useState<Career | null>(null);
  const [relatedCareers, setRelatedCareers] = useState<Career[]>([]);
  
  useEffect(() => {
    if (id) {
      const careerData = getCareerById(id);
      if (careerData) {
        setCareer(careerData);
        
        // Get related careers (with similar traits or tags)
        const allCareers = getAllCareers();
        const similarCareers = allCareers
          .filter(c => c.id !== id) // Exclude current career
          .filter(c => {
            // Find careers with at least one matching trait or tag
            return (
              c.traits.some(trait => careerData.traits.includes(trait)) ||
              c.tags.some(tag => careerData.tags.includes(tag))
            );
          })
          .slice(0, 3); // Limit to 3 related careers
        
        setRelatedCareers(similarCareers);
      }
    }
  }, [id]);

  if (!career) {
    return (
      <PageWrapper>
        <div className="min-h-screen pt-24 pb-20 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Career not found</h1>
            <Button asChild>
              <Link to="/careers">Browse All Careers</Link>
            </Button>
          </div>
        </div>
      </PageWrapper>
    );
  }

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
    <PageWrapper>
      <div className="min-h-screen pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <Button asChild variant="outline" className="flex items-center mb-4">
                <Link to="/careers">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to All Careers
                </Link>
              </Button>

              <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-8">
                <div className={`text-4xl p-4 rounded-lg ${getColorClass(career.color)}`}>
                  {career.icon}
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-black">{career.title}</h1>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {career.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary">{tag.replace('_', ' ')}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-6">{career.description}</p>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold flex items-center mb-3 text-black">
                        <GraduationCap className="mr-2 h-5 w-5 text-career-purple" />
                        Education & Qualifications
                      </h3>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        {career.education.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold flex items-center mb-3 text-black">
                        <ListChecks className="mr-2 h-5 w-5 text-career-purple" />
                        Key Skills
                      </h3>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        {career.skills.map((skill, index) => (
                          <li key={index}>{skill}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold flex items-center mb-3 text-black">
                        <MapPin className="mr-2 h-5 w-5 text-career-purple" />
                        Work Environment
                      </h3>
                      <p className="text-gray-700">{career.workEnvironment}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold flex items-center mb-3 text-black">
                        <BriefcaseBusiness className="mr-2 h-5 w-5 text-career-purple" />
                        Salary & Compensation
                      </h3>
                      <p className="text-gray-700">{career.salary}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold flex items-center mb-3 text-black">
                        <LineChart className="mr-2 h-5 w-5 text-career-purple" />
                        Growth Outlook
                      </h3>
                      <p className="text-gray-700">{career.growthOutlook}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Take Action</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button className="w-full">Take Career Quiz</Button>
                    <Button variant="outline" className="w-full">Save This Career</Button>
                    <Button variant="outline" className="w-full">Compare Careers</Button>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Is This Right For You?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">
                      This career might be a good fit if you:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Enjoy {career.traits.includes('creative') ? 'creative work' : career.traits.includes('technical') ? 'technical challenges' : 'solving problems'}</li>
                      <li>Have strong {career.traits.includes('analytical') ? 'analytical abilities' : career.traits.includes('interpersonal') ? 'people skills' : 'attention to detail'}</li>
                      <li>{career.traits.includes('high_learning') ? 'Love continuous learning' : 'Prefer mastering specific skills'}</li>
                      <li>Prefer working in {career.workEnvironment.toLowerCase()}</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {relatedCareers.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold mb-6 text-black">Similar Careers You Might Like</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedCareers.map(relatedCareer => (
                    <CareerCard key={relatedCareer.id} career={relatedCareer} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default CareerInfo;
