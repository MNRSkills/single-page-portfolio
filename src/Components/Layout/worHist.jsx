import React from "react";
import { JobContainer } from "../styled /StyledExp";

const WorkHistory = ({ work }) => {
  return (
    <JobContainer>
      <h2>{work.company}</h2>
      <h3>{work.position}</h3>
      <span>{work.start_date}</span> - <span>{work.end_date}</span>
      <p>{work.responsibilities}</p>
    </JobContainer>
  );
};

export default WorkHistory;
