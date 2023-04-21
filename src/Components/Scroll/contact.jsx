// create  a arrow commponent called contact
import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";

const Form = styled.form`
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
    <Form>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <input type="text" />
        <input type="text" />
        <input type="submit" />
      </form>
    </Form>
  );
}

export default Contact;
