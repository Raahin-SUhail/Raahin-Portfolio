import { MotionConfig } from "framer-motion";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <MotionConfig reducedMotion="user" transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}>
    <div className="bg-[#090a0f] text-zinc-100 min-h-screen selection:bg-white selection:text-zinc-950 font-inter">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header />
      <main id="main-content" tabIndex={-1}>
      <Home />
      <About />
      <Project />
      <Certifications />
      <Contact />
      </main>
      <Footer />
    </div>
    </MotionConfig>
  );
};

export default App;

