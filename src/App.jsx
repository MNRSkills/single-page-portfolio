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
import {
  AppStyled,
  Main,
  Section,
  Line,
  FaWrapper,
} from "./Components/styled /StyledApp";

function App() {
  const [count, setCount] = useState(0);

  return (
    <AppStyled>

      <h1>Brand Name</h1>
      {/* Verical navbar with Image stationary */}
      <Navbar />
      {/* Main content area */}
      <Main>
        <Section>
          <Line>
            <FaWrapper>
              <FontAwesomeIcon icon={fa1} />
            </FaWrapper>
          </Line>
          <Intro />
        </Section>
        <Section>
          <Line>
            <FaWrapper>
              <FontAwesomeIcon icon={fa2} />
            </FaWrapper>
          </Line>
          <About />
        </Section>
        <Section>
          <Line>
            <FaWrapper>
              <FontAwesomeIcon icon={fa3} />
            </FaWrapper>
          </Line>
          <Skill />
        </Section>
        <Section>
          <Line>
            <FaWrapper>
              <FontAwesomeIcon icon={fa4} />
            </FaWrapper>
          </Line>
          <Projects />
        </Section>
        <Section>
          <Line>
            <FaWrapper>
              <FontAwesomeIcon icon={fa5} />
            </FaWrapper>
          </Line>
          <Contact />
        </Section>
      </Main>
      {/* scrollable components detailing each  */}
    </AppStyled>
  );
}

export default App;
