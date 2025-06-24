import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Mail, Phone, MapPin, Github, Linkedin, Code, Database, Globe, Brain, Users, Award, GraduationCap, ExternalLink, Eye, Download, Star, ArrowRight } from 'lucide-react';
import Navigation from './Navigation';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import Footer from './Footer';
import ThemeToggle from './ThemeToggle';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const sectionIds = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
  const observer = useRef(null);

  useEffect(() => {
    setIsScrolled(window.scrollY > 50);

    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);

    // Intersection Observer logic
    const options = {
      root: null,
      rootMargin: '-40% 0px -40% 0px', // triggers when section is in the middle 20% of viewport
      threshold: 0
    };

    observer.current = new window.IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.current.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (observer.current) observer.current.disconnect();
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#071c2f] text-gray-900 dark:text-white">
      <Navigation 
        isScrolled={isScrolled} 
        activeSection={activeSection} 
        scrollToSection={scrollToSection} 
      />
      <div className="flex flex-col flex-grow">
        <section id="home" className="min-h-screen"><Hero scrollToSection={scrollToSection} /></section>
        <section id="about" className="min-h-screen"><About /></section>
        <section id="skills" className="min-h-screen"><Skills /></section>
        <section id="projects" className="min-h-screen"><Projects /></section>
        <section id="experience" className="min-h-screen"><Experience /></section>
        <section id="contact" className="min-h-screen"><Contact /></section>
      </div>
      <Footer />
      <ThemeToggle />
    </div>
  );
};

export default Portfolio; 