import Contact from "./components/sections/contact"
import About from "./components/sections/about";
import Education from "./components/sections/education";
import Landing from "./components/sections/landing";
import Projects from "./components/sections/projects";
import Footer from "./components/layout/footer";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Landing/>
      <About/>
      <Education/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}
