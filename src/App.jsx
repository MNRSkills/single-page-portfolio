import { useState, useEffect } from "react";
import Navbar from "./Components/Layout/navbar";
import { Logo, ResponsiveNav } from "./Components/styled /StyledNav";
import About from "./Components/Scroll/about";
import Skill from "./Components/Scroll/skills";
import Projects from "./Components/Scroll/projects";
import Contact from "./Components/Scroll/contact";
import Intro from "./Components/Scroll/intro";

// font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  fa1,
  fa2,
  fa3,
  fa4,
  fa5,
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";

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
  const [navTog, setNavTog] = useState(false);

  const togEllip = () => {
    console.log("clicked");
    setNavTog(!navTog);
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      setCount(window.innerWidth);
    });
  }, []);

  return (
    <AppStyled>
      {/* Verical navbar with Image stationary used for dropdown  */}
      {(821 < count) | navTog ? (
        <Navbar toggle={togEllip} />
      ) : (
        <ResponsiveNav>
          <h1>MNRDev</h1>
          <div className="icon">
            <FontAwesomeIcon
              icon={faEllipsisVertical}
              size="2xl"
              onClick={togEllip}
            />
          </div>
        </ResponsiveNav>
      )}
      {821 < count ? <Logo /> : null}
      {/* Main content area */}
      <Main>
        <Section>
          <Line>
            <FaWrapper>
              <FontAwesomeIcon icon={fa1} />
            </FaWrapper>
          </Line>
          <Intro onClick={togEllip} />
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
