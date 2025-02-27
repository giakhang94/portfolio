import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import OtherProjects from "./components/OtherProjects";
import Projects from "./components/Projects";
import SmallMenu from "./components/SmallMenu";
import Technologies from "./components/Technologies";

function App() {
  return (
    <div className=" w-full overflow-x-clip text-neutral-300 antialiased selection:bg-cyan-600 selection:text-cyan-100 relative ">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      </div>
      <div className="container mx-auto px-8">
        <Navbar />
        {/* <div className="mt-8"></div> */}
        <Hero />
        <Technologies />
        <Projects />
        <OtherProjects />
        <About />
        <Contact />
      </div>
      <SmallMenu />
    </div>
  );
}

export default App;
