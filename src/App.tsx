import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Skills from "./components/skills";

function App() {
  return (
    <>
      <Navbar />
      <Hero
        name="Saurabh Jain"
        title="Softare Engineer"
        description="I build reliable and scalable software applications."
      />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
    </>
  );
}

export default App;
