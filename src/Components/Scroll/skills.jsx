//  create a arrow commponent called skills
import React, { useState, useEffect } from "react";
import {
  SkillCoStyled,
  SkillsStyled,
  SkillList,
} from "../styled /StyledSkills";
import { HeaderStyled } from "../styled /StyledMain";

const Skills = () => {
  const [techDropDown, setTechDropDown] = useState(false);
  const [softDropDown, setSoftDropDown] = useState(false);
  const [certDropDown, setCertDropDown] = useState(false);
  const [toolDropDown, setToolDropDown] = useState(false);

  const techToggle = () => {
    setTechDropDown(!techDropDown);
  };
  const softToggle = () => {
    setSoftDropDown(!softDropDown);
  };
  const certToggle = () => {
    setCertDropDown(!certDropDown);
  };
  const toolToggle = () => {
    setToolDropDown(!toolDropDown);
  };

  // q: can useEffect help with closing other toggle when one is open?
  // a: yes, but it's not the best way to do it.
  // q: what is the best way to do it?

  useEffect(() => {
    // q: what is the best way to do it?
    // a: use a state varia
    // {
    //   (techDropDown || softDropDown || certDropDown || toolDropDown) ? (
    //     console.log("hello")
    //   ) : (
    //     console.log("goodbye")
    // )
    // }

  //   const timer = setTimeout(() => {
  //     setTechDropDown(false);
  //     setSoftDropDown(false);
  //     setCertDropDown(false);
  //     setToolDropDown(false);
  //   }, 2500);
  //   return () => clearTimeout(timer);
  }, [techDropDown, softDropDown, certDropDown, toolDropDown]);

  return (
    <SkillCoStyled id="skills">
      <HeaderStyled>
        <h2>My Skills</h2>
        <p>Always learning and growing</p>
      </HeaderStyled>

      <SkillsStyled>
        <h2>Techinical Skills</h2>
        <button onClick={techToggle}>See More</button>
        {techDropDown ? (
          <SkillList>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Express</li>
          </SkillList>
        ) : null}
      </SkillsStyled>
      <SkillsStyled>
        <h2>Soft Skills</h2>
        <button onClick={softToggle}>See More</button>
        {softDropDown ? (
          <SkillList>
            <li>Customer Service</li>
            <li>Problem Solving</li>
            <li>Communication</li>
            <li>Teamwork</li>
            <li>Adaptability</li>
            <li>Work Ethic</li>
          </SkillList>
        ) : null}
      </SkillsStyled>
      <SkillsStyled>
        <h2>Certifications</h2>
        <button onClick={certToggle}>See More</button>
        {certDropDown ? (
          <SkillList>
            <li>CompTIA A+</li>
            <li>Google IT Cert</li>
            <li>John Hopkins</li>
            <li>Bottega Full Stack Coding Bootcamp</li>
          </SkillList>
        ) : null}
      </SkillsStyled>
      <SkillsStyled>
        <h2>Toolset</h2>
        <button onClick={toolToggle}>See More</button>
        {toolDropDown ? (
          <SkillList>
            <li>Git</li>
            <li>GitHub</li>
            <li>VS Code</li>
            <li>Postman</li>
            <li>Slack</li>
            <li>Zoom</li>
          </SkillList>
        ) : null}
      </SkillsStyled>
    </SkillCoStyled>
  );
};

export default Skills;
