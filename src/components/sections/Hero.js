import React, { useState } from 'react';
import { ChevronDown, Download, Loader2, Eye, Mail } from 'lucide-react';
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Typewriter } from 'react-simple-typewriter';
import '../../styles/animations.css';

const socialLinks = [
  { icon: <i className="fab fa-github" />, url: 'https://github.com/' },
  { icon: <i className="fab fa-twitter" />, url: 'https://twitter.com/' },
  { icon: <i className="fab fa-instagram" />, url: 'https://instagram.com/' },
  { icon: <i className="fab fa-linkedin" />, url: 'https://linkedin.com/' },
];

const styles = `
  @keyframes spin-slow {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes spin-slow-reverse {
    from {
      transform: rotate(360deg);
    }
    to {
      transform: rotate(0deg);
    }
  }

  .animate-spin-slow {
    animation: spin-slow 20s linear infinite;
  }

  .animate-spin-slow-reverse {
    animation: spin-slow-reverse 15s linear infinite;
  }
`;

if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
}

const Hero = ({ scrollToSection }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadError, setDownloadError] = useState(null);

  const handleDownloadCV = async () => {
    try {
      setIsDownloading(true);
      setDownloadError(null);
      const cvUrl = '/assets/126003104_KattamudiHarshaVardhan.pdf';
      const response = await fetch(cvUrl);
      if (!response.ok) {
        throw new Error('CV file not found');
      }
      const link = document.createElement('a');
      link.href = cvUrl;
      link.download = 'Harsha_Vardhan_CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      setDownloadError('Failed to download CV. Please try again later.');
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-white dark:bg-[#071c2f] overflow-hidden">
      {/* Large vertical background text */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 z-0 select-none pointer-events-none">
        <span className="text-[11vw] font-extrabold text-gray-500 dark:text-white/10 tracking-tight leading-none opacity-30" style={{ writingMode: 'vertical-lr', letterSpacing: '-0.1em' }}>
          HARSHA
        </span>
      </div>
      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between min-h-screen">
        {/* Left: Text */}
        <div className="w-full md:w-1/2 flex flex-col items-start justify-center py-16 md:py-0">
          <h2 className="text-lg font-semibold text-gray-700 dark:text-white mb-2">Hi There, I'm</h2>
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-2">
            Harsha Vardhan
          </h1>
          <div className="w-20 h-1 bg-orange-500 dark:bg-orange-400 mb-4" />
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4 min-h-[2.5rem]">
            <Typewriter
              words={["Full-Stack Developer", "Computer Science Student"]}
              loop={0}
              cursor
              cursorStyle='|'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h3>
          <p className="text-gray-500 dark:text-gray-200 mb-8 max-w-md">
            Aspiring Computer Science student passionate about full-stack web development. Seeking an internship to gain hands-on experience and contribute to real-world projects. Skilled in front-end and back-end technologies, with a focus on building responsive and scalable web applications.
          </p>
    
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-start items-start w-full mt-2">
            <button
              onClick={() => scrollToSection('contact')}
              className="flex items-center justify-center px-6 py-3 bg-orange-500 dark:bg-orange-500 text-white rounded-lg font-semibold text-base shadow-md hover:bg-orange-600 dark:hover:bg-orange-400 hover:scale-105 transition-all duration-150 w-full sm:w-auto h-12 gap-2"
            >
              <Mail className="w-5 h-5" />
              Contact Me
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="flex items-center justify-center px-6 py-3 bg-white dark:bg-[#071c2f] text-orange-500 border border-orange-500 rounded-lg font-semibold text-base shadow-md hover:bg-orange-50 dark:hover:bg-[#11243a] hover:scale-105 transition-all duration-150 w-full sm:w-auto h-12 gap-2"
            >
              <Eye className="w-5 h-5" />
              View My Work
            </button>
            <button
              onClick={handleDownloadCV}
              disabled={isDownloading}
              className={`flex items-center justify-center px-6 py-3 border border-orange-500 text-orange-500 rounded-lg font-semibold text-base shadow-md hover:bg-orange-50 dark:hover:bg-[#11243a] hover:scale-105 transition-all duration-150 w-full sm:w-auto h-12 gap-2 ${isDownloading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {isDownloading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <Download className="w-5 h-5" />
              )}
              {isDownloading ? 'Downloading...' : 'Download CV'}
            </button>
          </div>
          {downloadError && (
            <div className="mt-2 text-red-500 text-sm">{downloadError}</div>
          )}
        </div>
        {/* Right: Image with modern concentric and dotted border */}
        <div className="w-full md:w-1/2 flex items-center justify-center relative mt-12 md:mt-0">
          <div className="relative flex items-center justify-center" style={{ width: '22rem', height: '22rem' }}>
            {/* Dotted SVG border */}
            <svg width="352" height="352" viewBox="0 0 352 352" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full z-0">
              <circle cx="176" cy="176" r="170" stroke="#222" strokeWidth="3" strokeDasharray="4 14" />
            </svg>
            {/* Thick orange border */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="rounded-full border-[10px] border-orange-500" style={{ width: '20rem', height: '20rem' }}></div>
            </div>
            {/* Thin black border */}
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="rounded-full border-[4px] border-black" style={{ width: '18.5rem', height: '18.5rem' }}></div>
            </div>
            {/* Photo area (blank or image) */}
            <div className="rounded-full bg-white dark:bg-[#f3f4f6] shadow-xl border border-gray-300 flex items-center justify-center z-30" style={{ width: '17rem', height: '17rem' }}>
              {/* Place your image here if needed, or leave blank intentionally */}
            </div>
          </div>
        </div>
        {/* Social icons vertical - original dark style, right side */}
        <div className="absolute right-[-44px] top-[60%] flex flex-col gap-2 z-20">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="rounded-full p-1.5 hover:bg-gray-100 dark:hover:bg-[#11243a] shadow-sm transition flex items-center justify-center" style={{ width: 32, height: 32 }}>
            <svg className="w-5 h-5 text-gray-700 dark:text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.984-.399 3.003-.404 1.018.005 2.046.138 3.006.404 2.29-1.552 3.295-1.23 3.295-1.23.653 1.653.242 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.804 5.624-5.475 5.92.43.372.823 1.104.823 2.225 0 1.606-.015 2.898-.015 3.293 0 .322.216.694.825.576C20.565 21.796 24 17.298 24 12c0-6.627-5.373-12-12-12z"/></svg>
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="rounded-full p-1.5 hover:bg-gray-100 dark:hover:bg-[#11243a] shadow-sm transition flex items-center justify-center" style={{ width: 32, height: 32 }}>
            <svg className="w-5 h-5 text-gray-700 dark:text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 0 0-8.384 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.856 2.01-.857 3.17 0 2.188 1.115 4.117 2.823 5.254a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.057 0 14.009-7.496 14.009-13.986 0-.213-.005-.425-.014-.636A9.936 9.936 0 0 0 24 4.557z"/></svg>
          </a>
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="rounded-full p-1.5 hover:bg-gray-100 dark:hover:bg-[#11243a] shadow-sm transition flex items-center justify-center" style={{ width: 32, height: 32 }}>
            <svg className="w-5 h-5 text-gray-700 dark:text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.497 5.782 2.225 7.148 2.163 8.414 2.105 8.794 2.094 12 2.094m0-2.163C8.741 0 8.332.012 7.052.07 5.771.128 4.635.388 3.678 1.345c-.957.957-1.217 2.093-1.275 3.374C2.012 5.668 2 6.077 2 9.333v5.334c0 3.256.012 3.665.07 4.946.058 1.281.318 2.417 1.275 3.374.957.957 2.093 1.217 3.374 1.275 1.281.058 1.69.07 4.946.07s3.665-.012 4.946-.07c1.281-.058 2.417-.318 3.374-1.275.957-.957 1.217-2.093 1.275-3.374.058-1.281.07-1.69.07-4.946V9.333c0-3.256-.012-3.665-.07-4.946-.058-1.281-.318-2.417-1.275-3.374-.957-.957-2.093-1.217-3.374-1.275C15.668.012 15.259 0 12 0z"/><path d="M12 5.838A6.162 6.162 0 0 0 5.838 12 6.162 6.162 0 0 0 12 18.162 6.162 6.162 0 0 0 18.162 12 6.162 6.162 0 0 0 12 5.838zm0 10.324A4.162 4.162 0 1 1 16.162 12 4.162 4.162 0 0 1 12 16.162z"/><circle cx="18.406" cy="5.594" r="1.44"/></svg>
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="rounded-full p-1.5 hover:bg-gray-100 dark:hover:bg-[#11243a] shadow-sm transition flex items-center justify-center" style={{ width: 32, height: 32 }}>
            <svg className="w-5 h-5 text-gray-700 dark:text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/></svg>
          </a>
        </div>
      </div>
      {/* Scroll down indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="w-8 h-8 text-orange-500 animate-bounce" />
      </motion.div>
    </div>
  );
};

export default Hero; 