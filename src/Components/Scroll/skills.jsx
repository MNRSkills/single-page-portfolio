//  create a arrow commponent called skills
import React from "react";
import {
  SkillCoStyled,
  SkillsStyled,
  SkillList,
} from "../styled /StyledSkills";
import { HeaderStyled } from "../styled /StyledMain";

const Skills = () => {
  return (
    <SkillCoStyled id="skills">
      <HeaderStyled>
        <h2>My Skills</h2>
        <p>Always learning and growing</p>
      </HeaderStyled>

      <SkillsStyled>
        <h2>Techinical Skills</h2>
        <SkillList>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Active Directory</li>
          <li>Microsoft Office</li>
        </SkillList>
      </SkillsStyled>
      <SkillsStyled>
        <h2>Soft Skills</h2>
        <SkillList>
          <li>Customer Service</li>
          <li>Problem Solving</li>
          <li>Communication</li>
          <li>Teamwork</li>
          <li>Adaptability</li>
          <li>Work Ethic</li>
        </SkillList>
        {/* interpersonal skills */}
        {/* time management */}
        {/* cost efficiency */}
      </SkillsStyled>
      <SkillsStyled>
        <h2>Certifications</h2>
        <SkillList>
          <li>CompTIA A+</li>
          <li>Google IT Cert</li>
          <li>John Hopkins</li>
          <li>Bottega Full Stack Coding Bootcamp</li>
        </SkillList>
      </SkillsStyled>
      <SkillsStyled>
        <h2>Toolset</h2>
        {/* outlook */}
        {/* office 365 also known as microsoft 365 */}
        {/* slack */}
      </SkillsStyled>
    </SkillCoStyled>
  );
};

export default Skills;

// list all the skills
// import React from "react";
// import styled from "styled-components";
// Active Directory
// Agile Methodologies?

// microsoft office
// system administration
// network administration
// network security
// network troubleshooting
// desktop support
// server support
// customer service
