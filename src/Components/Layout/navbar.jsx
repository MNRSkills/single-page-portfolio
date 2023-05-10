import React from "react";
import { Nav, List } from "../styled /StyledNav";

const Navbar = () => {
  return (
    <Nav>
      <List>
        <li>
          {" "}
          <a href="#intro">
            <h1>Intro</h1>
          </a>
        </li>
        <li>
          <a href="#abo">
            <h1>About</h1>
          </a>
        </li>
        <li>
          <a href="#skills">
            <h1>Skills</h1>
          </a>
        </li>
        <li>
          <a href="#pro">
            <h1>Projects</h1>
          </a>
        </li>
        <li>
          <a href="#contact">
            <h1>Contact</h1>
          </a>
        </li>
      </List>
    </Nav>
  );
};

export default Navbar;
