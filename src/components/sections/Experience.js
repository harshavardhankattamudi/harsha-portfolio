import React from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Experience = () => {
  const experiences = [
    {
      title: 'Supervised Machine Learning - Regression and Classification',
      organization: 'Coursera - DeepLearning.AI',
      period: '2024',
      description: 'This course, offered by DeepLearning.AI on Coursera, provides a foundational understanding of supervised learning techniques. It covers key concepts such as regression, classification, loss functions, gradient descent, and model evaluation.',
      type: 'Certificate',
      link: 'https://coursera.org/verify/some-coursera-certificate',
      platformIcon: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Coursera_logo_2021.png',
    },
    {
      title: 'The Complete 2023 Web Development Bootcamp',
      organization: 'Udemy',
      period: '2023',
      description: 'A beginner-friendly course covering full-stack web development using HTML, CSS, JavaScript, MongoDB, and React. Includes hands-on projects and practical experience in building responsive, dynamic web applications.',
      type: 'Certificate',
      link: 'https://udemy.com/certificate/some-udemy-certificate',
      platformIcon: 'https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg',
    }
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section
      ref={ref}
      id="experience"
      className="py-20 px-6 bg-white dark:bg-[#071c2f] transition-colors"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-2">Experience & Certificates</h2>
          <div className="w-24 h-1 bg-orange-500 mb-4 mx-auto"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Continuous learning through certifications and hands-on projects
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 pb-12 last:pb-0">
              {index < experiences.length - 1 && (
                <div className="absolute left-4 top-12 w-px h-full bg-orange-200 dark:bg-orange-500"></div>
              )}
              <div className="absolute left-0 top-4 w-8 h-8 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full flex items-center justify-center">
                <Award className="w-4 h-4 text-white" />
              </div>
              <div className="bg-white dark:bg-[#0d2236] p-8 rounded-xl ml-4 border-2 border-orange-300 dark:border-orange-500">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    {exp.platformIcon && (
                      <img src={exp.platformIcon} alt={exp.organization} className="w-7 h-7 rounded bg-white border border-gray-200 dark:bg-[#0d2236] dark:border-[#11243a]" />
                    )}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.title}</h3>
                      <div className="text-orange-600 dark:text-orange-400 font-medium">{exp.organization}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-300 text-sm font-medium rounded-full">
                      {exp.type}
                    </span>
                    <span className="text-gray-500 dark:text-gray-300 font-medium">{exp.period}</span>
                    {exp.link && (
                      <a href={exp.link} target="_blank" rel="noopener noreferrer" className="ml-2 p-2 rounded-lg border border-blue-200 dark:border-orange-700 bg-blue-50 dark:bg-[#11243a] text-blue-600 dark:text-orange-300 hover:bg-blue-100 dark:hover:bg-[#22334a] hover:shadow transition-all">
                        <ExternalLink className="w-6 h-6" />
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-200 leading-relaxed">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Experience; 