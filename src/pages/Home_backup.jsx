export default function Home() {
    return (
        <section className="min-h-screen w-full flex items-center justify-center relative overflow-hidden">
            {/* Background gradient and effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-indigo-900/20"></div>
            <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            
            <div className="relative z-10 text-center w-full px-4 lg:px-8 xl:px-16">
                {/* Main heading with gradient text */}
                <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-6 animate-fade-in">
                    <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                        Quantum
                    </span>
                    <br />
                    <span className="text-white/90 font-light tracking-wide">
                        Frontier
                    </span>
                </h1>
                
                {/* Subtitle with typewriter effect */}
                <div className="mb-8 animate-slide-up delay-300">
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-light text-gray-300 mb-4 tracking-wider">
                        SUPRAJIT DEWANJI
                    </h2>
                    <div className="w-24 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto mb-6"></div>
                </div>
                
                {/* Description with fade-in animation */}
                <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12 animate-slide-up delay-500 font-light">
                    Researcher in <span className="text-purple-400 font-medium">Quantum Computing</span>, 
                    <span className="text-blue-400 font-medium"> Quantum Algorithms</span>, and 
                    <span className="text-pink-400 font-medium"> Optimization</span>. 
                    Developing novel quantum algorithms and applying them to real-world problems.
                </p>
                
                {/* CTA buttons with hover effects */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up delay-700">
                    <a
                        href="/projects"
                        className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 rounded-full text-white font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
                    >
                        <span className="flex items-center justify-center gap-2">
                            View Research
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </span>
                    </a>
                    
                    <a
                        href="/contact"
                        className="px-8 py-4 border-2 border-purple-400/50 hover:border-purple-400 rounded-full text-purple-400 hover:text-white hover:bg-purple-400/10 font-semibold text-lg transition-all duration-300 transform hover:scale-105"
                    >
                        Get In Touch
                    </a>
                </div>
                
                {/* Floating particles effect */}
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-1000"></div>
                <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-blue-400 rounded-full animate-bounce delay-1500"></div>
                <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce delay-2000"></div>
            </div>
        </section>
    );
}
