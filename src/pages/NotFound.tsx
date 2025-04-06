
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import PageWrapper from "@/components/PageWrapper";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <PageWrapper backgroundImage="https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80">
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center glass-card p-12 rounded-lg max-w-md">
          <h1 className="text-7xl font-bold mb-4 text-gradient">404</h1>
          <p className="text-xl text-gray-300 mb-8">Oops! We couldn't find the page you're looking for.</p>
          <Button asChild className="bg-career-purple hover:bg-purple-700">
            <a href="/">Return to Home</a>
          </Button>
        </div>
      </div>
    </PageWrapper>
  );
};

export default NotFound;
