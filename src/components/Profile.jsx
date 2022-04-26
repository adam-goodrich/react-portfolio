import React from "react";
import oasis from "../images/oasis.png";
import odessa from "../images/odessa.png";
import pizza from "../images/pizza.png";
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
            <div data-aos="fade-down ">
              <h1 className="center-text">
                <FontAwesomeIcon icon={faHand} /> Hello, Thanks for visiting.
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
              <p className="center-text">
                Please take a look at my{" "}
                <span style={{ color: "#ec4c4c" }}>work below</span> or feel
                free to get in touch with me via the contact form on the site.
              </p>
              <div className="hand-container">
                <h1 className="animate__animated animate__bounce animate__infinite">
                  <FontAwesomeIcon icon={faHandPointDown} />
                </h1>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="profile-content">
          <Col className="project-container" md={12} lg={6}>
            <div data-aos="fade-right">
              <Image src={oasis} fluid={true} className="project-image" />
            </div>
          </Col>
          <Col md={12} lg={6}>
            <div data-aos="fade-left">
              <Card className="project-card">
                <Card.Body>
                  <Card.Title className="project-card-title">
                    Oasis Vegan Veggie Parlor
                  </Card.Title>
                  <Card.Text>
                    <a
                      href="https://www.oasisveganveggieparlor.com/"
                      target="_blank"
                      rel="noreferrer">
                      Oasis Vegan Veggie Parlor
                    </a>{" "}
                    is a static website built for a Boston vegan restaurant.
                    This site has a simple and clean design, and is fully
                    responsive. The site has already generated over 500 contact
                    form submissions generating thousands in revenue.
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
            <div data-aos="fade-right">
              <Image src={odessa} fluid={true} className="project-image" />
            </div>
          </Col>
          <Col md={12} lg={6}>
            <div data-aos="fade-left">
              <Card className="project-card">
                <Card.Body>
                  <Card.Title className="project-card-title">
                    Odessa SEL APP
                  </Card.Title>
                  <Card.Text>
                    The SEL app is a comprehensive platform to transform
                    pediatric health leveraging school as an anchor for the
                    next-generation of care. This app tracks students moods and
                    energy levels through fun and interactive quizzes. Teachers
                    then get a dashboard to track student moods and provide
                    feedback.
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
            <div data-aos="fade-right">
              <Image src={pizza} fluid={true} className="project-image" />
            </div>
          </Col>
          <Col md={12} lg={6}>
            <div data-aos="fade-left">
              <Card className="project-card">
                <Card.Body>
                  <Card.Title className="project-card-title">
                    Pizza Party
                  </Card.Title>
                  <Card.Text>
                    The{" "}
                    <a href="https://adam-goodrich.github.io/pizza-party">
                      Pizza Party
                    </a>{" "}
                    website is a single page app built using React and
                    React-Router-Dom. The app is a fun and interactive and takes
                    full advantage of the power of React and state management.
                    The app is fully responsive built using the Bootstrap
                    framework.
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
        <Row className="home-content">
          <Col className="project-container">
            <div data-aos="fade-right">
              <h1>Hello</h1>
            </div>
          </Col>
          <Col>
            <div data-aos="fade-left">
              <h1 className="name">Adam Goodrich</h1>
            </div>
          </Col>
        </Row>
        <Row className="home-content">
          <Col className="project-container">
            <div data-aos="fade-right">
              <h1>Hello</h1>
            </div>
          </Col>
          <Col>
            <div data-aos="fade-left">
              <h1 className="name">Adam Goodrich</h1>
            </div>
          </Col>
        </Row>
        <Row className="home-content">
          <Col className="project-container">
            <div data-aos="fade-right">
              <h1>Hello</h1>
            </div>
          </Col>
          <Col>
            <div data-aos="fade-left">
              <h1 className="name">Adam Goodrich</h1>
            </div>
          </Col>
        </Row>
        <Row className="home-content">
          <Col className="project-container">
            <div data-aos="fade-right">
              <h1>Hello</h1>
            </div>
          </Col>
          <Col>
            <div data-aos="fade-left">
              <h1 className="name">Adam Goodrich</h1>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Profile;
