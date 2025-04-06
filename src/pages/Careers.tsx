
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getAllCareers, getAvailableStreams } from '@/utils/careerData';
import CareerCard from '@/components/CareerCard';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import PageWrapper from '@/components/PageWrapper';

const tagOptions = [
  "tech", "science", "healthcare", "business", "creative", "engineering", 
  "design", "finance", "arts", "research", "government", "education"
];

const Careers = () => {
  const allCareers = getAllCareers();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedStream, setSelectedStream] = useState<string>('');
  const [showFilters, setShowFilters] = useState(false);
  
  const streams = getAvailableStreams();
  
  // Filter careers based on search term, selected tags, and stream
  const filteredCareers = allCareers.filter(career => {
    const matchesSearch = 
      searchTerm === '' || 
      career.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      career.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesTags = 
      selectedTags.length === 0 || 
      selectedTags.some(tag => career.tags.includes(tag));
    
    const matchesStream =
      selectedStream === '' ||
      career.stream === selectedStream;
    
    return matchesSearch && matchesTags && matchesStream;
  });
  
  const handleTagToggle = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const handleStreamSelect = (stream: string) => {
    setSelectedStream(stream === selectedStream ? '' : stream);
  };
  
  const clearFilters = () => {
    setSearchTerm('');
    setSelectedTags([]);
    setSelectedStream('');
  };

  const streamIcons: Record<string, string> = {
    'Science': '🔬',
    'Commerce': '💼',
    'Arts': '🎨',
    'Engineering': '⚙️',
    'Medical': '🩺'
  };

  return (
    <PageWrapper backgroundImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80">
      <div className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold mb-2 text-gradient">Explore Careers</h1>
            <p className="text-gray-300 mb-8">
              Browse through various career options to find detailed information about qualifications, skills, and growth opportunities.
            </p>
            
            <div className="glass-card rounded-lg p-6 mb-8">
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search careers..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-black/50 border-gray-700 text-white"
                  />
                </div>
                <Button 
                  variant="outline" 
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center border-white/10 bg-black/30 hover:bg-black/50 text-white"
                >
                  <SlidersHorizontal className="mr-2 h-4 w-4" />
                  Filter Options
                </Button>
                {(searchTerm || selectedTags.length > 0 || selectedStream) && (
                  <Button 
                    variant="ghost" 
                    onClick={clearFilters}
                    className="flex items-center text-gray-300 hover:text-white hover:bg-black/30"
                  >
                    <X className="mr-2 h-4 w-4" />
                    Clear
                  </Button>
                )}
              </div>
              
              {showFilters && (
                <div className="pt-4 border-t border-white/10 space-y-6">
                  <div>
                    <h3 className="font-medium mb-3 text-white">Filter by Stream:</h3>
                    <div className="flex flex-wrap gap-2">
                      {streams.map(stream => (
                        <Badge 
                          key={stream}
                          variant={selectedStream === stream ? "default" : "outline"}
                          className={`cursor-pointer ${selectedStream === stream ? 'bg-career-purple' : 'text-gray-300 border-white/20'}`}
                          onClick={() => handleStreamSelect(stream)}
                        >
                          <span className="mr-1">{streamIcons[stream] || '📚'}</span>
                          {stream}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-3 text-white">Filter by Tag:</h3>
                    <div className="flex flex-wrap gap-2">
                      {tagOptions.map(tag => (
                        <Badge 
                          key={tag}
                          variant={selectedTags.includes(tag) ? "default" : "outline"}
                          className={`cursor-pointer ${selectedTags.includes(tag) ? 'bg-career-purple' : 'text-gray-300 border-white/20'}`}
                          onClick={() => handleTagToggle(tag)}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {filteredCareers.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCareers.map(career => (
                  <CareerCard key={career.id} career={career} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 glass-card rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-white">No careers found</h3>
                <p className="text-gray-300 mb-4">Try adjusting your search or filters</p>
                <Button onClick={clearFilters}>Clear All Filters</Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Careers;
