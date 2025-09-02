import { useEffect, useState } from 'react';

export default function AnimatedCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [hoverType, setHoverType] = useState('');
  const [trails, setTrails] = useState([]);
  const [sparkles, setSparkles] = useState([]);

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
        
        // Determine hover type for special effects
        if (target.tagName === 'A' || target.closest('a')) {
          setHoverType('link');
        } else if (target.classList.contains('group') || target.closest('.group')) {
          setHoverType('button');
        } else {
          setHoverType('interactive');
        }
        
        // Generate sparkle effects for special elements
        if (target.classList.contains('group') || target.closest('.group')) {
          generateSparkles(e.clientX, e.clientY);
        }
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
        setHoverType('');
      }
    };

    const generateSparkles = (x, y) => {
      const newSparkles = [];
      for (let i = 0; i < 6; i++) {
        newSparkles.push({
          id: Date.now() + i,
          x: x + (Math.random() - 0.5) * 40,
          y: y + (Math.random() - 0.5) * 40,
          size: Math.random() * 3 + 2,
          delay: Math.random() * 500
        });
      }
      setSparkles(prev => [...prev, ...newSparkles]);
      
      // Remove sparkles after animation
      setTimeout(() => {
        setSparkles(prev => prev.filter(sparkle => !newSparkles.includes(sparkle)));
      }, 1000);
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
      {/* Tech Circuit Cursor */}
      <div
        className={`custom-cursor ${isHovering ? 'hover' : ''} ${isClicking ? 'click' : ''} ${hoverType ? `hover-${hoverType}` : ''}`}
        style={{
          left: position.x - 30,
          top: position.y - 30,
        }}
      >
        {/* Central CPU chip */}
        <div className="cpu-chip"></div>
        
        {/* Circuit traces */}
        <div className="circuit-trace trace-horizontal-1"></div>
        <div className="circuit-trace trace-horizontal-2"></div>
        <div className="circuit-trace trace-vertical-1"></div>
        <div className="circuit-trace trace-vertical-2"></div>
        
        {/* Circuit nodes */}
        <div className="circuit-node node-1"></div>
        <div className="circuit-node node-2"></div>
        <div className="circuit-node node-3"></div>
        <div className="circuit-node node-4"></div>
        
        {/* Data flow indicators */}
        <div className="data-flow flow-1"></div>
        <div className="data-flow flow-2"></div>
        
        {/* Special hover effects */}
        {isHovering && hoverType === 'button' && (
          <>
            <div className="pulse-ring pulse-ring-1"></div>
            <div className="pulse-ring pulse-ring-2"></div>
            <div className="energy-beam beam-1"></div>
            <div className="energy-beam beam-2"></div>
          </>
        )}
        
        {isHovering && hoverType === 'link' && (
          <>
            <div className="link-indicator"></div>
            <div className="connection-line line-1"></div>
            <div className="connection-line line-2"></div>
          </>
        )}
      </div>
      
      {/* Sparkle effects for special elements */}
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="cursor-sparkle"
          style={{
            left: sparkle.x,
            top: sparkle.y,
            width: sparkle.size,
            height: sparkle.size,
            animationDelay: `${sparkle.delay}ms`
          }}
        />
      ))}
      
      {/* Enhanced code particle trails */}
      {trails.map((trail, index) => (
        <div
          key={trail.id}
          className={`cursor-trail ${isHovering ? 'trail-enhanced' : ''}`}
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
