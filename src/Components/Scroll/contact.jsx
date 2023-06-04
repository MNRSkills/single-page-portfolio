// create  a arrow commponent called contact
import React, { useRef } from "react";
import styled from "styled-components";
import { StyledComponent } from "../styled /sectionStyled";
import { useForm } from "react-hook-form";

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-top: 4rem;

  .field-wrapper {
    position: relative;
    width: 100%;
    margin: 1rem 0;
    padding: 20px 0;
  }
  input {
    padding: 1em 1rem;
    margin:  0;
    border: none;
    border-bottom: 1px solid #aecde8;
    border-radius: 0.5rem;
    background: transparent;
    &:focus {
      outline: none;

    }
    &:focus + label {
      top: -1.5rem;
      left: 0;
      color: #aecde8;
      font-size:.75em;
    }
  }
  label {
    font-weight: bold;
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    cursor: text;
  }

  label, input{
    height: 45px;
    width:70%;
    font-size: 1.5rem;
    color: #aecde8;
  }

 

  
  textarea {
    width: 100%;
    border: none;
    border-bottom: 1px solid #aecde8;
    border-radius: 0.5rem;
    background: transparent;
    height: 105px;
    width: 100%;
    font-size: 1.5rem;
    color: #aecde8;
    &:focus {
      outline: none;
    }
    &:focus + label {
      top: -1.5rem;
      left: 0;
      color: #aecde8;
      font-size:.75em;
    }
  }

  button {
    margin: 1rem 0;
    padding: 1rem 2rem;
    border: none;
    border-radius: 0.5rem;
    background: #aecde8;
    color: #1a1a1a;
    font-weight: bold;
    font-size: 1.5rem;
    cursor: pointer;
    &:hover {
      background: #1a1a1a;
      color: #aecde8;
    }
`;

// REMEMBER TO CHECK THE FORM INPUTS STYLES THE LINES ARE CAUSING THE ERROR ON THE SCREEN

import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("", "", form.current, "").then(
      (result) => {
        console.log(result);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <>
      <FormStyled ref={form} onSubmit={sendEmail}>
        <div className="field-wrapper">
          <input type="text" name="user_name" />
          <label>Name</label>
        </div>
        <div className="field-wrapper">
          <input type="email" name="user_email" />
          <label>Email</label>
        </div>
        <div className="field-wrapper">
          <textarea name="message" />
          <label>Message</label>
        </div>
        <button type="submit" value="Send">
          SEND
        </button>
      </FormStyled>
    </>
  );
};

export default Contact;
