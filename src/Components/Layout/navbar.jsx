// q: what is the path to styles?

// a:
import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #000;
  color: #fff;
  padding: 0.5rem 1rem;
`;

const List = styled.ul`
  display: flex;
  justify-content: space-between;
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

const Navbar = () => {
  return (
    <Nav>
      <List>
        <ul className="list-wrapper">
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </List>

      <img src="logo.png" alt="Logo" />
    </Nav>
  );
};

export default Navbar;
