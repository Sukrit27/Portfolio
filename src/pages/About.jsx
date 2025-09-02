import { 
  Code2, Database, Cloud, Cpu, Zap, Globe, 
  GitBranch, Palette, Layout, Boxes 
} from "lucide-react";
import { useEffect, useState } from "react";

export default function About() {
  const [particles, setParticles] = useState([]);
  
  // Generate floating particles for background
  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 30; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          speed: Math.random() * 2 + 1,
          delay: Math.random() * 5000
        });
      }
      setParticles(newParticles);
    };
    generateParticles();
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Enhanced Background with blackish theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/95 via-gray-900/80 to-black/95"></div>
      
      {/* Floating geometric shapes for background */}
      <div className="absolute top-20 left-10 w-16 h-24 animate-spin-slow opacity-20">
        <div className="w-full h-full bg-gradient-to-br from-slate-800 to-blue-900 transform rotate-45 rounded-lg shadow-xl shadow-blue-900/30"></div>
      </div>
      <div className="absolute bottom-32 right-20 w-12 h-18 animate-pulse-rotate opacity-25">
        <div className="w-full h-full bg-gradient-to-br from-gray-800 to-blue-800 transform -rotate-30 rounded-lg shadow-xl shadow-blue-800/30"></div>
      </div>
      <div className="absolute top-1/2 right-1/4 w-8 h-12 animate-bounce-rotate opacity-30">
        <div className="w-full h-full bg-gradient-to-br from-slate-900 to-blue-800 transform rotate-12 rounded-md shadow-lg shadow-blue-800/40"></div>
      </div>
      
      {/* Background particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute animate-float-gentle opacity-30"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDelay: `${particle.delay}ms`,
            animationDuration: `${particle.speed * 4 + 8}s`
          }}
        >
          <div className="w-full h-full bg-cyan-400 rounded-full blur-sm"></div>
        </div>
      ))}
      
      {/* Code-themed floating icons */}
      <div className="absolute top-1/4 left-1/5 text-cyan-400 opacity-10 animate-float-gentle">
        <Code2 className="w-12 h-12" />
      </div>
      <div className="absolute bottom-1/3 right-1/5 text-blue-400 opacity-10 animate-float-gentle delay-1000">
        <Database className="w-10 h-10" />
      </div>
      <div className="absolute top-2/3 left-1/3 text-purple-400 opacity-10 animate-float-gentle delay-2000">
        <Cloud className="w-14 h-14" />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="space-y-8 lg:space-y-12">
          {/* Heading */}
          <div className="text-center lg:text-left">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent mb-6 lg:mb-8">
              Get to Know Me
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto lg:mx-0 mb-8"></div>
          </div>

          {/* Grid layout: Text + Expertise */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            {/* Left: Description */}
            <div className="space-y-6 lg:space-y-8">
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed font-light">
                I’m a final-year undergrad at <span className="text-blue-400 font-medium">IIT Patna</span> and a passionate 
                <span className="text-blue-400 font-medium"> Full Stack Developer</span> with a strong interest in 
                <span className="text-blue-400 font-medium"> Artificial Intelligence and Machine Learning</span>. My expertise spans full-stack development, along with hands-on experience in 
                <span className="text-blue-400 font-medium"> blockchain integration using Solidity</span>. Currently, I’m also working on an 
                <span className="text-blue-400 font-medium"> algorithmic quant high-performance arbitrage trading bot</span> to make trading faster, more efficient, and profitable.
              </p>

              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed font-light">
                Beyond development, I enjoy tackling challenges on platforms like 
                <span className="text-blue-400 font-medium"> LeetCode and Codeforces</span>. I’m passionate about building interactive, user-friendly applications that address real-world problems and deliver seamless digital experiences.
              </p>
            </div>

            {/* Right: Tech Stack & Expertise */}
            <div className="space-y-6">
              {/* Core Expertise */}
              <div className="bg-gradient-to-br from-gray-900/80 to-slate-900/80 p-6 lg:p-8 rounded-2xl border border-cyan-400/20 backdrop-blur-sm shadow-2xl shadow-cyan-500/10">
                <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6 flex items-center gap-3">
                  <Cpu className="w-8 h-8 text-cyan-400" />
                  Core Expertise
                </h3>
                <ul className="space-y-4 text-base sm:text-lg text-gray-300">
                  <li className="flex items-center gap-4 group hover:text-cyan-400 transition-colors duration-300">
                    <div className="w-3 h-3 bg-cyan-400 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                    Full Stack Web Development
                  </li>
                  <li className="flex items-center gap-4 group hover:text-blue-400 transition-colors duration-300">
                    <div className="w-3 h-3 bg-cyan-400 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                    Modern JavaScript Frameworks
                  </li>
                  <li className="flex items-center gap-4 group hover:text-purple-400 transition-colors duration-300">
                    <div className="w-3 h-3 bg-cyan-400 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                    Blockchain
                  </li>
                  <li className="flex items-center gap-4 group hover:text-pink-400 transition-colors duration-300">
                    <div className="w-3 h-3 bg-cyan-400 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                    AI & Machine Learning Integration
                  </li>
                  <li className="flex items-center gap-4 group hover:text-emerald-400 transition-colors duration-300">
                    <div className="w-3 h-3 bg-cyan-400 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                    Collaboration
                  </li>
                  <li className="flex items-center gap-4 group hover:text-cyan-400 transition-colors duration-300">
                    <div className="w-3 h-3 bg-cyan-400 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                    Data Analysis
                  </li>
                </ul>
              </div>

              {/* Technology Stack */}
              <div className="bg-gradient-to-br from-slate-900/80 to-gray-900/80 p-6 lg:p-8 rounded-2xl border border-purple-400/20 backdrop-blur-sm shadow-2xl shadow-purple-500/10">
                <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-6 flex items-center gap-3">
                  <Zap className="w-8 h-8 text-purple-400" />
                  Tech Arsenal
                </h3>
                <div className="grid grid-cols-2 gap-4 text-sm sm:text-base text-gray-300">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 hover:text-cyan-400 transition-colors duration-300">
                      <Code2 className="w-4 h-4" />
                      JavaScript
                    </div>
                    <div className="flex items-center gap-2 hover:text-cyan-400 transition-colors duration-300">
                      <Cpu className="w-4 h-4" />
                      Node.js & Express
                    </div>
                    <div className="flex items-center gap-2 hover:text-cyan-400 transition-colors duration-300">
                      <Code2 className="w-4 h-4" />
                      C/C++
                    </div>
                    <div className="flex items-center gap-2 hover:text-cyan-400 transition-colors duration-300">
                      <Boxes className="w-4 h-4" />
                      React
                    </div>
                    <div className="flex items-center gap-2 hover:text-cyan-400 transition-colors duration-300">
                      <Palette className="w-4 h-4" />
                      Tailwind CSS
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 hover:text-purple-400 transition-colors duration-300">
                      <Zap className="w-4 h-4" />
                      Solidity
                    </div>
                    <div className="flex items-center gap-2 hover:text-purple-400 transition-colors duration-300">
                      <Database className="w-4 h-4" />
                      SQL & MongoDB
                    </div>
                    <div className="flex items-center gap-2 hover:text-purple-400 transition-colors duration-300">
                      <Cloud className="w-4 h-4" />
                      GCP
                    </div>
                    <div className="flex items-center gap-2 hover:text-purple-400 transition-colors duration-300">
                      <Layout className="w-4 h-4" />
                      HTML & CSS
                    </div>
                    <div className="flex items-center gap-2 hover:text-purple-400 transition-colors duration-300">
                      <GitBranch className="w-4 h-4" />
                      GitHub
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 lg:mt-16">
            <div className="text-center p-6 bg-gradient-to-br from-cyan-900/30 to-blue-900/30 rounded-xl border border-cyan-400/20 backdrop-blur-sm">
              <div className="text-3xl lg:text-4xl font-bold text-cyan-400 mb-2">50+</div>
              <div className="text-gray-300 text-sm lg:text-base">Projects Completed</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-xl border border-blue-400/20 backdrop-blur-sm">
              <div className="text-3xl lg:text-4xl font-bold text-blue-400 mb-2">3+</div>
              <div className="text-gray-300 text-sm lg:text-base">Years Experience</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl border border-purple-400/20 backdrop-blur-sm">
              <div className="text-3xl lg:text-4xl font-bold text-purple-400 mb-2">10+</div>
              <div className="text-gray-300 text-sm lg:text-base">Technologies</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-pink-900/30 to-emerald-900/30 rounded-xl border border-pink-400/20 backdrop-blur-sm">
              <div className="text-3xl lg:text-4xl font-bold text-pink-400 mb-2">100%</div>
              <div className="text-gray-300 text-sm lg:text-base">Client Satisfaction</div>
            </div>
          </div> */}
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg) rotateY(0deg); }
          to { transform: rotate(360deg) rotateY(360deg); }
        }
        
        @keyframes pulse-rotate {
          0%, 100% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.1); }
        }
        
        @keyframes bounce-rotate {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(180deg); }
        }
        
        @keyframes float-gentle {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          33% { transform: translateY(-8px) translateX(4px) rotate(5deg); }
          66% { transform: translateY(4px) translateX(-4px) rotate(-5deg); }
        }
        
        .animate-spin-slow { animation: spin-slow 12s linear infinite; }
        .animate-pulse-rotate { animation: pulse-rotate 6s ease-in-out infinite; }
        .animate-bounce-rotate { animation: bounce-rotate 4s ease-in-out infinite; }
        .animate-float-gentle { animation: float-gentle 8s ease-in-out infinite; }
      `}</style>
    </section>
  );
}
