
import React, { useState } from 'react';
import { getCareersByStream, getAvailableStreams } from '@/utils/careerData';
import CareerCard from './CareerCard';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const StreamSuggestions = () => {
  const [selectedStream, setSelectedStream] = useState<string>('Science');
  const streams = getAvailableStreams();
  const careers = getCareersByStream(selectedStream);

  const streamIcons: Record<string, string> = {
    'Science': '🔬',
    'Commerce': '💼',
    'Arts': '🎨',
    'Engineering': '⚙️',
    'Medical': '🩺'
  };

  return (
    <div className="glass-card p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-gradient">Explore Careers by Stream</h2>
      
      <Tabs defaultValue={selectedStream} onValueChange={setSelectedStream} className="w-full">
        <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-6 bg-black/30 border border-white/10">
          {streams.map((stream) => (
            <TabsTrigger 
              key={stream} 
              value={stream}
              className="data-[state=active]:bg-career-purple"
            >
              <span className="mr-2">{streamIcons[stream] || '📚'}</span>
              {stream}
            </TabsTrigger>
          ))}
        </TabsList>
        
        {streams.map((stream) => (
          <TabsContent key={stream} value={stream} className="pt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getCareersByStream(stream).slice(0, 6).map((career) => (
                <CareerCard key={career.id} career={career} isCompact={true} />
              ))}
            </div>
            
            <div className="flex justify-center mt-8">
              <Button asChild>
                <a href="/careers">View All {stream} Careers</a>
              </Button>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default StreamSuggestions;
