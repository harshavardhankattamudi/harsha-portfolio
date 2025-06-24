import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <button
        aria-label="Toggle theme"
        onClick={toggleTheme}
        className={`w-16 h-8 flex items-center rounded-full p-1 transition-colors duration-300 focus:outline-none shadow-lg
          ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-300'}`}
      >
        <div className="flex items-center justify-between w-full px-1">
          <Sun className={`w-4 h-4 ${theme === 'dark' ? 'text-yellow-300' : 'text-gray-600'}`} />
          <Moon className={`w-4 h-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`} />
        </div>
        <div
          className={`absolute w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300
            ${theme === 'dark' ? 'translate-x-8' : 'translate-x-0'}`}
        />
      </button>
    </div>
  );
};

export default ThemeToggle; 