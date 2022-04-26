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
      <Navbar expand="lg" variant="dark" bg="dark" className="navbar">
        <Container>
          <Navbar.Brand>
            <span style={{ color: "#ec4c4c" }}>
              <FontAwesomeIcon icon={faCode} />
            </span>
            &nbsp;&nbsp;&nbsp;Adam Goodrich
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
                <Nav.Link href="#/profile" className="nav-links">
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
