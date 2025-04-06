
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, BookOpen, BriefcaseBusiness, Lightbulb, Target } from 'lucide-react';
import CareerCard from '@/components/CareerCard';
import { careers } from '@/utils/careerData';

const Index = () => {
  // Get a subset of careers for the featured section
  const featuredCareers = careers.slice(0, 3);
  
  return (
    <>
      <Navbar />
      <div className="pt-16"> {/* Add padding for navbar */}
        {/* Hero Section */}
        <section className="hero-gradient py-20 md:py-28">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-career-purple to-career-blue">
                  Discover Your Perfect Career Path
                </h1>
                <p className="text-lg md:text-xl text-gray-700 mb-8">
                  Take our personalized quiz to find career options that match your interests, skills, and aspirations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-career-purple hover:bg-purple-700">
                    <Link to="/quiz" className="flex items-center">
                      Start The Quiz <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/careers">Explore Careers</Link>
                  </Button>
                </div>
              </div>
              <div className="md:w-1/2 md:pl-10">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Career planning" 
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">How It Works</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our platform uses advanced matching algorithms to connect your unique profile with potential career paths.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="bg-accent rounded-full p-4 mb-4">
                  <BookOpen className="h-8 w-8 text-career-purple" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Take the Quiz</h3>
                <p className="text-gray-600">Answer questions about your interests, strengths, and preferences.</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="bg-accent rounded-full p-4 mb-4">
                  <Lightbulb className="h-8 w-8 text-career-purple" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Get Insights</h3>
                <p className="text-gray-600">Our algorithm analyzes your responses to find your ideal career matches.</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="bg-accent rounded-full p-4 mb-4">
                  <BriefcaseBusiness className="h-8 w-8 text-career-purple" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Explore Options</h3>
                <p className="text-gray-600">Learn about recommended careers, required education, and growth potential.</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="bg-accent rounded-full p-4 mb-4">
                  <Target className="h-8 w-8 text-career-purple" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Make Decisions</h3>
                <p className="text-gray-600">Use our guidance to make informed decisions about your educational and career path.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Careers Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Featured Career Paths</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Explore some of the exciting career options available in today's job market.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredCareers.map(career => (
                <CareerCard key={career.id} career={career} />
              ))}
            </div>

            <div className="text-center mt-12">
              <Button asChild variant="outline" size="lg">
                <Link to="/careers">View All Careers</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Hear from students who found their perfect career path using our platform.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  "The career quiz helped me realize my passion for data science. Now I'm studying computer science and loving every minute of it!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                  <div>
                    <h4 className="font-semibold">Priya S.</h4>
                    <p className="text-sm text-gray-500">University Student</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  "I was confused about which stream to choose after 10th grade. This platform guided me toward commerce, and it was the right choice for me."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                  <div>
                    <h4 className="font-semibold">Rahul M.</h4>
                    <p className="text-sm text-gray-500">Commerce Student</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  "The detailed career information helped me understand what it really takes to become an architect. I'm now preparing for my entrance exams!"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                  <div>
                    <h4 className="font-semibold">Anjali K.</h4>
                    <p className="text-sm text-gray-500">12th Grade Student</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-career-purple text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Find Your Dream Career?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Take our personalized quiz and unlock career recommendations tailored just for you.
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-white text-career-purple hover:bg-gray-100">
              <Link to="/quiz" className="flex items-center">
                Start The Quiz <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Index;
