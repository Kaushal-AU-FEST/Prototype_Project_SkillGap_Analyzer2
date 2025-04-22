
import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Mail, PhoneCall, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center mb-4">
              <span className="text-2xl font-bold text-primary-500">Skill<span className="text-secondary-500">Bridge</span></span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Bridging the gap between your skills and career success with data-driven analysis and personalized recommendations.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-primary-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary-500 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary-500 transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors">About Us</Link></li>
              <li><Link to="/analyze" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors">Skill Analysis</Link></li>
              <li><Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          {/* Services */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors">Skill Gap Analysis</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors">Career Roadmaps</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors">Learning Resources</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors">Progress Tracking</a></li>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-primary-500" />
                <a href="mailto:hello@skillbridge.com" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors">hello@Skill-Gap Analyzer.com</a>
              </li>
              <li className="flex items-center gap-2">
                <PhoneCall size={16} className="text-primary-500" />
                <a href="tel:+1234567890" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors">+1 (234) 567-890</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-primary-500 mt-1" />
                <span className="text-gray-600 dark:text-gray-400">123 Innovation Street, Tech City, TC 12345</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © {currentYear} Skill-Gap Analyzer. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li><a href="#" className="text-gray-600 dark:text-gray-400 text-sm hover:text-primary-500 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-600 dark:text-gray-400 text-sm hover:text-primary-500 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-gray-600 dark:text-gray-400 text-sm hover:text-primary-500 transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
