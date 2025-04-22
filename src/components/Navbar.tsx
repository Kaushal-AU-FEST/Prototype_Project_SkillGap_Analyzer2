
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle dark mode toggle
  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
    setIsDarkMode(!isDarkMode);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-md dark:bg-gray-900/80' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-primary-500">SkillGap<span className="text-secondary-500">Analyser</span></span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/analyze" className="nav-link">Skill Analysis</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
            <Button onClick={toggleDarkMode} variant="ghost" size="icon" className="ml-2">
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Link to="/analyze">
              <Button className="btn-primary">Try Now</Button>
            </Link>
          </div>
          
          {/* Mobile Navigation Buttons */}
          <div className="flex md:hidden items-center">
            <Button onClick={toggleDarkMode} variant="ghost" size="icon" className="mr-2">
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button onClick={() => setIsOpen(!isOpen)} variant="ghost" size="icon">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden glass-card m-4 animate-fade-in">
          <div className="flex flex-col space-y-4 p-4">
            <Link to="/" className="text-lg font-medium hover:text-primary-500" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/about" className="text-lg font-medium hover:text-primary-500" onClick={() => setIsOpen(false)}>About</Link>
            <Link to="/analyze" className="text-lg font-medium hover:text-primary-500" onClick={() => setIsOpen(false)}>Skill Analysis</Link>
            <Link to="/contact" className="text-lg font-medium hover:text-primary-500" onClick={() => setIsOpen(false)}>Contact</Link>
            <Link to="/analyze" onClick={() => setIsOpen(false)}>
              <Button className="btn-primary w-full">Try Now</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
