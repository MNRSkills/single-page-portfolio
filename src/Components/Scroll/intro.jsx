// q: create a arrow commponent called intro
// a:
import React from "react";
import { HeaderStyled } from "../styled /StyledMain";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { fa1 } from "@fortawesome/free-solid-svg-icons";



const Intro = () => {
  return (
    <HeaderStyled id="intro">
      {/* <FontAwesomeIcon icon={fa1} />  <span></span> */}
      <h2>
        Proven IT support technician, supporting Windows, IOS, and various
        mobile management softwares
      </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum atque
        adipisci similique ipsam provident eos delectus ducimus, ad repellat sed
        libero hic perferendis cumque quas reiciendis neque non est maxime!
        Asperiores suscipit optio distinctio! Optio asperiores modi excepturi
        qui inventore! Ducimus nam, enim inventore est earum totam, quidem
        reprehenderit asperiores porro suscipit culpa dolorum quos blanditiis
        rerum fuga beatae possimus. Rem molestiae maxime quaerat magnam
        exercitationem, ratione reiciendis saepe laudantium minus nostrum
        accusantium vero quos tenetur obcaecati, nisi similique aspernatur,
        consequatur aliquam? Molestias molestiae sequi quam nisi, aspernatur
        ducimus harum?
      </p>
    </HeaderStyled>
  );
};

export default Intro;
