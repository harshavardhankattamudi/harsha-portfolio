import React from 'react';
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const technicalSkills = [
  {
    category: 'Programming Languages',
    skills: ['C++', 'Python','java'],
  },
  {
    category: 'Database',
    skills: ['SQL', 'MongoDB'],
  },
  {
    category: 'Framework',
    skills: ['React'],
  },
  {
    category: 'Front-End',
    skills: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    category: 'Data Analysis Tools',
    skills: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Tableau'],
  },
  {
    category: 'Other Tools',
    skills: ['Git', 'VS Code'],
  },
];

const softSkills = ['Team Collaboration', 'Time Management', 'Problem Solving'];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      y: -2,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.section
      ref={ref}
      id="skills"
      className="py-20 px-6 bg-white dark:bg-[#071c2f] transition-colors relative overflow-hidden"
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-2 hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-300">Skills</h2>
          <motion.div 
            className="w-20 h-1 bg-orange-500 dark:bg-orange-400 mb-4 mx-auto"
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          ></motion.div>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Technical Skills Card */}
          <motion.div 
            className="md:col-span-2 bg-white dark:bg-[#0d2236] rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-[#11243a] hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 backdrop-blur-sm"
            variants={itemVariants}
            whileHover={{ 
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              y: -5
            }}
          >
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <span className="mr-3 text-orange-500 dark:text-orange-400">⚡</span>
              Technical Skills
            </h3>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
              {technicalSkills.map((group, idx) => (
                <motion.div 
                  key={idx} 
                  className="mb-2"
                  variants={itemVariants}
                >
                  <div className="text-base md:text-lg font-semibold mb-2 text-gray-900 dark:text-white flex items-center">
                    {group.category}
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {group.skills.map((skill, i) => (
                      <motion.span
                        key={i}
                        className="px-5 py-1 rounded-full bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 text-base font-medium border border-gray-200 dark:border-gray-700 hover:bg-orange-500 hover:text-white hover:border-orange-500 dark:hover:bg-orange-500 dark:hover:text-white cursor-pointer transition-all duration-300 shadow-sm hover:shadow-md"
                        variants={skillVariants}
                        whileHover="hover"
                        whileTap={{ scale: 0.95 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills Card */}
          <motion.div 
            className="bg-white dark:bg-[#0d2236] rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-[#11243a] hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 backdrop-blur-sm"
            variants={itemVariants}
            whileHover={{ 
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              y: -5
            }}
          >
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <span className="mr-3 text-orange-500 dark:text-orange-400">💡</span>
              Soft Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill, i) => (
                <motion.span
                  key={i}
                  className="px-5 py-1 rounded-full bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 text-base font-medium border border-gray-200 dark:border-gray-700 hover:bg-orange-500 hover:text-white hover:border-orange-500 dark:hover:bg-orange-500 dark:hover:text-white cursor-pointer transition-all duration-300 shadow-sm hover:shadow-md"
                  variants={skillVariants}
                  whileHover="hover"
                  whileTap={{ scale: 0.95 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills; 