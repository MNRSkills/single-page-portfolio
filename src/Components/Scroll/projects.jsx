// create a arrow commponent called projects
import React from "react";
import { work_history } from "../../../expHist.json";
import { HeaderStyled } from "../styled /StyledMain";
import WorkHistory from "../Layout/worHist";
import { WorkHistoryStyled } from "../styled /StyledExp";

const Projects = () => {
  return (
    <>
      <HeaderStyled>
        <h1>Experience</h1>
        <h2>My work exprerience in the last three years.</h2>
        <p>
          Primarily focused on IT support, I have worked on a variety of
          projects. This allowed me to gain experience and knowledge of Admin
          center, Active Directory, and various mobile management softwares.
        </p>
      </HeaderStyled>
      <WorkHistoryStyled>
        {work_history.map((work, index) => {
          return <WorkHistory work={work} key={index} />;
        })}
      </WorkHistoryStyled>
    </>
  );
};

export default Projects;
