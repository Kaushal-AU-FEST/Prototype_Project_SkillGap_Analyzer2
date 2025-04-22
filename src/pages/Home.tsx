
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle, BarChart2, Book, UserPlus, ArrowRight, Lightbulb, Target, TrendingUp } from 'lucide-react';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary-50 to-white dark:from-gray-900 dark:to-gray-800"></div>
        <div className="floating-bubble h-64 w-64 top-20 left-10 bg-primary-100/30"></div>
        <div className="floating-bubble h-32 w-32 bottom-20 right-10 bg-secondary-100/30" style={{animationDelay: '1s'}}></div>
        <div className="floating-bubble h-24 w-24 top-40 right-20 bg-coral-100/30" style={{animationDelay: '2s'}}></div>
        
        <div className="container mx-auto px-4 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
                Bridge the Gap Between <span className="text-primary-500">Skills</span> and <span className="text-secondary-500">Success</span>
              </h1>
              <p className="text-xl mb-8 text-gray-700 dark:text-gray-300">
                Identify your skill gaps, get personalized learning recommendations, and chart your path to career advancement.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/analyze">
                  <Button className="btn-primary">
                    Start Analysis
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button className="btn-outline">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative" data-aos="fade-left">
              <div className="glass-card p-6 rounded-2xl relative z-10 animate-float">
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692" 
                  alt="Skill analysis dashboard" 
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 h-64 w-64 bg-secondary-100 rounded-full blur-3xl opacity-50 -z-10"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-20 bg-white dark:bg-gray-800" id="how-it-works">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">How It Works</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Three simple steps to understand and bridge your skill gaps
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="feature-card" data-aos="fade-up" bg-primary-900 data-aos-delay="100">
              <div className="h-14 w-14 rounded-full bg-primary-100 flex items-center justify-center mb-6">
                <UserPlus className="h-7 w-7 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-black">1. Enter Your Skills</h3>
              <p className="text-gray-600 dark:text-black-400">
                List your current skills and experiences. Be thorough to get the most accurate analysis.
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="feature-card" data-aos="fade-up" data-aos-delay="200">
              <div className="h-14 w-14 rounded-full bg-secondary-100 flex items-center justify-center mb-6">
                <Target className="h-7 w-7 text-secondary-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-black">2. Choose Target Role</h3>
              <p className="text-gray-600 dark:text-black-400">
                Select your desired job role or career path from our comprehensive database.
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="feature-card" data-aos="fade-up" data-aos-delay="300">
              <div className="h-14 w-14 rounded-full bg-coral-100 flex items-center justify-center mb-6">
                <Lightbulb className="h-7 w-7 text-coral-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-black">3. Get Recommendations</h3>
              <p className="text-gray-600 dark:text-black-400">
                Receive personalized insights, learning resources, and a roadmap to achieve your goals.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12" data-aos="fade-up">
            <Link to="/analyze">
              <Button className="btn-primary">
                Try It Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Powerful Features</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Everything you need to analyze, plan, and advance your career
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="feature-card" data-aos="fade-up" data-aos-delay="100">
              <BarChart2 className="h-10 w-10 text-primary-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-black">Skill Analysis</h3>
              <p className="text-gray-600 dark:text-black-400">
                Get detailed insights on your current skill level compared to industry standards.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="feature-card" data-aos="fade-up" data-aos-delay="200">
              <TrendingUp className="h-10 w-10 text-secondary-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-black">Career Roadmap</h3>
              <p className="text-gray-600 dark:text-black-400">
                Visualize your career path with clear milestones and skill acquisitions.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="feature-card" data-aos="fade-up" data-aos-delay="300">
              <Book className="h-10 w-10 text-coral-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-black">Learning Resources</h3>
              <p className="text-gray-600 dark:text-black-400">
                Access curated courses, tutorials, and learning materials for each skill.
              </p>
            </div>
            
            {/* Feature 4 */}
            <div className="feature-card" data-aos="fade-up" data-aos-delay="400">
              <CheckCircle className="h-10 w-10 text-yellow-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-black">Progress Tracker</h3>
              <p className="text-gray-600 dark:text-black-400">
                Monitor your growth with intuitive progress tracking and skill assessments.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Success Stories</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              See how others have advanced their careers with our skill gap analysis
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="glass-card p-6 rounded-xl" data-aos="fade-up" data-aos-delay="100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src="https://randomuser.me/api/portraits/women/44.jpg" 
                    alt="Sarah Johnson" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-black">Priyanshi Solanki</h4>
                  <p className="text-sm text-gray-600 dark:text-black-400">Student at Adani University</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-black-300">
                "Skill-Gap Analyzer helped me identify exactly what I needed to learn to transition from graphic design to UX. Within 6 months, I landed my dream job!"
              </p>
            </div>
            
            {/* Testimonial 2 */}
            <div className="glass-card p-6 rounded-xl" data-aos="fade-up" data-aos-delay="200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src="https://randomuser.me/api/portraits/men/32.jpg" 
                    alt="Michael Chen" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-black">Gopal Bhalani</h4>
                  <p className="text-sm text-gray-600 dark:text-black-400">Student at Adani University</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-black-300">
                "The personalized learning path was spot-on. It helped me focus only on the skills I was missing, saving me months of unnecessary studying."
              </p>
            </div>
            
            {/* Testimonial 3 */}
            <div className="glass-card p-6 rounded-xl" data-aos="fade-up" data-aos-delay="300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src="https://randomuser.me/api/portraits/women/68.jpg" 
                    alt="Priya Patel" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-black">Yash Patel</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Silver Oak Ex.Student</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                "I was stuck in my career for years. Skill-Gap Analyzer showed me exactly what was holding me back and how to overcome it."
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-primary-500 text-white">
        <div className="container mx-auto px-4 text-center" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Bridge Your Skill Gap?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Start your free analysis today and take the first step toward your career goals
          </p>
          <Link to="/analyze">
            <Button className="bg-white text-primary-500 hover:bg-gray-100 px-8 py-3 text-lg rounded-lg shadow-lg transition-all duration-300">
              Start Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
