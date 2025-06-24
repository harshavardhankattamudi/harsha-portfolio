import React from 'react';

const Navigation = ({ isScrolled, activeSection, scrollToSection }) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white dark:bg-[#071c2f] shadow-lg`}> 
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-3xl font-extrabold text-black dark:text-white tracking-tight ml-4">Harsha Vardhan</div>
          {/* Navigation Links */}
          <div className="hidden md:flex space-x-10">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative uppercase tracking-wide font-medium text-base px-1 transition-colors
                  ${activeSection === item.id ? 'text-orange-600 dark:text-orange-400' : 'text-gray-900 dark:text-white hover:text-orange-600 dark:hover:text-orange-400'}`}
                style={{ outline: 'none' }}
              >
                {item.label}
                {/* Animated underline for active item */}
                <span
                  className={`absolute left-0 -bottom-1 w-full h-0.5 rounded transition-all duration-300
                    ${activeSection === item.id ? 'bg-orange-500 dark:bg-orange-400 scale-x-100' : 'bg-transparent scale-x-0'}
                  `}
                  style={{ transformOrigin: 'center' }}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 