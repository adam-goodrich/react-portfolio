import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faUser,
  faBriefcase,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

function MyNav() {
  return (
    <>
      <Navbar
        sticky="top"
        expand="lg"
        variant="dark"
        bg="dark"
        className="navbar"
        collapseOnSelect>
        <Container>
          <Navbar.Brand>
            <span style={{ color: "#ec4c4c" }}>
              <FontAwesomeIcon icon={faCode} />
            </span>
            &nbsp;&nbsp;&nbsp;
            <span style={{ color: "#4083ae" }}>Adam Goodrich</span>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav defaultActiveKey="#/home">
              <Nav.Item>
                <Nav.Link href="#/home" id="about-me" className="nav-links">
                  <FontAwesomeIcon icon={faUser} />
                  &nbsp;&nbsp;Home
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#/work" className="nav-links">
                  <FontAwesomeIcon icon={faBriefcase} />
                  &nbsp;&nbsp;My Work
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#/contact" className="nav-links">
                  <FontAwesomeIcon icon={faEnvelope} />
                  &nbsp;&nbsp;Contact
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNav;
