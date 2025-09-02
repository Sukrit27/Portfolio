import { useEffect, useState } from 'react';

export default function ScrollAnimations() {
  const [scrollY, setScrollY] = useState(0);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Create floating particles
    const createParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 15; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          delay: Math.random() * 3,
          duration: 3 + Math.random() * 2
        });
      }
      setParticles(newParticles);
    };

    createParticles();

    // Intersection Observer for section glow effects
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '-10% 0px -10% 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          // Create section entry burst
          createSectionBurst(entry.target);
        } else {
          entry.target.classList.remove('in-view');
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('.scroll-glow');
    sections.forEach((section) => observer.observe(section));

    // Handle scroll events
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Add scroll-triggered particle burst
      if (Math.random() > 0.95) {
        createScrollBurst();
      }
    };

    const createScrollBurst = () => {
      const burst = document.createElement('div');
      burst.className = 'scroll-burst';
      burst.style.cssText = `
        position: fixed;
        top: 50%;
        left: ${Math.random() * 100}%;
        width: 6px;
        height: 6px;
        background: radial-gradient(circle, #a855f7, transparent);
        border-radius: 50%;
        pointer-events: none;
        z-index: 2;
        animation: burstAnimation 1s ease-out forwards;
      `;
      
      document.body.appendChild(burst);
      setTimeout(() => burst.remove(), 1000);
    };

    const createSectionBurst = (section) => {
      for (let i = 0; i < 5; i++) {
        setTimeout(() => {
          const rect = section.getBoundingClientRect();
          const burst = document.createElement('div');
          burst.style.cssText = `
            position: fixed;
            top: ${rect.top + Math.random() * rect.height}px;
            left: ${rect.left + Math.random() * rect.width}px;
            width: 8px;
            height: 8px;
            background: radial-gradient(circle, #3b82f6, transparent);
            border-radius: 50%;
            pointer-events: none;
            z-index: 2;
            animation: sectionBurstAnimation 2s ease-out forwards;
          `;
          
          document.body.appendChild(burst);
          setTimeout(() => burst.remove(), 2000);
        }, i * 200);
      }
    };

    // Add burst animation CSS
    if (!document.getElementById('burst-style')) {
      const style = document.createElement('style');
      style.id = 'burst-style';
      style.textContent = `
        @keyframes burstAnimation {
          0% {
            transform: scale(0) translateY(0);
            opacity: 1;
          }
          50% {
            transform: scale(1.5) translateY(-30px);
            opacity: 0.8;
          }
          100% {
            transform: scale(0) translateY(-60px);
            opacity: 0;
          }
        }
        
        @keyframes sectionBurstAnimation {
          0% {
            transform: scale(0);
            opacity: 1;
          }
          50% {
            transform: scale(2);
            opacity: 0.6;
          }
          100% {
            transform: scale(0);
            opacity: 0;
          }
        }
      `;
      document.head.appendChild(style);
    }

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  // Calculate scroll progress
  const scrollProgress = Math.min(
    (scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100,
    100
  );

  return (
    <>
      {/* Scroll Progress Bar */}
      <div 
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      />
      
      {/* Floating Particles */}
      <div className="scroll-particles">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`
            }}
          />
        ))}
      </div>

      {/* Scroll Velocity Indicator */}
      <div 
        className="fixed top-1/2 right-4 w-1 bg-gradient-to-b from-purple-400 to-blue-400 rounded-full transition-all duration-300 z-10"
        style={{ 
          height: `${Math.min(Math.abs(scrollY * 0.1), 100)}px`,
          opacity: scrollY > 100 ? 0.7 : 0
        }}
      />

      {/* Wave Effect */}
      <div 
        className="fixed top-0 left-0 w-full h-1 pointer-events-none z-10"
        style={{
          background: `linear-gradient(90deg, transparent, rgba(168, 85, 247, ${Math.sin(scrollY * 0.01) * 0.5 + 0.5}), transparent)`,
          transform: `translateX(${(scrollY * 2) % 200 - 100}%)`
        }}
      />
    </>
  );
}
