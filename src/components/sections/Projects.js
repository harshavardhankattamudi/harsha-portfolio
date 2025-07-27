import React, { useState, useRef } from 'react';
import { Eye, Github, ExternalLink, Award, Code, Database, Brain, Globe } from 'lucide-react';
import { motion, useInView } from "framer-motion";

const projects = [
  {
    title: 'To-Do List Web Application',
    description:
      'Developed a full-stack to-do list app that allows users to add, edit, delete, and mark tasks as complete, with persistent storage and a responsive UI.',
    tech: ['React', 'Flask', 'Python', 'REST API', 'JavaScript', 'HTML', 'CSS', 'CRUD'],
    githubUrl: '#',
    externalUrl: '#',
    category: 'Web Development',
    image: '📋',
    featured: true,
  },
  {
    title: 'Crowdsourced Civic Engagement Platform',
    description:
      'A portal for citizens to report local issues (like potholes, broken streetlights), where reports are geolocated, escalated, visualized, and tracked through resolution.',
    tech: ['React', 'Flask', 'Python', 'REST API', 'JavaScript', 'HTML', 'CSS'],
    githubUrl: 'https://github.com/harshavardhankattamudi/civic-management-system',
    externalUrl: 'https://civic-management-system-n83u6n4ha.vercel.app/',
    category: 'Web Development',
    image: '🏛️',
    featured: true,
  },
  {
    title: 'Sales Performance Analysis Dashboard',
    description:
      'Analysed historical sales data to identify trends, evaluate performance metrics, and provide actionable insights.',
    tech: ['Python', 'Pandas', 'NumPy', 'SQL', 'Tableau', 'Matplotlib', 'Seaborn'],
    githubUrl: '#',
    externalUrl: '#',
    category: 'Data Science',
    image: '📊',
    featured: false,
  },
  {
    title: 'Crop Classification and Yield Prediction Web App',
    description:
      'Developed a machine learning model to classify crop types and predict yield based on environmental and soil parameters. Integrated the model into a Flask-based web application to enable real-time user interaction and predictions.',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Flask', 'HTML', 'CSS'],
    githubUrl: 'https://github.com/harshavardhankattamudi/CropML',
    externalUrl: 'https://cropml.onrender.com/',
    category: 'Machine Learning',
    image: '🌾',
    featured: false,
  },
];

const categories = [
  { label: 'All', value: 'All', icon: '🎯', color: 'from-blue-500 to-blue-600' },
  { label: 'Web Development', value: 'Web Development', icon: '🌐', color: 'from-blue-500 to-blue-600' },
  { label: 'Data Science', value: 'Data Science', icon: '📊', color: 'from-purple-500 to-purple-600' },
  { label: 'Machine Learning', value: 'Machine Learning', icon: '🤖', color: 'from-green-500 to-green-600' },
];

const Projects = () => {
  const [selected, setSelected] = useState('All');
  const filtered = selected === 'All' ? projects : projects.filter(p => p.category === selected);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section
      ref={ref}
      id="projects"
      className="py-20 px-6 bg-white dark:bg-[#071c2f] transition-colors"
      initial={{ opacity: 0, x: 100 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold mb-4 text-gray-900 dark:text-white">Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Explore my latest projects showcasing full-stack development, data science, and machine learning expertise.
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((cat) => (
              <motion.button
                key={cat.value}
                onClick={() => setSelected(cat.value)}
                className={`px-3 py-1.5 rounded-xl font-medium focus:outline-none transition-all text-sm flex items-center gap-1.5 ${
                  selected === cat.value 
                    ? `bg-gradient-to-r ${cat.color} text-white shadow-lg` 
                    : 'bg-gray-100 dark:bg-[#11243a] text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-[#1a2f45]'
                }`}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="text-base">{cat.icon}</span>
                {cat.label}
              </motion.button>
            ))}
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filtered.map((project, idx) => (
            <motion.div
              key={idx}
              className={`bg-white dark:bg-[#0d2236] rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-[#11243a] transition-all duration-300 ${
                project.featured ? 'ring-2 ring-orange-500/20' : ''
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
            >
              {/* Project Header */}
              <div className="p-6 border-b border-gray-100 dark:border-[#11243a]">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="text-4xl">{project.image}</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {project.title}
                      </h3>
                      {project.featured && (
                        <div className="inline-flex items-center px-2 py-1 mt-1 rounded-full bg-orange-100 text-orange-700 text-xs font-medium border border-orange-200">
                          <Award className="w-3 h-3 mr-1" /> Featured
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <motion.a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="p-2 text-gray-500 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-[#11243a] rounded-lg transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github className="w-5 h-5" />
                      </motion.a>
                    )}
                    {project.externalUrl && (
                      <motion.a 
                        href={project.externalUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="p-2 text-gray-500 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-[#11243a] rounded-lg transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.a>
                    )}
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
              
              {/* Project Footer */}
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 text-blue-700 dark:text-blue-300 text-xs font-medium border border-blue-200 dark:border-blue-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {project.category}
                  </span>
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-400 to-orange-600 text-white rounded-lg text-sm font-medium hover:from-orange-500 hover:to-orange-700 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Eye className="w-4 h-4" />
                    View Project
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {filtered.length === 0 && (
          <motion.div 
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No projects found</h3>
            <p className="text-gray-600 dark:text-gray-300">Try selecting a different category to see more projects.</p>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
};

export default Projects; 