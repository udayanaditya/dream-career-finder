
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Mock function for authentication status - would be replaced with actual auth
  const isLoggedIn = false;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full bg-background/90 backdrop-blur-md border-b border-border shadow-sm fixed top-0 z-50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-primary">Career Navigator</span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              to="/"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                location.pathname === '/' 
                  ? 'text-primary' 
                  : 'text-foreground hover:text-primary'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/quiz"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                location.pathname === '/quiz' 
                  ? 'text-primary' 
                  : 'text-foreground hover:text-primary'
              }`}
            >
              Take Quiz
            </Link>
            <Link 
              to="/careers"
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                location.pathname === '/careers' 
                  ? 'text-primary' 
                  : 'text-foreground hover:text-primary'
              }`}
            >
              Explore Careers
            </Link>
            
            {isLoggedIn ? (
              <Button variant="outline" className="ml-4">Logout</Button>
            ) : (
              <div className="flex space-x-2">
                <Button asChild variant="outline">
                  <Link to="/login">Login</Link>
                </Button>
                <Button asChild className="premium-btn">
                  <Link to="/register">Register</Link>
                </Button>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background pb-3 px-4 pt-2 animate-fade-in">
          <div className="space-y-1">
            <Link 
              to="/"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                location.pathname === '/' 
                  ? 'text-primary' 
                  : 'text-foreground hover:text-primary'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/quiz"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                location.pathname === '/quiz' 
                  ? 'text-primary' 
                  : 'text-foreground hover:text-primary'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Take Quiz
            </Link>
            <Link 
              to="/careers"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                location.pathname === '/careers' 
                  ? 'text-primary' 
                  : 'text-foreground hover:text-primary'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Explore Careers
            </Link>
            
            {isLoggedIn ? (
              <Button variant="outline" className="w-full mt-4" onClick={() => setIsMenuOpen(false)}>
                Logout
              </Button>
            ) : (
              <div className="pt-4 space-y-2">
                <Button asChild variant="outline" className="w-full">
                  <Link to="/login" onClick={() => setIsMenuOpen(false)}>Login</Link>
                </Button>
                <Button asChild className="w-full premium-btn">
                  <Link to="/register" onClick={() => setIsMenuOpen(false)}>Register</Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
