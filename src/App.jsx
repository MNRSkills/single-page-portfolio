import { useState } from "react";
import "./body.css";
import Navbar from "./Components/Layout/navbar";
import About from "./Components/Scroll/about";
import Skill from "./Components/Scroll/skills";
import Projects from "./Components/Scroll/projects";
import Contact from "./Components/Scroll/contact";
import Intro from "./Components/Scroll/intro";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* Branding title */}
      <h1 className="branding">Brand Name</h1>
      {/* Verical navbar with Image stationary */}

      <Navbar />

      {/* Main content area */}
      <div className="main">
       
        <Intro />

        <About />
        <Skill />

        <Projects />

        <Contact />
      </div>

      {/* scrollable components detailing each  */}
    </div>
  );
}

export default App;
