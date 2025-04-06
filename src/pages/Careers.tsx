
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getAllCareers, Career } from '@/utils/careerData';
import CareerCard from '@/components/CareerCard';
import { Search, SlidersHorizontal, X } from 'lucide-react';

const tagOptions = [
  "tech", "science", "healthcare", "business", "creative", "engineering", 
  "design", "finance", "arts", "research", "government", "education"
];

const Careers = () => {
  const allCareers = getAllCareers();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  
  // Filter careers based on search term and selected tags
  const filteredCareers = allCareers.filter(career => {
    const matchesSearch = 
      searchTerm === '' || 
      career.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      career.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesTags = 
      selectedTags.length === 0 || 
      selectedTags.some(tag => career.tags.includes(tag));
    
    return matchesSearch && matchesTags;
  });
  
  const handleTagToggle = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };
  
  const clearFilters = () => {
    setSearchTerm('');
    setSelectedTags([]);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold mb-2">Explore Careers</h1>
            <p className="text-gray-600 mb-8">
              Browse through various career options to find detailed information about qualifications, skills, and growth opportunities.
            </p>
            
            <div className="bg-white rounded-lg shadow p-6 mb-8">
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search careers..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Button 
                  variant="outline" 
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center"
                >
                  <SlidersHorizontal className="mr-2 h-4 w-4" />
                  Filter Options
                </Button>
                {(searchTerm || selectedTags.length > 0) && (
                  <Button 
                    variant="ghost" 
                    onClick={clearFilters}
                    className="flex items-center text-gray-500"
                  >
                    <X className="mr-2 h-4 w-4" />
                    Clear
                  </Button>
                )}
              </div>
              
              {showFilters && (
                <div className="pt-4 border-t">
                  <h3 className="font-medium mb-3">Filter by Tag:</h3>
                  <div className="flex flex-wrap gap-2">
                    {tagOptions.map(tag => (
                      <Badge 
                        key={tag}
                        variant={selectedTags.includes(tag) ? "default" : "outline"}
                        className={`cursor-pointer ${selectedTags.includes(tag) ? 'bg-career-purple' : ''}`}
                        onClick={() => handleTagToggle(tag)}
                      >
                        {tag}
                      </Badge>
                    ))}
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
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold mb-2">No careers found</h3>
                <p className="text-gray-600 mb-4">Try adjusting your search or filters</p>
                <Button onClick={clearFilters}>Clear All Filters</Button>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Careers;
