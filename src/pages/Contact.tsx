
import { useState } from 'react';
import { Phone, Mail, MapPin, Send, Linkedin, Twitter, Github, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
        variant: "default",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-primary-50 dark:bg-gray-900 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center" data-aos="fade-up">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900 dark:text-white">Get In Touch</h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
              Have questions or feedback? We'd love to hear from you!
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Info Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Card 1 */}
            <div className="glass-card p-8 rounded-xl text-center" data-aos="fade-up" data-aos-delay="100">
              <div className="h-16 w-16 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center mx-auto mb-6">
                <Phone className="h-8 w-8 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-black">Call Us</h3>
              <p className="text-gray-600 dark:text-black-400 mb-4">
                Mon-Fri from 9am to 5pm EST
              </p>
              <a href="tel:+1234567890" className="text-primary-500 font-medium hover:underline">+1 (234) 567-890</a>
            </div>
            
            {/* Card 2 */}
            <div className="glass-card p-8 rounded-xl text-center" data-aos="fade-up" data-aos-delay="200">
              <div className="h-16 w-16 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center mx-auto mb-6">
                <Mail className="h-8 w-8 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-black">Email Us</h3>
              <p className="text-gray-600 dark:text-black-400 mb-4">
                We'll respond as quickly as possible
              </p>
              <a href="mailto:hello@Skill-Gap Analyzer.com" className="text-primary-500 font-medium hover:underline">hello@Skill-Gap Analyzer.com</a>
            </div>
            
            {/* Card 3 */}
            <div className="glass-card p-8 rounded-xl text-center" data-aos="fade-up" data-aos-delay="300">
              <div className="h-16 w-16 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-8 w-8 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-black">Visit Us</h3>
              <p className="text-gray-600 dark:text-black-400 mb-4">
                Our headquarters location
              </p>
              <p className="text-primary-500 font-medium">123 Innovation Street, Tech City, TC 12345</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg" data-aos="fade-right">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Send Us a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="John Doe"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="How can we help you?"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="input-field resize-none"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                
                <Button 
                  type="submit" 
                  className="btn-primary w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>
            
            {/* Map and Social */}
            <div data-aos="fade-left">
              {/* Map (Placeholder) */}
              <div className="bg-gray-200 dark:bg-gray-700 rounded-xl h-80 mb-8 overflow-hidden">
                <div className="h-full w-full flex items-center justify-center text-gray-500 dark:text-gray-400">
                  <p className="text-center">Map Embed Would Go Here<br/>(Google Maps or similar)</p>
                </div>
              </div>
              
              {/* Social Connect */}
              <div className="p-8 glass-card rounded-xl">
                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-black">Connect With Us</h2>
                <div className="grid grid-cols-3 gap-4">
                  <a 
                    href="#" 
                    className="flex flex-col items-center p-4 rounded-lg hover:bg-primary-50 dark:text-black dark:hover:bg-gray-700 dark:hover:text-white-700 transition-colors"
                  >
                    <div className="h-12 w-12 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center mb-3">
                      <Linkedin className="h-6 w-6 text-primary-500" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">LinkedIn</span>
                  </a>
                  
                  <a 
                    href="#" 
                    className="flex flex-col items-center p-4 rounded-lg hover:bg-primary-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    <div className="h-12 w-12 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center mb-3">
                      <Twitter className="h-6 w-6 text-primary-500" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">Twitter</span>
                  </a>
                  
                  <a 
                    href="#" 
                    className="flex flex-col items-center p-4 rounded-lg hover:bg-primary-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    <div className="h-12 w-12 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center mb-3">
                      <Github className="h-6 w-6 text-primary-500" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">GitHub</span>
                  </a>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Business Hours</h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span>9:00 AM - 5:00 PM EST</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Saturday:</span>
                      <span>10:00 AM - 2:00 PM EST</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sunday:</span>
                      <span>Closed</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Find quick answers to common questions
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto" data-aos="fade-up">
            {/* FAQ Items */}
            <div className="space-y-6">
              {/* FAQ Item 1 */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">How accurate is the skill gap analysis?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Our analysis is based on real industry data and updated job requirements. We continuously refine our algorithms based on user feedback and changing market trends to ensure high accuracy.
                </p>
              </div>
              
              {/* FAQ Item 2 */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Is there a cost to use Skill-Gap Analyzer?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  We offer a free basic analysis with limited features. Our premium subscription provides in-depth analysis, personalized learning paths, and progress tracking for $9.99/month.
                </p>
              </div>
              
              {/* FAQ Item 3 */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">How often should I update my skill analysis?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  We recommend updating your analysis every 3-6 months or whenever you acquire new skills, certifications, or when considering a career change.
                </p>
              </div>
              
              {/* FAQ Item 4 */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Can I get personalized career advice?</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Yes! Premium subscribers can book one-on-one sessions with our career advisors who can provide personalized guidance based on your skill analysis.
                </p>
              </div>
            </div>
            
            <div className="text-center mt-10">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Didn't find the answer you're looking for?
              </p>
              <Button className="btn-primary">
                Contact Support
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
