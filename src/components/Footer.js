import React from 'react';
import ThemeToggle from './ThemeToggle';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 px-6 bg-gray-900 text-center relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left: Theme Toggle and Social Icons */}
        <div className="order-3 md:order-1 flex items-center gap-8">
          <ThemeToggle />
          <div className="flex items-center gap-4">
            <a href="https://github.com/harshavardhankattamudi" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors duration-300 group">
              <Github className="w-6 h-6 group-hover:rotate-[360deg] transition-transform duration-500" />
            </a>
            <a href="https://www.linkedin.com/in/harshavardhankattamudi" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors duration-300 group">
              <Linkedin className="w-6 h-6 group-hover:rotate-[360deg] transition-transform duration-500" />
            </a>
            <a href="mailto:126003104@sastra.ac.in" className="text-white hover:text-blue-400 transition-colors duration-300 group">
              <Mail className="w-6 h-6 group-hover:rotate-[360deg] transition-transform duration-500" />
            </a>
          </div>
        </div>

        {/* Center: Copyright */}
        <p className="text-gray-400 order-1 md:order-2 flex-grow text-center">
          © 2025 Harsha Vardhan. Crafted with passion for innovation and excellence.
        </p>
      </div>
    </footer>
  );
};

export default Footer; 