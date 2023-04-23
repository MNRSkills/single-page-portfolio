//  create a arrow commponent called skills
import React from "react";
import styled from "styled-components";

const SkillCoStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  color: #fff;
  padding: 0.5rem 1rem;
  margin: 2rem;
`;

const SkillsStyled = styled.div`
  border: 1px solid #fff;
  margin: 2rem;
  padding: 0.5rem 1rem;
  background-color: #916f6d;
  h2 {
    font-size: 2.5rem;
    color: #fff;
    padding: 10px;
  }
`;

const SkillList = styled.ul`
  width: 50%;
  li {
    cursor: pointer;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    font-size: 1rem;
  }
`;

const Skills = () => {
  return (
    <SkillCoStyled>
      <h2>My Skills</h2>
      <p>Always learning and growing</p>

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
        {/* customer service */}
        {/* problem solving */}
        {/* communication */}
        {/* teamwork */}
        {/* adaptability */}
        {/* work ethic */}
        {/* interpersonal skills */}
        {/* time management */}
        {/* cost efficiency */}
      </SkillsStyled>
      <SkillsStyled>
        <h2>Certifications</h2>
        {/* CompTIA A+ */}
        {/* Coding Bootcamp */}
        {/* John Hopkins  */}
        {/* Google IT Cert */}

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
