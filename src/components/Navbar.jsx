import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

function MyNav() {
  return (
    <div>
      <Navbar expand="lg" variant="dark" bg="dark">
        <Container>
          <Navbar.Brand>Adam Goodrich</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav defaultActiveKey="#/home">
              <Nav.Item>
                <Nav.Link href="#/home" id="about-me">
                  About Me
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#/profile">My Work</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#/contact">Contact</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#/resume">Resume</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default MyNav;
