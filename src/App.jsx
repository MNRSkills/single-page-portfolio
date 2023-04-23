import { useState } from "react";
import Navbar from "./Components/Layout/navbar";
import About from "./Components/Scroll/about";
import Skill from "./Components/Scroll/skills";
import Projects from "./Components/Scroll/projects";
import Contact from "./Components/Scroll/contact";
import Intro from "./Components/Scroll/intro";

// font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fa1, fa2, fa3, fa4, fa5 } from "@fortawesome/free-solid-svg-icons";

// styled components
import styled from "styled-components";

const AppStyled = styled.div`
  text-align: center;
  margin: 0;
  display: grid;
  grid-template-areas: "branding branding branding branding" "nav nav nav main";

  @media (max-width: 768px) {
    grid-template-areas: "branding" "nav" "main";
  }
`;

const Main = styled.div`
  grid-area: main;
  padding: 1rem;
  background-color: #1a1a1a;
  height: 100vh;
  overflow-y: scroll;
  scroll-behavior: smooth;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
  h1 {
    grid-area: branding;
    font-size: 3rem;
    color: #aecde8;
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
  
  h2 {
    font-size: 2rem;
    color: #aecde8;

    @media (max-width: 768px) {

      font-size: 1.5rem;
    }
  }

  span {
    display: block;
    height: 1rem;
    background-color: #999c97;
    margin: 1rem 0;

  }

}`;

function App() {
  const [count, setCount] = useState(0);

  return (
    <AppStyled>
      {/* Branding title */}
      <h1>Brand Name</h1>
      {/* Verical navbar with Image stationary */}

      <Navbar />

      {/* Main content area */}
      <Main>
        <FontAwesomeIcon icon={fa1} /> <span id="intro"></span>
        <Intro />
        <FontAwesomeIcon icon={fa2} /> <span id= "about"></span>
        <About />
        <FontAwesomeIcon icon={fa3} /> <span></span>
        <Skill />
        <FontAwesomeIcon icon={fa4} /> <span></span>
        <Projects />
        <FontAwesomeIcon icon={fa5} /> <span id="contact"> Contact </span>
        <Contact />
      </Main>

      {/* scrollable components detailing each  */}
    </AppStyled>
  );
}

export default App;
