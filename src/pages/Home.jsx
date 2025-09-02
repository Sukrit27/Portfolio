import { GraduationCap, Code, Terminal, Cpu } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
    const [particles, setParticles] = useState([]);
    
    // Generate floating particles
    useEffect(() => {
        const generateParticles = () => {
            const newParticles = [];
            for (let i = 0; i < 20; i++) { // Increased from 50 to 80
                newParticles.push({
                    id: i,
                    x: Math.random() * 100,
                    y: Math.random() * 100,
                    size: Math.random() * 6 + 2, // Increased size range
                    speed: Math.random() * 1.5 + 0.8, // Adjusted speed
                    delay: Math.random() * 3000 // Reduced delay for more frequent particles
                });
            }
            setParticles(newParticles);
        };
        generateParticles();
    }, []);

    return (
        
        <section className="min-h-screen w-full flex items-center justify-center relative overflow-hidden pt-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-black via-gray-900 to-black">
            {/* Enhanced Background with deeper black theme */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/95 via-gray-900/80 to-black/95"></div>
            
            {/* 3D Rotating Cuboids and Geometric Shapes - All Blackish Blue */}
            {/* Large Cuboids */}
            <div className="absolute top-20 left-10 w-20 h-32 animate-spin-slow opacity-30">
                <div className="w-full h-full bg-gradient-to-br from-slate-800 to-blue-900 transform rotate-45 rounded-lg shadow-2xl shadow-blue-900/50 relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-slate-700/60 to-transparent rounded-lg"></div>
                </div>
            </div>
            <div className="absolute top-1/3 right-20 w-16 h-24 animate-spin-reverse opacity-40">
                <div className="w-full h-full bg-gradient-to-br from-gray-800 to-blue-800 transform rotate-12 rounded-lg shadow-2xl shadow-blue-800/50 relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-gray-700/60 to-transparent rounded-lg"></div>
                </div>
            </div>
            <div className="absolute bottom-1/4 left-1/4 w-24 h-36 animate-pulse-rotate opacity-35">
                <div className="w-full h-full bg-gradient-to-br from-slate-900 to-blue-800 transform -rotate-12 rounded-lg shadow-2xl shadow-blue-800/50 relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-slate-800/60 to-transparent rounded-lg"></div>
                </div>
            </div>
            
            {/* Solid Cones */}
            <div className="absolute top-1/2 left-10 w-12 h-16 animate-bounce-rotate opacity-45">
                <div className="w-0 h-0 border-l-6 border-r-6 border-b-16 border-l-transparent border-r-transparent border-b-blue-800 transform rotate-45 drop-shadow-2xl relative">
                    <div className="absolute -bottom-4 -left-6 w-12 h-12 bg-gradient-to-br from-slate-800 to-blue-900 rounded-full opacity-80"></div>
                </div>
            </div>
            <div className="absolute bottom-1/3 right-1/3 w-10 h-14 animate-float-cone opacity-50">
                <div className="w-0 h-0 border-l-5 border-r-5 border-b-14 border-l-transparent border-r-transparent border-b-blue-900 transform -rotate-12 drop-shadow-xl relative">
                    <div className="absolute -bottom-3.5 -left-5 w-10 h-10 bg-gradient-to-br from-gray-800 to-blue-800 rounded-full opacity-80"></div>
                </div>
            </div>
            
            {/* Hollow Cones */}
            <div className="absolute top-1/4 right-1/4 w-14 h-18 animate-float-slow opacity-40">
                <div className="w-0 h-0 border-l-7 border-r-7 border-b-18 border-l-transparent border-r-transparent border-b-slate-800 transform rotate-30 relative">
                    <div className="absolute -bottom-4.5 -left-7 w-14 h-14 border-4 border-slate-800 rounded-full bg-transparent"></div>
                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-10 border-l-transparent border-r-transparent border-b-black"></div>
                </div>
            </div>
            <div className="absolute bottom-1/2 left-1/3 w-12 h-16 animate-spin-slow opacity-45">
                <div className="w-0 h-0 border-l-6 border-r-6 border-b-16 border-l-transparent border-r-transparent border-b-blue-800 transform -rotate-45 relative">
                    <div className="absolute -bottom-4 -left-6 w-12 h-12 border-4 border-blue-800 rounded-full bg-transparent"></div>
                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-3 border-r-3 border-b-8 border-l-transparent border-r-transparent border-b-black"></div>
                </div>
            </div>
            
            {/* Small Cuboids */}
            <div className="absolute top-2/3 right-1/5 w-8 h-14 animate-bounce-rotate opacity-50">
                <div className="w-full h-full bg-gradient-to-br from-slate-800 to-blue-900 transform rotate-45 rounded-md shadow-xl shadow-blue-900/40 relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-slate-700/60 to-transparent rounded-md"></div>
                </div>
            </div>
            <div className="absolute top-1/6 left-2/3 w-10 h-18 animate-float-cone opacity-45">
                <div className="w-full h-full bg-gradient-to-br from-gray-800 to-blue-800 transform -rotate-30 rounded-lg shadow-xl shadow-blue-800/40 relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-gray-700/60 to-transparent rounded-lg"></div>
                </div>
            </div>
            
            {/* Floating geometric shapes - enhanced */}
            <div className="absolute top-20 left-4 sm:left-20 w-48 h-48 sm:w-72 sm:h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-4 sm:right-20 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            
            {/* Moving gradient orbs - enhanced colors */}
            <div className="absolute top-1/4 left-1/4 sm:left-1/3 w-32 h-32 sm:w-64 sm:h-64 bg-gradient-to-r from-cyan-400/20 to-blue-600/20 rounded-full blur-2xl animate-float-slow"></div>
            <div className="absolute bottom-1/3 right-1/4 w-24 h-24 sm:w-48 sm:h-48 bg-gradient-to-r from-indigo-400/20 to-purple-600/20 rounded-full blur-2xl animate-float-slow delay-500"></div>
            
            {/* Enhanced Floating particles moving upward - More Prominent */}
            {particles.map((particle) => (
                <div
                    key={particle.id}
                    className="absolute animate-float-up-prominent"
                    style={{
                        left: `${particle.x}%`,
                        bottom: '-10px',
                        width: `${particle.size * 1.5}px`,
                        height: `${particle.size * 1.5}px`,
                        animationDelay: `${particle.delay}ms`,
                        animationDuration: `${particle.speed * 2 + 3}s`
                    }}
                >
                    <div className="w-full h-full bg-gradient-to-t from-cyan-400 to-blue-300 rounded-full shadow-lg shadow-cyan-400/60 animate-pulse-glow"></div>
                </div>
            ))}
            
            {/* Additional prominent particle streams */}
            <div className="absolute left-1/4 bottom-0 w-2 h-2 bg-purple-400 rounded-full animate-float-stream opacity-90 shadow-lg shadow-purple-400/80"></div>
            <div className="absolute left-1/2 bottom-0 w-3 h-3 bg-cyan-400 rounded-full animate-float-stream-delay opacity-95 shadow-lg shadow-cyan-400/80"></div>
            <div className="absolute left-3/4 bottom-0 w-2.5 h-2.5 bg-pink-400 rounded-full animate-float-stream-delay-2 opacity-90 shadow-lg shadow-pink-400/80"></div>
            <div className="absolute left-1/6 bottom-0 w-1.5 h-1.5 bg-emerald-400 rounded-full animate-float-stream-delay-3 opacity-85 shadow-lg shadow-emerald-400/80"></div>
            <div className="absolute left-5/6 bottom-0 w-2 h-2 bg-orange-400 rounded-full animate-float-stream-delay-4 opacity-88 shadow-lg shadow-orange-400/80"></div>
            
            {/* Code-themed floating elements */}
            <div className="absolute top-1/4 right-1/3 text-cyan-400 opacity-20 animate-float-code">
                <Code className="w-8 h-8" />
            </div>
            <div className="absolute bottom-1/3 left-1/5 text-blue-400 opacity-20 animate-float-code delay-1000">
                <Terminal className="w-6 h-6" />
            </div>
            <div className="absolute top-2/3 right-1/4 text-purple-400 opacity-20 animate-float-code delay-2000">
                <Cpu className="w-10 h-10" />
            </div>
            
            {/* Animated grid pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent animate-slide-right"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/30 to-transparent animate-slide-down delay-1000"></div>
            </div>
            
            {/* Matrix-style falling code */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute w-px h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent left-1/4 animate-matrix-fall"></div>
                <div className="absolute w-px h-full bg-gradient-to-b from-transparent via-blue-400 to-transparent left-2/3 animate-matrix-fall delay-1000"></div>
                <div className="absolute w-px h-full bg-gradient-to-b from-transparent via-purple-400 to-transparent left-3/4 animate-matrix-fall delay-2000"></div>
            </div>
            
            <div className="relative z-10 w-full max-w-7xl mx-auto py-4 sm:py-8">
                {/* Main Hero Section - Picture and Code Architect side by side */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[70vh] mb-12 lg:mb-20">
                    {/* Left side - Profile picture, name and social links */}
                    <div className="flex flex-col items-center space-y-6 lg:space-y-8 animate-fade-in">
                        {/* Profile picture */}
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 rounded-full blur opacity-20 animate-pulse -z-10"></div>
                            <div className="w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden p-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500">
                                <img 
                                    src="/files/pic.jpg" 
                                    alt="Sukrit" 
                                    className="w-full h-full object-cover rounded-full bg-gray-800"
                                />
                            </div>
                        </div>
                        
                        {/* Name */}
                        {/* <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 lg:mb-4 text-center tracking-wide">SUPRAJIT DEWANJI</h2> */}
                        
                        {/* Social links */}
                        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                            <a 
                                href="https://www.linkedin.com/in/sukrit-ghosh-bab1a1259/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="group p-3 sm:p-4 bg-blue-600/20 hover:bg-blue-600/40 rounded-full border border-blue-400/30 hover:border-blue-400 transition-all duration-300 transform hover:scale-110 hover:rotate-6"
                            >
                                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                </svg>
                            </a>
                            
                            <a 
                                href="https://github.com/Sukrit27" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="group p-3 sm:p-4 bg-gray-600/20 hover:bg-gray-600/40 rounded-full border border-gray-400/30 hover:border-gray-400 transition-all duration-300 transform hover:scale-110 hover:rotate-6"
                            >
                                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                            </a>
                            
                            <a 
                                href="mailto:sukritghosh03@gmail.com" 
                                className="group p-3 sm:p-4 bg-cyan-600/20 hover:bg-cyan-600/40 rounded-full border border-cyan-400/30 hover:border-cyan-400 transition-all duration-300 transform hover:scale-110 hover:rotate-6"
                            >
                                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    
                    {/* Right side - Code Architect content */}
                    <div className="space-y-6 lg:space-y-8 animate-slide-up delay-300 text-center lg:text-left flex flex-col justify-center">
                        {/* Main heading */}
                        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-4 lg:mb-6 leading-tight">
                            <span className="text-white/90 font-light tracking-wide">
                            
                                Hi,
                            </span>
                            <br />
                            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                            
                                I'm Sukrit Ghosh
                            </span>
                        </h1>
                        
                        {/* Subtitle with gradient line */}
                        <div className="mb-6 lg:mb-8">
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-gray-300 mb-4 lg:mb-6 tracking-wider">
                                A Software Developer
                            </h3>
                            <div className="w-24 sm:w-32 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 mb-6 lg:mb-8 mx-auto lg:mx-0"></div>
                        </div>
                        
                        {/* Description */}
                        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed mb-8 lg:mb-10 font-light">
                            Passionate about <span className="text-cyan-400 font-medium">Modern Web Development</span>, 
                            <span className="text-blue-400 font-medium"> Cloud Architecture</span>, and 
                            <span className="text-purple-400 font-medium"> AI Integration</span>. 
                            Building scalable solutions with cutting-edge technologies.
                        </p>
                        
                        {/* Action buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center lg:justify-start">
                            <a
                                href="/files/Sukrit Ghosh_Resume.pdf"
                                download="Sukrit Ghosh_Resume.pdf"
                                className="group px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 rounded-full text-white font-semibold text-lg sm:text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 w-full sm:w-auto"
                            >
                                <span className="flex items-center justify-center gap-3 text-white">
                                    Download Resume
                                    <svg
                                        className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-y-1 transition-transform duration-300"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                        />
                                    </svg>
                                </span>
                            </a>

                            <button
                                onClick={() => {
                                    const element = document.getElementById('projects');
                                    if (element) {
                                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                    }
                                }}
                                className="px-8 sm:px-10 py-4 sm:py-5 border-2 border-cyan-400/50 hover:border-cyan-400 rounded-full text-cyan-400 hover:text-white hover:bg-cyan-400/10 font-semibold text-lg sm:text-xl transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/25 active:scale-95 w-full sm:w-auto"
                            >
                                View Projects
                            </button>
                        </div>
                    </div>
                </div>
                
                {/* Tech Stack and Education Section */}
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12 pt-12 lg:pt-16 border-t border-cyan-400/20">
                    {/* <div className="space-y-4 lg:space-y-6">
                        <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent text-center md:text-left">Tech Stack & Expertise</h2>
                        <ul className="grid grid-cols-2 gap-2 lg:gap-3 text-gray-300 text-base sm:text-lg px-4 md:px-0">
                            <li className="flex items-center hover:text-cyan-400 transition-colors duration-300">
                                <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                                React & Next.js
                            </li>
                            <li className="flex items-center hover:text-cyan-400 transition-colors duration-300">
                                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                                Node.js & Express
                            </li>
                            <li className="flex items-center hover:text-cyan-400 transition-colors duration-300">
                                <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                                Python & Django
                            </li>
                            <li className="flex items-center hover:text-cyan-400 transition-colors duration-300">
                                <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                                PostgreSQL & MongoDB
                            </li>
                            <li className="flex items-center hover:text-cyan-400 transition-colors duration-300">
                                <div className="w-2 h-2 bg-rose-400 rounded-full mr-3"></div>
                                Docker & Kubernetes
                            </li>
                            <li className="flex items-center hover:text-cyan-400 transition-colors duration-300">
                                <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                                AWS & Azure
                            </li>
                        </ul>
                    </div> */}
                    <div className="space-y-4 lg:space-y-6">
                        <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent text-center md:text-left">Education</h2>
                        <ul className="space-y-3 px-4 md:px-0">
                            <li className="flex items-start">
                                <GraduationCap className="w-5 h-5 text-cyan-400 mt-1 mr-2 flex-shrink-0" />
                                <span className="hover:text-cyan-400 transition-colors duration-300 text-sm sm:text-base">
                                    B.Tech. in Mechanical Engineering{" "}
                                    <span className="text-gray-400 block sm:inline">| Indian Institute of Technology Patna</span>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes spin-slow {
                    from { transform: rotate(0deg) rotateY(0deg); }
                    to { transform: rotate(360deg) rotateY(360deg); }
                }
                
                @keyframes spin-reverse {
                    from { transform: rotate(360deg) rotateX(0deg); }
                    to { transform: rotate(0deg) rotateX(360deg); }
                }
                
                @keyframes pulse-rotate {
                    0%, 100% { transform: rotate(0deg) scale(1); }
                    50% { transform: rotate(180deg) scale(1.1); }
                }
                
                @keyframes bounce-rotate {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(180deg); }
                }
                
                @keyframes float-up-prominent {
                    0% { 
                        transform: translateY(0px) scale(0.8); 
                        opacity: 0; 
                    }
                    10% {
                        opacity: 1;
                        transform: translateY(-10vh) scale(1);
                    }
                    90% { 
                        opacity: 1;
                        transform: translateY(-90vh) scale(1.2);
                    }
                    100% { 
                        transform: translateY(-100vh) scale(0.5); 
                        opacity: 0; 
                    }
                }
                
                @keyframes float-stream {
                    0% { transform: translateY(0px); opacity: 0; }
                    10% { opacity: 1; }
                    90% { opacity: 1; }
                    100% { transform: translateY(-100vh); opacity: 0; }
                }
                
                @keyframes float-stream-delay {
                    0% { transform: translateY(0px); opacity: 0; }
                    15% { opacity: 1; }
                    85% { opacity: 1; }
                    100% { transform: translateY(-100vh); opacity: 0; }
                }
                
                @keyframes float-stream-delay-2 {
                    0% { transform: translateY(0px); opacity: 0; }
                    20% { opacity: 1; }
                    80% { opacity: 1; }
                    100% { transform: translateY(-100vh); opacity: 0; }
                }
                
                @keyframes float-stream-delay-3 {
                    0% { transform: translateY(0px); opacity: 0; }
                    25% { opacity: 1; }
                    75% { opacity: 1; }
                    100% { transform: translateY(-100vh); opacity: 0; }
                }
                
                @keyframes float-stream-delay-4 {
                    0% { transform: translateY(0px); opacity: 0; }
                    30% { opacity: 1; }
                    70% { opacity: 1; }
                    100% { transform: translateY(-100vh); opacity: 0; }
                }
                
                @keyframes pulse-glow {
                    0%, 100% { box-shadow: 0 0 10px currentColor; }
                    50% { box-shadow: 0 0 20px currentColor, 0 0 30px currentColor; }
                }
                
                @keyframes float-cone {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    33% { transform: translateY(-12px) rotate(120deg); }
                    66% { transform: translateY(8px) rotate(240deg); }
                }
                
                @keyframes float-slow {
                    0%, 100% { transform: translateY(0px) translateX(0px); }
                    33% { transform: translateY(-10px) translateX(5px); }
                    66% { transform: translateY(5px) translateX(-5px); }
                }
                
                @keyframes float-code {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-15px) rotate(10deg); }
                }
                
                @keyframes matrix-fall {
                    0% { transform: translateY(-100%); opacity: 0; }
                    50% { opacity: 1; }
                    100% { transform: translateY(100vh); opacity: 0; }
                }
                
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0px); }
                }
                
                @keyframes slide-up {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0px); }
                }
                
                @keyframes slide-right {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100vw); }
                }
                
                @keyframes slide-down {
                    0% { transform: translateY(-100%); }
                    100% { transform: translateY(100vh); }
                }
                
                .animate-spin-slow { animation: spin-slow 8s linear infinite; }
                .animate-spin-reverse { animation: spin-reverse 6s linear infinite; }
                .animate-pulse-rotate { animation: pulse-rotate 4s ease-in-out infinite; }
                .animate-bounce-rotate { animation: bounce-rotate 3s ease-in-out infinite; }
                .animate-float-up-prominent { animation: float-up-prominent linear infinite; }
                .animate-float-stream { animation: float-stream 4s linear infinite; }
                .animate-float-stream-delay { animation: float-stream-delay 5s linear infinite; }
                .animate-float-stream-delay-2 { animation: float-stream-delay-2 6s linear infinite; }
                .animate-float-stream-delay-3 { animation: float-stream-delay-3 4.5s linear infinite; }
                .animate-float-stream-delay-4 { animation: float-stream-delay-4 5.5s linear infinite; }
                .animate-pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
                .animate-float-cone { animation: float-cone 5s ease-in-out infinite; }
                .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
                .animate-float-code { animation: float-code 4s ease-in-out infinite; }
                .animate-matrix-fall { animation: matrix-fall 10s linear infinite; }
                .animate-fade-in { animation: fade-in 1s ease-out; }
                .animate-slide-up { animation: slide-up 1s ease-out; }
                .animate-slide-right { animation: slide-right 15s linear infinite; }
                .animate-slide-down { animation: slide-down 20s linear infinite; }
            `}</style>
        </section>
    );
}