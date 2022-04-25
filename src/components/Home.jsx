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
        "Web Developer",
        "Collaborator",
        `Experienced \nProfessional`,
        `Take a look \naround`,
        `Available for \nhire`,
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      cursorChar: "|",
    };

    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);

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
              roundedCircle={true}
              src={Headshot}
              alt="my headshot"
              className="headshot animate__animated animate__fadeIn"
            />
          </Col>
          <Col id="greeting">
            <h1 className="name animate__animated animate__fadeInDown">
              Adam Goodrich
            </h1>
            <h1 className="typed-content">
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
