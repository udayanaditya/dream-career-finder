
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="glass-footer py-8">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-xl font-bold text-career-purple mb-4">Career Navigator</h2>
            <p className="text-gray-300 mb-4">
              Helping students find their perfect career path through personalized guidance and insights.
            </p>
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Career Navigator. All rights reserved.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-career-purple">Home</Link>
              </li>
              <li>
                <Link to="/quiz" className="text-gray-400 hover:text-career-purple">Take Quiz</Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-400 hover:text-career-purple">Explore Careers</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase mb-4">Account</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/login" className="text-gray-400 hover:text-career-purple">Login</Link>
              </li>
              <li>
                <Link to="/register" className="text-gray-400 hover:text-career-purple">Register</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
