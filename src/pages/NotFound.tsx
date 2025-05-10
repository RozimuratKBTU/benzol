
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-benzol-primary/5 to-benzol-accent/5 px-4">
      <div className="text-center max-w-md">
        <div className="mb-6 text-benzol-primary">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">404</h1>
        <p className="text-xl text-gray-600 mb-6">Бет табылмады</p>
        <p className="mb-8 text-gray-600">
          Сіз іздеген бет табылмады немесе қол жетімді емес.
        </p>
        <Button asChild className="bg-benzol-primary hover:bg-benzol-secondary text-white">
          <Link to="/">Басты бетке оралу</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
