import { useEffect, useState } from 'react';

export default function Quantum3DScroll() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const newScrollY = window.scrollY;
      setScrollY(newScrollY);
      setIsVisible(newScrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate dynamic values based on scroll
  const wavePhase = scrollY * 0.01;
  const hologramRotation = scrollY * 0.2;

  return (
    <div 
      className={`fixed top-1/2 right-8 pointer-events-none z-10 transition-all duration-700 ${
        isVisible ? 'opacity-80' : 'opacity-0'
      }`}
      style={{
        transform: `translateY(-50%) scale(${0.8 + Math.sin(wavePhase) * 0.2})`
      }}
    >
      {/* Quantum Hologram Display */}
      <div className="quantum-hologram relative w-64 h-64">
        
        {/* Holographic Frame */}
        <div 
          className="absolute inset-0 border-2 border-cyan-400/40 rounded-lg backdrop-blur-sm"
          style={{
            transform: `rotateY(${hologramRotation * 0.5}deg) rotateX(${Math.sin(wavePhase) * 5}deg)`,
            background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(168, 85, 247, 0.1))',
            boxShadow: '0 0 30px rgba(6, 182, 212, 0.3), inset 0 0 30px rgba(168, 85, 247, 0.2)'
          }}
        />

        {/* Quantum Wave Grid */}
        <div className="absolute inset-4">
          {Array.from({ length: 8 }).map((_, row) => (
            <div key={row} className="flex justify-between mb-2">
              {Array.from({ length: 8 }).map((_, col) => (
                <div
                  key={col}
                  className="w-2 h-2 bg-cyan-400 rounded-full"
                  style={{
                    opacity: Math.abs(Math.sin(wavePhase + (row + col) * 0.5)) * 0.8,
                    transform: `scale(${0.5 + Math.abs(Math.sin(wavePhase + (row + col) * 0.3)) * 0.5})`,
                    boxShadow: '0 0 10px rgba(6, 182, 212, 0.8)'
                  }}
                />
              ))}
            </div>
          ))}
        </div>

        {/* Quantum Interference Pattern */}
        <div className="absolute inset-0 overflow-hidden rounded-lg">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-full h-0.5"
              style={{
                top: `${20 + i * 15}%`,
                background: `linear-gradient(90deg, transparent, rgba(6, 182, 212, ${0.3 + Math.sin(wavePhase + i) * 0.2}), transparent)`,
                transform: `translateX(${Math.sin(wavePhase + i * 0.5) * 20}px)`,
                animation: `quantumWave ${3 + i * 0.5}s ease-in-out infinite`
              }}
            />
          ))}
        </div>

        {/* Floating Quantum Bits */}
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-4 h-4 border border-purple-400 rounded-sm flex items-center justify-center text-xs text-purple-300 font-mono"
            style={{
              top: `${15 + (i % 3) * 25}%`,
              left: `${20 + Math.floor(i / 3) * 40}%`,
              transform: `rotateZ(${hologramRotation + i * 45}deg) translateY(${Math.sin(wavePhase + i) * 10}px)`,
              background: `rgba(168, 85, 247, ${0.1 + Math.sin(wavePhase + i) * 0.1})`,
              animation: `qubitFloat ${2 + i * 0.3}s ease-in-out infinite`
            }}
          >
            {Math.random() > 0.5 ? '1' : '0'}
          </div>
        ))}

        {/* Holographic Scanlines */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(6, 182, 212, 0.1) 2px,
              rgba(6, 182, 212, 0.1) 4px
            )`,
            animation: 'scanlines 2s linear infinite'
          }}
        />

        {/* Energy Core */}
        <div 
          className="absolute top-1/2 left-1/2 w-8 h-8 rounded-full"
          style={{
            transform: `translate(-50%, -50%) rotateZ(${hologramRotation}deg)`,
            background: `conic-gradient(from ${hologramRotation}deg, #06b6d4, #a855f7, #ec4899, #06b6d4)`,
            boxShadow: '0 0 20px rgba(6, 182, 212, 0.8)',
            animation: 'energyCore 3s ease-in-out infinite'
          }}
        />
      </div>

      {/* Quantum Data Stream */}
      <div className="absolute -left-16 top-0 w-12 h-full">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-green-400 rounded-full text-xs"
            style={{
              top: `${i * 5}%`,
              left: `${Math.sin(wavePhase + i * 0.2) * 20}px`,
              opacity: Math.abs(Math.sin(wavePhase + i * 0.1)),
              animation: `dataStream ${1 + i * 0.1}s linear infinite`
            }}
          />
        ))}
      </div>

      {/* Quantum Equations Overlay */}
      <div className="absolute top-full left-0 mt-4 text-cyan-300 font-mono text-xs space-y-1">
        <div style={{ opacity: 0.7 + Math.sin(wavePhase) * 0.3 }}>
          |ψ⟩ = α|0⟩ + β|1⟩
        </div>
        <div style={{ opacity: 0.7 + Math.cos(wavePhase) * 0.3 }}>
          E = ℏω(n + ½)
        </div>
        <div className="text-purple-300">
          Scroll: {Math.round(scrollY)}px
        </div>
      </div>
    </div>
  );
}
