import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  grid-area: nav;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #000;
  color: #fff;
  padding: 0.5rem 1rem;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100vh;
  li {
    padding: 0.5rem 1rem;
    cursor: pointer;
    list-style: none;
    font-size: 2.5rem;
  }
`;

const Logo = styled.div`
  background-image: url("https://i.imgur.com/1Q1Z1Zm.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 400px;
  height: 400px;
`;

const Navbar = () => {
  return (
    <Nav>
      <List>
        <li>
          {" "}
          <a href="#intro">Intro</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#project">Project</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </List>
      <Logo />
    </Nav>
  );
};

export default Navbar;
