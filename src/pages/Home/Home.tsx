import NavBar from "../../components/NavBar/NavBar.tsx";
import About from "../sections/About/About.tsx";
import Hero from "../sections/Hero/Hero";
import Projects from "../sections/Projects/Projects.tsx";
import Skills from "../sections/Skills/Skills.tsx";

const Home = () => {
  

  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Skills />
      <Projects />
    </>
  );
};

export default Home;
