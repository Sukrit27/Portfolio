const projects = [
    {
        title: "Automating Ansys Fluent WorkFlow",
        description: "A web-based interface for real-time thermal simulation of any physical model in ANSYS Fluent using Pyfluent.",
        link: "https://github.com/Sukrit27/Automating-ANSYS-Fluent-Workflow"
    },
    {
        title: "CrowdFunding Platform",
        description: "An open-source crowdfunding platform built to empower innovative and noble projects by providing them with the necessary funding from the masses.",
        link: "https://github.com/Yashkrit-Singh/Crowdfunding_Project"
    },
    {
        title: "Real Time Chat Application",
        description: "A chat-app created with node.js, express.js, React, Tailwind, socket io, etc.",
        link: "https://github.com/Sukrit27/Mern-app"
    },
   
    {
        title: "Voting Dapp",
        description: "A voting app where one can vote for the candidates. The smart contract is written with solidity which passes an array of candidates and the voting time. It is deployed in Remix. The frontend is made with react..",
        link: "https://github.com/Sukrit27/Voting-dAppt"
    },
    // {
    //     title: "Quantum Harmonic Oscillator Simulation",
    //     description: "Implemented a scalable VQE framework for simulating multiparticle quantum harmonic oscillator systems.",
    //     link: "https://github.com/codersupra/Quantum-Harmonic-Oscillator-Simulator--Using-VQE"
    // }
];

const patents = [
    {
        title: "Web3 Business Analysis",
        description: "Researched Web3 integration in various industries, exploring real-world applications of DeFi, decentralized physical infrastructure networks (DePINs), and blockchain.",
        associated: "Zenithium",
        link: "https://drive.google.com/file/d/1stAnzsN07IItBRwKzAOhFIYseVuVMTu6/view?usp=sharing"
    },

];
const upcomingProjects = [
    {
        title: "High Performance Arbitrage Trading Bot",
        description: "An algo-quant trading bot focused on high-frequency arbitrage strategies to optimize profit opportunities across exchanges.",
        status: "In Progress"
    },

];

export default function Projects() {
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
        
        {/* <section className="min-h-screen w-full flex items-center justify-center relative overflow-hidden pt-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-black via-gray-900 to-black"> */}
            {/* Darker Background Overlay */}
            {/* <div className="absolute inset-0 bg-gradient-to-br from-black/95 via-gray-900/80 to-black/95"></div> */}

            <div className="min-h-screen relative overflow-hidden">
                {/* Background gradient in deep blue tones */}
                {/* <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-cyan-900/30"></div> */}

                {/* Floating gradient orbs - tuned to blue/cyan */}
                <div className="absolute top-20 left-4 sm:left-20 w-48 h-48 sm:w-72 sm:h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-4 sm:right-20 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/4 left-1/4 sm:left-1/3 w-32 h-32 sm:w-64 sm:h-64 bg-gradient-to-r from-cyan-400/20 to-blue-600/20 rounded-full blur-2xl animate-float-slow"></div>
                <div className="absolute bottom-1/3 right-1/4 w-24 h-24 sm:w-48 sm:h-48 bg-gradient-to-r from-indigo-400/20 to-cyan-600/20 rounded-full blur-2xl animate-float-slow delay-500"></div>

                <section className="relative z-10 max-w-6xl mx-auto py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
                    {/* Research Projects Header */}
                    <div className="text-center lg:text-left mb-8 lg:mb-12">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-400 mb-4 lg:mb-6">Projects</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto lg:mx-0 mb-6"></div>
                    </div>

                    {/* Research Projects Grid */}
                    <div className="space-y-6 mb-12 lg:mb-20">
  {projects.map((p, i) => (
    <div
      key={i}
      className="group relative p-6 border border-gray-700/40 rounded-xl 
                 bg-gray-800/10 backdrop-blur-md
                 hover:bg-gray-800/20 hover:border-blue-500/40
                 transition-all duration-500 ease-in-out
                 transform hover:-translate-y-1 hover:scale-[1.02]
                 shadow-md hover:shadow-blue-500/20"
    >
      {/* Gradient overlay effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-cyan-500/0 
                      group-hover:from-blue-500/10 group-hover:to-cyan-500/10 
                      rounded-xl transition-all duration-500"></div>

      <div className="relative z-10">
        <h3 className="text-lg sm:text-xl font-semibold text-blue-300 mb-3 
                       group-hover:text-blue-200 transition-colors duration-300">
          {p.title}
        </h3>
        <p className="text-sm sm:text-base text-gray-300 mb-4 
                      group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">
          {p.description}
        </p>
        <a
          href={p.link}
          className="inline-flex items-center text-blue-400 hover:text-cyan-300 transition-colors duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Link
          <svg
            className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      </div>
    </div>
  ))}
</div>


<div className="text-center lg:text-left mb-8 lg:mb-12">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-400 mb-4 lg:mb-6">Upcoming Projects</h2>
                        <div className="w-40 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto lg:mx-0 mb-6"></div>
                    </div>

                    <div className="flex flex-col gap-6 mb-20">
                        {upcomingProjects.map((p, i) => (
                            <div
                                key={i}
                                className="group relative p-6 border border-gray-700/50 rounded-lg bg-gray-800/20 backdrop-blur-sm transition-all duration-300 ease-in-out transform hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-500/20 hover:border-cyan-500/50"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 rounded-lg transition-all duration-300"></div>
                                <div className="relative z-10">
                                    <h3 className="text-lg sm:text-xl font-semibold text-cyan-300 mb-2 group-hover:text-cyan-200 transition-colors duration-300">
                                        {p.title}
                                    </h3>
                                    <p className="text-sm sm:text-base text-gray-300 mb-3 group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">
                                        {p.description}
                                    </p>
                                    <p className="text-xs sm:text-sm text-cyan-400 italic">Status: {p.status}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Patents Section */}
                    <div className="text-center lg:text-left mb-8 lg:mb-12">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-400 mb-4 lg:mb-6">Case Study</h2>
                        <div className="w-48 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto lg:mx-0 mb-6"></div>
                    </div>
                    <div className="flex flex-col gap-6">
                        {patents.map((p, i) => (
                            <div
                                key={i}
                                className="group relative p-6 border border-gray-700/50 rounded-lg bg-gray-800/20 backdrop-blur-sm transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-500/20 hover:border-blue-500/50"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 rounded-lg transition-all duration-300"></div>
                                <div className="relative z-10">
                                    <h3 className="text-lg sm:text-xl font-semibold text-blue-300 mb-3 group-hover:text-blue-200 transition-colors duration-300">
                                        {p.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-gray-400 mb-2 font-medium">Associated with: {p.associated}</p>
                                    <p className="text-sm sm:text-base text-gray-300 mb-4 group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">
                                        {p.description}
                                    </p>
                                    <a
          href={p.link}
          className="inline-flex items-center text-blue-400 hover:text-cyan-300 transition-colors duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          Report
          <svg
            className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        {/* </section> */}
        </section>
    );
}
