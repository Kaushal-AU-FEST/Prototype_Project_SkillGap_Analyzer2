
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      <div className="text-center">
        <h1 className="text-6xl sm:text-9xl font-bold text-primary-500 mb-4">404</h1>
        <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 mb-8">Oops! This page doesn't exist.</p>
        <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto mb-8">
          The page you're looking for might have been moved or doesn't exist in our skill analysis platform.
        </p>
        <Link to="/">
          <Button className="btn-primary">
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
