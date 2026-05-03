import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CursorGlow from "./components/CursorGlow";
import ScrollProgress from "./components/ScrollProgress";

function App() {
  return (
    <div className="bg-black text-white min-h-screen relative">

      {/* Gradient Background */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-black via-gray-900 to-black opacity-60"></div>

      {/* Cursor Glow */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]"></div>

      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;