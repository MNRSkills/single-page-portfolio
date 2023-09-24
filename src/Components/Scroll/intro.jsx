// q: create a arrow commponent called intro
// a:
import React, { useState, useEffect } from "react";
import { HeaderStyled } from "../styled /StyledMain";
import { Logo } from "../styled /StyledNav";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { fa1 } from "@fortawesome/free-solid-svg-icons";

const Intro = ({ count }) => {
  const handleResume = () => {
    // const URL =
    //   "https://drive.google.com/uc?export=download&id=12KT4TUz-H5L4K6u9h_YgxrNBveTlGaJ09Vj3owpHIew";
    const URL =
      "../../../public/resume/Mack Ramirez Resume Updated 9.12.23.pdf";
    // const link = document.createElement("a");
    // const file = URL;
    // link.href = URL;
    // link.setAttribute("download", file);
    // // link.download = "Resume.pdf";
    // document.body.appendChild(link);
    // link.click();
    // link.remove();
    console.log("hello");
  };
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

      <button onClick={handleResume}> Download my CV</button>

      {821 > count ? <Logo /> : null}
    </HeaderStyled>
  );
};

export default Intro;
