
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { PieChart, LineChart, ComposedChart, ResponsiveContainer, Pie, Cell, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Download, Check, X, AlertCircle, BookOpen, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';

// Define career paths with required skills
const careerPaths = [
  { 
    id: 'frontend',
    name: 'Frontend Developer', 
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript', 'Responsive Design', 'Web Performance', 'Accessibility']
  },
  { 
    id: 'backend',
    name: 'Backend Developer', 
    skills: ['Node.js', 'Python', 'Databases', 'API Design', 'Authentication', 'Server Management', 'Performance Optimization']
  },
  { 
    id: 'fullstack',
    name: 'Full Stack Developer', 
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Databases', 'API Design', 'DevOps', 'System Architecture']
  },
  { 
    id: 'datascientist',
    name: 'Data Scientist', 
    skills: ['Python', 'R', 'SQL', 'Machine Learning', 'Data Visualization', 'Statistics', 'Big Data', 'Model Deployment']
  },
  { 
    id: 'productmanager',
    name: 'Product Manager', 
    skills: ['User Research', 'Market Analysis', 'Roadmapping', 'Agile Methodologies', 'Communication', 'Technical Knowledge', 'Analytics']
  }
];

// Sample educational resources
const learningResources = {
  'HTML': [
    { name: 'MDN Web Docs - HTML', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML', type: 'Documentation' },
    { name: 'HTML & CSS Course', url: '#', type: 'Course' },
  ],
  'CSS': [
    { name: 'CSS Tricks', url: '#', type: 'Blog' },
    { name: 'Advanced CSS Masterclass', url: '#', type: 'Course' },
  ],
  'JavaScript': [
    { name: 'JavaScript.info', url: '#', type: 'Documentation' },
    { name: 'JavaScript: The Good Parts', url: '#', type: 'Book' },
  ],
  'React': [
    { name: 'React Official Docs', url: '#', type: 'Documentation' },
    { name: 'React for Beginners', url: '#', type: 'Course' },
  ],
  'Python': [
    { name: 'Python.org', url: '#', type: 'Documentation' },
    { name: 'Python Crash Course', url: '#', type: 'Book' },
  ],
  'Machine Learning': [
    { name: 'Machine Learning by Andrew Ng', url: '#', type: 'Course' },
    { name: 'Hands-On Machine Learning', url: '#', type: 'Book' },
  ],
  'SQL': [
    { name: 'SQL for Data Analysis', url: '#', type: 'Course' },
    { name: 'SQL Cookbook', url: '#', type: 'Book' },
  ],
  'TypeScript': [
    { name: 'TypeScript Documentation', url: '#', type: 'Documentation' },
    { name: 'TypeScript Deep Dive', url: '#', type: 'Book' },
  ],
};

const Analyze = () => {
  const { toast } = useToast();
  const [selectedCareer, setSelectedCareer] = useState('');
  const [userSkills, setUserSkills] = useState<Record<string, number>>({});
  const [analysisComplete, setAnalysisComplete] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [expandedResources, setExpandedResources] = useState<string[]>([]);
  
  // Get skills based on selected career
  const getCareerSkills = () => {
    const career = careerPaths.find(c => c.id === selectedCareer);
    return career ? career.skills : [];
  };
  
  // Handle skill level change
  const handleSkillLevelChange = (skill: string, level: number) => {
    setUserSkills(prev => ({
      ...prev,
      [skill]: level
    }));
  };
  
  // Toggle showing resources for a skill
  const toggleResources = (skill: string) => {
    if (expandedResources.includes(skill)) {
      setExpandedResources(expandedResources.filter(s => s !== skill));
    } else {
      setExpandedResources([...expandedResources, skill]);
    }
  };
  
  // Start analysis
  const analyzeSkills = () => {
    // Check if all skills have been rated
    const skills = getCareerSkills();
    const allSkillsRated = skills.every(skill => userSkills[skill] !== undefined);
    
    if (!allSkillsRated) {
      toast({
        title: "Incomplete Skills Assessment",
        description: "Please rate your level for all skills before analyzing.",
        variant: "destructive",
      });
      return;
    }
    
    setAnalysisComplete(true);
    
    toast({
      title: "Analysis Complete!",
      description: "View your personalized skill gap report below.",
      variant: "default",
    });
    
    // Scroll to results
    setTimeout(() => {
      document.getElementById('results')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };
  
  // Calculate overall match percentage
  const calculateOverallMatch = () => {
    const skills = getCareerSkills();
    if (skills.length === 0) return 0;
    
    const totalPossiblePoints = skills.length * 5; // 5 is max rating
    const userPoints = skills.reduce((sum, skill) => sum + (userSkills[skill] || 0), 0);
    
    return Math.round((userPoints / totalPossiblePoints) * 100);
  };
  
  // Get chart data for skill comparison
  const getSkillChartData = () => {
    const skills = getCareerSkills();
    return skills.map(skill => ({
      name: skill,
      userLevel: userSkills[skill] || 0,
      required: 4, // Assuming 4/5 is the professional level required
      gap: Math.max(0, 4 - (userSkills[skill] || 0))
    }));
  };
  
  // Prepare data for pie chart
  const getPieChartData = () => {
    const match = calculateOverallMatch();
    return [
      { name: 'Match', value: match },
      { name: 'Gap', value: 100 - match }
    ];
  };
  
  // Get priority skills to improve
  const getPrioritySkills = () => {
    const skills = getCareerSkills();
    return skills
      .map(skill => ({
        name: skill,
        level: userSkills[skill] || 0,
        gap: Math.max(0, 4 - (userSkills[skill] || 0))
      }))
      .filter(skill => skill.gap > 0)
      .sort((a, b) => b.gap - a.gap)
      .slice(0, 3);
  };
  
  // Generate mock timeline data
  const generateTimelineData = () => {
    const prioritySkills = getPrioritySkills();
    let currentMonth = 0;
    
    return prioritySkills.map(skill => {
      const duration = skill.gap * 2; // 2 months per level of gap
      const result = {
        skill: skill.name,
        startMonth: currentMonth,
        endMonth: currentMonth + duration
      };
      currentMonth += duration;
      return result;
    });
  };
  
  // Prepare learning roadmap data for chart
  const getLearningRoadmapData = () => {
    const roadmap = generateTimelineData();
    const data = [];
    
    // Create data points for each month
    const totalMonths = roadmap.length > 0 
      ? roadmap[roadmap.length - 1].endMonth 
      : 0;
    
    for (let month = 0; month <= totalMonths; month++) {
      const entry: Record<string, any> = { name: `Month ${month}` };
      
      roadmap.forEach(item => {
        if (month >= item.startMonth && month <= item.endMonth) {
          entry[item.skill] = 1;
        } else {
          entry[item.skill] = 0;
        }
      });
      
      data.push(entry);
    }
    
    return data;
  };
  
  // Handle download report
  const downloadReport = () => {
    toast({
      title: "Report Downloaded",
      description: "Your skill gap analysis report has been downloaded.",
      variant: "default",
    });
  };
  
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-primary-50 dark:bg-gray-900 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center" data-aos="fade-up">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900 dark:text-white">Skill Gap Analysis</h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
              Identify your skill gaps and get personalized recommendations to advance your career
            </p>
          </div>
        </div>
      </section>
      
      {/* Analysis Input Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg" data-aos="fade-up">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Step 1: Choose Your Target Career</h2>
              
              <div className="mb-8">
                <label htmlFor="career" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                  Select the role you're aiming for
                </label>
                <Select 
                  value={selectedCareer} 
                  onValueChange={(value) => {
                    setSelectedCareer(value);
                    setUserSkills({});
                    setAnalysisComplete(false);
                  }}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a career path" />
                  </SelectTrigger>
                  <SelectContent>
                    {careerPaths.map(career => (
                      <SelectItem key={career.id} value={career.id}>{career.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              {selectedCareer && (
                <>
                  <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Step 2: Rate Your Current Skills</h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Rate your proficiency level for each skill from 1 (beginner) to 5 (expert)
                  </p>
                  
                  <div className="space-y-6 mb-8">
                    {getCareerSkills().map(skill => (
                      <div key={skill} className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                        <h3 className="font-medium text-gray-900 dark:text-white mb-3">{skill}</h3>
                        <div className="flex flex-wrap gap-3">
                          {[1, 2, 3, 4, 5].map(level => (
                            <label 
                              key={level}
                              className={`
                                flex items-center justify-center w-12 h-12 rounded-full cursor-pointer border transition-all
                                ${userSkills[skill] === level 
                                  ? 'bg-primary-500 text-white border-primary-500' 
                                  : 'bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300'}
                              `}
                            >
                              <input
                                type="radio"
                                className="sr-only"
                                name={`skill-${skill}`}
                                value={level}
                                checked={userSkills[skill] === level}
                                onChange={() => handleSkillLevelChange(skill, level)}
                              />
                              {level}
                            </label>
                          ))}
                        </div>
                        <div className="mt-2 text-sm flex justify-between text-gray-500 dark:text-gray-400">
                          <span>Beginner</span>
                          <span>Expert</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <Button onClick={analyzeSkills} className="btn-primary w-full">
                    Analyze My Skills
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Results Section */}
      {analysisComplete && (
        <section id="results" className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg" data-aos="fade-up">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Your Skill Gap Analysis Results</h2>
                  <Button onClick={downloadReport} className="bg-gray-900 text-white hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600">
                    Download Report
                    <Download className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                
                {/* Tabs */}
                <div className="flex border-b border-gray-200 dark:border-gray-700 mb-8">
                  <button
                    className={`px-4 py-2 font-medium text-sm ${activeTab === 'all' 
                      ? 'text-primary-500 border-b-2 border-primary-500' 
                      : 'text-gray-600 dark:text-gray-400'}`}
                    onClick={() => setActiveTab('all')}
                  >
                    Overview
                  </button>
                  <button
                    className={`px-4 py-2 font-medium text-sm ${activeTab === 'technical' 
                      ? 'text-primary-500 border-b-2 border-primary-500' 
                      : 'text-gray-600 dark:text-gray-400'}`}
                    onClick={() => setActiveTab('technical')}
                  >
                    Technical Skills
                  </button>
                  <button
                    className={`px-4 py-2 font-medium text-sm ${activeTab === 'resources' 
                      ? 'text-primary-500 border-b-2 border-primary-500' 
                      : 'text-gray-600 dark:text-gray-400'}`}
                    onClick={() => setActiveTab('resources')}
                  >
                    Learning Resources
                  </button>
                </div>
                
                {/* Overview Tab */}
                {activeTab === 'all' && (
                  <div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                      {/* Overall Match */}
                      <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
                        <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Overall Match</h3>
                        <div className="flex justify-center">
                          <div className="h-48 w-48">
                            <ResponsiveContainer width="100%" height="100%">
                              <PieChart>
                                <Pie
                                  data={getPieChartData()}
                                  cx="50%"
                                  cy="50%"
                                  innerRadius={60}
                                  outerRadius={80}
                                  paddingAngle={5}
                                  dataKey="value"
                                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                                >
                                  <Cell key="cell-0" fill="#6366f1" />
                                  <Cell key="cell-1" fill="#e5e7eb" />
                                </Pie>
                                <Tooltip />
                              </PieChart>
                            </ResponsiveContainer>
                          </div>
                        </div>
                        <p className="text-center mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                          {calculateOverallMatch()}% Match with {careerPaths.find(c => c.id === selectedCareer)?.name}
                        </p>
                      </div>
                      
                      {/* Skills Comparison */}
                      <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl lg:col-span-2">
                        <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Skills Comparison</h3>
                        <div className="h-72">
                          <ResponsiveContainer width="100%" height="100%">
                            <ComposedChart
                              layout="vertical"
                              data={getSkillChartData()}
                              margin={{
                                top: 20,
                                right: 20,
                                bottom: 20,
                                left: 60,
                              }}
                            >
                              <CartesianGrid stroke="#f5f5f5" />
                              <XAxis type="number" domain={[0, 5]} />
                              <YAxis dataKey="name" type="category" scale="band" />
                              <Tooltip />
                              <Legend />
                              <Bar dataKey="userLevel" name="Your Level" barSize={20} fill="#6366f1" />
                              <Bar dataKey="gap" name="Skill Gap" barSize={20} fill="#ef4444" />
                              <Line dataKey="required" name="Required Level" stroke="#10b981" />
                            </ComposedChart>
                          </ResponsiveContainer>
                        </div>
                      </div>
                    </div>
                    
                    {/* Priority Skills */}
                    <div className="mb-12">
                      <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Priority Skills to Improve</h3>
                      <div className="space-y-6">
                        {getPrioritySkills().map(skill => (
                          <div key={skill.name} className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
                            <div className="flex justify-between mb-2">
                              <h4 className="font-medium text-gray-900 dark:text-white">{skill.name}</h4>
                              <span className="text-sm text-gray-600 dark:text-gray-400">Current Level: {skill.level}/5</span>
                            </div>
                            <Progress value={skill.level * 20} className="h-2 mb-4" />
                            <div className="flex items-start gap-3 mt-3">
                              <AlertCircle className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                              <p className="text-gray-700 dark:text-gray-300 text-sm">
                                {skill.gap > 2 
                                  ? `This is a critical skill gap. Focus on improving ${skill.name} as a top priority.`
                                  : `You need to improve your ${skill.name} skills to reach the required professional level.`
                                }
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Learning Roadmap */}
                    <div>
                      <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Your Learning Roadmap</h3>
                      <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl">
                        <div className="h-72 mb-6">
                          <ResponsiveContainer width="100%" height="100%">
                            <LineChart
                              data={getLearningRoadmapData()}
                              margin={{
                                top: 20,
                                right: 30,
                                left: 20,
                                bottom: 10,
                              }}
                            >
                              <CartesianGrid strokeDasharray="3 3" />
                              <XAxis dataKey="name" />
                              <YAxis domain={[0, 1]} hide />
                              <Tooltip />
                              <Legend />
                              {getPrioritySkills().map((skill, index) => {
                                const colors = ['#6366f1', '#10b981', '#f59e0b'];
                                return (
                                  <Line 
                                    key={skill.name}
                                    type="monotone" 
                                    dataKey={skill.name} 
                                    stroke={colors[index % colors.length]} 
                                    strokeWidth={4}
                                  />
                                );
                              })}
                            </LineChart>
                          </ResponsiveContainer>
                        </div>
                        
                        <div className="space-y-4">
                          {generateTimelineData().map((item, index) => (
                            <div key={index} className="flex items-start gap-3">
                              <div className="h-6 w-6 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-primary-500 font-bold text-sm">{index + 1}</span>
                              </div>
                              <div>
                                <h4 className="font-medium text-gray-900 dark:text-white">{item.skill}</h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                  Month {item.startMonth} - Month {item.endMonth} ({item.endMonth - item.startMonth} months)
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Technical Skills Tab */}
                {activeTab === 'technical' && (
                  <div>
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Technical Skills Assessment</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-6">
                        Detailed breakdown of your technical skills compared to industry requirements
                      </p>
                      
                      <div className="space-y-6">
                        {getCareerSkills().map(skill => {
                          const userLevel = userSkills[skill] || 0;
                          const requiredLevel = 4; // Professional level
                          const gap = Math.max(0, requiredLevel - userLevel);
                          const status = gap === 0 ? 'proficient' : gap <= 1 ? 'developing' : 'needs-work';
                          
                          return (
                            <div key={skill} className="p-4 border rounded-lg">
                              <div className="flex justify-between items-center mb-2">
                                <h4 className="font-medium text-gray-900 dark:text-white">{skill}</h4>
                                <div className={`
                                  px-3 py-1 rounded-full text-xs font-medium
                                  ${status === 'proficient' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : 
                                    status === 'developing' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' : 
                                    'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'}
                                `}>
                                  {status === 'proficient' ? 'Proficient' : 
                                    status === 'developing' ? 'Developing' : 
                                    'Needs Work'}
                                </div>
                              </div>
                              
                              <div className="flex items-center gap-3 mb-2">
                                <div className="flex-1">
                                  <Progress value={userLevel * 20} className="h-2" />
                                </div>
                                <div className="text-sm font-medium w-12 text-center">
                                  {userLevel}/5
                                </div>
                              </div>
                              
                              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                                {status === 'proficient' 
                                  ? `Your ${skill} skills meet or exceed the professional requirements.` 
                                  : status === 'developing'
                                  ? `You're close to reaching the professional level in ${skill}, but there's still room for improvement.`
                                  : `You need significant improvement in ${skill} to meet professional standards.`
                                }
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Skill Gap Summary</h3>
                      <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-xl">
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                          Based on your assessment, here's a summary of where you stand:
                        </p>
                        
                        <div className="space-y-3">
                          {/* Strengths */}
                          <div>
                            <h4 className="font-medium text-gray-900 dark:text-white flex items-center">
                              <Check className="h-5 w-5 text-green-500 mr-2" />
                              Your Strengths
                            </h4>
                            <ul className="ml-7 mt-2 list-disc text-gray-700 dark:text-gray-300">
                              {getCareerSkills()
                                .filter(skill => (userSkills[skill] || 0) >= 4)
                                .map(skill => (
                                  <li key={skill}>{skill}</li>
                                ))}
                              {getCareerSkills().filter(skill => (userSkills[skill] || 0) >= 4).length === 0 && (
                                <li className="text-gray-500 italic">No skills at professional level yet</li>
                              )}
                            </ul>
                          </div>
                          
                          {/* Areas to Improve */}
                          <div>
                            <h4 className="font-medium text-gray-900 dark:text-white flex items-center">
                              <X className="h-5 w-5 text-red-500 mr-2" />
                              Areas to Improve
                            </h4>
                            <ul className="ml-7 mt-2 list-disc text-gray-700 dark:text-gray-300">
                              {getCareerSkills()
                                .filter(skill => (userSkills[skill] || 0) < 3)
                                .map(skill => (
                                  <li key={skill}>{skill}</li>
                                ))}
                            </ul>
                          </div>
                          
                          {/* Next Steps */}
                          <div className="pt-3 border-t border-gray-200 dark:border-gray-600">
                            <h4 className="font-medium text-gray-900 dark:text-white">Recommended Next Steps:</h4>
                            <ol className="ml-7 mt-2 list-decimal text-gray-700 dark:text-gray-300 space-y-1">
                              <li>Focus on improving your highest priority skills first</li>
                              <li>Dedicate at least 5-10 hours weekly to learning</li>
                              <li>Regularly practice and apply your new skills in projects</li>
                              <li>Reassess your skills every 3 months to track progress</li>
                            </ol>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Learning Resources Tab */}
                {activeTab === 'resources' && (
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Recommended Learning Resources</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      Curated resources to help you bridge your skill gaps, prioritized by your needs
                    </p>
                    
                    <div className="space-y-6">
                      {getPrioritySkills().map(skill => (
                        <div key={skill.name} className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                          <div 
                            className="flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-700 cursor-pointer"
                            onClick={() => toggleResources(skill.name)}
                          >
                            <div className="flex items-center">
                              <div className="h-8 w-8 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center mr-3">
                                <BookOpen className="h-4 w-4 text-primary-500" />
                              </div>
                              <h4 className="font-medium text-gray-900 dark:text-white">{skill.name}</h4>
                            </div>
                            {expandedResources.includes(skill.name) ? (
                              <ChevronUp className="h-5 w-5 text-gray-500" />
                            ) : (
                              <ChevronDown className="h-5 w-5 text-gray-500" />
                            )}
                          </div>
                          
                          {expandedResources.includes(skill.name) && (
                            <div className="p-4">
                              {learningResources[skill.name] ? (
                                <div className="space-y-4">
                                  {learningResources[skill.name].map((resource, index) => (
                                    <div key={index} className="flex items-start">
                                      <div className="bg-primary-50 dark:bg-primary-900/30 p-2 rounded mr-3">
                                        <BookOpen className="h-5 w-5 text-primary-500" />
                                      </div>
                                      <div>
                                        <h5 className="font-medium text-gray-900 dark:text-white">{resource.name}</h5>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{resource.type}</p>
                                        <a 
                                          href={resource.url} 
                                          target="_blank" 
                                          rel="noopener noreferrer"
                                          className="text-primary-500 text-sm flex items-center hover:underline"
                                        >
                                          View Resource
                                          <ExternalLink className="h-3 w-3 ml-1" />
                                        </a>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              ) : (
                                <p className="text-gray-500 dark:text-gray-400 italic">
                                  No specific resources available for {skill.name}. General industry resources recommended.
                                </p>
                              )}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-8 p-6 bg-primary-50 dark:bg-primary-900/20 rounded-xl">
                      <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Learning Tips</h3>
                      <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>Allocate consistent time blocks for learning (e.g., 1 hour daily)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>Apply new skills in practical projects to reinforce learning</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>Join communities related to your learning areas for support</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>Track your progress and celebrate small wins along the way</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}
      
      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Ready to Accelerate Your Career?</h2>
          <p className="text-xl mb-8 text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Set up regular skill assessments to track your progress and stay on the path to success
          </p>
          <Button className="btn-primary">
            Create Account
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Analyze;
