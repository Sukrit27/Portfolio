export default function Blog() {
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
        
        {/* <section className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden pt-20 px-6 sm:px-8 lg:px-12 bg-gradient-to-br from-black via-gray-900 to-black"> */}
            {/* Background overlay for glassy effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/95 via-gray-900/80 to-black/95"></div>

            <div className="relative z-10 max-w-5xl mx-auto py-12 lg:py-20">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="mb-6">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mb-4">
                            <svg
                                className="w-10 h-10 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                                />
                            </svg>
                        </div>
                    </div>
                    <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-6">
                        Blog & Insights
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Exploring the world of , 
                        <span className="text-blue-400 font-semibold"> large language models</span>, and 
                        <span className="text-purple-400 font-semibold"> Generative AI</span> — from engineering practices to real-world applications.
                    </p>
                </div>

                {/* Coming Soon Section */}
                <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 text-center shadow-lg shadow-blue-500/10">
                    <div className="mb-6">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-500/20 rounded-full mb-4">
                            <svg
                                className="w-8 h-8 text-cyan-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-semibold text-white mb-4">Coming Soon</h3>
                        <p className="text-gray-300 mb-6">
                            I’m preparing insightful articles on cutting-edge development and AI trends:
                        </p>
                    </div>

                    {/* Topics Grid */}
                    <div className="grid md:grid-cols-2 gap-4 mb-8">
                        <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                            <h4 className="text-blue-300 font-medium mb-2">LLMs in Production</h4>
                            <p className="text-gray-400 text-sm">
                                Building, fine-tuning, and deploying large language models.
                            </p>
                        </div>
                        <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                            <h4 className="text-purple-300 font-medium mb-2">Generative AI</h4>
                            <p className="text-gray-400 text-sm">
                                Creating intelligent apps with GenAI for real-world workflows.
                            </p>
                        </div>
                        {/* <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                            <h4 className="text-green-300 font-medium mb-2">Full-Stack Development</h4>
                            <p className="text-gray-400 text-sm">
                                Best practices in modern web and backend engineering.
                            </p>
                        </div> */}
                    </div>

                    <p className="text-gray-400 text-sm">
                        Stay tuned — fresh posts on software engineering, AI, and developer insights are on the way!
                    </p>
                </div>
            </div>
        
        </section>
    );
}
