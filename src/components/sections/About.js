import React from 'react';
import { GraduationCap, Github, Linkedin, Mail, Award, BookOpen, Target, Heart, Globe } from 'lucide-react';
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const areasOfInterest = [
  { name: 'Data Science and Visualization', icon: '📊', description: 'Analyzing and visualizing complex data sets' },
  { name: 'Web Development', icon: '🌐', description: 'Building responsive and scalable web applications' },
  { name: 'Machine Learning', icon: '🤖', description: 'Developing intelligent algorithms and models' },
  { name: 'Artificial Intelligence', icon: '🧠', description: 'Creating smart systems and automation' },
];

const personalInterests = [
  { name: 'Reading Tech Blogs', icon: '📚', description: 'Staying updated with latest technology trends' },
  { name: 'Problem Solving', icon: '🧩', description: 'Enjoying coding challenges and puzzles' },
  { name: 'Music', icon: '🎵', description: 'Listening to various genres while coding' },
  { name: 'Fitness', icon: '💪', description: 'Maintaining a healthy lifestyle' },
];

const languages = [
  { name: 'English', level: 'Fluent', icon: '🇺🇸' },
  { name: 'Telugu', level: 'Native', icon: '🇮🇳' },
  { name: 'Hindi', level: 'Conversational', icon: '🇮🇳' },
];

const programmingLanguages = [
  { name: 'Python', level: 'Advanced', icon: '🐍' },
  { name: 'JavaScript', level: 'Intermediate', icon: '⚡' },
  { name: 'C++', level: 'Intermediate', icon: '⚙️' },
  { name: 'HTML/CSS', level: 'Advanced', icon: '🎨' },
];

const certificates = [
  {
    name: "Web Development Bootcamp",
    platform: "Udemy",
    link: "#",
    icon: "https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
  },
  {
    name: "Machine Learning Specialization",
    platform: "Coursera",
    link: "#",
    icon: "https://d3njjcbhbojbot.cloudfront.net/web/images/icons/coursera.svg"
  }
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  return (
    <motion.section
      ref={ref}
      id="about"
      className="py-20 px-6 bg-white dark:bg-[#071c2f] transition-colors"
      initial={{ opacity: 0, x: -100 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-2">About Me</h2>
          <div className="w-20 h-1 bg-orange-500 dark:bg-orange-400 mb-4 mx-auto"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Get to know me better - my academic journey, areas of expertise, and what drives my passion for technology.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 items-stretch justify-center">
          {/* Left Column */}
          <div className="flex flex-col gap-8">
            {/* Intro Card */}
            <motion.div 
              className="flex flex-col h-full bg-white dark:bg-[#0d2236] rounded-2xl shadow-lg p-8 border border-gray-100 dark:border-[#11243a] items-center text-center hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mb-6">
                <BookOpen className="w-10 h-10 text-white" />
              </div>
              <div className="text-gray-800 dark:text-gray-100">
                <p className="text-2xl font-extrabold mb-4 text-gray-900 dark:text-white">Harsha Vardhan</p>
                <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                  Aspiring Computer Science student with a passion for full-stack web development. Actively seeking an internship to gain hands-on experience, contribute to real-world projects, and build a strong foundation for a career as a skilled and impactful Web Developer. Proficient in front-end and back-end technologies with a keen interest in creating responsive, user-friendly, and scalable web applications.
                </p>
              </div>
            </motion.div>

            {/* Languages Known Section */}
            <motion.div 
              className="bg-white dark:bg-[#0d2236] p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-[#11243a] hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mr-4">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Languages Known</h3>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                {languages.map((lang, idx) => (
                  <motion.div
                    key={idx}
                    className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg border border-green-200 dark:border-green-800 hover:shadow-md transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center">
                      <div className="text-2xl mr-4">{lang.icon}</div>
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">{lang.name}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">{lang.level}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
          
          {/* Right Column */}
          <div className="flex flex-col gap-8">
            {/* Academic Qualifications Card */}
            <motion.div 
              className="flex-1 flex flex-col bg-white dark:bg-[#0d2236] p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-[#11243a] items-center text-center hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mr-4">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Academic Qualifications</h3>
              </div>
              
              <div className="space-y-6 mt-auto w-full">
                <motion.div 
                  className="border-l-4 border-orange-500 pl-6 bg-gradient-to-r from-orange-50 to-transparent dark:from-orange-900/20 rounded-r-lg p-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <div className="text-lg font-semibold text-gray-900 dark:text-white">SASTRA Deemed University (2022-2026)</div>
                  <div className="text-orange-500 dark:text-orange-400 font-medium">
                    <a href="#" className="hover:underline flex items-center">
                      B.Tech. in Computer Science and Engineering
                      <Award className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                  <div className="text-gray-600 dark:text-gray-200 mt-1">Current CGPA: <span className="font-semibold text-green-600">8.7883</span></div>
                </motion.div>
                
                <motion.div 
                  className="border-l-4 border-gray-200 dark:border-gray-700 pl-6 p-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="text-lg font-semibold text-gray-900 dark:text-white">Narayana Junior College (2020-2022)</div>
                  <div className="text-gray-700 dark:text-gray-200">12th standard – <span className="font-semibold text-green-600">95.4%</span></div>
                </motion.div>
                
                <motion.div 
                  className="border-l-4 border-gray-200 dark:border-gray-700 pl-6 p-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div className="text-lg font-semibold text-gray-900 dark:text-white">Jawahar Navodaya Vidyalaya (2014-2020)</div>
                  <div className="text-gray-700 dark:text-gray-200">10th standard – <span className="font-semibold text-green-600">86.4%</span></div>
                </motion.div>
              </div>
            </motion.div>
            
            {/* Areas of Interest Card */}
            <motion.div 
              className="flex flex-col bg-white dark:bg-[#0d2236] p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-[#11243a] items-center text-center hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Areas of Interest</h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {areasOfInterest.map((area, idx) => (
                  <motion.div
                    key={idx}
                    className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg border border-blue-200 dark:border-blue-800 hover:shadow-md transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="text-2xl mb-2">{area.icon}</div>
                    <div className="font-semibold text-gray-900 dark:text-white text-sm mb-1">{area.name}</div>
                    <div className="text-xs text-gray-600 dark:text-gray-300">{area.description}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About; 