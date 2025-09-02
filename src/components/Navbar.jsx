import { useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId, event) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Add a small delay for visual feedback
      const button = event.target;
      button.style.transform = 'scale(0.95)';

      setTimeout(() => {
        button.style.transform = 'scale(1)';
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest',
        });
      }, 100);

      // Close mobile menu after navigation
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950 backdrop-blur-sm px-4 sm:px-6 py-4 shadow-lg border-b border-purple-500/20">
      <div className="flex justify-between items-center">
        <h1
          className="text-xl sm:text-2xl font-bold text-blue-900 cursor-pointer hover:text-blue-900 transition-colors duration-300"
          onClick={(e) => scrollToSection('home', e)}
        >
          SG
        </h1>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-4 lg:space-x-6">
          <button
            onClick={(e) => scrollToSection('home', e)}
            className="hover:text-purple-300 transition-all duration-300 cursor-hover focus:outline-none transform hover:-translate-y-0.5 text-sm lg:text-base"
          >
            Home
          </button>
          <button
            onClick={(e) => scrollToSection('about', e)}
            className="hover:text-purple-300 transition-all duration-300 cursor-hover focus:outline-none transform hover:-translate-y-0.5 text-sm lg:text-base"
          >
            About
          </button>
          <button
            onClick={(e) => scrollToSection('projects', e)}
            className="hover:text-purple-300 transition-all duration-300 cursor-hover focus:outline-none transform hover:-translate-y-0.5 text-sm lg:text-base"
          >
            Projects
          </button>
          <button
            onClick={(e) => scrollToSection('blog', e)}
            className="hover:text-purple-300 transition-all duration-300 cursor-hover focus:outline-none transform hover:-translate-y-0.5 text-sm lg:text-base"
          >
            Blog
          </button>
          <button
            onClick={(e) => scrollToSection('contact', e)}
            className="hover:text-purple-300 transition-all duration-300 cursor-hover focus:outline-none transform hover:-translate-y-0.5 text-sm lg:text-base"
          >
            Contact
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-white hover:text-purple-300 transition-colors duration-300"
          aria-label="Toggle mobile menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 pb-4 border-t border-purple-500/20">
          <div className="flex flex-col space-y-3 pt-4">
            <button
              onClick={(e) => scrollToSection('home', e)}
              className="text-left hover:text-purple-300 transition-all duration-300 cursor-hover focus:outline-none py-2"
            >
              Home
            </button>
            <button
              onClick={(e) => scrollToSection('about', e)}
              className="text-left hover:text-purple-300 transition-all duration-300 cursor-hover focus:outline-none py-2"
            >
              About
            </button>
            <button
              onClick={(e) => scrollToSection('projects', e)}
              className="text-left hover:text-purple-300 transition-all duration-300 cursor-hover focus:outline-none py-2"
            >
              Research
            </button>
            <button
              onClick={(e) => scrollToSection('blog', e)}
              className="text-left hover:text-purple-300 transition-all duration-300 cursor-hover focus:outline-none py-2"
            >
              Blog
            </button>
            <button
              onClick={(e) => scrollToSection('contact', e)}
              className="text-left hover:text-purple-300 transition-all duration-300 cursor-hover focus:outline-none py-2"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
