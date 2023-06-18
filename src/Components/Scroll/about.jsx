// create a arrow commponent called about
import React from "react";
import { StyledComponent } from "../styled /sectionStyled";
import { HeaderStyled } from "../styled /StyledMain";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const About = () => {
  return (
    <StyledComponent>
      <HeaderStyled>
        <h1>About</h1>
        <h2>
          Two years experience in the field of IT Support. I have worked on
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum atque
          adipisci similique ipsam provident eos delectus ducimus, ad repellat
          sed libero hic perferendis cumque quas reiciendis neque non est
          maxime! Asperiores suscipit optio distinctio! Optio asperiores modi
          excepturi qui inventore! Ducimus nam, enim inventore est earum totam,
          quidem reprehenderit asperiores porro suscipit culpa dolorum quos
          blanditiis rerum fuga beatae possimus. Rem molestiae maxime quaerat
          magnam exercitationem, ratione reiciendis saepe laudantium minus
          nostrum accusantium vero quos tenetur obcaecati, nisi similique
          aspernatur, consequatur aliquam? Molestias molestiae sequi quam nisi,
          aspernatur ducimus harum?
        </p>
      </HeaderStyled>
    </StyledComponent>
  );
};

export default About;
