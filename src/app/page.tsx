import Contact from "./components/sections/contact"
import About from "./components/sections/about";
import Education from "./components/sections/education";
import Landing from "./components/sections/landing";
import Projects from "./components/sections/projects";

export default function Home() {
  return (
    <div>
      <Landing/>
      <About/>
      <Education/>
      <Projects/>
      <Contact/>
    </div>
  );
}
