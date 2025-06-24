import React, { useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Portfolio from './components/Portfolio';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  return (
    <ThemeProvider>
      <div className="App">
        <Portfolio />
      </div>
    </ThemeProvider>
  );
}

export default App; 