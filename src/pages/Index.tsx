
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Redirect to the home page
    navigate('/');
  }, [navigate]);
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Loading...</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400">Redirecting to Skill-Gap Analyzer</p>
      </div>
    </div>
  );
};

export default Index;
