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
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum atque
        adipisci similique ipsam provident eos delectus ducimus, ad repellat sed
        libero hic perferendis cumque quas reiciendis neque non est maxime!
        Asperiores suscipit optio distinctio! Optio asperiores modi excepturi
      </p>

      {821 > count ? <Logo /> : null}
    </HeaderStyled>
  );
};

export default Intro;
