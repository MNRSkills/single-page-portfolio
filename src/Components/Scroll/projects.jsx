// create a arrow commponent called projects
import React from "react";
import { work_history } from "../../../expHist.json";
import { HeaderStyled } from "../styled /StyledMain";
import WorkHistory from "../Layout/worHist";
import { WorkHistoryStyled } from "../styled /StyledExp";

const Projects = () => {
  return (
    <>
      <HeaderStyled >
        <h1>Experience</h1>
        <h2>This is no good because what projects do I have to speak about</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus
          eligendi similique, error aspernatur perferendis inventore!
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
