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
        for technology.
      </p>

      <button href="https://docs.google.com/document/d/12KT4TUz-H5L4K6u9h_YgxrNBveTlGaJ09Vj3owpHIew/edit?usp=drive_link">
        {" "}
        Download my CV
      </button>

      {821 > count ? <Logo /> : null}
    </HeaderStyled>
  );
};

export default Intro;
