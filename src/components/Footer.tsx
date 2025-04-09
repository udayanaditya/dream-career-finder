
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MessageSquare, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToContact = () => {
    const contactForm = document.querySelector('.contact-section');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#contact';
    }
  };

  return (
    <footer className="glass-footer py-8">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-xl font-bold text-gradient mb-4 font-display">Career Navigator</h2>
            <p className="text-gray-300 mb-4">
              Helping students find their perfect career path through personalized guidance and insights.
            </p>
            <div className="flex space-x-4 mb-4">
              <Button 
                onClick={scrollToContact} 
                variant="outline" 
                size="sm" 
                className="flex items-center space-x-2 border-career-yellow/30 hover:bg-career-yellow/10"
              >
                <Mail size={16} />
                <span>Contact Us</span>
              </Button>
              
              <Button 
                onClick={scrollToContact} 
                variant="outline" 
                size="sm" 
                className="flex items-center space-x-2 border-career-yellow/30 hover:bg-career-yellow/10"
              >
                <MessageSquare size={16} />
                <span>Send Message</span>
              </Button>
            </div>
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Career Navigator. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-2 flex items-center">
              Developed with <Heart size={14} className="mx-1 text-career-yellow" /> by <span className="font-medium ml-1">Udayan Aditya & Krishna Jindal</span>
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-career-yellow">Home</Link>
              </li>
              <li>
                <Link to="/quiz" className="text-gray-400 hover:text-career-yellow">Take Quiz</Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-400 hover:text-career-yellow">Explore Careers</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase mb-4">Account</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/login" className="text-gray-400 hover:text-career-yellow">Login</Link>
              </li>
              <li>
                <Link to="/register" className="text-gray-400 hover:text-career-yellow">Register</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
