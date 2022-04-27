import React from "react";
import oasis from "../images/oasis.png";
import odessa from "../images/odessa.png";
import pizza from "../images/pizza.png";
import boomerang from "../images/boomerang.png";
import dog from "../images/dog.png";
import "animate.css/animate.min.css";
import { Container, Row, Col, Image, Card, Badge } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHand, faHandPointDown } from "@fortawesome/free-solid-svg-icons";

function Profile() {
  return (
    <div className="profile-body">
      <Container className="profile-container">
        <Row className="profile-content-1">
          <Col className="hello-container">
            <div data-aos="fade-down">
              <h1 className="center-text">
                <FontAwesomeIcon
                  icon={faHand}
                  className="animate__animated animate__wobble"
                />
                &nbsp;&nbsp;&nbsp;Hello<span className="mobile-hidden">,</span>{" "}
                <br className="mobile-break"></br>Thanks for visiting.
              </h1>
              <p className="center-text">
                I am a <span style={{ color: "#ec4c4c" }}>Web Developer</span>{" "}
                based out of Boston, MA.
              </p>
              <p className="center-text">
                I specialize in{" "}
                <span style={{ color: "#ec4c4c" }}>beautiful</span>,{" "}
                <span style={{ color: "#ec4c4c" }}>responsive</span>,{" "}
                <span style={{ color: "#ec4c4c" }}>original</span> websites and
                applications.
              </p>
              <p className="center-text" style={{ marginBottom: "50px" }}>
                Please take a look at my{" "}
                <span style={{ color: "#ec4c4c" }}>work below</span> or feel
                free to get in touch with me via the contact form on the site.
              </p>
              <div className="hand-container">
                <h1 className="animate__animated animate__bounce animate__infinite animate__slow animate__delay-5s">
                  <FontAwesomeIcon icon={faHandPointDown} />
                </h1>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="profile-content">
          <Col className="project-container" md={12} lg={6}>
            <div data-aos="fade-up-right">
              <Image src={oasis} fluid={true} className="project-image" />
            </div>
          </Col>
          <Col md={12} lg={6}>
            <div data-aos="fade-up-left">
              <Card className="project-card">
                <Card.Body>
                  <Card.Title className="project-card-title">
                    Oasis Vegan Veggie Parlor
                  </Card.Title>
                  <Card.Text>
                    Oasis Vegan Veggie Parlor is a static website built for a
                    Boston vegan restaurant. This site has a simple and clean
                    design, and is fully responsive. The site has already
                    generated over 500 contact form submissions generating
                    thousands in revenue for the business.
                  </Card.Text>
                  <Card.Text>
                    <a
                      href="https://www.oasisveganveggieparlor.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="github-link">
                      {" "}
                      View Website
                    </a>
                  </Card.Text>
                  <Card.Text>
                    <a
                      href="https://github.com/adam-goodrich/oasis"
                      target="_blank"
                      rel="noreferrer"
                      className="github-link">
                      View On Github
                    </a>
                  </Card.Text>

                  <Card.Text>
                    <Badge variant="secondary">HTML5</Badge>&nbsp;
                    <Badge variant="secondary">CSS3</Badge>&nbsp;
                    <Badge variant="secondary">JavaScript</Badge>&nbsp;
                    <Badge variant="secondary">Webpack</Badge>&nbsp;
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
        <Row className="profile-content">
          <Col className="project-container" md={12} lg={6}>
            <div data-aos="fade-up-right">
              <Image src={boomerang} fluid={true} className="project-image" />
            </div>
          </Col>
          <Col md={12} lg={6}>
            <div data-aos="fade-up-left">
              <Card className="project-card">
                <Card.Body>
                  <Card.Title className="project-card-title">
                    Boomerang Transport Driver Portal
                  </Card.Title>
                  <Card.Text>
                    The Boomerang Transport Driver Portal is a full-stack
                    website built for a national transportation company. This
                    employee portal has a clean interface that allows the user
                    to view and update their scheduled time-off, view their
                    assigned transports, and view their employee pay history.
                    This site seemlessly integrates with the Google suite for
                    compatibility with company internal tools.
                  </Card.Text>
                  <Card.Text>
                    <a
                      href="https://drivers.boomerangtransport.net/"
                      target="_blank"
                      rel="noreferrer"
                      className="github-link">
                      {" "}
                      View Website
                    </a>
                  </Card.Text>
                  <Card.Text>
                    <Badge variant="secondary">JavaScript</Badge>&nbsp;
                    <Badge variant="secondary">HTML5</Badge>&nbsp;
                    <Badge variant="secondary">CSS3</Badge>&nbsp;
                    <Badge variant="secondary">Google App Scripts</Badge>&nbsp;
                    <Badge variant="secondary">Bootstrap</Badge>&nbsp;
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
        <Row className="profile-content">
          <Col className="project-container" md={12} lg={6}>
            <div data-aos="fade-up-right">
              <Image src={odessa} fluid={true} className="project-image" />
            </div>
          </Col>
          <Col md={12} lg={6}>
            <div data-aos="fade-up-left">
              <Card className="project-card">
                <Card.Body>
                  <Card.Title className="project-card-title">
                    Odessa SEL APP
                  </Card.Title>
                  <Card.Text>
                    Odessa is a comprehensive platform to transform pediatric
                    health leveraging school as an anchor for the
                    next-generation of care. The Odessa SEL app tracks student
                    mood and energy levels through a fun and interactive
                    interface. Teachers and Administrators then get a dashboard
                    to view student mood history and provide feedback.
                  </Card.Text>
                  <Card.Text>
                    <a
                      href="https://www.odessa.care/"
                      target="_blank"
                      rel="noreferrer"
                      className="github-link">
                      View Website
                    </a>
                  </Card.Text>
                  <Card.Text>
                    <Badge variant="secondary">TypeScript</Badge>&nbsp;
                    <Badge variant="secondary">React</Badge>&nbsp;
                    <Badge variant="secondary">Chart.js</Badge>&nbsp;
                    <Badge variant="secondary">React-Tables</Badge>&nbsp;
                    <Badge variant="secondary">React-Router-Dom</Badge>&nbsp;
                    <Badge variant="secondary">Bootstrap</Badge>&nbsp;
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
        <Row className="profile-content">
          <Col className="project-container" md={12} lg={6}>
            <div data-aos="fade-up-right">
              <Image src={pizza} fluid={true} className="project-image" />
            </div>
          </Col>
          <Col md={12} lg={6}>
            <div data-aos="fade-up-left">
              <Card className="project-card">
                <Card.Body>
                  <Card.Title className="project-card-title">
                    Pizza Party
                  </Card.Title>
                  <Card.Text>
                    The Pizza Party website is a single page app built using
                    React and React-Router-Dom. The app is fun and interactive
                    and takes full advantage of the power of React and state
                    management. The app is fully responsive built using the
                    Bootstrap framework.
                  </Card.Text>
                  <Card.Text>
                    <a
                      href="https://adam-goodrich.github.io/pizza-party"
                      target="_blank"
                      rel="noreferrer"
                      className="github-link">
                      View Website
                    </a>
                  </Card.Text>
                  <Card.Text>
                    <a
                      href="https://github.com/adam-goodrich/pizza-party"
                      target="_blank"
                      rel="noreferrer"
                      className="github-link">
                      View On Github
                    </a>
                  </Card.Text>
                  <Card.Text>
                    <Badge variant="secondary">JavaScript</Badge>&nbsp;
                    <Badge variant="secondary">React</Badge>&nbsp;
                    <Badge variant="secondary">React-Router-Dom</Badge>&nbsp;
                    <Badge variant="secondary">Bootstrap</Badge>&nbsp;
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
        <Row className="profile-content">
          <Col className="project-container" md={12} lg={6}>
            <div data-aos="fade-up-right">
              <Image src={dog} fluid={true} className="project-image" />
            </div>
          </Col>
          <Col md={12} lg={6}>
            <div data-aos="fade-up-left">
              <Card className="project-card">
                <Card.Body>
                  <Card.Title className="project-card-title">
                    Never Forget A dog
                  </Card.Title>
                  <Card.Text>
                    Never Forget A dog is a single page app built using React.
                    Never Forget A Dog is an exciting memory game. Simply click
                    a dog displayed and images will shuffle each time displaying
                    new dogs. Never click the same dog twice or you lose. The
                    app is fun and interactive and takes full advantage of the
                    power of React and state management. The app is fully
                    responsive built using the Bootstrap framework.
                  </Card.Text>
                  <Card.Text>
                    <a
                      href="https://adam-goodrich.github.io/memory-game/"
                      target="_blank"
                      rel="noreferrer"
                      className="github-link">
                      View Website
                    </a>
                  </Card.Text>
                  <Card.Text>
                    <a
                      href="https://github.com/adam-goodrich/memory-game"
                      target="_blank"
                      rel="noreferrer"
                      className="github-link">
                      View On Github
                    </a>
                  </Card.Text>
                  <Card.Text>
                    <Badge variant="secondary">JavaScript</Badge>&nbsp;
                    <Badge variant="secondary">React</Badge>&nbsp;
                    <Badge variant="secondary">Bootstrap</Badge>&nbsp;
                    <Badge variant="secondary">CSS3</Badge>&nbsp;
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
        <Row className="home-content-last">
          <Col className="project-container">
            <div data-aos="fade-right">
              <h1 className="center-text">Please contact me.</h1>
            </div>
          </Col>
          <Col className="project-container">
            <div data-aos="fade-left">
              <h1 className="center-text">Let's work together!</h1>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Profile;
