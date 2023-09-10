// q: create a arrow commponent called intro
// a:
import React, { useState, useEffect } from "react";
import { HeaderStyled } from "../styled /StyledMain";
import { Logo } from "../styled /StyledNav";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { fa1 } from "@fortawesome/free-solid-svg-icons";

const Intro = ({ count }) => {
  return (
    <HeaderStyled>
      <h1>Intro</h1>
      <h2>
        Proven IT support technician, supporting Windows, IOS, and various
        mobile management softwares
      </h2>
      <p>
        Welcome to my portfolio website. I am thrilled to share my journey with
        you. I am a self-taught developer with a passion for learning and a love
        for technology. I am currently working as a IT Support Technician.
        Lookign to start a freelance business in web development.
      </p>

      {821 > count ? <Logo /> : null}
    </HeaderStyled>
  );
};

export default Intro;
