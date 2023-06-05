import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Nav, List, Logo, ListWrapper } from "../styled /StyledNav";

const Navbar = ({ toggle, sticky, logo }) => {
  // console.log(sticky, "sticky from navbar");
  return (
    //q: how to write a conditional statement in styled components?`
    //a: use ternary operator

    <Nav onClick={() => toggle()} isSticky={sticky}>
      {/* <ListWrapper isSticky={sticky}> */}
      <div className="branding">
        {821 < logo ? <FontAwesomeIcon icon={faXmark} /> : null}
        <h1>MNRDev</h1>
        <h4>full-stack developer</h4>
      </div>
      <List>
        <li>
          {" "}
          <Link to="intro" spy={true} smooth={true} offset={-50}>
            <h1>Intro</h1>
          </Link>
        </li>
        <li>
          <Link to="abo" spy={true} smooth={true} offset={-50}>
            <h1>About</h1>
          </Link>
        </li>
        <li>
          <Link to="skills" spy={true} smooth={true} offset={-50}>
            <h1>Skills</h1>
          </Link>
        </li>
        <li>
          <Link to="pro" spy={true} smooth={true} offset={-50}>
            <h1>Projects</h1>
          </Link>
        </li>
        <li>
          <Link to="contact" spy={true} smooth={true} offset={-50}>
            <h1>Contact</h1>
          </Link>
        </li>
      </List>
      {821 < logo ? <Logo /> : null}
      {/* </ListWrapper> */}
    </Nav>
  );
};

export default Navbar;
