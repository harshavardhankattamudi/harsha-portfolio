import React, { useState } from 'react';
import { Phone, Mail, Download, Share2, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const MobileFAB = () => {
  const [isOpen, setIsOpen] = useState(false);

  const actions = [
    {
      icon: Phone,
      label: 'Call',
      action: () => window.open('tel:+1234567890', '_self'),
      color: 'bg-green-500',
      delay: 0.1
    },
    {
      icon: Mail,
      label: 'Email',
      action: () => window.open('mailto:harsha@example.com', '_self'),
      color: 'bg-blue-500',
      delay: 0.2
    },
    {
      icon: Download,
      label: 'Resume',
      action: () => {
        const link = document.createElement('a');
        link.href = '/assets/126003104_KattamudiHarshaVardhan.pdf';
        link.download = 'Harsha_Vardhan_Resume.pdf';
        link.click();
      },
      color: 'bg-orange-500',
      delay: 0.3
    },
    {
      icon: Share2,
      label: 'Share',
      action: () => {
        if (navigator.share) {
          navigator.share({
            title: 'Harsha Vardhan Portfolio',
            text: 'Check out my portfolio!',
            url: window.location.href
          });
        } else {
          // Fallback for browsers that don't support Web Share API
          navigator.clipboard.writeText(window.location.href);
          alert('Link copied to clipboard!');
        }
      },
      color: 'bg-purple-500',
      delay: 0.4
    }
  ];

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {/* Action Buttons */}
      <AnimatePresence>
        {isOpen && (
          <div className="absolute bottom-16 left-0 space-y-3">
            {actions.map((action, index) => (
              <motion.div
                key={action.label}
                initial={{ opacity: 0, scale: 0, x: -20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0, x: -20 }}
                transition={{ delay: action.delay, type: 'spring', stiffness: 200 }}
                className="flex items-center gap-3"
              >
                <motion.button
                  className={`w-12 h-12 rounded-full ${action.color} text-white shadow-lg flex items-center justify-center`}
                  onClick={action.action}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <action.icon className="w-5 h-5" />
                </motion.button>
                <motion.span
                  className="bg-white dark:bg-gray-800 px-3 py-1 rounded-full text-sm font-medium text-gray-900 dark:text-white shadow-lg whitespace-nowrap"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ delay: action.delay + 0.1 }}
                >
                  {action.label}
                </motion.span>
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>

      {/* Main FAB Button */}
      <motion.button
        className={`w-14 h-14 rounded-full bg-gradient-to-r from-orange-400 to-orange-600 text-white shadow-lg flex items-center justify-center ${
          isOpen ? 'rotate-45' : ''
        }`}
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ rotate: isOpen ? 45 : 0 }}
        transition={{ duration: 0.2 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -45, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 45, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 45, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -45, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

export default MobileFAB; 