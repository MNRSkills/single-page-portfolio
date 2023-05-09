// create  a arrow commponent called contact
import React from "react";
import styled from "styled-components";
import { StyledComponent } from "../styled /sectionStyled";
import { useForm } from "react-hook-form";

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  input {
    width: 50%;
    padding: 0.5rem 1rem;
    margin: 0.5rem 0;
    border: none;
    border-radius: 0.5rem;
    outline: none;
  }
`;

function Contact() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <StyledComponent id="contact">
    <FormStyled >
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <input type="text" />
        <input type="text" />
        <input type="submit" />
      </form>
      </FormStyled>
    </StyledComponent>
  );
}

export default Contact;
