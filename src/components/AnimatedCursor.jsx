import { useEffect, useState } from 'react';

export default function AnimatedCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [trails, setTrails] = useState([]);

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Add trail effect
      setTrails(prev => {
        const newTrail = { 
          x: e.clientX, 
          y: e.clientY, 
          id: Date.now(),
          opacity: 1 
        };
        const updatedTrails = [newTrail, ...prev.slice(0, 4)];
        return updatedTrails;
      });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseEnter = (e) => {
      const target = e.target;
      if (target.tagName === 'A' || 
          target.tagName === 'BUTTON' || 
          target.classList.contains('cursor-hover') ||
          target.closest('a') ||
          target.closest('button')) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = (e) => {
      const target = e.target;
      if (target.tagName === 'A' || 
          target.tagName === 'BUTTON' || 
          target.classList.contains('cursor-hover') ||
          target.closest('a') ||
          target.closest('button')) {
        setIsHovering(false);
      }
    };

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
    };
  }, []);

  useEffect(() => {
    // Fade out trails
    const interval = setInterval(() => {
      setTrails(prev => prev.filter(trail => Date.now() - trail.id < 300));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Quantum Atom Cursor */}
      <div
        className={`custom-cursor ${isHovering ? 'hover' : ''} ${isClicking ? 'click' : ''}`}
        style={{
          left: position.x - 30,
          top: position.y - 30,
        }}
      >
        {/* Atom nucleus - glowing center */}
        <div className="atom-nucleus"></div>
        
        {/* Electron orbital rings with orbiting electrons */}
        <div className="electron-orbit orbit-1">
          <div className="electron electron-1"></div>
        </div>
        <div className="electron-orbit orbit-2">
          <div className="electron electron-2"></div>
        </div>
        <div className="electron-orbit orbit-3">
          <div className="electron electron-3"></div>
        </div>
      </div>
      
      {/* Quantum particle trails with uncertainty principle */}
      {trails.map((trail, index) => (
        <div
          key={trail.id}
          className="cursor-trail"
          style={{
            left: trail.x - 1.5,
            top: trail.y - 1.5,
            opacity: (trails.length - index) / trails.length * 0.9,
            transform: `scale(${(trails.length - index) / trails.length * 0.8 + 0.2})`,
            animationDelay: `${index * 0.1}s`,
          }}
        />
      ))}
    </>
  );
}
