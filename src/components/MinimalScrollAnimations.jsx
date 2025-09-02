import { useEffect, useState } from 'react';

export default function ScrollAnimations() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Handle scroll events for progress tracking
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate scroll progress
  const scrollProgress = Math.min(
    (scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100,
    100
  );

  return (
    <>
      {/* Main Scroll Progress Bar - Fixed at very top of page */}
      <div 
        className="fixed top-0 left-0 w-full h-1 z-[9999]"
        style={{ 
          background: 'rgba(31, 41, 55, 0.3)', // slightly more visible background
          borderBottom: '1px solid rgba(168, 85, 247, 0.1)'
        }}
      >
        <div 
          className="h-full bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 transition-all duration-300"
          style={{ 
            width: `${Math.max(scrollProgress, 5)}%`, // ensure minimum 5% width for visibility
            boxShadow: '0 0 10px rgba(147, 51, 234, 0.7)',
            minWidth: scrollProgress > 0 ? '10px' : '0px' // minimum width when scrolling
          }}
        />
      </div>
    </>
  );
}
