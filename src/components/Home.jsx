import React, { useEffect } from "react";
import { Image, Container, Row, Col } from "react-bootstrap";
import "../App.css";
import Headshot from "../images/headshot.jpeg";
import "animate.css/animate.css";
import Typed from "typed.js";

function Home() {
  const el = React.useRef(null);
  // Create reference to store the Typed instance itself
  const typed = React.useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        " ",
        "Web \nDeveloper",
        "Problem \nSolver",
        "Creative \nThinker",
        `Experienced \nProfessional`,
        "Enthusiastic \nCollaborator",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      cursorChar: "|",
      startDelay: 300,
    };

    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);

    const myHeadshot = document.querySelector(".headshot");
    const typedContentContainer = document.querySelector(".typed-content");
    setTimeout(() => {
      myHeadshot.style.display = "block";
      typedContentContainer.style.display = "block";
    }, 300);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    };
  }, []);

  return (
    <div className="home-body">
      <Container className="home-container">
        <Row className="home-content">
          <Col className="headshot-container">
            <Image
              fluid={true}
              src={Headshot}
              alt="my headshot"
              className="headshot animate__animated animate__fadeInLeft "
              style={{ display: "none" }}
            />
          </Col>
          <Col id="greeting">
            <h1 className="name animate__animated animate__fadeInDown animate__delay-1s">
              Adam Goodrich
            </h1>

            <h1
              className="typed-content animate__animated animate__fadeInUp"
              style={{ display: "none" }}>
              <span
                style={{ whiteSpace: "pre" }}
                ref={el}
                className="web-dev"
              />
            </h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
