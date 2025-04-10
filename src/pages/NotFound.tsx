
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
    <PageWrapper>
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center glass-card p-12 rounded-lg max-w-md">
          <h1 className="text-7xl font-bold mb-4 text-gradient">404</h1>
          <p className="text-xl text-white mb-8">Oops! We couldn't find the page you're looking for.</p>
          <Button asChild className="bg-secondary hover:bg-secondary/80">
            <a href="/">Return to Home</a>
          </Button>
        </div>
      </div>
    </PageWrapper>
  );
};

export default NotFound;
