import React, { useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import ScreenshotSection from './components/ScreenshotSection';
import TechStackSection from './components/TechStackSection';
import RoadmapSection from './components/RoadmapSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Update the document title
    document.title = 'RecoMate - AI Chat App';
    
    // Get the default title element
    const titleElement = document.querySelector('[data-default]');
    if (titleElement) {
      titleElement.textContent = 'RecoMate - AI Chat App';
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (!targetId || targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="font-sans antialiased text-gray-900">
      <Header />
      <main>
        <HeroSection />
        <FeatureSection />
        <ScreenshotSection />
        <TechStackSection />
        <RoadmapSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;