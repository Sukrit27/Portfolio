import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AnimatedCursor from "./components/AnimatedCursor";
import MinimalScrollAnimations from "./components/MinimalScrollAnimations";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-gray-950 text-white">
      <MinimalScrollAnimations />
      <AnimatedCursor />
      <Navbar />
      <main className="flex-grow w-full pt-20">
        {/* Continuous single-page layout */}
        <section id="home" className="min-h-screen section-transition scroll-glow">
          <Home />
        </section>
        <section id="about" className="min-h-screen section-transition scroll-glow">
          <About />
        </section>
        <section id="projects" className="min-h-screen section-transition scroll-glow">
          <Projects />
        </section>
        <section id="blog" className="min-h-screen section-transition scroll-glow">
          <Blog />
        </section>
        <section id="contact" className="min-h-screen section-transition scroll-glow">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
