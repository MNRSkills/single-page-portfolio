// q: create a arrow commponent called intro
// a:
import React from "react";
import styled from "styled-components";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { fa1 } from "@fortawesome/free-solid-svg-icons";

const IntroStyled = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  h2 {
    font-size: 2rem;
    color: #aecde8;

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }
  p {
    font-size: 1.5rem;
    color: #999c97;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

const Intro = () => {
  return (
    <IntroStyled>
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
    </IntroStyled>
  );
};

export default Intro;
